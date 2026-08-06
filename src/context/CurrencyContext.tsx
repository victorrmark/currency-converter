import { createContext } from "react";
import {currencyList} from "../utils/currencyList";

type Currency = (typeof currencyList.popular)[number];

type CurrencyContextType = {
  baseCurrency: Currency;
  quoteCurrency: Currency;

  setBaseCurrency: React.Dispatch<React.SetStateAction<Currency>>;
  setQuoteCurrency: React.Dispatch<React.SetStateAction<Currency>>;

  swapCurrencies: () => void;
};

export const CurrencyContext = createContext<CurrencyContextType | null>(null);