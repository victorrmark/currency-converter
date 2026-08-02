import { ArrowLeftRight, Triangle } from "lucide-react";
import { removeSign } from "../utils/removeSign";

export default function Converter({amount, setAmount, converted}: {amount: number, setAmount: (value: number) => void, converted: string | undefined}) {

  return (
    <div className="w-full flex flex-col gap-4 p-4 md:flex-row md:gap-6 md:p-5 items-center">
      <div className="gap-4 p-4 rounded-2xl md:gap-5 md:p-5 flex flex-col w-full outline-1 outline-neutral-500 bg-neutral-600 min-w-0">
        <p className="uppercase text-4 text-neutral-100">Send</p>
        <div className="flex w-full items-center justify-between">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent min-w-0 text-neutral-50 text-tab lg:text-1  focus:outline-none no-spinner placeholder:text-tab lg:placeholder:text-1 placeholder:opacity-100 placeholder:text-neutral-200"
            placeholder="0"

          />
          {/* <p className="text-neutral-50 text-tab lg:text-1 hover:cursor-text hover:border-b ">1,000</p> */}
          <button className="p-2.5 gap-2 flex rounded-lg bg-neutral-500 outline outline-neutral-400 cursor-pointer items-center justify-between hover:bg-neutral-400">
            <div className="rounded-full w-5 h-5 bg-red-500" />
            <p className="text-neutral-50 text-4">USD</p>
            <Triangle
              className="fill-neutral-50 rotate-180"
              size={12}
              strokeWidth={0}
            />
          </button>
        </div>
      </div>

      <div className="p-3 h-12 rounded-lg outline-1 outline-neutral-500 bg-neutral-600 hover:bg-neutral-400 cursor-pointer">
        <ArrowLeftRight className="rotate-90 md:rotate-0 " color="white" />
      </div>

      <div className="gap-4 p-4 rounded-2xl md:gap-5 md:p-5 flex flex-col w-full outline-1 outline-neutral-500 bg-neutral-600">
        <p className="uppercase text-4 text-neutral-100">Receive</p>
        <div className="flex w-full items-center justify-between">
          <p className={`text-tab lg:text-1 hover:cursor-text ${amount ? 'text-lime-500' : 'text-neutral-200'}`}>{amount ? removeSign(converted) : "0" }</p>
          <button className="p-2.5 gap-2 flex rounded-lg bg-neutral-500 outline outline-neutral-400 cursor-pointer items-center justify-between hover:bg-neutral-400">
            <div className="rounded-full w-5 h-5 bg-red-500" />
            <p className="text-neutral-50 text-4">USD</p>
            <Triangle
              className="fill-neutral-50 rotate-180"
              size={12}
              strokeWidth={0}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
