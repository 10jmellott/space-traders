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

const generalErrors = ref('');
const symbolErrors = ref([]);

function submit() {
	if (importToken.value) {
		tokenStore.token = importToken.value;
	} else {
		tokenStore.registerNewToken(faction.value, agent.value)
			.catch(async (e: ResponseError) => {
				const response = await e.response.json();
				if (response?.error) {
					if (response.error.data?.symbol) {
						symbolErrors.value = response.error.data.symbol;
					} else {
						generalErrors.value = response.error.message;
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
		<h1>New Game</h1>
		<p class="error">{{ generalErrors }}</p>
		<TextInput v-model="agent" placeholder="agent name" pattern="[\-a-zA-Z0-9_]+" />
		<p class="error" v-for="error in symbolErrors" :key="error">{{ error }}</p>
		<SelectInput v-model="faction" :options="factionSymbolOptions" />
		<div class="new-game__separator">
			<hr />
			<p>or</p>
			<hr />
		</div>
		<TextInput v-model="importToken" placeholder="import" />
		<ButtonInput @click="submit">Start</ButtonInput>
	</div>
</template>

<style lang="scss" scoped>
.new-game {
	display: flex;
	flex-direction: column;
	gap: 24px;
	text-align: center;
	padding: 32px;

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
</style>
