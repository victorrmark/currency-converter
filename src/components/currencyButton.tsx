import { Triangle } from "lucide-react";
import { useState } from "react";
import { currencyList } from "../utils/currencyList";
import type { Currency } from "../utils/currencyList";

interface CurrencyButtonProps {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

function CurrencyButton({
  currency,
  setCurrency,
}: CurrencyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-between gap-2 rounded-lg bg-neutral-500 p-2.5 outline outline-neutral-400 hover:bg-neutral-400 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src={currency.flag}
          alt={currency.code}
          className="h-5 w-5 rounded-full object-cover"
        />

        <p className="text-4 text-neutral-50">{currency.code}</p>

        <Triangle
          size={12}
          strokeWidth={0}
          className="rotate-180 fill-neutral-50"
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-72 rounded-lg bg-neutral-500 shadow-lg z-20">
          <div className="max-h-80 overflow-y-auto">

            <p className="px-3 py-2 text-xs font-semibold uppercase text-neutral-300">
              Popular
            </p>

            {currencyList.popular.map((curr) => (
              <button
                key={curr.code}
                type="button"
                onClick={() => {
                  setCurrency(curr);
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-neutral-400"
              >
                <img
                  src={curr.flag}
                  alt={curr.code}
                  className="h-5 w-5 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm text-white">{curr.code}</p>
                  <p className="text-xs text-neutral-300">
                    {curr.name}
                  </p>
                </div>
              </button>
            ))}

            <div className="my-2 border-t border-neutral-400" />

            <p className="px-3 py-2 text-xs font-semibold uppercase text-neutral-300">
              Other
            </p>

            {currencyList.other.map((curr) => (
              <button
                key={curr.code}
                type="button"
                onClick={() => {
                  setCurrency(curr);
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-neutral-400"
              >
                <img
                  src={curr.flag}
                  alt={curr.code}
                  className="h-5 w-5 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm text-white">{curr.code}</p>
                  <p className="text-xs text-neutral-300">
                    {curr.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrencyButton;