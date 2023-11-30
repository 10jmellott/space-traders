<script setup lang="ts">
import { DateTime } from 'luxon';
import { Contract } from '@api';
import { useContractsStore } from '@/stores/contractsStore';
import ButtonInput from './forms/ButtonInput.vue';

const contractStore = useContractsStore();

defineProps<{
	contract: Contract
}>();
</script>

<template>
	<div class="contract">
		<h1>{{ contract.type }}</h1>
		<p class="contract__deadline">Deadline {{ DateTime.fromJSDate(contract.terms.deadline).toRelative() }}</p>
		<h2>
			<font-awesome-icon icon="coins" />
			<span>Payout</span>
		</h2>
		<p :class="{ 'accepted': contract.accepted }">{{ contract.terms.payment.onAccepted }} credits on accepted</p>
		<p>{{ contract.terms.payment.onFulfilled }} credits on fulfilled</p>
		<h2>
			<font-awesome-icon icon="truck" />
			<span>Deliver</span>
		</h2>
		<ul v-if="contract.terms.deliver">
			<li v-for="deliverable in contract.terms.deliver">Deliver {{ deliverable.unitsRequired }} {{ deliverable.tradeSymbol }} to {{ deliverable.destinationSymbol }}</li>
		</ul>
		<ButtonInput class="contract__accept-btn" @click="contractStore.acceptContract(contract)" v-if="!contract.accepted">Accept</ButtonInput>
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
		color: var(--highlight);
	}
	h2 {
		font-size: 1.25rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 12px;
		color: var(--highlight);
	}

	li {
		margin-left: 32px;
	}

	&__deadline {
		color: var(--accent-light);
	}

	&__accept-btn {
		align-self: flex-end;
	}

	.accepted {
		text-decoration: line-through;
		opacity: 0.5;
	}
}
</style>
