import { customerMethods } from "$api-methods/customer";
import type { Customer } from "$types/api/customer";
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

const handleResponse = async () => {
  setIsLoading(true);
  const customer = await customerMethods.getData();
  setIsLoading(false);
  return customer;
}

const updateCustomerFromApi = useCustomerCreateEffect<void>(handleResponse);

export const customerStore = () => {
  return {
    customer,
    setNewCustomer,
    isCustomerLoading,
    updateCustomerFromApi,
  };
};