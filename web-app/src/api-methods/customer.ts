import type { Customer } from "$types/api/customer";

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
  deposit: async (message: string) => {
    const { data } = await transport.post<Customer>(customerUrls.deposit(), { message });
    return data;
  },
  withdraw: async (message: string) => {
    const { data } = await transport.post<Customer>(customerUrls.withdraw(), { message });
    return data;
  },
};
