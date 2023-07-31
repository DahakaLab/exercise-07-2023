<script lang="ts">
  import type { GenericSettingsInput } from './types';
	import GenericSettings from "./GenericSettings.svelte";

  const inputs: GenericSettingsInput[] = [
    {
      name: "phone",
      placeholder: "Phone",
    }
  ]
</script>
<GenericSettings title="Edit phone" {inputs} />