export interface Block {
  height: number;
  timestamp: number;
  tx_count: number;
  size: number;
  weight: number;
}

export interface Price {
  USD: number;
  EUR: number;
  GBP: number;
}