<script lang="ts">
	import { page } from '$app/state';
    import { resolve } from '$app/paths';
	import { contactEmail } from '#lib/constants.ts';

</script>

<h1>{page.status}: {page.error?.message}</h1>

{#if page.status === 404}
    <p>Something sent you to the wrong place! Nothing to worry about, however -- you can always go <a class='underline text-blue-500' href={resolve('/')}>home.</a></p>
{:else if page.status === 500}
    <p>Oh dear! Something has gone really quite wrong! If you're seeing this, please <a href={`mailto://${contactEmail}`}>contact me</a>, tell me what happened, and I'll fix it as soon as I can.</p>
{/if}