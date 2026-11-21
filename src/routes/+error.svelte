<script lang="ts">
	import { page } from '$app/state';
    import { resolve } from '$app/paths';

</script>

<h1>{page.status}: {page.error?.message}</h1>

{#if page.status === 404}
    <p>Something sent you to the wrong place! Nothing to worry about, however -- you can always go <a class='underline text-blue-500' href={resolve('/')}>home.</a></p>
{/if}