"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ShieldCheck, CreditCard, Truck, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";

"use client";
import { redirect } from "next/navigation";

export default function CheckoutRoot() {
  redirect("/checkout/cart");
  return null;
}
