type AccountType = "live" | "demo";

export class TradingAccountsDto {
  taid: string | number;
  accounty_type: AccountType;
  platform: string;
  balance: number;
}