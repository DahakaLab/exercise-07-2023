import type { Customer, WithdrawReq } from "$types/api/customer";

import { transport } from "../utils/transport";

const baseUrl = (path = "") => `/customer${path}`;

const customerUrls = {
  data: () => baseUrl(),
  deposit: () => baseUrl("/deposit"),
  withdraw: () => baseUrl("/withdraw"),
};

export const customerMethods = {
  getData: async () => {
    const { data } = await transport.get<Customer>(customerUrls.data());
    return data;
  },
  deposit: async ({ amount, gateway }: WithdrawReq) => {
    const { data } = await transport.post<Customer>(customerUrls.deposit(), { amount, gateway });
    return data;
  },
  withdraw: async ({ amount, gateway }: WithdrawReq) => {
    const { data } = await transport.post<Customer>(customerUrls.withdraw(), { amount, gateway });
    return data;
  },
};
