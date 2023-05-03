// src/components/SimpleProductInfo.js
import React, { useState } from "react";
import { useApolloClient, gql } from "@apollo/client";

const SimpleProductInfo = ({ product }) => {
  const [inventoryStatus, setInventoryStatus] = useState(null);
  const client = useApolloClient();

  const handleInventoryUpdate = async () => {
    const { data } = await client.query({
      query: gql`
        query GetInventoryStatus($productId: ID!) {
          simpleProduct(id: $productId) {
            inventory
          }
        }
      `,
      variables: {
        productId: product.id,
      },
    });
    setInventoryStatus(data.simpleProduct.inventory);
  };

  return (
    <div className="simple-product-info">
      <button onClick={handleInventoryUpdate}>Check Inventory</button>
      {inventoryStatus !== null && <p>Inventory: {inventoryStatus}</p>}
    </div>
  );
};

export default SimpleProductInfo;
