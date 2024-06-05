import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Component/AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckOutForm = () => {
    const [error,setError] = useState('');
   const[transictionId,setTransictionId] = useState('');
   const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        axiosSecure.post('/create-payment-intent')
        .then(res=>{
            console.log(res.data.clentSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosSecure])
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
           return;
        }
        const card = elements.getElement(CardElement);
        if(card===null){
            return;
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card,
        });
        if(error){
            console.log('payment error',error);
            setError(error.message);
        }else{
            console.log('paymnet method',paymentMethod);
            setError('');
        }
        // confirm payment
        const {paymentIntent,error:confirmError} =await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || 'anonymous',
                    name:user?.displayName || 'annonymous'
                }
            }
        })
        if(confirmError){
            console.log("confirm error");
        }else{
            console.log("paymnet Intent",paymentIntent);
            if(paymentIntent.status==='succeeded'){
                console.log('transaction id',paymentIntent.id);
                setTransictionId(paymentIntent.id);
                // now save the paymnet in the database
                const payment = {
                    email:user.email,
                    transactionId:paymentIntent.id,
                    date:new Date(),
                    
                }
                const res = await axiosSecure.post('/payments',payment);
                if(res?.data?.paymentResult?.insertedId){
                  
                   Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "THank you for the taka poysa",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(`/dashboard/myEnrollment`);
                }

            }
        }
    }
    return (
        <div className="container mx-auto ">
            <form onSubmit={handleSubmit}> 
         <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm bg-orange-400 my-5" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-500">{error || !clientSecret}</p>
      {transictionId && <p className="text-green-600">Your transaction id:{transictionId}</p>}
        </form>
        </div>
    );
};

export default CheckOutForm;