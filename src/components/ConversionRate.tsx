import { Star } from "lucide-react";
import type { ConversionData } from "../type/data";

export default function ConversionRate({ base, quote, rate }: Partial<ConversionData>) {
  console.log(base, quote, rate)
  return (
    <div className="w-full p-4 gap-4 flex flex-col items-center md:flex-row justify-between">
      <p className="text-6 text-neutral-50 uppercase md:text-5 md:px-5 md:py-4 justify-between ">
        1 {base} = {rate} {quote}
      </p>

      <div className="flex items-center gap-3">
        <button className="px-3 py-2 rounded-lg bg-lime-500 cursor-pointer text-neutral-50 flex justify-between items-center gap-2">
          <Star className="fill-neutral-600" size={12} strokeWidth={0} />
          <p className="uppercase text-neutral-600 text-5 font-medium">Favorited</p>
        </button>

        <button className="px-3 py-2 rounded-lg outline-1 outline-lime-500 cursor-pointer text-neutral-50 gap-2 uppercase text-5 font-medium hover:bg-lime-800">
          Log Conversion
        </button>
      </div>
    </div>
  );
}
