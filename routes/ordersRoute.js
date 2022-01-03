const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51K70MBSInMPkzks1vXOg9FwEcVzufZDrfMswbapH1CIDBH4SCkci5OA5Vm8lwJU5S3Vaqd5i0TMI07VekQrEhLU400bbT0EtTI"
);
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "INR",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userID: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionID: payment.source.id,
      });

      newOrder.save();

      res.send("Orders placed successfully");
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    res.error.status(400).json({ message: "Something went wrong" });
  }
});


router.post("/getuserorders" , async (req ,res) => {
  const {userID} = req.body

  try {
    const orders = await Order.find({userID : userID}).sort({_id :-1})
    res.send(orders)
  } catch (error) {
    res.error.status(400).json({message : 'Something went wrong'})
  }
})


router.get('/getallorders' ,async (req,res) => {
  try {
    const orders = await Order.find({})
    res.send(orders)
  } catch (error) {
    return res.status(400).json({message:error})
  }
})

router.post("/deliverorder" , async (req,res) => {
  const orderId = req.body.orderId
  
  
  try {
  const order = await Order.findOne({_id:orderId})
  order.isDelivered = true
  res.send('Order delivered successfully')
  await order.save()
} catch (error) {
  return res.status(400).json({message : error})
  
}
})

module.exports = router;