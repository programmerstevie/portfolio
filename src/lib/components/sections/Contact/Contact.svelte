<script lang="ts">
	import Container from '$lib/components/Container.svelte';

	import resume_url from './resume';
	import socials_data, { SocialType } from './socials_data';

	const socials: SocialType[] = [SocialType.INSTAGRAM,  SocialType.LINKEDIN, SocialType.GITHUB];
</script>

<footer>
	<header id="CONTACT" />
	<Container>
		<div class="main-box">
			<ul class="socials-links">
				{#each socials.map((s) => socials_data[s]) as social}
					<li class="link">
						<a href={social.link.href} target="_blank" rel="noopener noreferrer">
							<img src={social.icon_src} alt="{social.name} link" width="48px" height="48px" />
						</a>
					</li>
				{/each}
			</ul>
			<a class="resume-link" href={resume_url.href} target="_blank" rel="noopener noreferrer"
				>&gt; MY RESUME &lt;</a
			>
		</div>
	</Container>
</footer>

<style lang="scss">
	footer {
		height: 227px;
		background-color: var(--color-pf-white);
    margin-top: 80px;

		header {
			height: 0;
		}

		div.main-box {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
      align-items: center;

			ul.socials-links {
				display: flex;
				justify-content: space-between;
				li.link {
					&:not(:first-child) {
						margin-left: 39px;
					}

					// a {
					// 	img {
					// 	}
					// }
				}
			}

			a.resume-link {
        text-decoration: underline;
        text-transform: uppercase;
        font-size: 40px;
        font-weight: 700;
        color: var(--color-pf-primary);
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
			}
		}
	}
</style>
