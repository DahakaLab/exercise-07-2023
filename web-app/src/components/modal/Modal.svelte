<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { fade } from 'svelte/transition';

	import type { ModalType } from "./types";
	import { modalStore } from '$store/modalStore';
	import CrossSVG from '$lib/svg/cross.svg';

	import Withdraw from './withdraw/Deposit.svelte';
	import Deposit from './withdraw/Deposit.svelte';

	const { typeModal, closeModal } = modalStore();
	const handleCloseModal = () => closeModal();

	const components: Record<ModalType, ComponentType> = {
		deposit: Deposit,
		withdraw: Withdraw,
	}

	$: component = $typeModal && components[$typeModal];
</script>

{#if component && $typeModal}
	<div
		transition:fade={{ delay: 0, duration: 300 }}
		class="fixed t0 l0 w-screen h-screen content center"
	>
		<div class="w-full h-full bg-blue opacity-50" />
		<div class="modal bg-white border-2 rounded shadow-md">
			<button
				class="absolute top-2 right-2 w-6 h-6 hover:fill-blue ease-in duration-100 p-1"
				on:click={handleCloseModal}
			>
				<CrossSVG class="w-full h-full" />
			</button>
			<svelte:component this={component} />
		</div>
	</div>
{/if}

<style lang="scss">
	.modal {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 600px;
		transform: translate(-50%, -50%);
	}
</style>
