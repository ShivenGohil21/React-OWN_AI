

import React from "react";
import ReqSection from "./ReqSection";

export default function TalentDetails({ form, setForm, readOnly }) {
  function addReq() {
    setForm((f) => ({
      ...f,
      reqSections: [
        ...f.reqSections,
        { jobId: "", reqId: "", talents: [] }
      ],
    }));
  }

  function removeReq(index) {
    setForm((f) => {
      const reqs = [...f.reqSections];
      reqs.splice(index, 1);
      return { ...f, reqSections: reqs };
    });
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5>Talent Details</h5>

        {form.reqSections.map((req, idx) => (
          <ReqSection
            key={idx}
            index={idx}
            req={req}
            form={form}
            setForm={setForm}
            readOnly={readOnly}
            removeReq={removeReq}
          />
        ))}

        {!readOnly && form.poType === "Group PO" && (
          <button
            type="button"
            className="btn btn-outline-primary mt-2"
            onClick={addReq}
          >
            Add Another
          </button>
        )}
      </div>
    </div>
  );
}
