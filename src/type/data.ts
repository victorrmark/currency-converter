export interface ConversionData {
    date: string;
    base: string;
    quote: string;
    rate: number;
    convert: string;
}

export interface HistoryData {
    date: string;
    rate: number;
}