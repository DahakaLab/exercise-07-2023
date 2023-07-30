export type ClientStatus = "pending" | "approved" | "rejected" | "archived";

export interface Wallet {
  currency: "EUR";
  balance: number;
}

export type AccountType = "live" | "demo";

export interface TradingAccountsDto {
  taid: string | number;
  accounty_type: AccountType;
  platform: string;
  balance: number;
}

export type PaymentType = "deposit" | "withdrawal";
export type PaymentStatus = "pending" | "approved" | "declined" | "cancelled";

export interface Payments {
  pid: number;
  gateway: string;
  type: PaymentType;
  amount: number;
  status: PaymentStatus;
  datetime: string | Date;
}

export interface Note {
  datetime: string;
  note_text: string;
}

export interface Activity {
  datetime: string;
  activity_test: string;
}

export interface Customer {
  client_id: string;
  firstname: string;
  lastname: string;
  country: string;
  address1: string;
  address2:string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  status: ClientStatus;
  invited_by_affiliate: string;
  wallet: Wallet;
  trading_accounts: TradingAccountsDto[];
  payments: Payments[];
  notes: Note[];
  activity: Activity[];
}

export interface WithdrawReq extends Pick<Payments, "gateway" | "amount"> {}
export interface DepositReq extends Pick<Payments, "gateway" | "amount"> {}