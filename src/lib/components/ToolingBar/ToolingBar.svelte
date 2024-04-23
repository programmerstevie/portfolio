<script lang="ts">
	import Container from '../Container.svelte';
	import { mono_logo } from '$lib/components/TechLogos';

	type Tool = {
		src: string;
		label: string;
	};

	const tools: Tool[] = Object.entries(mono_logo).map(([label, src]) => ({ src, label }));
</script>

<div class="bar">
	<Container>
		<div class="tools">
			{#each tools as tool}
				<div class="tool_with_name">
					<div class="tool">
						<img src={tool.src} alt={tool.label} />
					</div>
					<div class="tool_label">{tool.label}</div>
				</div>
			{/each}
		</div>
	</Container>
</div>

<style>
	.bar {
		background: var(--color-pf-primary-2);
		height: 111px;
	}

	.tools {
		display: flex;
		justify-content: space-between;
		height: 100%;
		align-items: center;
	}

	.tool_with_name {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 65px;
	}

	.tool_label {
		color: var(--color-pf-white);
	}

	.tool {
		height: 39px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.tool:hover {
		cursor: default;
		animation-name: bloop;
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
	}

	img {
		max-width: 39px;
		max-height: 39px;
	}
</style>
