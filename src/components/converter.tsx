import { ArrowLeftRight, Triangle } from "lucide-react";

export default function Converter() {
  return (
    <div className="w-full flex flex-col gap-4 p-4 md:flex-row md:gap-6 md:p-5 items-center">
      <div className="gap-4 p-4 rounded-2xl md:gap-5 md:p-5 flex flex-col w-full outline-1 outline-neutral-500 bg-neutral-600">
        <p className="uppercase text-4 text-neutral-100">Send</p>
        <div className="flex w-full items-center justify-between">
          <p className="text-neutral-50 text-tab lg:text-1">1,000</p>
          <button className="p-2.5 gap-2 flex rounded-lg bg-neutral-500 outline outline-neutral-400 cursor-pointer items-center justify-between">
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

      <div className="p-3 h-12 rounded-lg outline-1 outline-neutral-500 bg-neutral-600">
        <ArrowLeftRight className="rotate-90 md:rotate-0" color="white" />
      </div>

      <div className="gap-4 p-4 rounded-2xl md:gap-5 md:p-5 flex flex-col w-full outline-1 outline-neutral-500 bg-neutral-600">
        <p className="uppercase text-4 text-neutral-100">Receive</p>
        <div className="flex w-full items-center justify-between">
          <p className="text-lime-500 text-tab lg:text-1">853.02</p>
          <button className="p-2.5 gap-2 flex rounded-lg bg-neutral-500 outline outline-neutral-400 cursor-pointer items-center justify-between">
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
