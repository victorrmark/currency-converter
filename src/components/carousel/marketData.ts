export type Market = {
  id: number;
  pair: string;
  rate: number;
  change: number;
};

export const markets: Market[] = [
  {
    id: 1,
    pair: "USD/NGN",
    rate: 1542.37,
    change: 1.24,
  },
  {
    id: 2,
    pair: "EUR/NGN",
    rate: 1798.65,
    change: -0.53,
  },
  {
    id: 3,
    pair: "GBP/NGN",
    rate: 2097.14,
    change: 0.89,
  },
  {
    id: 4,
    pair: "JPY/NGN",
    rate: 10.71,
    change: -1.12,
  },
  {
    id: 5,
    pair: "CAD/NGN",
    rate: 1130.56,
    change: 0.44,
  },
  {
    id: 6,
    pair: "AUD/NGN",
    rate: 1007.83,
    change: -0.31,
  },
];