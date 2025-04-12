require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_KEY);
app.use(express.static("public"));
app.use(express.json());

app.use(cors());

app.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  console.log(price);
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5000, () => {
  console.log(`server run successfullly port 3000`);
});
