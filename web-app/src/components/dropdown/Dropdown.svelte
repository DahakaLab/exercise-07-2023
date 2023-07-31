<script lang="ts">
	import { fade } from 'svelte/transition';

	import type { DropdownButtons } from './types';
	import Button from '$components/button/Button.svelte';
	import { clickOutside } from '$utils/clickOutside';

	let isOpen = false;

	const toggle = () => (isOpen = !isOpen);

	export let btnText = '';
	export let drpBtns: DropdownButtons[] = [];

</script>

<div class="relative">
	<button on:click={toggle} class="hover:text-blue">{btnText}</button>
	{#if isOpen}
		<div
      use:clickOutside
      on:click_outside={toggle}
			transition:fade={{ delay: 0, duration: 100 }}
			class="dropdown flex flex-col justify-items-stretch rounded"
		>
			{#each drpBtns as btn}
				<Button
					on:click={btn.handler}
					class="rounded-none border-1 shadow-none first:rounded-t-lg last:rounded-b-lg text-left whitespace-nowrap"
					type="secondary">{btn.text}</Button
				>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown {
		position: absolute;
		top: 100%;
		right: 0;
		width: auto;
	}
</style>
