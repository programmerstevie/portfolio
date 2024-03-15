<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	import sparkle from '$lib/assets/icons/general/svg/sparkle.svg';
</script>

<Container>
	<header>
		<h2 id="PORTFOLIO" class="pf-header">My Portfolio <img src={sparkle} alt="" /></h2>
	</header>
	<section class="entries">
		<div></div>
	</section>
</Container>

<style lang="scss">
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

		div {
			width: 1296px;
			height: 625px;
      border-radius: 24px;

      background-color: var(--var-pf-white);
      box-shadow: rgba(0, 0, 0, 0.25) 0 0 25px -3px;
		}
	}
</style>
