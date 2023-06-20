import React from "react";
import { useState } from "react";
import BmiResult from "./BmiResult";

function BmiCalculate() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState();

  const calculateBmi = () => {
    if (height == "" || weight == "") {
      alert("Please enter vaild values.");
    } else {
      setBmi(weight / ((height / 100) ^ 2));
      let score = weight / ((height / 100) ^ 2);
      score = score.toFixed(2);

      if (localStorage.getItem("records")) {
        let records = JSON.parse(localStorage.records);
        records = [...records, score];
        let write = JSON.stringify(records);
        localStorage.setItem("records", write);
      } else {
        let myArray = [score];
        let write = JSON.stringify(myArray);
        localStorage.setItem("records", write);
      }
    }
  };

  return (
    <div className="w-2/5 m-auto h-3/4 ">
      <form className="mt-60 w-2/3 mx-auto">
        <label className="block ">
          <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
            Height
          </span>
          <input
            onChange={(e) => setHeight(e.target.value)}
            inputMode="numeric"
            type="number"
            name="height"
            className="mt-1 px-3 py-2 bg-white border shadow-sm text-black border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="180cm"
          />
        </label>
        <label className="block mt-3">
          <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
            Weight
          </span>
          <input
            onChange={(e) => setWeight(e.target.value)}
            inputMode="numeric"
            type="number"
            name="weight"
            className=" mt-1 px-3 py-2 bg-white border shadow-sm text-black border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="70kg"
          />
        </label>

        <button
          onClick={() => {
            calculateBmi();
          }}
          type="button"
          className="block mt-6 mx-auto text-black bg-gray-300 hover:bg-gray-500 focus:outline-none  font-medium rounded-xl text-m px-5 py-1.5"
        >
          Calculate
        </button>
      </form>
      {bmi && <BmiResult bmi={bmi} />}
    </div>
  );
}

export default BmiCalculate;
