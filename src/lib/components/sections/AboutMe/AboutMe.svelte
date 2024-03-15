<script>
	import Container from '../../Container.svelte';
	import PhotoSide from './PhotoSide.svelte';

	import boxCodeIcon from '$lib/assets/icons/general/svg/box-code.svg';
	import personIcon from '$lib/assets/icons/general/svg/person icon.svg';
	import codeIcon from '$lib/assets/icons/general/svg/code icon.svg';
	import calendarIcon from '$lib/assets/icons/general/svg/calendar icon.svg';
	import globeIcon from '$lib/assets/icons/general/svg/globe icon.svg';
	import hoverHerePrompt from '$lib/assets/icons/general/svg/Hover Here.svg';

	/**
	 * @type {HTMLElement}
	 */
	let photoSideBounds;
</script>

<section>
	<Container>
		<div class="container">
			<aside class="photo-side" bind:this={photoSideBounds}>
				<PhotoSide bind:cursorDetectionElement={photoSideBounds} angleRange={45} />
			</aside>

			<div class="text-side">
				<header>
					<h2 id="ABOUT">About Me <img src={boxCodeIcon} alt="" /></h2>
				</header>
				<ul class="description">
					<li>
						<img src={personIcon} alt="" width="27px" height="27px" />
						<p>
							Hi there! I'm Stevie, a meticulous front-end developer thriving in Broward County,
							Florida. I take pride in creating websites that are dependable and professional.
						</p>
					</li>
					<li>
						<img src={codeIcon} alt="" width="27px" height="20px" />
						<p>
							Proficient in front end web development, I focus on crafting user-friendly digital
							experiences. My work reflects precision and reliability, ensuring seamless navigation
							and functionality.
						</p>
					</li>
					<li>
						<img src={calendarIcon} alt="" width="22px" height="25px" />
						<p>
							Rooted in authenticity, I approach each project with a methodical mindset. Building
							solid connections and delivering consistent craftsmanship are my priorities. I thrive
							in collaboration with like-minded professionals who value reliability.
						</p>
					</li>
					<li>
						<img src={globeIcon} alt="" width="25px" height="25px" />
						<p>
							On this journey, my goal is to forge lasting partnerships with teams that appreciate
							the quiet confidence of reliable digital work. Let's build a future grounded in trust
							and excellence together!
						</p>
					</li>
				</ul>
				<ul class="contact-info">
					<li>
						<h3>Name</h3>
						Steven Santos
					</li>
					<li>
						<h3>Email</h3>
						programmerstevie@gmail.com
					</li>
					<li>
						<h3>Employment</h3>
						Open
					</li>
				</ul>
			</div>
		</div>
		<footer>
			<div>
				<img src={hoverHerePrompt} alt="" />
			</div>
		</footer>
	</Container>
</section>

<style lang="scss">
	section {
		background-color: #fff;
		height: 1034px;
	}

	.container {
		display: flex;
		padding-top: 121px;

		// & > * {
		// 	// width: 50%;
		// }
		.photo-side {
			flex-grow: 1;
			flex-basis: 0;
			// border: blue solid 2px;
			min-height: 721px;
			display: flex;
			// align-items: center;
			padding-top: 30px;
			justify-content: center;
			position: relative;
		}
		.text-side {
			margin-left: 25px;
			// background-color: blue;
			flex-grow: 1;
			flex-basis: 0;
			header {
				h2 {
					display: flex;
					align-items: center;
					font-weight: 700;
					font-size: 40px;
					color: var(--color-pf-primary);

					img {
						width: 63px;
						height: 63px;
						margin-left: 21px;
					}
				}
			}
			ul.description {
				margin-top: 56px;
				min-height: 506px;
				display: flex;
				flex-direction: column;
				// justify-content: ;
				li {
					// border: black solid 1px;
					display: flex;
					align-items: center;
					flex-grow: 1;
					flex-basis: 0;

					img {
						flex-basis: 45px;
						flex-shrink: 0;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					p {
						// margin-left: 16px;
						font-size: 20px;
						font-weight: 400;
						color: var(--color-pf-gray);
						flex-shrink: 1;
						line-height: 24px;
					}
				}
			}
			ul.contact-info {
				margin-top: 28px;
				display: flex;
				flex-wrap: wrap;
				row-gap: 30px;

				li {
					width: 50%;
					font-weight: 400;
					font-size: 20px;
					color: var(--color-pf-gray);

					@media screen and (max-width: 768px) {
						width: 100%;
					}

					h3 {
						font-weight: 700;
						font-size: 20px;
						color: var(--color-pf-background);
					}
				}
			}
		}
	}

	footer {
		display: flex;
    
    div {
      width: 50%;
      display: flex;
      justify-content: center;
    
      img {
        animation-name: inflate_deflate;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
      }
    }
	}

  @keyframes inflate_deflate {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
</style>
