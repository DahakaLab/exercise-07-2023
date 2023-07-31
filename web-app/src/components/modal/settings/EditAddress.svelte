<script lang="ts">
  import type { GenericSettingsInput } from './types';
	import GenericSettings from "./GenericSettings.svelte";

  const inputs: GenericSettingsInput[] = [
    {
      name: "country",
      placeholder: "Country",
    },
    {
      name: "city",
      placeholder: "City",
    },
    {
      name: "address",
      placeholder: "Address",
    },
    {
      name: "postcode",
      placeholder: "Post code",
    },
  ]
</script>
<GenericSettings title="Edit address" {inputs} />