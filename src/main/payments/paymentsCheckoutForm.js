import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Card, Grid, Form, Divider } from "semantic-ui-react";

function PaymentsCheckoutForm() {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      console.log(result.token);
    }
  };

  return (
    <Grid verticalAlign="middle" columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Card className="raised">
            <Card.Content>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label htmlFor="card-element">Credit or debit card</label>
                  <Divider />
                  <CardElement id="card-element" onChange={handleChange} />
                  <div className="card-errors" role="alert">
                    {error}
                  </div>
                  <Divider />
                </Form.Field>
                <Button.Group fluid>
                  <Button color="green" type="submit">
                    Pay Now
                  </Button>
                </Button.Group>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default PaymentsCheckoutForm;
