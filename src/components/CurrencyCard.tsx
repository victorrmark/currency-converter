import Converter from "./converter";
import ConversionRate from "./ConversionRate";
import { useState } from "react";
import { useGetCurrency } from "../hooks/useGetCurrency";
import type { ConversionData } from "../type/data";


export default function CurrencyCard() {
  const [amount, setAmount] = useState(0);
  const { data } = useGetCurrency(Number(amount), "USD", "EUR");
  console.log(data)

  return (
    <div className="flex flex-col w-full gap-4">
      <p className="text-2 text-neutral-50 uppercase">Check the rate</p>
      <div className="bg-neutral-700 rounded-[20px]">
        <Converter amount={amount} setAmount={setAmount} converted={data?.convert}/>
        <div className="border-t border-dashed border-neutral-500"></div>

        {data && <ConversionRate base={data.base} quote={data.quote} rate={data.rate} />}
      </div>
    </div>
  );
}
