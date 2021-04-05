export interface Integration {
  name: string;
}

export interface Option {
  name: string;
  value: string;
  option_id: number;
}

export interface OrderLineItem {
  product_variant_id: number;
  SKU: string;
  description: string;
  quantity: number;
  UnitPrice: number;
  options: Option[];
}

export interface ShippingPurchased {
  service_name: string;
  amount_paid: number;
  currency: string;
}

export interface CustomerDetails {
  id: number;
  name: string;
  email: string;
}

export interface ShippingDetails {
  contact_name: string;
  contact_email: string;
  address: string[];
}

export interface Payload {
  id: number;
  order_number: string;
  order_line_items: OrderLineItem[];
  shipping_purchased: ShippingPurchased;
  customer_details: CustomerDetails;
  shipping_details: ShippingDetails;
}

export interface Order {
  integration: Integration;
  created_at: string;
  payload: Payload;
}
