<script setup lang="ts">
import Waypoint from '@/components/Waypoint.vue';
import { useSystemsStore } from '@stores/systemsStore';
const systemsStore = useSystemsStore();
</script>

<template>
	<div class="travel">
		<h1>Headquarters</h1>
		<Waypoint :waypoint="systemsStore.headquarters" />
	</div>
</template>

<style lang="scss" scoped>
.travel {
}
</style>
