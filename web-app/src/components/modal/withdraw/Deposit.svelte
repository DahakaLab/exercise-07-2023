<script lang="ts">
  import { useForm, Hint, minLength, number, required } from "svelte-use-form";

  import Input from "$components/input/Input.svelte";
	import Button from '$components/button/Button.svelte';
	import { customerStore } from "$store/customerStore";
	import { modalStore } from "$store/modalStore";

  const { depositWallet } = customerStore();
  const { closeModal } = modalStore();

  const form = useForm({
    gateway: {},
    amount: {},
  });

  const submit = () => {
    const { amount, gateway } = $form.values;
    depositWallet({
      amount: parseFloat(amount),
      gateway,
    });
    closeModal();
  }
</script>

<div>
  <div class="p-8 pb-4">
    <h2 class="text-3xl mb-4">Deposit</h2>
  </div>
  <div class="p-8 pt-0">
    <form use:form class="flex flex-col" on:submit={submit}>
      <Hint for="gateway" on="minLength" let:value class="mb-4 text-red-500">
        The field requires at least {value} characters.
      </Hint>
      <Hint for="gateway" on="required" class="mb-4 text-red-500">
        The field is required.
      </Hint>
      <Input name="gateway" placeholder="Gateway" type="text" validator={[required, minLength(3)]} class="mb-4"/>
      
      <Hint for="amount" on="required" class="mb-4 text-red-500">
        The field is required.
      </Hint>
      <Input name="amount" placeholder="Amount" type="number" validator={[required, number]} class="mb-4"/>
    
      <Button disabled={!$form.valid}>Submit</Button>
    </form>
  </div>
</div>