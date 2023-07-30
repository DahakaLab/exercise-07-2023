import type { Wallet } from "$types/api/customer";

const icon = {
  EUR: "€",
}

export const getAmountFromWallet = ({ currency, balance }: Wallet) => `${icon[currency] || ''} ${balance.toFixed(2)}`;
