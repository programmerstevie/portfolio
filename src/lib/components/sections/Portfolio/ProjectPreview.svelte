<script lang="ts">
	import type { PortfolioProjectData } from './Projects/resources/types';
	export let projectData: PortfolioProjectData;
	import { color_logo } from '$lib/components/TechLogos';

	export let onView: (project: PortfolioProjectData) => void = () => {
		/* do nothing */
	};

	function viewButtonAction() {
		onView(projectData);
	}

	$: project_coming_soon = projectData.status === 'coming_soon';
</script>

<div class="main-box">
	<div class="box" style="opacity: {project_coming_soon ? '50%' : '100%'};">
		<img class="image" src={projectData.preview.img_src} alt="" />
		<section class="description-section">
			<header>
				{projectData.title}
			</header>
			<p>
				{projectData.preview.description}
			</p>
			<footer>
				<button
					class="view-button"
					on:click={project_coming_soon
						? () => {
								/** DO NOTHING */
							}
						: viewButtonAction}>VIEW</button
				>
				<div class="tech-stack">
					<ul>
						{#each projectData.tech_stack as stackElem}
							<li>
								<img src={color_logo[stackElem]} alt={stackElem} />
							</li>
						{/each}
					</ul>
				</div>
			</footer>
		</section>
	</div>

	<div class="overlay" style="visibility: {project_coming_soon ? 'visible' : 'hidden'};">
		COMING SOON!
	</div>
</div>

<style lang="scss">
	.main-box {
		position: relative;
		border-radius: 24px;

		.box {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: inherit;

			width: 1296px;
			height: 625px;

			background-color: var(--color-pf-white);
			box-shadow: rgba(0, 0, 0, 0.25) 0 0 25px -3px;
		}

		.image {
			object-fit: cover;
			object-position: 0px;
			width: 735px;
			height: 569px;
			border-radius: 26px;
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
			background-color: #e6f0fd;
		}

		.description-section {
			display: flex;
			flex-direction: column;

			text-align: center;
			margin-left: 32px;
			height: 567px;
			width: 473px;

			header {
				font-weight: 700;
				color: #000;
				font-size: 32px;
			}

			p {
				font-weight: 500;
				color: var(--color-pf-gray);
				font-size: 32px;
				line-height: 141%;
				margin-top: 38px;
				flex-grow: 1;
			}

			footer {
				display: flex;
				padding-left: 12px;
				padding-right: 12px;
				justify-content: space-between;
				.view-button {
					width: 209px;
					height: 83px;
					border-radius: 3px;
					background-color: var(--color-pf-primary);
					box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 32px;
					color: var(--color-pf-white);
					font-weight: 700;
				}

				.tech-stack {
					width: 209px;
					height: 83px;
					border-radius: 3px;
					background-color: var(--color-pf-light-gray);
					box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

					ul {
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: space-evenly;
					}
				}
			}
		}

		.overlay {
			position: absolute;
			top: 0%;
			left: 0%;
			width: 100%;
			height: 100%;
			border-radius: inherit;
			background-color: #d9d9d980;
			display: flex;
			align-items: center;
			justify-content: center;

			color: var(--color-pf-primary-2);
			font-size: 96px;
			font-weight: 500;
			line-height: 141%;
		}
	}
</style>
