


import React from "react";

const CURRENCIES = ["USD - Dollars ($)", "EUR - Euro (€)", "INR - Rupee (₹)"];

export default function TalentCard({
  talent,
  name,
  toggleTalent,
  updateTalentDetails,
  readOnly,
}) {
  return (
    <div className="border rounded p-3 mb-3">
      {/* Talent Header with Checkbox and Name */}
      <div className="d-flex align-items-center mb-3">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={talent.selected}
          disabled={readOnly}
          onChange={() => toggleTalent(talent.talentId)}
        />
        <span className="fw-bold">{name}</span>
      </div>

      {/* Talent Detail Fields - Horizontal Bootstrap Grid Layout */}
      {talent.selected && (
        <div className="row">
          {/* Contract Duration */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Contract Duration</label>
            <input
              type="text"
              className="form-control"
              value={talent.details.contractDuration || ""}
              placeholder="Months"
              disabled={readOnly}
              onChange={(e) =>
                updateTalentDetails(talent.talentId, "contractDuration", e.target.value)
              }
            />
          </div>

          {/* Bill Rate */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Bill Rate</label>
            <input
              type="text"
              className="form-control"
              value={talent.details.billRate || ""}
              placeholder="/hr"
              disabled={readOnly}
              onChange={(e) =>
                updateTalentDetails(talent.talentId, "billRate", e.target.value)
              }
            />
          </div>

          {/* Currency for Bill Rate */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Currency</label>
            <select
              className="form-select"
              value={talent.details.currency || CURRENCIES[0]}
              disabled={readOnly}
              onChange={(e) =>
                updateTalentDetails(talent.talentId, "currency", e.target.value)
              }
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c.split(' - ')[0]}
                </option>
              ))}
            </select>
          </div>

          {/* Standard Time Bill Rate */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Standard Time BR</label>
            <input
              type="text"
              className="form-control"
              value={talent.details.stdTimeBR || ""}
              placeholder="/hr"
              disabled={readOnly}
              onChange={(e) =>
                updateTalentDetails(talent.talentId, "stdTimeBR", e.target.value)
              }
            />
          </div>

          {/* Currency for Standard Time */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Currency</label>
            <select
              className="form-select"
              value={talent.details.stdCurrency || CURRENCIES[0]}
              disabled={readOnly}
              onChange={(e) =>
                updateTalentDetails(talent.talentId, "stdCurrency", e.target.value)
              }
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c.split(' - ')[0]}
                </option>
              ))}
            </select>
          </div>

          {/* Overtime Bill Rate */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Over Time BR</label>
            <input
              type="text"
              className="form-control"
              value={talent.details.otBR || ""}
              placeholder="/hr"
              disabled={readOnly}
              onChange={(e) =>
                updateTalentDetails(talent.talentId, "otBR", e.target.value)
              }
            />
          </div>

          {/* Currency for Overtime */}
          <div className="col-md-3 mb-3">
            <label className="form-label">Currency</label>
            <select
              className="form-select"
              value={talent.details.otCurrency || CURRENCIES[0]}
              disabled={readOnly}
              onChange={(e) =>
                updateTalentDetails(talent.talentId, "otCurrency", e.target.value)
              }
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c.split(' - ')[0]}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
