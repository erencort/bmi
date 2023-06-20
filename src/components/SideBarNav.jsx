import React from "react";
import { Link } from "react-router-dom";

function SideBarNav() {
  return (
    <div>
      <div className="text-3xl text-center py-5 border-b-4 border-green-600">
        <Link to="/">
          <span className="cursor-pointer">BMI CALCULATOR</span>
        </Link>
      </div>
      <div>
        <ul>
          <Link to="/">
            <li className="border-2 border-black bg-gray-800 hover:bg-gray-500 px-3 py-3 flex justify-between">
              <span>Calculate BMI</span> <span>{">"}</span>
            </li>
            <Link to="/whatisbmi">
              <li className="border-2 border-black bg-gray-800 hover:bg-gray-500 px-3 py-3 flex justify-between">
                <span>What is BMI</span> <span>{">"}</span>
              </li>
            </Link>
          </Link>
          <Link to="records">
            <li className="border-2 border-black bg-gray-800 hover:bg-gray-500 px-3 py-3 flex justify-between">
              <span>Records</span> <span>{">"}</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBarNav;
