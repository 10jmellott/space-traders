<script setup lang="ts">
import ButtonInput from '@components/forms/ButtonInput.vue';

import { useAgentStore } from '@stores/agentStore';
import { useTokenStore } from '@stores/tokenStore';
import { ref } from 'vue';

const agentStore = useAgentStore();

const tokenStore = useTokenStore();

const confirmClearToken = ref(false);

function clearToken() {
	if (!confirmClearToken.value) {
		confirmClearToken.value = true;
		return;
	}
	confirmClearToken.value = false;
	tokenStore.token = '';
}

function copyToken() {
	window.navigator.clipboard.writeText(tokenStore.token);
}

</script>

<template>
	<div class="home">
		<p class="home__agent">{{ agentStore.agent?.symbol }}</p>

		<p class="home__balance">
			<font-awesome-icon icon="coins" />
			<span>Balance {{ agentStore.agent?.credits }}</span>
		</p>

		<div class="home__tokens">
			<ButtonInput @click="copyToken">Copy Token</ButtonInput>
			<ButtonInput @click="clearToken">{{ confirmClearToken ? 'Confirm Clear' : 'Clear Token' }}</ButtonInput>
			<span class="home__token">{{ tokenStore.token }}</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	gap: 16px;

	&__agent {
		font-size: 2rem;
		font-weight: 500;
	}

	&__balance {
		display: flex;
		gap: 8px;
	}

	&__token {
		max-width: 120px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	&__tokens {
		display: flex;
		gap: 8px;
		margin-top: auto;
		align-items: center;
	}
}
</style>
