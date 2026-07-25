
export default function ConversionStats() {
  return (
    <div className='w-full sm:w-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className="flex flex-col gap-4 py-3 px-5 rounded-2xl bg-neutral-700 outline-1 outline-neutral-600">
            <p className="text-4 text-neutral-50">OPEN</p>
            <p className="text-2 text-neutral-50">0.8516</p>
        </div>

        <div className="flex flex-col gap-4 py-3 px-5 rounded-2xl bg-neutral-700 outline-1 outline-neutral-600">
            <p className="text-4 text-neutral-50">LAST</p>
            <p className="text-2 text-neutral-50">0.8530</p>
        </div>

        <div className="flex flex-col gap-4 py-3 px-5 rounded-2xl bg-neutral-700 outline-1 outline-neutral-600">
            <p className="text-4 text-neutral-50">CHANGE</p>
            <p className="text-2 text-green-500">+0.0014</p>
        </div>

        <div className="flex flex-col gap-4 py-3 px-5 rounded-2xl bg-neutral-700 outline-1 outline-neutral-600">
            <p className="text-4 text-neutral-50">% CHANGE</p>
            <p className="text-2 text-green-500">+0.16%</p>
        </div>
        
    </div>
  )
}
