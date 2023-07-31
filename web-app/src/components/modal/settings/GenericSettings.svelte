<script lang="ts">
  import { useForm, Hint, required } from "svelte-use-form";

  import Input from "$components/input/Input.svelte";
	import Button from '$components/button/Button.svelte';
	import { modalStore } from "$store/modalStore";

	import type { GenericSettingsInput, GenericSettingsParams } from "./types";
	import GenericModal from "../generic-modal/GenericModal.svelte";

  const { closeModal } = modalStore();

  export let title: string;
  export let formParams: GenericSettingsParams = {};
  export let inputs: GenericSettingsInput[] = [];

  const form = useForm(formParams);

  const submit = () => {
    console.log($form.values)
    closeModal();
  }
</script>

<GenericModal {title}>
  <form use:form class="flex flex-col" on:submit|preventDefault={submit}>
    {#each inputs as item}
       <Hint for={item.name} on="required" class="mb-4 text-red-500">
        The field is required.
      </Hint>
      <Input name={item.name} placeholder={item.placeholder} type="text" validator={[required]} class="mb-4"/>
    {/each}
  
    <Button disabled={!$form.valid}>Submit</Button>
  </form>
</GenericModal>
