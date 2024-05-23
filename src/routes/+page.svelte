<script>
	// Desktop
	import Landing from '$lib/components/sections/Landing';
	import AttributesBar from '$lib/components/AttributesBar';
	import AboutMe from '$lib/components/sections/AboutMe';
	import ToolingBar from '$lib/components/ToolingBar';
	import Portfolio from '$lib/components/sections/Portfolio';
	import Contact from '$lib/components/sections/Contact';

	// Mobile
	import ComingSoon from '$lib/components/mobile/ComingSoon';
</script>

<div class="desktop-view">
	<Landing />
	<AttributesBar />
	<AboutMe />
	<ToolingBar />
	<Portfolio />
	<Contact />
</div>
<div class="mobile-view">
	<ComingSoon />
</div>

<style lang="scss">
	@media (max-width: 1200px) {
		.desktop-view {
			display: none;
		}
		.mobile-view {
			display: default;
		}
	}
	@media (min-width: 1201px) {
		.mobile-view {
			display: none;
		}
	}
</style>
