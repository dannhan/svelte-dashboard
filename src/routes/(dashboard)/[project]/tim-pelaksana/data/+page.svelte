<script lang="ts">
  import { ModeToggle } from '$lib/components';
  import TeamForm from '$lib/components/forms/team-form.svelte';
</script>

<div class="mb-4 flex items-end">
  <h1 class="text-xl font-semibold">Tim Pelaksana</h1>
  <ModeToggle />
</div>

<TeamForm />
