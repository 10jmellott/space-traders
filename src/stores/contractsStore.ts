import { ContractsApi, Contract } from '@api';
import { defineStore } from 'pinia';
import { useTokenStore } from './tokenStore';

export const useContractsStore = defineStore('contractsStore', {
	state: () => ({
		contracts: [] as Contract[]
	}),
	actions: {
		refreshContracts() {
			const tokenStore = useTokenStore();
			if (tokenStore.token) {
				const api = new ContractsApi(tokenStore.apiConfiguration);
				api.getContracts().then(p => this.contracts = p.data)
			} else {
				this.contracts = [];
			}
		},
		acceptContract(contract: Contract) {
			const tokenStore = useTokenStore();
			if (tokenStore.token) {
				const api = new ContractsApi(tokenStore.apiConfiguration);
				api.acceptContract({
					contractId: contract.id
				}).then(() => this.refreshContracts());
			}
		}
	}
});
