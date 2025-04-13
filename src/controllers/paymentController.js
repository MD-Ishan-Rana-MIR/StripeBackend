
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const makePayment = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(`error`)
  }
};


module.exports = {makePayment};