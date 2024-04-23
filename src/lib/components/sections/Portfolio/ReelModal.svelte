<script lang="ts">
	import scroll_button_left_icon from '$lib/assets/icons/general/svg/Left-Button.svg';
	import scroll_button_right_icon from '$lib/assets/icons/general/svg/Right-Button.svg';
	import { color_logo } from '$lib/components/TechLogos';

	import type { PortfolioProjectData, Reel_Element } from './Projects/resources/types';
	export let isOpen: boolean = true;
	export let projectData: PortfolioProjectData | null;

	export let onClose: () => void;

	let numSlides: number;
	let selectedElem: Reel_Element | null;
	let selectedSlide: number = 0;

	$: {
		if (projectData === null) {
			numSlides = -1;
			selectedSlide = -1;
			selectedElem = null;
		}
	}

	$: {
		if (projectData !== null) {
			numSlides = projectData.reel.elements.length;
			selectedSlide = 0;
		}
	}

	$: {
		if (projectData !== null) {
			selectedElem = projectData.reel.elements[selectedSlide];
		}
	}
	let dialogElem: HTMLDialogElement | undefined = undefined;

	$: {
		if (isOpen) {
			dialogElem?.showModal();
		} else {
			dialogElem?.close();
		}
	}
</script>

{#if projectData !== null && selectedElem !== null}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<dialog
		bind:this={dialogElem}
		on:close={() => {
			dialogElem?.close();
			onClose();
		}}
		on:click={(event) => {
			if (dialogElem === undefined) return;
			var rect = dialogElem.getBoundingClientRect();
			var isInDialog =
				rect.top <= event.clientY &&
				event.clientY <= rect.top + rect.height &&
				rect.left <= event.clientX &&
				event.clientX <= rect.left + rect.width;
			if (!isInDialog) {
				dialogElem.close();
			}
		}}
	>
		<div class="main-box">
			<section class="media-section">
				<div class="media-box">
					{#if selectedElem.type === 'image'}
						<img class="media image" src={selectedElem.src} alt="" />
					{:else if selectedElem.type === 'video'}
						<video class="media" controls>
							<source src={selectedElem.src} />
							<track kind="captions" />
						</video>
					{:else if selectedElem.type === 'gif'}
						<img class="media gif" src={selectedElem.src} alt="" />
					{:else}
						<div>nothing</div>
					{/if}
				</div>
				<button
					class="scroll-button left"
					on:click={() => {
						selectedSlide = Math.max(0, selectedSlide - 1);
					}}
					style="opacity: {selectedSlide === 0 ? '50%' : '100%'}; cursor: {selectedSlide === 0
						? 'default'
						: 'pointer'}"
				>
					<img src={scroll_button_left_icon} alt="" />
				</button>
				<button
					class="scroll-button right"
					on:click={() => {
						selectedSlide = Math.min(numSlides - 1, selectedSlide + 1);
					}}
					style="opacity: {selectedSlide === numSlides - 1
						? '50%'
						: '100%'}; cursor: {selectedSlide === numSlides - 1 ? 'default' : 'pointer'}"
				>
					<img src={scroll_button_right_icon} alt="" />
				</button>
			</section>
			<section class="text-section">
				<header>{projectData.title}</header>
				{#each projectData.reel.description.split('\n') as paragraph}
					<p>{paragraph}</p>
				{/each}
				<footer>
					<div class="tech-stack">
						<header>Tech Stack</header>
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
	</dialog>
{/if}

<style lang="scss">
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	::backdrop {
		background-color: #000000;
		opacity: 0.3;
	}
	dialog {
		width: 1296px;
		height: 878px;
		border-radius: 43px;
		padding: 27px;
		box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px 0;
		background-color: var(--color-pf-white);
		border: none;

		.main-box {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;

			.media-section {
				position: relative;
				width: 735px;
				height: 819px;
				border-radius: 19px;
				overflow: hidden;
				box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px 0;

				.media-box {
					width: 100%;
					height: 100%;
					.media {
						width: 100%;
						height: 100%;
						object-fit: contain;
						background-color: var(--color-pf-primary-2);
					}
					// img.image {
					// }
					// img.gif {
					// }
					// video {
					// }
				}

				.scroll-button {
					position: absolute;
					border-radius: 100%;
					width: 56px;
					height: 55px;
					box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px 0;

					&.left {
						top: calc(50% - 28px);
						left: 39px;
					}
					&.right {
						top: calc(50% - 28px);
						right: 39px;
					}
				}
			}
			.text-section {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-left: 32px;
				width: 473px;
				height: 685px;
				& > header {
					margin-top: 32px;
					text-align: center;
					font-size: 32px;
					color: black;
					font-weight: 700;
				}
				p {
					width: 447px;
					text-align: center;
					font-size: 32px;
					color: var(--color-pf-gray);
					font-weight: 500;
					margin-top: 64px;
					line-height: 141%;
				}

				p:first-child {
					margin-top: 0;
				}

				footer {
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					justify-content: end;
					.tech-stack {
						width: 447px;
						height: 83px;
						background-color: var(--color-pf-light-gray);
						display: flex;
						align-items: center;
						border-radius: 3px;
						padding-left: 22px;
						padding-right: 22px;
						box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px 0;
						justify-content: space-between;
						header {
							font-size: 32px;
							color: black;
							font-weight: 700;
							// background-color: blue;
						}
						ul {
							display: flex;
							justify-content: space-around;
							width: 50%;
						}
					}
				}
			}
		}
	}
</style>
