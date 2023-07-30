import type { ModalType } from "$components/modal/types";
import { storeFactory } from "$utils/storeFactory"

const { useStore, createStoreEvent } = storeFactory<ModalType | null>(null)

const typeModal = useStore();
const openDepositModal = createStoreEvent<void>(() => "deposit");
const openWithdrawModal = createStoreEvent<void>(() => "withdraw");
const closeModal = createStoreEvent<void>(() => null);

export const modalStore = () => {
  return {
    typeModal,
    openDepositModal,
    openWithdrawModal,
    closeModal,
  };
};