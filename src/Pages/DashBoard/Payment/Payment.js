import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51KrHYXANFHZ1iUTPyIywXevgrPpQy4AAoJIsfo1vHiouSbVziwjAXHyYhKkkhing5kWFg17keCDudizL0SpOBCQB00agtweWFS')



const Payment = () => {
    const {productId} = useParams();
    console.log(productId);
    const [order, setOrder] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:7000/${productId}`)
        .then(res => res.json())
        .then(data => setOrder(data));

    },[productId])
    return (
        <div>
            <img width={"50%"} src={order.packageImg} alt="" />
            <h2>Please Pay For: {order.Name} for {order.packageName} </h2>
            <h4>Pay: {order.price}</h4>
   {  order?.price && <Elements stripe={stripePromise}>
<CheckoutForm
order = {order}
/>
    </Elements>}
        </div>
    );
};

export default Payment;