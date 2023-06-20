import React from "react";
import { useState } from "react";

function BmiRecords() {
  const [records, setRecords] = useState(
    localStorage.getItem("records") ? localStorage.getItem("records") : null
  );

  return (
    <div>
      {records ? (
        <div>
          {JSON.parse(records).map((item) => {
            return <div>{item}</div>;
          })}
        </div>
      ) : (
        <div>You have no records.</div>
      )}
    </div>
  );
}

export default BmiRecords;
