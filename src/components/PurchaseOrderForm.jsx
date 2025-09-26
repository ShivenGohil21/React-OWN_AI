import React, { useState } from "react";
import PurchaseOrderDetails from "./PurchaseOrderDetails";
import TalentDetails from "./TalentDetails";

const CURRENCIES = ["USD - Dollars ($)", "EUR - Euro (€)", "INR - Rupee (₹)"];

function makeEmptyReq() {
  return {
    jobId: "",
    reqId: "",
    talents: [],
  };
}

export default function PurchaseOrderForm() {
  const [readOnly, setReadOnly] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    clientId: "",
    poType: "",
    poNumber: "",
    receivedOn: "",
    receivedFromName: "",
    receivedFromEmail: "",
    poStartDate: "",
    poEndDate: "",
    budget: "",
    budgetCurrency: CURRENCIES[0],
    reqSections: [makeEmptyReq()],
  });

  function handleReset() {
    setForm({
      clientId: "",
      poType: "",
      poNumber: "",
      receivedOn: "",
      receivedFromName: "",
      receivedFromEmail: "",
      poStartDate: "",
      poEndDate: "",
      budget: "",
      budgetCurrency: CURRENCIES[0],
      reqSections: [makeEmptyReq()],
    });
    setErrors({});
    setReadOnly(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Data:", form);
    setReadOnly(true);
    alert("Form saved successfully! (Check console for data)");
  }

  return (
    <form onSubmit={handleSubmit}>
      <PurchaseOrderDetails
        form={form}
        setForm={setForm}
        errors={errors}
        readOnly={readOnly}
      />

      <TalentDetails
        form={form}
        setForm={setForm}
        errors={errors}
        readOnly={readOnly}
      />

      {!readOnly && (
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => alert("Add Another Purchase Order functionality can be implemented here")}
          >
            Add Another Purchase Order
          </button>
        </div>
      )}

      <div className="d-flex justify-content-end gap-2">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleReset}
        >
          Reset
        </button>
        {!readOnly ? (
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setReadOnly(false)}
          >
            Edit
          </button>
        )}
      </div>
    </form>
  );
}
