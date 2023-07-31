<script lang="ts">
	import type { Note } from "$types/api/customer";

  export let note: Note;
</script>

<div class="{$$restProps.class || ''} w-full">
  <p class="text-lg">{note.note_text}</p>
  <p class="text-grey-400">{note.datetime}</p>
</div>