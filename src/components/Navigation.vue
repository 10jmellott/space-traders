<script setup lang="ts">
import useFleetStore from '@stores/fleetStore';
import { useAgentStore } from '@stores/agentStore';
import { useContractsStore } from '@stores/contractsStore';
import { computed } from 'vue';

const agentStore = useAgentStore();
const contractStore = useContractsStore();
const fleetStore = useFleetStore();

const routes = computed(() => {
	return [
		{ to: '/', label: 'Home', icon: 'home' },
		{ to: '/travel', label: 'Travel', icon: 'location-dot' },
		{ to: '/contracts', label: `Contracts(${contractStore.contracts.length})`, icon: 'helmet-safety' },
		{ to: '/fleet', label: `Fleet(${fleetStore.fleet.length})`, icon: 'rocket' },
		{ to: '/faction', label: 'Faction', icon: 'users' },
	]
});
</script>

<template>
	<div class="navigation">
		<a href="https://spacetraders.io/" target="_blank" class="navigation__header">
			<img src="/images/space-traders.svg" alt="Space Traders" height="32" width="32" />
			<span>Space Traders</span>
		</a>

		<nav class="navigation__links" role="navigation">
			<router-link v-for="route in routes" :to="route.to">
				<font-awesome-icon class="icon" :icon="route.icon" />
				<span>{{ route.label }}</span>
			</router-link>
		</nav>

		<p>
			<font-awesome-icon icon="coins" />
			Balance {{ agentStore.agent?.credits }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
.navigation {
	display: flex;
	flex-direction: column;
	gap: 12px;
	text-align: center;
	font-size: 1.5rem;

	&__header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		font-size: 1.75rem;
		font-weight: 500;
	}

	&__links {
		display: flex;
		flex-direction: column;
		margin: auto 0;

		a {
			display: flex;
			align-items: center;
			gap: 8px;
			color: var(--foreground);
			padding: 12px;
			border-radius: 12px;
			transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

			&.router-link-active {
				color: var(--highlight);
			}

			@include desktop {
				&:hover {
					color: var(--highlight);
					background-color: var(--background);
				}
			}

			.icon {
				position: absolute;
			}
		}

		span {
			flex-grow: 1;
		}
	}
}
</style>
