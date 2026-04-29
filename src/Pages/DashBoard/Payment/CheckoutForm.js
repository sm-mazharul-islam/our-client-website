import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import { BASE_URL } from "../../../utils/constants";

const CheckoutForm = ({ order }) => {
  const { price, Name, _id } = order;
  console.log(order);

  const stripe = useStripe();
  const elements = useElements();
  const { user } = UseAuth();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
    //    console.log(clientSecret)
  }, [price]);
  // console.log(price)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: Name,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment proceed successFully");
      console.log(paymentIntent);
      setProcessing(false);
      // save to database

      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };

      const url = `${BASE_URL}/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress></CircularProgress>
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay {price}
          </button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <svg
        width={"50%"}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width={"80%"}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0F62FE"
            d="M46.1,-77.3C60,-71.8,71.6,-59.9,75.7,-46C79.8,-32,76.4,-16,74.9,-0.9C73.4,14.3,73.8,28.6,67.3,38.5C60.9,48.3,47.6,53.8,35.2,57.7C22.8,61.6,11.4,63.9,-1.9,67.2C-15.2,70.5,-30.4,74.8,-41.3,70C-52.1,65.2,-58.7,51.4,-63.9,38.3C-69.1,25.1,-73,12.5,-75.7,-1.6C-78.4,-15.7,-79.9,-31.3,-74,-43.4C-68.2,-55.4,-55,-63.9,-41.4,-69.5C-27.8,-75.1,-13.9,-77.9,1.1,-79.8C16.1,-81.7,32.2,-82.7,46.1,-77.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <path
          fill="#F1C21B"
          d="M40.4,-55.4C54.5,-45.4,69.6,-36.4,71.5,-24.7C73.3,-12.9,62,1.8,57.5,19.7C53.1,37.5,55.5,58.6,47.1,66.4C38.6,74.2,19.3,68.7,3.4,64C-12.5,59.2,-24.9,55.4,-38.6,49.3C-52.3,43.2,-67.2,34.9,-71,23.1C-74.7,11.3,-67.3,-4.1,-63.4,-21.9C-59.4,-39.8,-58.9,-60.1,-48.9,-71.4C-38.9,-82.8,-19.5,-85.1,-3.2,-80.8C13.1,-76.4,26.3,-65.4,40.4,-55.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default CheckoutForm;
