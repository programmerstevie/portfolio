<script lang="ts">
	import backgroundTexture from '$lib/assets/background/png/background texture.png';
</script>

<div>
	<img src={backgroundTexture} alt="" />
</div>

<style>
	:root {
		--measure: 50px;
	}

	div {
		top: -110px;
		left: -310px;
		position: absolute;
    height: 1080px;
    /* width: 1920px; */
    overflow: hidden;
	}

	img {
		z-index: 1;

		animation-duration: 20s;
		animation-name: pf-bg-movement;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}

	@keyframes pf-bg-movement {
		from {
			translate: 0px 0px;
		}
		25% {
			translate: var(--measure) calc(var(--measure) * -1);
		}
		50% {
			translate: calc(2 * var(--measure)) 0;
		}
		75% {
			translate: var(--measure) var(--measure);
		}
		to {
			translate: 0 0;
		}
	}
</style>
