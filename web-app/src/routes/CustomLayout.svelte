<script lang="ts">
	import { Svroller } from 'svrollbar';

	import '../app.css';
	import Loader from '$components/loader/Loader.svelte';
	import Modal from '$components/modal/Modal.svelte';

	export let isLoading: boolean = false;
</script>

<main class="app w-screen min-h-screen max-h-screen">
	{#if isLoading}
		<div
			class="static top-0 left-0 w-screen h-screen content-center"
		>
			<Loader class="" />
		</div>
	{:else}
		<div class="w-screen min-h-screen max-h-screen flex justify-center">
			<div class="bg-white flex w-[1280px] h-screen px-8 py-16">
				<div class="w-2/3 pe-8 max-h-screen overflow-y-auto">
					<Svroller width="100%" height="100%">
						<slot name="main" />
					</Svroller>
				</div>
				<div class="w-1/3 max-h-screen overflow-y-auto">
					<Svroller width="100%" height="100%">
						<slot name="rightSection" />
					</Svroller>
				</div>
			</div>
			<Modal/>
		</div>
	{/if}
</main>

<style style="postcss">
</style>
