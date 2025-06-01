const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(process.env.SECRET_KEY)
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'Success',
    })
})
app.post('/payment/create',async (req,res)=>{
    const amount = req.query.total
    if(amount <= 0 || isNaN(amount)){
        res.json({
            message: 'Invalid Input (smaller or unaccepted amount)'
        })
    }
    if(amount > 0){
        const paymentIntent = await stripe.paymentIntents.create({
         amount: Math.round(amount),
         currency: "usd",
         });
     res.json({
         clientSecret : paymentIntent.client_secret
     })
     }else{
         res.json({
             error: 'Payment amount is lessthan 0, which is not valid!'
         })
     }
})
app.listen(5000,(err)=>{
    if(err) throw err
    console.log('Server running on http://localhost:5000')
})