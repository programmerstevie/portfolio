<script lang="ts">
	import Container from '../../Container.svelte';
	import LandingBackground from './LandingBackground.svelte';
	import NavBar from './NavBar.svelte';
	import TechStack from './TechStack.svelte';
  import portrait from '$lib/assets/steven/portrait-landing.png';
</script>

<div class="main-landing">
	<header>
		<Container>
			<NavBar />
		</Container>
	</header>
	<Container>
		<div class="landing-content">
			<div class="hero-card">
				<section class="hero-text-side">
					<h1 id="">Hello I'm Stevie.</h1>

					<p class="dev-text">
						I am a <span class="dev-job-title">Front End Developer</span>&period;
					</p>

					<section class="tech-stack">
						<TechStack />
					</section>
				</section>
        <section class="hero-portrait-side">
          <div class="hero-portrait-oval"/>
          <img src={portrait} alt="stevie" />
        </section>
			</div>
		</div>
	</Container>
  <LandingBackground />
</div>

<style lang="scss">
  header {
    position: relative;
    z-index: 2;
  }
	.main-landing {
    position: relative;
    z-index: 2;
		height: 969px;
		background-image: var(--color-pf-landing-gradient);
    overflow: hidden;
	}

	.landing-content {
    z-index: 3;
    position: relative;
		padding-top: 80px;
		color: var(--color-pf-white);
		// border-left: 2px dashed blue;
		// border-right: 2px dashed blue;
	}

	.hero-card {
    display: flex;
    justify-content: space-between;
		.hero-text-side {
      padding-top: 18px;
			color: var(--color-pf-white);
			display: flex;
			flex-direction: column;
			align-items: center;
			width: fit-content;
			// border: 2px dashed var(--color-pf-white); 
			h1 {
				font-weight: 100;
				font-size: 112px;
			}
			.dev-text {
				margin-top: 67px;
				font-weight: 500;
				font-size: 40px;
			}

			.dev-job-title {
				text-transform: uppercase;
				font-weight: 500;
				font-size: 48px;
				color: var(--color-pf-primary);
			}

      .tech-stack {
        margin-top: 99px;
      }
		}

    .hero-portrait-side {
      position: relative;

      .hero-portrait-oval {
        width: 366px;
        height: 476px;
        border-radius: 181px;
        // background-color: var(--color-pf-primary);
        // margin-right: 31px;
        margin-top: 28px;
        border-color: var(--color-pf-primary);
        border-width: 5px;
        border-style: solid;
        animation: oval 3s ease-in-out infinite alternate;
      }

      img {
        width: 366px;
        height: 476px;
        border-radius: 181px;
        object-fit: cover;
        position: absolute;
        top: 0;
        right: 31px;
        animation: oval ease-in-out infinite alternate;
        animation-duration: 3s;
        animation-delay: .5s;
      }

      @keyframes oval {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(40px);
        }
      }
    }
	}
</style>
