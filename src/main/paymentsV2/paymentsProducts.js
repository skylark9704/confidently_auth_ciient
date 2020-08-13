import React from "react";
import { Button, Divider, Header, Segment } from "semantic-ui-react";
function Product({ product, currentProductSelected, handleClick }) {
  console.log(product, currentProductSelected, handleClick);
  return (
    <div>
      <Header textAlign="center">{product.name}</Header>
      <Segment>
        <Header as="h2" textAlign="center">
          {product.price}
        </Header>
        <Divider />
        <div>Per {product.interval}</div>
        <div>Billed {product.billed}</div>
      </Segment>
      <Divider />
      {currentProductSelected ? (
        <Button.Group fluid>
          <Button color="green" type="submit">
            Selected
          </Button>
        </Button.Group>
      ) : (
        <Button.Group fluid>
          <Button
            onClick={() => handleClick(product.key)}
            color="grey"
            type="submit"
          >
            Select
          </Button>
        </Button.Group>
      )}
    </div>
  );
}

export default Product;
