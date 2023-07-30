import { customerMethods } from "$api-methods/customer";
import type { Customer, WithdrawReq } from "$types/api/customer";
import { storeFactory } from "$utils/storeFactory"

const {
  useStore: useCustomerStore,
  useNewDataEvent: useCustomerNewDataEvent,
  useCreateEffect: useCustomerCreateEffect,
} = storeFactory<Customer | null>(null);

const {
  useStore: useIsLoadingStore,
  useNewDataEvent: useIsLoadingNewDataEvent,
} = storeFactory<boolean>(false);

const customer = useCustomerStore();
const setNewCustomer = useCustomerNewDataEvent();

const isCustomerLoading = useIsLoadingStore();
const setIsLoading = useIsLoadingNewDataEvent();

const handleGetCustomer = async () => {
  setIsLoading(true);
  const customer = await customerMethods.getData();
  setIsLoading(false);
  return customer;
}
const updateCustomerFromApi = useCustomerCreateEffect<void>(handleGetCustomer);

const handlePostWithdraw = async (formData: WithdrawReq) => {
  setIsLoading(true);
  const customer = await customerMethods.withdraw(formData);
  setIsLoading(false);
  return customer;
}
const withdrawWallet = useCustomerCreateEffect<WithdrawReq>(handlePostWithdraw);

const handlePostDeposit = async (formData: WithdrawReq) => {
  setIsLoading(true);
  const customer = await customerMethods.deposit(formData);
  setIsLoading(false);
  return customer;
}
const depositWallet = useCustomerCreateEffect<WithdrawReq>(handlePostDeposit);

export const customerStore = () => {
  return {
    customer,
    setNewCustomer,
    isCustomerLoading,
    updateCustomerFromApi,
    withdrawWallet,
    depositWallet,
  };
};