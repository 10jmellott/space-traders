<script setup lang="ts">
import NewGame from '@components/NewGame.vue';
import Navigation from '@components/Navigation.vue';

import { useTokenStore } from '@stores/tokenStore';
import { useAgentStore } from '@stores/agentStore';
import { useSystemsStore } from './stores/systemsStore';

const agentStore = useAgentStore();
const tokenStore = useTokenStore();
const systemsStore = useSystemsStore();

tokenStore.enableTokenCache();

// Setup listeners
tokenStore.$subscribe(agentStore.refreshAgent);
agentStore.$subscribe(systemsStore.refreshHeadquarters);

// Setup initial state
if (tokenStore.token) {
	agentStore.refreshAgent();
}
</script>

<template>
	<NewGame class="new-game" v-if="!tokenStore.token" />
	<main class="root" v-else>
		<Navigation class="navigation" />
		<router-view class="main" role="main"></router-view>
	</main>
</template>

<style lang="scss" scoped>
.new-game {
	width: 360px;
	background: var(--background-accent);
	border-radius: 12px;
	padding: 16px;
}
.root {
	display: flex;
	gap: 16px;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}
.navigation {
	background: var(--background-accent);
	border-radius: 12px;
	padding: 16px;
	width: 320px;
	min-height: 480px;
}
.main {
	flex-grow: 1;
	background: var(--background-accent);
	border-radius: 12px;
	padding: 24px;
	overflow-y: auto;
	overflow-x: hidden;
	max-width: 768px;
	max-height: 100%;
	min-height: 480px;
}
</style>
