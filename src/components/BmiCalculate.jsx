import React from "react";

function BmiCalculate() {
  return (
    <div className="w-2/5 m-auto h-3/4 ">
      <form className="mt-64 w-2/3 mx-auto">
        <label class="block ">
          <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
            Height
          </span>
          <input
            name="height"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="180cm"
          />
        </label>
        <label class="block mt-3">
          <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
            Weight
          </span>
          <input
            name="weight"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="70kg"
          />
        </label>
        <div className="mt-3 flex justify-around">
          <div>
            <input id="male" type="radio" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input id="female" type="radio" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
      </form>
      {/*<label class="">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input
          type="email"
          name="email"
          class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
      </label>*/}
    </div>
  );
}

export default BmiCalculate;
