import React from "react";
import "./App.css";
import { OrderView } from "./OrderView";

const IntegrationOrder1 = {
  integration: {
    name: "shopify",
  },
  created_at: "2021-03-09T00:17:05.485Z",
  payload: {
    id: 1123978,
    order_number: "98798379234",
    order_line_items: [
      {
        product_variant_id: 239823,
        SKU: "P4321",
        description: "Large ripped jeans",
        quantity: 3,
        UnitPrice: 150,
        options: [
          {
            name: "colour",
            value: "blue",
            option_id: 14238,
          },
          {
            name: "size",
            value: "L",
            option_id: 23904,
          },
        ],
      },
      {
        product_variant_id: 5678,
        SKU: "S4321",
        description: "US 6 Pink Heels",
        quantity: 3,
        UnitPrice: 200,
        options: [
          {
            name: "colour",
            value: "pink",
            option_id: 394733,
          },
          {
            name: "size",
            value: "6",
            option_id: 29374,
          },
        ],
      },
    ],
    shipping_purchased: {
      service_name: "Express",
      amount_paid: 11,
      currency: "USD",
    },
    customer_details: {
      id: 793875,
      name: "Angela Potter",
      email: "angela.potter@gmail.com",
    },
    shipping_details: {
      contact_name: "Angela Potter",
      contact_email: "angela.potter@gmail.com",
      address: [
        "1 Bluxome st",
        "San Francisco",
        "CA",
        "940176",
        "United States",
      ],
    },
  },
};

function App() {
  return (
    <div className="App">
      <OrderView order={IntegrationOrder1} />
    </div>
  );
}

export default App;
