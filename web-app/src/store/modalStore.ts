import type { ModalType } from "$components/modal/types";
import { storeFactory } from "$utils/storeFactory"

const { useStore, createStoreEvent } = storeFactory<ModalType | null>(null)

const typeModal = useStore();
const openDepositModal = createStoreEvent<void>(() => "deposit");
const openWithdrawModal = createStoreEvent<void>(() => "withdraw");
const openEditPhoneModal = createStoreEvent<void>(() => "editPhone");
const openEditNameModal = createStoreEvent<void>(() => "editName");
const openEditAddressModal = createStoreEvent<void>(() => "editAddress");
const closeModal = createStoreEvent<void>(() => null);

export const modalStore = () => {
  return {
    typeModal,
    openDepositModal,
    openWithdrawModal,
    openEditPhoneModal,
    openEditNameModal,
    openEditAddressModal,
    closeModal,
  };
};