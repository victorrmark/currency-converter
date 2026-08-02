import axios from "axios";
import {
  useQuery,
  //   useMutation,
  //   useQueryClient,
} from "@tanstack/react-query";
import type { ConversionData } from "../type/data";

export function useGetCurrency(amount: number, base: string, quote: string) {
  return useQuery<ConversionData>({
    queryKey: ["currency", amount, base, quote],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.frankfurter.dev/v2/rate/${base}/${quote}`,
      );

      const rate = new Intl.NumberFormat("en", {
        style: "currency",
        currency: quote,
      });
      return {...data, convert: rate.format(data.rate * amount) };
    },
  });
}
