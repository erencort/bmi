import React from "react";
import { useState } from "react";

function BmiRecords() {
  const [records, setRecords] = useState(
    localStorage.getItem("records") ? localStorage.getItem("records") : null
  );

  return (
    <div className="h-2/3 mt-10 w-2/3 mx-auto">
      <h1 className="my-20 text-4xl font-bold text-center">RECORDS</h1>
      {records ? (
        <div className="text-center">
          <ul className="">
            {JSON.parse(records).map((item, index) => {
              return (
                <div key={index}>
                  <li>BMI Score - {item}</li>
                </div>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="text-center">You have no records.</div>
      )}
      <button
        onClick={() => {
          localStorage.removeItem("records");
          setRecords(null);
        }}
        type="button"
        className="block mt-6 mx-auto text-black bg-gray-300 hover:bg-gray-500 focus:outline-none  font-medium rounded-xl text-m px-5 py-1.5"
      >
        Clear All
      </button>
    </div>
  );
}

export default BmiRecords;
