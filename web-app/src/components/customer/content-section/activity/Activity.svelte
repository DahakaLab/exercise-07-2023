<script lang="ts">
	import type { Activity } from "$types/api/customer";

  export let activity: Activity;
</script>

<div class="{$$restProps.class || ''} w-full">
  <p class="text-lg">{activity.activity_test}</p>
  <p class="text-grey-400">{activity.datetime}</p>
</div>