
export interface Currency {
  code: string;
  name: string;
  flag: string;
}

export const currencyList = {
  popular: [
    {
      "code": "USD",
      "name": "US Dollar",
      "flag": "https://flagcdn.com/16x12/us.png"
    },
    {
      "code": "EUR",
      "name": "Euro",
      "flag": "https://flagcdn.com/16x12/eu.png"
    },
    {
      "code": "GBP",
      "name": "British Pound Sterling",
      "flag": "https://flagcdn.com/16x12/gb.png"
    }
  ],
  other: [
    {
      "code": "AED",
      "name": "UAE Dirham",
      "flag": "https://flagcdn.com/16x12/ae.png"
    },
    {
      "code": "ARS",
      "name": "Argentine Peso",
      "flag": "https://flagcdn.com/16x12/ar.png"
    },
    {
      "code": "AUD",
      "name": "Australian Dollar",
      "flag": "https://flagcdn.com/16x12/au.png"
    },
    {
      "code": "BDT",
      "name": "Bangladeshi Taka",
      "flag": "https://flagcdn.com/16x12/bd.png"
    },
    {
      "code": "BGN",
      "name": "Bulgarian Lev",
      "flag": "https://flagcdn.com/16x12/bg.png"
    },
    {
      "code": "BHD",
      "name": "Bahraini Dinar",
      "flag": "https://flagcdn.com/16x12/bh.png"
    },
    {
      "code": "BRL",
      "name": "Brazilian Real",
      "flag": "https://flagcdn.com/16x12/br.png"
    },
    {
      "code": "CAD",
      "name": "Canadian Dollar",
      "flag": "https://flagcdn.com/16x12/ca.png"
    },
    {
      "code": "CHF",
      "name": "Swiss Franc",
      "flag": "https://flagcdn.com/16x12/ch.png"
    },
    {
      "code": "CLP",
      "name": "Chilean Peso",
      "flag": "https://flagcdn.com/16x12/cl.png"
    },
    {
      "code": "CNY",
      "name": "Chinese Yuan",
      "flag": "https://flagcdn.com/16x12/cn.png"
    },
    {
      "code": "COP",
      "name": "Colombian Peso",
      "flag": "https://flagcdn.com/16x12/co.png"
    },
    {
      "code": "CZK",
      "name": "Czech Koruna",
      "flag": "https://flagcdn.com/16x12/cz.png"
    },
    {
      "code": "DKK",
      "name": "Danish Krone",
      "flag": "https://flagcdn.com/16x12/dk.png"
    },
    {
      "code": "EGP",
      "name": "Egyptian Pound",
      "flag": "https://flagcdn.com/16x12/eg.png"
    },
    {
      "code": "HKD",
      "name": "Hong Kong Dollar",
      "flag": "https://flagcdn.com/16x12/hk.png"
    },
    {
      "code": "HNL",
      "name": "Honduran Lempira",
      "flag": "https://flagcdn.com/16x12/hn.png"
    },
    {
      "code": "HTG",
      "name": "Haitian Gourde",
      "flag": "https://flagcdn.com/16x12/ht.png"
    },
    {
      "code": "HUF",
      "name": "Hungarian Forint",
      "flag": "https://flagcdn.com/16x12/hu.png"
    },
    {
      "code": "IDR",
      "name": "Indonesian Rupiah",
      "flag": "https://flagcdn.com/16x12/id.png"
    },
    {
      "code": "INR",
      "name": "Indian Rupee",
      "flag": "https://flagcdn.com/16x12/in.png"
    },
    {
      "code": "ISK",
      "name": "Icelandic Króna",
      "flag": "https://flagcdn.com/16x12/is.png"
    },
    {
      "code": "JOD",
      "name": "Jordanian Dinar",
      "flag": "https://flagcdn.com/16x12/jo.png"
    },
    {
      "code": "JPY",
      "name": "Japanese Yen",
      "flag": "https://flagcdn.com/16x12/jp.png"
    },
    {
      "code": "KES",
      "name": "Kenyan Shilling",
      "flag": "https://flagcdn.com/16x12/ke.png"
    },
    {
      "code": "KRW",
      "name": "South Korean Won",
      "flag": "https://flagcdn.com/16x12/kr.png"
    },
    {
      "code": "KWD",
      "name": "Kuwaiti Dinar",
      "flag": "https://flagcdn.com/16x12/kw.png"
    },
    {
      "code": "LBP",
      "name": "Lebanese Pound",
      "flag": "https://flagcdn.com/16x12/lb.png"
    },
    {
      "code": "XCD",
      "name": "East Caribbean Dollar",
      "flag": "https://flagcdn.com/16x12/lc.png"
    },
    {
      "code": "LKR",
      "name": "Sri Lankan Rupee",
      "flag": "https://flagcdn.com/16x12/lk.png"
    },
    {
      "code": "MAD",
      "name": "Moroccan Dirham",
      "flag": "https://flagcdn.com/16x12/ma.png"
    },
    {
      "code": "MXN",
      "name": "Mexican Peso",
      "flag": "https://flagcdn.com/16x12/mx.png"
    },
    {
      "code": "MYR",
      "name": "Malaysian Ringgit",
      "flag": "https://flagcdn.com/16x12/my.png"
    },
    {
      "code": "NGN",
      "name": "Nigerian Naira",
      "flag": "https://flagcdn.com/16x12/ng.png"
    },
    {
      "code": "NOK",
      "name": "Norwegian Krone",
      "flag": "https://flagcdn.com/16x12/no.png"
    },
    {
      "code": "NPR",
      "name": "Nepalese Rupee",
      "flag": "https://flagcdn.com/16x12/np.png"
    },
    {
      "code": "NZD",
      "name": "New Zealand Dollar",
      "flag": "https://flagcdn.com/16x12/nz.png"
    },
    {
      "code": "OMR",
      "name": "Omani Rial",
      "flag": "https://flagcdn.com/16x12/om.png"
    },
    {
      "code": "PEN",
      "name": "Peruvian Sol",
      "flag": "https://flagcdn.com/16x12/pe.png"
    },
    {
      "code": "PHP",
      "name": "Philippine Peso",
      "flag": "https://flagcdn.com/16x12/ph.png"
    },
    {
      "code": "PKR",
      "name": "Pakistani Rupee",
      "flag": "https://flagcdn.com/16x12/pk.png"
    },
    {
      "code": "PLN",
      "name": "Polish Złoty",
      "flag": "https://flagcdn.com/16x12/pl.png"
    },
    {
      "code": "QAR",
      "name": "Qatari Riyal",
      "flag": "https://flagcdn.com/16x12/qa.png"
    },
    {
      "code": "RON",
      "name": "Romanian Leu",
      "flag": "https://flagcdn.com/16x12/ro.png"
    },
    {
      "code": "RUB",
      "name": "Russian Ruble",
      "flag": "https://flagcdn.com/16x12/ru.png"
    },
    {
      "code": "SAR",
      "name": "Saudi Riyal",
      "flag": "https://flagcdn.com/16x12/sa.png"
    },
    {
      "code": "SEK",
      "name": "Swedish Krona",
      "flag": "https://flagcdn.com/16x12/se.png"
    },
    {
      "code": "SGD",
      "name": "Singapore Dollar",
      "flag": "https://flagcdn.com/16x12/sg.png"
    },
    {
      "code": "THB",
      "name": "Thai Baht",
      "flag": "https://flagcdn.com/16x12/th.png"
    },
    {
      "code": "TRY",
      "name": "Turkish Lira",
      "flag": "https://flagcdn.com/16x12/tr.png"
    },
    {
      "code": "TWD",
      "name": "New Taiwan Dollar",
      "flag": "https://flagcdn.com/16x12/tw.png"
    },
    {
      "code": "UAH",
      "name": "Ukrainian Hryvnia",
      "flag": "https://flagcdn.com/16x12/ua.png"
    },
    {
      "code": "VND",
      "name": "Vietnamese Đồng",
      "flag": "https://flagcdn.com/16x12/vn.png"
    },
    {
      "code": "ZAR",
      "name": "South African Rand",
      "flag": "https://flagcdn.com/16x12/za.png"
    },
    {
    "code": "ALL",
    "name": "Albanian Lek",
    "flag": "https://flagcdn.com/16x12/al.png"
  },
  {
    "code": "AMD",
    "name": "Armenian Dram",
    "flag": "https://flagcdn.com/16x12/am.png"
  },
  {
    "code": "AZN",
    "name": "Azerbaijani Manat",
    "flag": "https://flagcdn.com/16x12/az.png"
  },
  {
    "code": "BWP",
    "name": "Botswana Pula",
    "flag": "https://flagcdn.com/16x12/bw.png"
  },
  {
    "code": "DZD",
    "name": "Algerian Dinar",
    "flag": "https://flagcdn.com/16x12/dz.png"
  },
  {
    "code": "GHS",
    "name": "Ghanaian Cedi",
    "flag": "https://flagcdn.com/16x12/gh.png"
  },
  {
    "code": "ILS",
    "name": "Israeli New Shekel",
    "flag": "https://flagcdn.com/16x12/il.png"
  },
  {
    "code": "KZT",
    "name": "Kazakhstani Tenge",
    "flag": "https://flagcdn.com/16x12/kz.png"
  }
  ]
}