type AccountType = "live" | "demo";

export class tradingAccountsDto {
  taid: string | number;
  accounty_type: AccountType;
  platform: string;
  balance: number;
}