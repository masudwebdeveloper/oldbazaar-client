import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const bookingProduct = useLoaderData();
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOut
                    bookingProduct={bookingProduct}
                ></CheckOut>
            </Elements>
        </div>

    );
};

export default Payment;