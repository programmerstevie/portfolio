<script>
  import checkIcon from '$lib/assets/icons/general/svg/check circle.svg';
</script>

<div>
	<img src={checkIcon} alt="" />
	<p><slot>Add description</slot></p>
</div>

<style>
	div {
		width: 215px;
		height: 55px;
		border-radius: 19px;
		background-color: var(--color-pf-white);
		display: flex;
		align-items: center;
		padding: 0 13px;
	}
	img {
		width: 28px;
		height: 28px;
	}
	p {
		flex-grow: 1;
		text-align: center;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 15px;
		font-family: 'Roboto' sans-serif;
	}
</style>
