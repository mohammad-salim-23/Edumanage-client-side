import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import { useLoaderData, useLocation } from "react-router-dom";


const PaymantPage = () => {
    const payment = useLoaderData();
    console.log(payment);
    console.log(payment);
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const location = useLocation();
    const { state } = location; // Access the state object directly

    // Extract the price from the state object
    const { price } = state || {};

    console.log(price);
  
    return (
        <div className="mt-32">
        <div>
            <Elements stripe = {stripePromise}>
                <CheckOutForm payment={payment}></CheckOutForm>
            </Elements>
        </div>
        </div>
    );
};

export default PaymantPage;