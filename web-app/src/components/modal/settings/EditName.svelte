<script lang="ts">
  import type { GenericSettingsInput } from './types';
	import GenericSettings from "./GenericSettings.svelte";

  const inputs: GenericSettingsInput[] = [
    {
      name: "firstName",
      placeholder: "First Name",
    },
    {
      name: "secondName",
      placeholder: "Second Name",
    }
  ]
</script>
<GenericSettings title="Edit name" {inputs} />