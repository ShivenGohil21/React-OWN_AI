import React from "react";

const CLIENTS = [
  { id: "collabera", name: "Collabera - Collabera Inc" },
  { id: "acme", name: "Acme Corp" },
];

const PO_TYPES = ["Group PO", "Individual PO"];
const CURRENCIES = ["USD - Dollars ($)", "EUR - Euro (€)", "INR - Rupee (₹)"];

export default function PurchaseOrderDetails({ form, setForm, errors, readOnly }) {
  const updateField = (fieldName, value) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const fieldHasError = (fieldName) => {
    return errors && errors[fieldName];
  };

  return (
    <div>
      <div className="row">
        
        {/* Client Name */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Client Name *</label>
          <select
            className={`form-select ${fieldHasError('clientId') ? 'is-invalid' : ''}`}
            value={form.clientId || ''}
            disabled={readOnly}
            onChange={(e) => updateField("clientId", e.target.value)}
          >
            <option value="">Select Client</option>
            {CLIENTS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {fieldHasError('clientId') && <div className="invalid-feedback">{errors.clientId}</div>}
        </div>

        {/* Purchase Order Type */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Purchase Order Type *</label>
          <select
            className={`form-select ${fieldHasError('poType') ? 'is-invalid' : ''}`}
            value={form.poType || ''}
            disabled={readOnly}
            onChange={(e) => updateField("poType", e.target.value)}
          >
            <option value="">Select PO Type</option>
            {PO_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {fieldHasError('poType') && <div className="invalid-feedback">{errors.poType}</div>}
        </div>

        {/* Purchase Order No */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Purchase Order No *</label>
          <input
            type="text"
            className={`form-control ${fieldHasError('poNumber') ? 'is-invalid' : ''}`}
            value={form.poNumber || ''}
            placeholder="Enter PO Number"
            disabled={readOnly}
            onChange={(e) => updateField("poNumber", e.target.value)}
          />
          {fieldHasError('poNumber') && <div className="invalid-feedback">{errors.poNumber}</div>}
        </div>

        {/* Received On */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Received On *</label>
          <input
            type="date"
            className={`form-control ${fieldHasError('receivedOn') ? 'is-invalid' : ''}`}
            value={form.receivedOn || ''}
            placeholder="Select Date"
            disabled={readOnly}
            onChange={(e) => updateField("receivedOn", e.target.value)}
          />
          {fieldHasError('receivedOn') && <div className="invalid-feedback">{errors.receivedOn}</div>}
        </div>

        {/* Received From Name */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Received From Name *</label>
          <input
            type="text"
            className={`form-control ${fieldHasError('receivedFromName') ? 'is-invalid' : ''}`}
            value={form.receivedFromName || ''}
            placeholder="Enter contact name"
            disabled={readOnly}
            onChange={(e) => updateField("receivedFromName", e.target.value)}
          />
          {fieldHasError('receivedFromName') && <div className="invalid-feedback">{errors.receivedFromName}</div>}
        </div>

        {/* Received From Email */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Received From Email *</label>
          <input
            type="email"
            className={`form-control ${fieldHasError('receivedFromEmail') ? 'is-invalid' : ''}`}
            value={form.receivedFromEmail || ''}
            placeholder="Enter email address"
            disabled={readOnly}
            onChange={(e) => updateField("receivedFromEmail", e.target.value)}
          />
          {fieldHasError('receivedFromEmail') && <div className="invalid-feedback">{errors.receivedFromEmail}</div>}
        </div>

        {/* PO Start Date */}
        <div className="col-md-3 mb-3">
          <label className="form-label">PO Start Date *</label>
          <input
            type="date"
            className={`form-control ${fieldHasError('poStartDate') ? 'is-invalid' : ''}`}
            value={form.poStartDate || ''}
            placeholder="Select start date"
            disabled={readOnly}
            onChange={(e) => updateField("poStartDate", e.target.value)}
          />
          {fieldHasError('poStartDate') && <div className="invalid-feedback">{errors.poStartDate}</div>}
        </div>

        {/* PO End Date */}
        <div className="col-md-3 mb-3">
          <label className="form-label">PO End Date *</label>
          <input
            type="date"
            className={`form-control ${fieldHasError('poEndDate') ? 'is-invalid' : ''}`}
            value={form.poEndDate || ''}
            placeholder="Select end date"
            disabled={readOnly}
            onChange={(e) => updateField("poEndDate", e.target.value)}
          />
          {fieldHasError('poEndDate') && <div className="invalid-feedback">{errors.poEndDate}</div>}
        </div>

        {/* Budget */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Budget *</label>
          <input
            type="number"
            className={`form-control ${fieldHasError('budget') ? 'is-invalid' : ''}`}
            value={form.budget || ''}
            placeholder="Enter budget amount"
            disabled={readOnly}
            onChange={(e) => updateField("budget", e.target.value)}
          />
          {fieldHasError('budget') && <div className="invalid-feedback">{errors.budget}</div>}
        </div>

        {/* Currency */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Currency *</label>
          <select
            className={`form-select ${fieldHasError('budgetCurrency') ? 'is-invalid' : ''}`}
            value={form.budgetCurrency || CURRENCIES[0]}
            disabled={readOnly}
            onChange={(e) => updateField("budgetCurrency", e.target.value)}
          >
            <option value="">Select Currency</option>
            {CURRENCIES.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          {fieldHasError('budgetCurrency') && <div className="invalid-feedback">{errors.budgetCurrency}</div>}
        </div>
      </div>
    </div>
  );
}