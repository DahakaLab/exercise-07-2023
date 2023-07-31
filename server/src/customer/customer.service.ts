import { Injectable } from "@nestjs/common";

import { CustomerDto } from "./dto/customer.dto";
import { getCustomerData } from "./customer.data";
import { PaymentsDto, PaymentAddReq, PaymentType } from "src/payments/dto/payments.dto";

@Injectable()
export class CustomerService {
  private customer: CustomerDto = getCustomerData();

  private get maxPaymentPid() {
    const itemWithMaxPid = this.customer.payments.reduce((acc, value) => {
      if (acc.pid >= value.pid) {
        return acc;
      }
      return value;
    });

    return itemWithMaxPid.pid;
  }

  private addPaymentFromReq(depositReq: PaymentAddReq, paymentType: PaymentType) {
    const newPid = this.maxPaymentPid + 1;

    const newPayments: PaymentsDto = {
      ...depositReq,
      datetime: new Date(),
      status: 'approved',
      type: paymentType,
      pid: newPid,
    };
    
    this.customer.payments.push(newPayments);
  }

  getCustomer() {
    return this.customer;
  }

  deposit(depositReq: PaymentAddReq) {
    const { amount } = depositReq;

    this.addPaymentFromReq(depositReq, 'deposit');
    this.customer.wallet.balance += parseFloat(amount.toFixed(2));

    return this.customer;
  }

  withdraw(depositReq: PaymentAddReq) {
    const { amount } = depositReq;

    this.addPaymentFromReq(depositReq, 'withdrawal');
    this.customer.wallet.balance -= parseFloat(amount.toFixed(2));

    return this.customer;
  }
}