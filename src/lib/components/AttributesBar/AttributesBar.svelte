<script>
	import Container from '../Container.svelte';
	import Attribute from './Attribute.svelte';
</script>

<section>
	<Container>
		<div>
			<Attribute>Meticulous<br />Attention to Detail</Attribute>
			<Attribute>Reliability</Attribute>
			<Attribute>Creative<br />Problem-Solving</Attribute>
			<Attribute>Collaborative<br />Team Player</Attribute>
		</div>
	</Container>
</section>

<style>
	section {
		height: 111px;
		background-color: var(--color-pf-primary-2);
	}
	div {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
