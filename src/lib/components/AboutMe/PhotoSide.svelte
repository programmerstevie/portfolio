<script>
	import puzzleIcon from '$lib/assets/icons/general/svg/puzzle.svg';
	import huggingFaceIcon from '$lib/assets/icons/general/svg/huggingface.svg';

	import stevieSmallPhoto from '$lib/assets/steven/portrait-small.png';
	import stevieLargePhoto from '$lib/assets/steven/portrait-large.png';
	// import { onMount } from 'svelte';

	/**
	 * @type {HTMLDivElement}
	 */
	let photoContainer;
	/**
	 * @type {HTMLElement | undefined}
	 */
	export let cursorDetectionElement = undefined;

	export let angleRange = 20;

	$: {
		(() => {
			if (cursorDetectionElement === undefined) return;

			cursorDetectionElement.addEventListener('mousemove', (e) => {
				if (photoContainer === undefined) return;
				rotateElement(e, photoContainer);
			});

			cursorDetectionElement.addEventListener('mouseleave', (e) => {
				if (photoContainer === undefined) return;
				photoContainer.style.setProperty('--rotateX', '0deg');
				photoContainer.style.setProperty('--rotateY', '0deg');
			});
		})();
	}

	/**
	 * @param {{ clientX: any; clientY: any; }} event
	 * @param {any} element
	 */
	function rotateElement(event, element) {
		// get mouse position
		const x = event.clientX;
		const y = event.clientY;
		// console.log(x, y);

		if (!cursorDetectionElement) return;
		// find the middle
		const middleX = cursorDetectionElement.offsetLeft + cursorDetectionElement.offsetWidth / 2;
		const middleY =
			cursorDetectionElement.offsetTop + cursorDetectionElement.offsetHeight / 2 - window.scrollY;
		// console.log(x, y, middleX, middleY);

		// get offset from middle
		const offsetXAngle = ((x - middleX) / cursorDetectionElement.offsetWidth) * angleRange;
		const offsetYAngle = ((y - middleY) / cursorDetectionElement.offsetHeight) * angleRange;
		// console.log(offsetXAngle, offsetYAngle);

		element.style.setProperty('--rotateX', -1 * offsetYAngle + 'deg');
		element.style.setProperty('--rotateY', offsetXAngle + 'deg');
	}
</script>

<!-- <div class="main" bind:this={cursorDetectionElement}> -->
<div class="photo-container" bind:this={photoContainer}>
	<div class="stevie-small-photo">
		<img src={stevieSmallPhoto} alt="Me and my dog." />
	</div>
	<div class="puzzle-icon">
		<img src={puzzleIcon} alt="" />
	</div>
	<div class="hugging-face-icon">
		<img src={huggingFaceIcon} alt="" />
	</div>
	<div class="stevie-large-photo">
		<img src={stevieLargePhoto} alt="Me programming at my desk." />
	</div>
</div>

<!-- </div> -->

<style lang="scss">
	// .main {
	//   background-color: red;
	//   //! FIX THE FACT THAT THE INTERACTIVE PART DOESNT ACTUALLY FIT INSIDE ME
	// }
	.photo-container {
		width: 519px;
		height: 671px;
		border-radius: 39px;
		position: relative;
		transform-style: preserve-3d;
		transform: perspective(5000px) rotateY(var(--rotateY)) rotateX(var(--rotateX));
		transition-property: transform;
		transition-duration: 0.2s;
		transition-timing-function: ease-out;

		&::after {
			content: '';
			position: absolute;
			border-radius: inherit;
		}

		&::after {
			inset: -25px;
			background: linear-gradient(-45deg, var(--color-pf-light-gray), var(--color-pf-white));
			transform: translateZ(-50px);
			filter: opacity(0);
		}

		& > * {
			position: absolute;
		}

		.stevie-small-photo {
			left: 0px;
			top: 0px;
			transform: translateZ(-10px);
			transform-style: preserve-3d;

			&::before {
				position: absolute;
				content: '';
				inset: 0.75rem;
				// inset: 0rem;
				background: black;
				transform: translateZ(-39px);
				filter: blur(15px);
				opacity: 0.5;
				z-index: -1;
				border-radius: 30px;
			}
		}

		.puzzle-icon {
			left: 358px;
			top: 83px;
			width: 89px;
			height: 89px;
			transform-style: preserve-3d;
			transform: translateZ(20px);

			&::before {
				position: absolute;
				content: '';
				inset: 1.4rem;
				transform: translateZ(-69px) rotate(-13deg);
				filter: blur(15px);
				opacity: 0.7;
				z-index: -1;
				border: black solid 6px;
				border-radius: 10px;
			}
		}

		.hugging-face-icon {
			width: 115px;
			height: 117px;
			left: 10px;
			top: 384px;
			transform-style: preserve-3d;
			transform: translateZ(0px);

			&::before {
				position: absolute;
				content: '';
				inset: 0.95rem;
				background: black;
				transform: translateZ(-49px);
				filter: blur(15px);
				opacity: 0.2;
				z-index: -1;
			}
		}

		.stevie-large-photo {
			left: 191px;
			top: 234px;
			transform-style: preserve-3d;
			transform: translateZ(0px);

			&::before {
				position: absolute;
				content: '';
				inset: 0.75rem;
				background: black;
				transform: translateZ(-49px);
				filter: blur(15px);
				opacity: 0.5;
				z-index: -1;
				border-radius: 34px;
			}
		}
	}
</style>
