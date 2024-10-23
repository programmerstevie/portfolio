<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	import sparkle from '$lib/assets/icons/general/svg/sparkle.svg';
	import ProjectPreview from './ProjectPreview.svelte';

	import projectData from './Projects';
	import type { PortfolioProjectData, ProjectName } from './Projects/resources/types';
	import ReelModal from './ReelModal.svelte';

	const projectOrder: ProjectName[] = ['DiligentlyAI', 'ARCHIVS', 'HALite', 'Tasque'];

	let reelModalOpen = false;
	let reelModalProjectData: PortfolioProjectData | null = null;

	function openReelModal(proj: PortfolioProjectData) {
		reelModalOpen = true;
		reelModalProjectData = proj;
	}
	function closeReelModal() {
		reelModalOpen = false;
		reelModalProjectData = null;
	}
</script>

<div class="main-box">
	<Container>
		<header id="PORTFOLIO">
			<h2 class="pf-header">My Portfolio <img src={sparkle} alt="" /></h2>
		</header>
		<section class="entries">
			<ul>
				{#each projectOrder.map((x) => projectData[x]) as project}
					<li><ProjectPreview projectData={project} onView={openReelModal} /></li>
				{/each}
			</ul>
		</section>
	</Container>
</div>
<ReelModal isOpen={reelModalOpen} projectData={reelModalProjectData} onClose={closeReelModal} />

<style lang="scss">
	.main-box {
		background-color: var(--color-pf-white);
	}
	header {
		padding-top: 99px;
	}
	.pf-header {
		font-weight: 700;
		font-size: 48px;
		color: var(--color-pf-primary);
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			margin-left: 34px;
			width: 69px;
			height: 69px;
		}
	}

	.entries {
		margin-top: 95px;

		ul {
			padding-bottom: 46px;
			li:not(:last-child) {
				margin-bottom: 64px;
			}
		}
	}
</style>
