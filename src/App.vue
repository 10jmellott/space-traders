<script setup lang="ts">
import NewGame from '@components/NewGame.vue';
import Navigation from '@components/Navigation.vue';

import useTokenStore from '@stores/tokenStore';
import useAgentStore from '@stores/agentStore';
import useSystemsStore from '@stores/systemsStore';
import useContractsStore from '@stores/contractsStore';
import useFleetStore from '@stores/fleetStore';

const agentStore = useAgentStore();
const tokenStore = useTokenStore();
const systemsStore = useSystemsStore();
const contractsStore = useContractsStore();
const fleetStore = useFleetStore();

tokenStore.enableTokenCache();

// Setup listeners
tokenStore.$subscribe(agentStore.refreshAgent);
tokenStore.$subscribe(contractsStore.refreshContracts);
agentStore.$subscribe(systemsStore.refreshHeadquarters);
agentStore.$subscribe(fleetStore.refreshFleet);

// Setup initial state
if (tokenStore.token) {
	agentStore.refreshAgent();
	contractsStore.refreshContracts();
	fleetStore.refreshFleet();
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
	width: 100%;
	background: var(--background-accent);
	padding: 16px;

	@include desktop {
		width: 360px;
		border-radius: 12px;
	}
}
.root {
	display: flex;
	flex-direction: column;
	gap: 2px;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;

	@include desktop {
		flex-direction: row;
		gap: 16px;
	}
}
.navigation {
	background: var(--background-accent);

	padding: 16px;
	width: 100%;

	@include desktop {
		width: 320px;
		min-height: 480px;
		max-width: 768px;
		max-height: 100%;
		flex-shrink: 0;
		border-radius: 12px;
	}
}
.main {
	flex-grow: 1;
	background: var(--background-accent);

	padding: 24px;
	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;

	@include desktop {
		min-height: 480px;
		max-width: 768px;
		max-height: 100%;
		border-radius: 12px;
	}
}
</style>
