<script setup lang="ts">
import NewGame from '@components/NewGame.vue';
import Navigation from '@components/Navigation.vue';

import { useTokenStore } from '@stores/tokenStore';
import { useAgentStore } from '@stores/agentStore';

const agentStore = useAgentStore();
const tokenStore = useTokenStore();

tokenStore.enableTokenCache();

if (tokenStore.token) {
	agentStore.refreshAgent();
}

tokenStore.$subscribe(agentStore.refreshAgent);
</script>

<template>
	<NewGame class="new-game" v-if="!tokenStore.token" />
	<div class="root" v-else>
		<Navigation class="navigation" />
		<main class="main">
			<router-view></router-view>
		</main>

	</div>
</template>

<style lang="scss" scoped>
.new-game {
	width: 320px;
	background: var(--background-accent);
	border-radius: 12px;
	padding: 24px;
}
.root {
	display: flex;
	gap: 32px;
	width: 100%;
}
.navigation {
	background: var(--background-accent);
	border-radius: 12px;
	padding: 24px;
	width: 320px;
}
.main {
	flex-grow: 1;
	background: var(--background-accent);
	border-radius: 12px;
	padding: 24px;
}
</style>
