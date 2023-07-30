<script lang="ts">
	import type { Customer } from '$types/api/customer';
	import { getAmountFromWallet } from '$adapters/getAmountFromWallet';
	import Button from '$components/button/Button.svelte';
	import Tag from '$components/tag/Tag.svelte';
	import { getAccountStatusFromCustomer } from '$adapters/getAccountStatusFromCustomer';
	import { getPhoneFormatted } from '$adapters/getPhoneFormatted';
	import { modalStore } from '$store/modalStore';

	export let customer: Customer;

	const { openDepositModal, openWithdrawModal } = modalStore();

	$: amount = getAmountFromWallet(customer.wallet);
	$: clientTag = getAccountStatusFromCustomer(customer.status);

	$: clientID = `#${customer.client_id}`;
	$: clientPhone = getPhoneFormatted(customer.phone);
	$: clientFullName = `${customer.lastname} ${customer.firstname}`;
	$: clientAddress = `${customer.country}, ${customer.city}, ${customer.address1}, ${customer.postcode}`;

	const deposit = () => {
		openDepositModal();
	};

	const withdraw = () => {
		openWithdrawModal();
	};
</script>

<div class="border-solid border-2 rounded shadow-md">
	<div class="border-b-2 p-4 flex">
		<div class="pr-2 flex-[1_1_50%]">
			<h2 class="text-lg">Wallet</h2>
			<span class="mt-2 text-2xl font-bold">{amount}</span>
			<Button on:click={deposit} class="mt-2 w-32"><span>Deposit</span></Button>
		</div>
		<div class="flex flex-col items-end justify-between pl-2 flex-[1_1_50%]">
			<Tag type={clientTag.type}>
				<span>{clientTag.status}</span>
			</Tag>
			<Button on:click={withdraw} class="mt-2 w-32"><span>Withdraw</span></Button>
		</div>
	</div>
	<div class="p-4">
		<p>{clientID}</p>
		<p>{clientPhone}</p>
		<p class="font-bold">{clientFullName}</p>
		<p>{clientAddress}</p>
		<p>
			Client invited by affiliate <span class="font-bold">{customer.invited_by_affiliate}</span>
		</p>
	</div>
</div>
