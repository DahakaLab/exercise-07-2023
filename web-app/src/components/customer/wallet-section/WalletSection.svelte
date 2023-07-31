<script lang="ts">
	import type { Customer } from "$types/api/customer";

	import Wallet from "./wallet/Wallet.svelte";
	import TradingAccount from "./trading-account/TradingAccount.svelte";

  export let customer: Customer;
</script>

<div class="flex flex-col items-center">
	<Wallet customer={customer} class="mb-4" ></Wallet>
	<h2 class="text-3xl mb-4">Trading accounts</h2>
	<div class="w-full">
		{#each customer.trading_accounts as tradingAccount}
			<TradingAccount {tradingAccount} class="mb-4 last:mb-0"/>
		{/each}
	</div>
</div>