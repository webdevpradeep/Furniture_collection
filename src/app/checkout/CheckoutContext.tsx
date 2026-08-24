// src/app/checkout/CheckoutContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "@/context/CartContext"; // assuming CartItem type exists

type ShippingInfo = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  zip: string;
};

type PaymentInfo = {
  cardNumber: string;
  expiry: string;
  cvv: string;
};

type CheckoutContextProps = {
  items: CartItem[];
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  shippingInfo: ShippingInfo;
  setShippingInfo: React.Dispatch<React.SetStateAction<ShippingInfo>>;
  paymentInfo: PaymentInfo;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo>>;
};

const CheckoutContext = createContext<CheckoutContextProps | undefined>(undefined);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  return (
    <CheckoutContext.Provider
      value={{ items, setItems, shippingInfo, setShippingInfo, paymentInfo, setPaymentInfo }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};
