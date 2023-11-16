<script setup lang="ts">
import { useAgentStore } from '@stores/agentStore';

const agentStore = useAgentStore();
</script>

<template>
	<div class="home">
		<p v-for="value of Object.values(agentStore.agent || {})" :key="value">{{ value }}</p>
	</div>
</template>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}
</style>
