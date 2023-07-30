import { Controller, Get, Post, Body } from "@nestjs/common";

import { customerPaths } from "./customer.paths";
import { CustomerService } from "./customer.service";
import { PaymentsDto } from "src/payments/dto/payments.dto";

@Controller(customerPaths.base)
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomer() {
    return this.customerService.getCustomer();
  }

  @Post(customerPaths.deposit)
  deposit(@Body() depositReq: PaymentsDto) {
    console.log("deposit", depositReq);
    return this.customerService.deposit(depositReq);
  }

  @Post(customerPaths.withdraw)
  withdraw(@Body() withdrawReq: PaymentsDto) {
    return this.customerService.withdraw(withdrawReq);
  }
}