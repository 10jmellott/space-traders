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
		<p>Agent Symbol {{ agentStore.agent?.symbol }}</p>
		<p>Agent Credits {{ agentStore.agent?.credits }}</p>
		<p>Account Id {{ agentStore.agent?.accountId }}</p>
		<p>Headquarters {{ agentStore.agent?.headquarters }}</p>
		<p>Ship Count {{ agentStore.agent?.shipCount }}</p>

		<p>Token {{ tokenStore.token.slice(0, 12) }}...</p>
		<ButtonInput @click="copyToken">Copy Token</ButtonInput>
		<ButtonInput @click="clearToken">{{ confirmClearToken ? 'Confirm Clear' : 'Clear Token' }}</ButtonInput>
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
