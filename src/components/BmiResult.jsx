import React from "react";

function BmiResult({ bmi }) {
  return (
    <div className="mx-auto w-2/3 mt-10 text-center border-2 p-4 border-green-600">
      <div>Your BMI: {bmi.toFixed(2)}</div>
      {bmi < 18.5 && <div>You are underweight</div>}
      {bmi >= 18.5 && bmi < 24.9 && <div>You are normal weight</div>}
      {bmi >= 24.9 && bmi < 29.9 && <div>You are overweight</div>}
      {bmi >= 29.9 && bmi < 34.9 && <div>You are obesity </div>}
      {bmi >= 34.9 && <div>You are extreme obesity</div>}
    </div>
  );
}

export default BmiResult;
