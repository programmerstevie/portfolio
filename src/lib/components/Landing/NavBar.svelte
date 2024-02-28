<script lang="ts">
	import logo from '$lib/assets/icons/logo/png/logo-blue.png';
</script>

<nav>
	<a href="/"><img src={logo} alt="logo" /></a>
	<ul>
		<li class="home"><a href="/">Home</a></li>
		<li><a href="#ABOUT">About</a></li>
		<li><a href="#PORTFOLIO">Portfolio</a></li>
		<li><a href="#CONTACT">Contact</a></li>
	</ul>
</nav>

<style>
	nav {
		height: 190px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 556px;
	}

	ul li {
		font-size: 28px;
		font-weight: bold;
		color: var(--color-pf-white);
	}

	ul li.home {
		color: var(--color-pf-primary);
	}

	ul li a {
		color: inherit;
		text-decoration: none;
	}
</style>
