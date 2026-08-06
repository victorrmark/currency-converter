import { useState } from "react";
import ConversionStats from "../components/conversionStats";
import ChartComponent from "../components/rateChart";

const ranges = [
  { label: "1W", value: 7 },
  { label: "1M", value: 31 },
  { label: "3M", value: 93 },
  { label: "1Y", value: 365 },
  { label: "5Y", value: 1825 },
];



// const data = [
//   { time: "2026-05-01", value: 0.8512 },
//   { time: "2026-05-02", value: 0.8531 },
//   { time: "2026-05-03", value: 0.8499 },
//   { time: "2026-05-04", value: 0.8568 },
//   { time: "2026-05-05", value: 0.8614 },
// ];

export default function History() {
  const [chartRange, setChartRange] = useState(ranges[3]);

  

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 justify-between  items-start lg:items-center">
        <ConversionStats />
        <nav className="p-0.5 bg-neutral-700 rounded-lg flex items-center">
          {ranges.map((range, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setChartRange(range)}
              className={`px-4 py-3  focus:outline-none  uppercase text-5 flex items-center cursor-pointer rounded-lg ${chartRange.label === range.label ? " text-neutral-50 bg-neutral-500" : "text-neutral-200 focus:text-neutral-100 hover:text-neutral-100 "}`}
            >
              {range.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex w-full flex-col py-3 px-4 rounded-2xl bg-neutral-700 outline outline-neutral-600 gap-4">
        <ChartComponent />
      </div>
    </div>
  );
}
