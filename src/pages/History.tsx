import { useState } from "react";
import ConversionStats from "../components/conversionStats";
import Chart from "../components/chart";

const rateHistory: string[] = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

export default function History() {
  const [activeButton, setActiveButton] = useState("1D");
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 justify-between  items-start lg:items-center">
        <ConversionStats />
        <nav className="p-0.5 bg-neutral-700 rounded-lg flex items-center">
          {rateHistory.map((history, idx) =>  (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveButton(history)}
                className={`px-4 py-3  focus:outline-none  uppercase text-5 flex items-center cursor-pointer rounded-lg ${activeButton === history ? " text-neutral-50 bg-neutral-500" : "text-neutral-200 focus:text-neutral-100 hover:text-neutral-100 "}`}
              >
                {history}
              </button>
            )
          )}
        </nav>
      </div>
      <Chart />
    </div>
  );
}
