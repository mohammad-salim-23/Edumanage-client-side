import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import { useLocation } from "react-router-dom";


const PaymantPage = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const location = useLocation();
    const { state } = location; // Access the state object directly

    // Extract the price from the state object
    const { price } = state || {};

    console.log(price);
  
    return (
        <div>
        <div>
            <Elements stripe = {stripePromise}>
                <CheckOutForm price={price} ></CheckOutForm>
            </Elements>
        </div>
        </div>
    );
};

export default PaymantPage;