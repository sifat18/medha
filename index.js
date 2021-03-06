const express = require('express')
const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectId;
// ssl
const SSLCommerzPayment = require('sslcommerz')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 7000;


app.get('/init', (req, res) => {
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: uuidv4(),
        success_url: 'https://still-escarpment-59290.herokuapp.com/success',
        fail_url: 'https://still-escarpment-59290.herokuapp.com/fail',
        cancel_url: 'https://still-escarpment-59290.herokuapp.com/cancel',
        ipn_url: 'https://still-escarpment-59290.herokuapp.com/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'cust@yahoo.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D'
    };
    const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false) //true for live default false for sandbox
    sslcommer.init(data).then(data => {
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters
        res.redirect(data.GatewayPageURL)
    });

})

app.post("/success", async (req, res) => {

    // const result = await orderCollection.updateOne({ tran_id: req.body.tran_id }, {
    //     $set: {
    //         val_id: req.body.val_id
    //     }
    // })

    res.redirect(`https://www.medhakunjaedu.com/congratulations-payment-success/`)
    // res.json(req.body)
})
app.post("/fail", async (req, res) => {

    // const result = await orderCollection.updateOne({ tran_id: req.body.tran_id }, {
    //     $set: {
    //         val_id: req.body.val_id
    //     }
    // })

    res.redirect(`https://www.medhakunjaedu.com/something-went-wrong/`)
    // res.json(req.body)
})
app.post("/cancel", async (req, res) => {

    // const result = await orderCollection.updateOne({ tran_id: req.body.tran_id }, {
    //     $set: {
    //         val_id: req.body.val_id
    //     }
    // })

    res.redirect(`https://www.medhakunjaedu.com/something-went-wrong/`)
    // res.json(req.body)
})
app.post("/ipn", async (req, res) => {

    // const result = await orderCollection.updateOne({ tran_id: req.body.tran_id }, {
    //     $set: {
    //         val_id: req.body.val_id
    //     }
    // })

    // res.redirect(`http://localhost:3000/success/${req.body.tran_id}`)
    res.json(req.body)
})



app.get('/', (req, res) => {
    res.send(`connected 2`)
})
app.listen(port, () => {
    console.log(`connected`)
})