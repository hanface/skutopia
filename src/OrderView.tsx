import React from "react";
import "./Order.css";
import { Order } from "./interfaces";
import { getUserFriendlyDate } from "./helpers/helpers";

interface OrderProps {
  order: Order;
}

export const OrderView = ({ order }: OrderProps) => {
  const { payload } = order;
  return (
    <section className="order">
      <header>
        <h4>Order #{payload.order_number}</h4>
        <p>{getUserFriendlyDate(order.created_at)}</p>
        <p>Sales channel: {order.integration.name}</p>
      </header>

      <div className="order-bod">
        <p className="order-quantity">
          {payload.order_line_items.length} items
          <a href="">
            To Pick{" "}
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 15H3V13H15V15ZM15 11H3V9H15V11ZM15 7H3V5H15V7ZM0 20L1.5 18.5L3 20L4.5 18.5L6 20L7.5 18.5L9 20L10.5 18.5L12 20L13.5 18.5L15 20L16.5 18.5L18 20V0L16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0L1.5 1.5L0 0V20Z"
                fill="#728F9B"
              />
            </svg>
          </a>
        </p>

        {payload.order_line_items.map((orderLineItem) => {
          return (
            <article
              className="order-item"
              key={orderLineItem.product_variant_id}
            >
              <img
                src="./placeholder-img.png"
                alt={orderLineItem.description}
              />
              <div>
                <p>{orderLineItem.description}</p>

                {orderLineItem.options.map((option) => {
                  return (
                    <p key={option.option_id}>
                      <span className="colour-light">{option.name}: </span>
                      {option.value}
                    </p>
                  );
                })}

                <p>SKU: {orderLineItem.SKU}</p>
              </div>
              <div className="quantity-count">
                <span className="btn-round">-</span>
                2/{orderLineItem.quantity}
                <span className="btn-round">+</span>
              </div>
            </article>
          );
        })}
        <h5>Shipping information</h5>
        <p className="shipping-row">
          Service purchased
          <span>{payload.shipping_purchased.service_name}</span>
        </p>
        <p className="shipping-row">
          Shipping paid
          <span className="colour-primary">
            ${payload.shipping_purchased.amount_paid}
          </span>
        </p>
      </div>
    </section>
  );
};
