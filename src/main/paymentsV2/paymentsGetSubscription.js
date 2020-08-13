import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {
  createSubscription,
  retryInvoiceWithNewPaymentMethod,
} from "../../lib/payments/Subscriptions";

function PaymentsGetSubscription() {
  // Get these from stripe
  const customerId = "cus_HiviR3mIjNn8xT";
  const priceId = "price_1H9TKaALgFhcfNxqGh34Coqn";
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const latestInvoicePaymentIntentStatus = localStorage.getItem(
      "latestInvoicePaymentIntentStatus"
    );

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[createPaymentMethod error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      const paymentMethodId = paymentMethod.id;
      if (latestInvoicePaymentIntentStatus === "requires_payment_method") {
        // Update the payment method and retry invoice payment
        const invoiceId = localStorage.getItem("latestInvoiceId");
        retryInvoiceWithNewPaymentMethod({
          customerId,
          paymentMethodId,
          invoiceId,
          priceId,
        });
      } else {
        // Create the subscription
        createSubscription({ customerId, paymentMethodId, priceId });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}

export default PaymentsGetSubscription;
