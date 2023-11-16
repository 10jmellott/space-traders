<script setup lang="ts">
import ButtonInput from '@components/forms/ButtonInput.vue';

import { useAgentStore } from '@stores/agentStore';
import { useTokenStore } from '@stores/tokenStore';

const agentStore = useAgentStore();

const tokenStore = useTokenStore();
</script>

<template>
	<div class="home">
		<p v-for="value of Object.values(agentStore.agent || {})" :key="value">{{ value }}</p>
		<ButtonInput @click="tokenStore.token = ''">Clear Token</ButtonInput>
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
