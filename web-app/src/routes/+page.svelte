<script lang="ts">
	import { onMount } from 'svelte';

	import { customerStore } from '$store/customerStore';
	import WalletSection from '$components/customer/wallet-section/WalletSection.svelte';

	import CustomLayout from './CustomLayout.svelte';

	const { customer, updateCustomerFromApi, isCustomerLoading } = customerStore();

	onMount(() => {
		updateCustomerFromApi();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<CustomLayout isLoading={$isCustomerLoading}>
		<section slot="main">
			{#if $customer}
				<span>{$customer?.phone}</span>
			{/if}
		</section>
		<section slot="rightSection">
			{#if $customer}
				<WalletSection customer={$customer}/>
			{/if}
		</section>
	
</CustomLayout>
