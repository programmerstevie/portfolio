<div class="container_outer">
	<div class="container_inner">
		<slot />
	</div>
</div>

<style lang="scss">
	@media (min-width: 1300px) {
		div.container_outer {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
			div.container_inner {
        width: 1296px;
        height: 100%;
			}
		}
	}
</style>
