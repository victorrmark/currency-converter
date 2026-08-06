import axios from "axios";
import {
  useQuery,
  //   useMutation,
  //   useQueryClient,
} from "@tanstack/react-query";
import type { ConversionData } from "../type/data";
import { getRange } from "../utils/getDateRange";

export function useCurrencyHistory(
  base: string,
  quote: string,
  range: { label: string; value: number },
) {
  return useQuery<ConversionData>({
    queryKey: ["history", base, quote, range],
    queryFn: async () => {
      const r = getRange(range);
      const path =
        `/v2/rates?base=${base}` +
        `&quotes=${quote}` +
        `&from=${r.from}&to=${r.to}`;
      const { data } = await axios.get("https://api.frankfurter.dev" + path);
      //   const rate = new Intl.NumberFormat("en", {
      //     style: "currency",
      //     currency: quote,
      //   });
      //   return {...data, convert: rate.format(data.rate * amount) };
      return data;
    },
  });
}
