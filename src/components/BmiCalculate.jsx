import React from "react";
import { useState } from "react";

function BmiCalculate() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [bmi, setBmi] = useState();

  const calculateBmi = () => {
    setBmi(weight / (height ^ 2));
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
            name="weight"
            className="mt-1 px-3 py-2 bg-white border shadow-sm text-black border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="70kg"
          />
        </label>
        <div className="mt-3 flex justify-around">
          <div>
            <input
              onChange={(e) => setGender(e.target.value)}
              id="male"
              type="radio"
              name="gender"
              value="male"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              onChange={(e) => setGender(e.target.value)}
              id="female"
              type="radio"
              name="gender"
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <button
          onClick={() => {
            calculateBmi();
          }}
          type="button"
          className="block mx-auto text-black bg-gray-300 hover:bg-gray-500 focus:outline-none  font-medium rounded-xl text-m mt-2 px-5 py-1.5"
        >
          Calculate
        </button>
      </form>
      {bmi}
    </div>
  );
}

export default BmiCalculate;
