<script lang="ts">
	import type { Customer } from '$types/api/customer';
  import type { ButtonType } from "$components/button/types";
	import Button from "$components/button/Button.svelte";

  import type { SectionType } from './types';
	import Payments from "./payments/Payments.svelte";
	import Note from './note/Note.svelte';
	import Activity from './activity/Activity.svelte';

	export let customer: Customer;

  let sectionSelected: SectionType = 'payments'

  const setSection = (value: SectionType) => {
    sectionSelected = value;
  }

  $: checkActiveButton = (value: SectionType): ButtonType => value === sectionSelected ? 'primary' : 'secondary';

</script>

<div>
  <div class="flex pb-4">
    <Button on:click={() => setSection('payments')} type={checkActiveButton('payments')}>Payments</Button>
    <Button on:click={() => setSection('notes')} type={checkActiveButton('notes')} class="ml-4">Notes</Button>
    <Button on:click={() => setSection('activity')} type={checkActiveButton('activity')} class="ml-4">Activity</Button>
  </div>
  {#if sectionSelected === 'payments'}
    <h2 class="text-3xl mb-4">Payments</h2>
    <Payments payments={customer.payments} />
  {/if}
  {#if sectionSelected === 'notes'}
    <h2 class="text-3xl mb-4">Notes</h2>
    <div class="w-full">
      {#each customer.notes as note}
        <Note {note} class="mb-4 last:mb-0" />
      {/each}
    </div>
  {/if}
  {#if sectionSelected === 'activity'}
    <h2 class="text-3xl mb-4">Activity</h2>
    <div class="w-full">
      {#each customer.activity as item}
        <Activity activity={item} class="mb-4 last:mb-0" />
      {/each}
    </div>
  {/if}
</div>
