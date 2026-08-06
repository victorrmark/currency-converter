import axios from "axios";
import {
  useQuery,
} from "@tanstack/react-query";
import type {  HistoryData } from "../type/data";
import { getRange } from "../utils/getDateRange";

export function useCurrencyHistory(
  base: string,
  quote: string,
  range: { label: string; value: number },
) {
  return useQuery<HistoryData[]>({
    queryKey: ["history", base, quote, range],
    queryFn: async () => {
      const r = getRange(range);
      const path =
        `/v2/rates?base=${base}` +
        `&quotes=${quote}` +
        `&from=${r.from}&to=${r.to}`;
      const { data } = await axios.get("https://api.frankfurter.dev" + path);

      return data.map(({date, rate}:{date:string; rate:number})=>({date, rate}));
    },
  });
}
