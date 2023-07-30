<script lang="ts">
	import { onMount } from 'svelte';

	import { customerStore } from '$store/customerStore';
	import WalletSection from '$components/customer/wallet-section/WalletSection.svelte';
	import ContentSection from '$components/customer/content-section/ContentSection.svelte';

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
				<ContentSection customer={$customer} />
			{/if}
		</section>
		<section slot="rightSection">
			{#if $customer}
				<WalletSection customer={$customer}/>
			{/if}
		</section>
	
</CustomLayout>
