<script lang="ts">
	import type { TagType } from './types';

	export let type: TagType = 'success';

  const colors: Record<TagType, string> = {
    error: "bg-red-500",
    info: "bg-blue",
    success: "bg-green-500",
    warning: "bg-yellow-500",
  }

  $: bgColor = colors[type];
</script>

<div class="text-xs content-center text-white rounded-full {bgColor || ''} ease-in duration-100 px-4 h-6">
	<slot />
</div>
