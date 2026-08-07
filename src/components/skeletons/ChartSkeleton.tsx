export function ChartSkeleton() {
  return (
    <div className="flex w-full flex-col gap-6 animate-pulse">
      <div className="flex w-full flex-col justify-between gap-6 lg:flex-row lg:items-start">
        
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-20.25 w-35 rounded-lg bg-neutral-800"
            />
          ))}
        </div>

        <div className="h-10.5 w-71.5 shrink-0 rounded-lg bg-neutral-800" />
      </div>

      <div className="h-94.25 w-full rounded-xl bg-neutral-800" />
    </div>
  );
}