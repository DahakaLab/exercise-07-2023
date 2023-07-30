<script lang="ts">
	import type { Payments } from '$types/api/customer';
	import { getAmountFromWallet } from '$adapters/getAmountFromWallet';

	export let payments: Payments[];

	$: items = payments.length;
</script>

<div class="border-blue">
	<table class="w-full text-left table mb-4">
		<tr>
			<th>PID</th>
			<th>Date</th>
			<th>Gateway</th>
			<th>Type</th>
			<th>Status</th>
			<th>Amount</th>
		</tr>
		{#each payments as payment}
			<tr>
				<td>{payment.pid}</td>
				<td>{payment.datetime}</td>
				<td>{payment.gateway}</td>
				<td>{payment.type}</td>
				<td>{payment.status}</td>
				<td>{getAmountFromWallet({ currency: 'EUR', balance: payment.amount })}</td>
			</tr>
		{/each}
	</table>
	<p>Count: <span>{items}</span></p>
</div>

<style lang="scss">
	.table {
		th {
			padding: 4px;
			border-bottom-width: 1px;
			border-color: theme('colors.blue');
		}
		td {
			padding: 4px;
			border-bottom-width: 1px;
		}
	}
</style>
