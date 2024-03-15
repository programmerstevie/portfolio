<script lang="ts">
	import { color_logo } from '../../TechLogos';
</script>

<header>Tech Stack</header>
<ul class="stack-body">
	<li class="tech script">
		<ul>
			<li>
				<div title="Javascript"><img src={color_logo.js} alt="javascript" /></div>
			</li>
			<li>
				<div title="Typescript"><img src={color_logo.ts} alt="typescript" /></div>
			</li>
		</ul>
	</li>
	<li class="tech structuring">
		<ul>
			<li>
				<div title="HTML5"><img src={color_logo.html5} alt="html5" /></div>
			</li>
			<li>
				<div title="CSS3"><img src={color_logo.css3} alt="css3" /></div>
			</li>
		</ul>
	</li>
	<li class="tech script-framework">
		<ul>
			<li>
				<div title="React"><img src={color_logo.react} alt="react" /></div>
			</li>
			<li>
				<div title="Next.js"><img src={color_logo.nextjs} alt="nextjs" /></div>
			</li>
			<li>
				<div title="Svelte"><img src={color_logo.svelte} alt="svelte" /></div>
			</li>
			<li>
				<div title="Angular"><img src={color_logo.angular} alt="angular" /></div>
			</li>
		</ul>
	</li>
	<li class="tech styling-framework">
		<ul>
			<li>
				<div title="SASS"><img src={color_logo.sass} alt="sass" /></div>
			</li>
			<li>
				<div title="Tailwind"><img src={color_logo.tailwind} alt="tailwind" /></div>
			</li>
		</ul>
	</li>
</ul>

<style lang="scss">
	// text-align: left;
	header {
		text-transform: uppercase;
		font-size: 20px;
		font-weight: 400;
		height: 23px;
		color: rgba(255, 255, 255, 0.67);
	}
	.stack-body {
		width: 799px;
		height: 134px;
		border-radius: 9px;
		background-color: #5498eb53;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 32px;

		li.tech {
			display: flex;
			align-items: center;

			ul {
				li:not(:first-child) {
					margin-left: 14px;
				}

				li div {
					height: 52px;
					width: 52px;
					position: relative;
					transition: transform 0.3s;
					transform: translate(0, 0);
					transition-timing-function: ease-in-out;

					img {
						width: 52px;
						height: 52px;
					}

					&:before {
						content: '';
						display: block;
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						left: 0;
						transition: background-color 0.2s;
						transition-timing-function: ease-in-out;
						background-color: rgba(255, 255, 255, 0);
						border-radius: 7px;
					}
					&:hover {
						transform: translate(0, -10px);
						transition-timing-function: ease-out;
						&:before {
							background: rgba(255, 255, 255, 0.5);
						}
					}
				}
			}
		}

		ul {
			display: flex;
			align-items: center;
		}
	}
</style>
