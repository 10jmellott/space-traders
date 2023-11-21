<script setup lang="ts">
import { FactionSymbols, ResponseError } from '@api';
import { ref } from 'vue';
import { useTokenStore } from '@stores/tokenStore';

import TextInput from '@components/forms/TextInput.vue';
import SelectInput from '@components/forms/SelectInput.vue';
import ButtonInput from '@components/forms/ButtonInput.vue';

const tokenStore = useTokenStore();

const agent = ref('');
const faction = ref(FactionSymbols.Cosmic);

const importToken = ref('');

function submit() {
	if (importToken.value) {
		tokenStore.token = importToken.value;
	} else {
		tokenStore.registerNewToken(faction.value, agent.value)
			.catch(async (e: ResponseError) => {
				const response = await e.response.json();
				if (response?.error) {
					if (response.error.data?.symbol) {
						tokenStore.tokenErrors = response.error.data.symbol;
					} else {
						tokenStore.tokenErrors = [response.error.message] as string[];
					}
				}
			});
	}
}

const factionSymbolOptions = Object.values(FactionSymbols).map(faction => ({
	label: faction,
	value: faction
}));
</script>

<template>
	<div class="new-game">
		<h1 class="new-game__header">
			<img src="/images/space-traders.svg" alt="Space Traders" height="32" width="32" />
			<span>New Game</span>
		</h1>

		<TextInput v-model="importToken" placeholder="import" />

		<div class="new-game__separator">
			<hr />
			<p>or</p>
			<hr />
		</div>

		<p class="error" v-for="error in tokenStore.tokenErrors" :key="error">{{ error }}</p>
		<TextInput v-model="agent" placeholder="agent name" pattern="[\-a-zA-Z0-9_]+" />
		<SelectInput v-model="faction" :options="factionSymbolOptions" />

		<ButtonInput class="start" @click="submit">
			<font-awesome-icon icon="play" />
			<span>Start</span>
		</ButtonInput>
	</div>
</template>

<style lang="scss" scoped>
.new-game {
	display: flex;
	flex-direction: column;
	gap: 24px;
	text-align: center;

	&__header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		font-size: 1.75rem;
		font-weight: 500;
	}

	&__separator {
		display: flex;
		align-items: center;
		gap: 16px;

		hr {
			flex-grow: 1;
			border-top: 1px solid var(--highlight);
		}
	}

	.error {
		font-size: 14px;
		color: red;
	}
}
.start {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
}
</style>
