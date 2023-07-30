<script lang="ts">
	import type { ButtonType } from './types';

	export let type: ButtonType = 'primary';
	export let disabled = false;

	const buttonBg: Record<ButtonType, string> = {
		primary: 'bg-blue hover:bg-blue-dark text-white',
		secondary: 'bg-white hover:bg-blue text-black hover:text-white'
	};

	const disabledBg = 'bg-grey'

	$: classModified = disabled ? disabledBg : buttonBg[type];
</script>

<button
	on:click
	disabled={disabled}
	class="{$$restProps.class ||
		''}  {classModified} block border-solid border-2 shadow-md rounded-full ease-in duration-100 px-4 button h-9"
>
	<slot />
</button>
