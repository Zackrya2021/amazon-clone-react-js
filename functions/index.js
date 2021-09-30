const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require ("stripe")('sk_test_51HfNk1LFGFWATMzY1xUmbUmBdxn3CSkvEGkTxEf0I15L3b7AuQJFqwRFRexEiFuAg593i6um9jT6xA8H3GRICQ9Y00bX3JgaYh')

//API

//-App config
const app = express();

//-Middlecors
app.use(cors({origin: true }));
app.use(express.json());

//API route
app.get('/', (request,response)=>response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) =>
{
    const total=request.query.total;
    console.log("Payment Reuest Recived BOOM!! for this amount>>>",total);

    const paymentIntent = await stripe.paymentIntents.create(
        {

        amount:total,//submits of the currency
        currency:"usd",

        }
);


//OK- created
response.status(201).send(
    {
        clientSecret: paymentIntent.client_secret,
    }
);


});
// Listen commond
exports.api= functions.https.onRequest(app)


//example of end point
//(http://localhost:5001/clone-2e3d1/us-central1/api)