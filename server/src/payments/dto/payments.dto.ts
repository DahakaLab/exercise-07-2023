export type PaymentType = "deposit" | "withdrawal";
type PaymentStatus = "pending" | "approved" | "declined" | "cancelled";

export class PaymentsDto {
  pid: number;
  gateway: string;
  type: PaymentType;
  amount: number;
  status: PaymentStatus;
  datetime: string | Date;
};

export interface PaymentAddReq extends Pick<PaymentsDto, "gateway" | "amount"> {}