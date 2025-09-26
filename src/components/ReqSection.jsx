import React from "react";
import TalentCard from "./TalentCard";

const JOBS = [
  { id: "OWNAL_234", clientId: "collabera", title: "Application Development" },
  { id: "CLK_12880", clientId: "collabera", title: "Business Administrator" },
];

const TALENTS = [
  { id: "t1", name: "Monika Goyal", jobId: "OWNAL_234" },
  { id: "t2", name: "Shaili Khatri", jobId: "OWNAL_234" },
  { id: "t3", name: "John Doe", jobId: "CLK_12880" },
];

export default function ReqSection({
  index,
  req,
  form,
  setForm,
  readOnly,
  removeReq,
}) {
  function updateReq(newReq) {
    setForm((f) => {
      const reqs = [...f.reqSections];
      reqs[index] = newReq;
      return { ...f, reqSections: reqs };
    });
  }

  function handleJobChange(e) {
    const jobId = e.target.value;
    const talents = TALENTS.filter((t) => t.jobId === jobId).map((t) => ({
      talentId: t.id,
      selected: false,
      details: {},
    }));
    updateReq({ ...req, jobId, reqId: jobId, talents });
  }

  function toggleTalent(talentId) {
    const updated = req.talents.map((t) =>
      t.talentId === talentId ? { ...t, selected: !t.selected } : t
    );
    updateReq({ ...req, talents: updated });
  }

  function updateTalentDetails(talentId, key, value) {
    const updated = req.talents.map((t) =>
      t.talentId === talentId
        ? { ...t, details: { ...t.details, [key]: value } }
        : t
    );
    updateReq({ ...req, talents: updated });
  }

  function addAnotherTalent() {
    const newTalentId = `custom_${Date.now()}`;
    const newTalent = {
      talentId: newTalentId,
      selected: false,
      details: {},
    };
    updateReq({ ...req, talents: [...req.talents, newTalent] });
  }

  return (
    <div className="req-section">
      {/* Job/REQ Header Section */}
      <div className="req-header">
        <div className="talent-field">
          <label>Job Title/REQ Name *</label>
          <select
            className="form-select"
            value={req.jobId}
            onChange={handleJobChange}
            disabled={readOnly}
          >
            <option value="">Select Job/REQ</option>
            {JOBS.filter((j) => j.clientId === form.clientId).map((j) => (
              <option key={j.id} value={j.id}>
                {j.title}
              </option>
            ))}
          </select>
        </div>

        <div className="talent-field">
          <label>Job ID/REQ ID *</label>
          <input
            type="text"
            className="form-control"
            value={req.reqId || req.jobId}
            placeholder="REQ ID"
            disabled={readOnly}
            onChange={(e) => updateReq({ ...req, reqId: e.target.value })}
          />
        </div>

        {!readOnly && form.reqSections.length > 1 && (
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={() => removeReq(index)}
          >
            🗑️
          </button>
        )}
      </div>

      {/* Talents Section */}
      <div className="mt-3">
        {req.talents.map((t) => {
          const talentInfo = TALENTS.find((x) => x.id === t.talentId);
          return (
            <TalentCard
              key={t.talentId}
              talent={t}
              name={talentInfo?.name || `Custom Talent ${t.talentId.replace('custom_', '')}`}
              toggleTalent={toggleTalent}
              updateTalentDetails={updateTalentDetails}
              readOnly={readOnly}
            />
          );
        })}
        
        {!readOnly && req.jobId && (
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm mt-2"
            onClick={addAnotherTalent}
          >
            + Add Another Talent
          </button>
        )}
      </div>
    </div>  
  );
}
