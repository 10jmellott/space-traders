<script setup lang="ts">
import Waypoint from '@/components/Waypoint.vue';
import { useSystemsStore } from '@stores/systemsStore';
const systemsStore = useSystemsStore();
</script>

<template>
	<div class="travel">
		<h1>Headquarters</h1>
		<Waypoint class="travel__waypoint" :waypoint="systemsStore.headquarters" />

		<h1>Shipyards</h1>
		<Waypoint class="travel__waypoint" v-for="waypoint in systemsStore.shipyards" :waypoint="waypoint" :key="waypoint.symbol" />
	</div>
</template>

<style lang="scss" scoped>
.travel {
	display: flex;
	flex-direction: column;
	gap: 18px;

	&__waypoint {
		border: 1px solid var(--foreground-accent);
		border-radius: 8px;
		padding: 12px;
	}
}
</style>
