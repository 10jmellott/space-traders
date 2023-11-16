<script setup lang="ts">
import { useAgentStore } from '@stores/agentStore';

const agentStore = useAgentStore();

const routes = [
	{ to: '/', label: 'Home', icon: 'home' },
	{ to: '/travel', label: 'Travel', icon: 'location-dot' },
	{ to: '/contracts', label: 'Contracts', icon: 'helmet-safety' },
	{ to: '/ships', label: 'Ships', icon: 'rocket' },
	{ to: '/faction', label: 'Faction', icon: 'users' },
]
</script>

<template>
	<div class="navigation">
		<nav class="navigation__links" role="navigation">
			<router-link v-for="route in routes" :to="route.to">
				<font-awesome-icon :icon="route.icon" />
				<span>{{ route.label }}</span>
			</router-link>
		</nav>
		<p>{{ agentStore.agent?.symbol }}</p>
		<p>Balance {{ agentStore.agent?.credits }}</p>
	</div>
</template>

<style lang="scss" scoped>
.navigation {
	display: flex;
	flex-direction: column;
	gap: 32px;
	text-align: center;
	font-size: 1.5rem;
	position: relative;

	&__links {
		display: flex;
		flex-direction: column;
		margin: auto 0;

		.router-link-active {
			color: var(--highlight);
		}

		a {
			display: flex;
			align-items: center;
			gap: 8px;
			color: var(--foreground);
			padding: 12px;
			border-radius: 12px;
			transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

			&:hover {
				color: var(--highlight);
				background-color: var(--background);
			}
		}

		span {
			flex-grow: 1;
		}

		svg {
			position: absolute;
		}
	}
}
</style>
