<script setup lang="ts">
import useFleetStore from '@stores/fleetStore';
const fleetStore = useFleetStore();
</script>

<template>
	<div class="fleet">
		<p v-for="ship in fleetStore.fleet">
			{{ ship.engine.name }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
.fleet {
}
</style>
