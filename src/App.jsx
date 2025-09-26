import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PurchaseOrderForm from "./components/PurchaseOrderForm";

export default function App() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Purchase Order System</h2>
      <PurchaseOrderForm />
    </div>
  );
}
