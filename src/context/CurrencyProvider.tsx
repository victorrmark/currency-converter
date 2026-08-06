import { useState, type ReactNode } from "react";

import { currencyList } from "../utils/currencyList";
import { CurrencyContext } from "./CurrencyContext";

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [baseCurrency, setBaseCurrency] = useState(currencyList.popular[0]);

  const [quoteCurrency, setQuoteCurrency] = useState(currencyList.popular[1]);

  function swapCurrencies() {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  }

  return (
    <CurrencyContext.Provider
      value={{
        baseCurrency,
        quoteCurrency,
        setBaseCurrency,
        setQuoteCurrency,
        swapCurrencies,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}
