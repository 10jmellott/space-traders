<script setup lang="ts">
import { Contract } from '@api';
import ButtonInput from './forms/ButtonInput.vue';

defineProps<{
	contract: Contract
}>();
</script>

<template>
	<div class="contract">
		<h1>{{ contract.type }}</h1>
		<ButtonInput class="contract__accept-btn" v-if="!contract.accepted">Accept</ButtonInput>
	</div>
</template>

<style lang="scss" scoped>
.contract {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;

	h1 {
		font-size: 1.5rem;
		font-weight: 500;
	}
	h2 {
		font-size: 1.25rem;
		font-weight: 500;
	}

	&__accept-btn {
		align-self: flex-end;
	}
}
</style>
