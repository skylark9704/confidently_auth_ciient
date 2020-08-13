import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentsCheckoutForm from "./paymentsCheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51H9PmEALgFhcfNxqQ8aQ1xoznojO4yFgmNdVjnWPOmt2FQta2EYMoHELpr5gR8RqeEutyCjMiUHgkr1EX4aIdlVt00qYVggjNw"
);

function Payments() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentsCheckoutForm />
    </Elements>
  );
}

export default Payments;
