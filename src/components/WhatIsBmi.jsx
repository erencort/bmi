import React from "react";

function WhatIsBmi() {
  return (
    <div className="p-5">
      <h1 className="text-4xl my-8 font-bold">
        What is the body mass index (BMI)?
      </h1>
      <div className="text-2xl my-8">
        The body mass index (BMI) is a measure that uses your height and weight
        to work out if your weight is healthy.
      </div>
      <div className="my-8 ">
        The BMI calculation divides an adult's weight in kilograms by their
        height in metres squared. For example, A BMI of 25 means 25kg/m2.
      </div>
      <h1 className="mt-6 mb-2 text-4xl font-bold">BMI ranges</h1>
      <div>
        For most adults, an ideal BMI is in the 18.5 to 24.9 range. For children
        and young people aged 2 to 18, the BMI calculation takes into account
        age and gender as well as height and weight.
      </div>
      <div className="my-8">
        If your BMI is:
        <ul className="my-8 list-disc">
          <li>below 18.5 - you're in the underweight range</li>
          <li>between 18.5 and 24.9 - you're in the healthy weight range</li>
          <li>between 25 and 29.9 - you're in the overweight range</li>
          <li>30 or over - you're in the obese range</li>
        </ul>
      </div>
    </div>
  );
}

export default WhatIsBmi;
