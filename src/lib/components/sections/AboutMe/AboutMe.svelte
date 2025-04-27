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
				<header id="ABOUT">
					<h2>About Me <img src={boxCodeIcon} alt="" /></h2>
				</header>
				<ul class="description">
					<li>
						<img src={personIcon} alt="" width="27px" height="27px" />
						<p>
							I'm Steven, a Full Stack Developer specializing in production-grade
							web applications and scalable cloud systems.
						</p>
					</li>
					<li>
						<img src={codeIcon} alt="" width="27px" height="20px" />
						<p>
							I have 4+ years of professional experience building frontend
							and backend features for SaaS, e-commerce,
							and critical infrastructure platforms.
						</p>
					</li>
					<li>
						<img src={calendarIcon} alt="" width="22px" height="25px" />
						<p>
							My focus is delivering reliable,
							user-centric solutions that perform at scale
							and stand the test of real-world usage.
						</p>
					</li>
					<li>
						<img src={globeIcon} alt="" width="25px" height="25px" />
						<p>
							Here's a selection of my work — designed to solve real problems
							and create lasting impact.
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
		background-color: var(--color-pf-white);
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
