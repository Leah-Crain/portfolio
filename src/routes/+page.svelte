<script lang="ts">
	import { portfolios } from "#lib/portfolios.ts";
</script>

<h1 class="mx-auto">Hello there! Are you here for...</h1>
<main>
	<ul>
		{#each Object.entries(portfolios) as portfolio (portfolio[0])}

		<li>
			{portfolio[1].friendlyName}
		</li>

		{/each}
	</ul>
</main>
