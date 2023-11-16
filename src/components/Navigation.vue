<script setup lang="ts">
import { useAgentStore } from '@stores/agentStore';

const agentStore = useAgentStore();
</script>

<template>
	<div class="navigation">
		<nav class="navigation__links" role="navigation">
			<router-link to="/">Home</router-link>
			<router-link to="/travel">Travel</router-link>
			<router-link to="/contracts">Contracts</router-link>
			<router-link to="/ships">Ships</router-link>
			<router-link to="/faction">Faction</router-link>
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

	&__links {
		display: flex;
		flex-direction: column;
		margin: auto 0;

		.router-link-active {
			color: var(--highlight);
		}

		a {
			color: var(--foreground);
			padding: 12px 0;
			border-radius: 12px;

			&:hover {
				color: var(--highlight);
				background-color: var(--background);
			}
		}
	}
}
</style>
