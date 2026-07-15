import { useEffect, useState } from "react";
import MarketCard from "./MarketCard";
import { markets } from "./marketData.ts";

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % markets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full bg-neutral-700 overflow-hidden">
      <div className="text-5 font-medium bg-lime-500 text-neutral-900 flex gap-2 px-4 py-3 flex-none z-10">
        <span>•</span>
        <p>LIVE MARKETS</p>
      </div>
      <div
        className=" flex flex-1 animate-marquee"
      >
        {[...markets, ...markets].map((market, index) => (
          <MarketCard key={market.id} market={market} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
