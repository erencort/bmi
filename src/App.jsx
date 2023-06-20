import BmiCalculate from "./components/BmiCalculate";
import SideBarNav from "./components/SideBarNav";
import { Routes, Route } from "react-router-dom";
import WhatIsBmi from "./components/WhatIsBmi";
import BmiRecords from "./components/BmiRecords";

function App() {
  return (
    <div
      style={{ backgroundColor: "#242424" }}
      className="h-screen text-white font-serif"
    >
      <div className="grid grid-cols-4 gap-4">
        {/*Sidebar*/}
        <div className="border-r-4 border-green-600 h-screen">
          <SideBarNav />
        </div>

        <div className="col-span-3">
          <Routes>
            <Route path="/" element={<BmiCalculate />} />
            <Route path="/whatisbmi" element={<WhatIsBmi />} />
            <Route path="/records" element={<BmiRecords />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
