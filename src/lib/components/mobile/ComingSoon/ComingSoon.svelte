<section class="mainsection">
	<header>
		<h1>Small View Not Supported Yet!</h1>
		<img src="noscript/underline.png" alt="" />
	</header>
	<p class="p1">Steven's portfolio is not available on smaller screen sizes!</p>
	<p class="p2">Please use a full computer screen to view my portfolio!</p>
</section>

<style lang="scss">
	:global(body) {
		background-color: #15191e;
	}
	.mainsection {
		width: 100vw;
		height: 100vh;
		background-image: var(--color-pf-landing-gradient-mobile);

		color: var(--color-pf-light-gray);
		text-align: center;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 0;

		header {
			position: relative;
			z-index: 0;
			h1 {
				font-size: 6vw;
				font-weight: bold;
				color: var(--color-pf-primary);
			}
			img {
				position: absolute;
				right: 0;
				top: 5vw;
				height: 12vw;
				width: 50vw;
				z-index: -1;
			}
		}

		p {
			z-index: 1;
			font-size: 5vw;
		}

		.p1 {
			padding: 14vw 20px 0px 20px;
		}
		.p2 {
			padding: 2vw 20px 0px 20px;
		}
	}
</style>
