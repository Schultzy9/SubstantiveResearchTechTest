<script lang="ts">

	import ClientInteractions from './components/ClientInteractions.vue'

	export default {
		components: {
			ClientInteractions,
		}
	}

</script>

<template>
	<div id="HomePage" class="container">
		<h1>Interactions</h1>
		<div id="app">
			<ClientInteractions />
		</div>
	</div>
</template>

<style lang="scss">
	h1 {
		text-align: center;
	}

	#HomePage {
		height: 100vh;
		width: 900px;
		padding: 20px;
	}
</style>