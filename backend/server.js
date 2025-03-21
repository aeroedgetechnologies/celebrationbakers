require("dotenv").config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const { MONGDB_URI } = process.env;
mongoose.connect(MONGDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const Payment = mongoose.model("Payment", new mongoose.Schema({
  payment_id: String,
  order_id: String,
  amount: Number,
  status: String,
  created_at: { type: Date, default: Date.now },
  address: {
    type: Map,
    of: {
      house: String,
      landmark: String,
      phone: String,
      email: String,
      locality: String,
    },
  },
  giftDetails: {
    recipientName: String,
    senderName: String,
    recipientMobile: String,
    message: String,
  },
}));

// Route to create a payment order
app.post("/create-order", async (req, res) => {
  try {
    const { amount, email, address, giftDetails } = req.body;

    // Razorpay order options
    const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "value3",
        key2: "value2",
      },
    };

    razorpay.orders.create(options, async (err, order) => {
      if (err) {
        return res.status(500).json({ message: "Error creating order", error: err });
      }

      // Save order details in MongoDB
      const payment = new Payment({
        order_id: order.id,
        amount: amount,
        status: "pending",
        address: address, // Store address
        giftDetails: giftDetails, // Store gift details
      });
      await payment.save();

      res.json({
        order_id: order.id,
        key_id: process.env.RAZORPAY_KEY_ID,
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating payment", error: error.message });
  }
});

// Route to verify payment signature after successful payment
app.post("/verify-payment", async (req, res) => {
  try {
    const { payment_id, order_id, razorpay_signature } = req.body;

    // Find order in MongoDB
    const order = await Payment.findOne({ order_id });

    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }

    // Generate signature hash
    const body = order_id + "|" + payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Payment is verified
      order.status = "paid";
      await order.save();
      res.json({ message: "Payment verified successfully", payment: order });
    } else {
      // Payment verification failed
      res.status(400).json({ message: "Payment verification failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error verifying payment", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'developer.govinda00@gmail.com',  // Your email (sender's address)
    pass: 'coku kgqp bzze reyi',     // The app password you generated
  },
});

// POST route to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message, subject } = req.body;

  const mailOptions = {
    from: email,  // From the user's email
    to: 'aeroedgetechnologies@gmail.com',  // Your email address
    subject: subject || 'New Message from Contact Form',  // Subject
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,  // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Email sent successfully', info });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});