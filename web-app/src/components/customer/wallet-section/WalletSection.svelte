<script lang="ts">
	import type { Customer } from "$types/api/customer";

	import Wallet from "../wallet/Wallet.svelte";

  export let customer: Customer;
</script>

<Wallet customer={customer} ></Wallet>