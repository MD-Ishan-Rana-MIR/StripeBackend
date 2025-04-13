const express = require("express");
const { makePayment } = require("../controllers/paymentController");
const router = express.Router();


router.post("/create-payment-inten",makePayment)

module.exports = router;