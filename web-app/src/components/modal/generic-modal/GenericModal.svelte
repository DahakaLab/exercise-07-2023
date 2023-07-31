<script lang="ts">
	export let title = 'Modal';
</script>

<div>
	<div class="p-8 pb-4">
		<h2 class="text-3xl mb-4">{title}</h2>
	</div>
	<div class="p-8 pt-0">
    <slot/>
	</div>
</div>
