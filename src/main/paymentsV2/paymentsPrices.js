import React, { useState } from "react";
import PaymentsForm from "./paymentsForm";
import Product from "./paymentsProducts";

import { Grid, Header, Card } from "semantic-ui-react";

const products = [
  {
    key: 0,
    price: "$10.00",
    name: "Basic",
    interval: "month",
    billed: "monthly",
  },
];

function PaymentsPrices() {
  console.log("Payments Prices");
  const [productSelected, setProduct] = useState(null);

  function handleClick(key) {
    setProduct(products[key]);
  }

  return (
    <Grid verticalAlign="middle" columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Header textAlign="center">Subscribe to a plan</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        {products.map((product, index) => {
          return (
            <Grid.Column key={index}>
              <Card fluid className="raised" color="yellow">
                <Card.Content>
                  <Product
                    product={product}
                    handleClick={handleClick}
                    currentProductSelected={
                      productSelected && productSelected.key === index
                        ? true
                        : false
                    }
                  />
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          {productSelected ? (
            <PaymentsForm productSelected={productSelected} customer={null} />
          ) : null}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default PaymentsPrices;
