<script lang="ts">
	import type { ButtonType } from './types';

	export let type: ButtonType = 'primary';

	const buttonBg: Record<ButtonType, string> = {
		primary: 'bg-blue hover:bg-blue-dark text-white',
		secondary: 'bg-white hover:bg-blue text-black hover:text-white'
	};

	$: classModified = buttonBg[type];
</script>

<button
	on:click
	class="{$$restProps.class ||
		''}  {classModified} block border-solid border-2 shadow-md rounded-full ease-in duration-100 px-4 button h-9"
>
	<slot />
</button>
