import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";


const PaymantPage = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
        <div>
            <Elements stripe = {stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
        </div>
    );
};

export default PaymantPage;