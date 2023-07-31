<script lang="ts">
  import type { TradingAccount } from '$types/api/customer';
  import type { TagType } from "$components/tag/types";
	import { getAmountFromWallet } from '$adapters/getAmountFromWallet';
	import Tag from '$components/tag/Tag.svelte';

	export let tradingAccount: TradingAccount;

  $: amount = getAmountFromWallet({ currency: "EUR", balance: tradingAccount.balance })
  $: accountTagType = (): TagType => tradingAccount.accounty_type === 'demo' ? 'warning' : 'info';
</script>

<div class="{$$restProps.class || ''} border-solid border-2 shadow-md w-full p-4">
  <p>Token tracker: <span class="font-bold">{tradingAccount.taid}</span></p>
  <p>Platform: ${tradingAccount.platform}</p>
  <div class="flex justify-between items-end">
    <span class="mt-2 text-xl">{amount}</span>
    <Tag type={accountTagType()}>{tradingAccount.accounty_type}</Tag>
  </div>
</div>
