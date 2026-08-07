export function getCurrencyStats(data: { rate: number }[]) {
  if (data.length === 0) return null;

  const open = data[0].rate;
  const last = data[data.length - 1].rate;

  const change = last - open;
  const percentChange = (change / open) * 100;

  return {
    open,
    last,
    change,
    percentChange,
    isPositive: change >= 0,
  };
}