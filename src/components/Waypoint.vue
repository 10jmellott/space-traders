<script setup lang="ts">
import ShipyardList from './ShipyardList.vue';
import { Waypoint } from '@api';

defineProps<{
	waypoint: Waypoint | null
}>();
</script>

<template>
	<div class="waypoint" v-if="waypoint">
		<h1>{{ waypoint.symbol }}</h1>
		<p>{{ waypoint.type }}</p>

		<h2>Traits</h2>
		<div class="waypoint__traits">
			<span v-for="trait in waypoint.traits">{{ trait.name }}</span>
		</div>

		<ShipyardList :waypoint="waypoint" />
	</div>
</template>

<style lang="scss" scoped>
.waypoint {
	display: flex;
	flex-direction: column;
	gap: 8px;

	h1 {
		font-size: 1.5rem;
		font-weight: 500;
	}
	h2 {
		font-size: 1.25rem;
		font-weight: 500;
	}
	&__traits {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;

		span {
			padding: 2px 8px;
			border-radius: 4px;
			background-color: var(--accent-dark);
			font-size: 12px;
		}
	}
}
</style>
