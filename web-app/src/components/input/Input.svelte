<script lang="ts">
  import type { Validator } from "svelte-use-form";
  import { validators } from "svelte-use-form";

	export let validator: Validator[];
</script>

<input
	{...$$restProps}
	class="{$$restProps.class || ''} border-solid border-2 px-2 focus:border-blue rounded"
	use:validators={validator}
	on:change
	on:input
/>
