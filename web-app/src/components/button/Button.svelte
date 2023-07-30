<button
	on:click
	class="{$$restProps.class ||
		''} block border-solid border-1 shadow-md text-white rounded-full bg-blue hover:bg-blue-dark ease-in duration-100 px-4 button h-9"
>
	<slot />
</button>
