import { tradingAccountsDto } from "src/trading-accounts/dto/tradingAccounts.dto";
import { WalletDto } from "../../wallet/dto/wallet.dto";
import { PaymentsDto } from "src/payments/dto/payments.dto";
import { NotesDto } from "src/notes/dto/notes.dto";
import { ActivityDto } from "src/activity/dto/activity.dto";

type ClientStatus = "pending" | "approved" | "rejected" | "archived";

export class CustomerDto {
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
  wallet: WalletDto;
  trading_accounts: tradingAccountsDto[];
  payments: PaymentsDto[];
  notes: NotesDto[];
  activity: ActivityDto[];
}