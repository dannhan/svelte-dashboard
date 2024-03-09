<script lang="ts">
	import { cn } from '$lib/utils';
	import { Badge } from '$lib/components/ui/badge';

	export let status: string;
</script>

<Badge variant={status === 'Finish' ? 'secondary' : 'tertiary'} class="rounded-full ">
	{status}
</Badge>
