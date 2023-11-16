<script setup lang="ts">
import Contract from '@/components/Contract.vue';
import { useContractsStore } from '@stores/contractsStore';
const contractsStore = useContractsStore();
</script>

<template>
	<div class="contracts">
		<Contract class="contracts__contract" :contract="contract" v-for="contract in contractsStore.contracts" />
	</div>
</template>

<style lang="scss" scoped>
.contracts {
	&__contract {
		border: 1px solid var(--foreground-accent);
		border-radius: 8px;
		padding: 12px;
	}
}
</style>
