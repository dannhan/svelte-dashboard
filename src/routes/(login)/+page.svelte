<script lang="ts">
  import { Card, CardContent } from '$lib/components/ui/card';
  import LoginForm from '$lib/components/forms/login-form.svelte';

  export let data;
</script>

<main class="flex min-h-[100dvh] flex-col items-center justify-center">
  <Card class="w-[400px] max-w-full max-sm:border-none max-sm:bg-background max-sm:shadow-none">
    <CardContent class="p-6">
      <LoginForm data={data.form} />
    </CardContent>
  </Card>
</main>
