import { ContractsApi, Contract } from '@api';
import { defineStore } from 'pinia';
import useTokenStore from './tokenStore';
import useAgentStore from './agentStore';

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
			const agentStore = useAgentStore();
			if (tokenStore.token) {
				const api = new ContractsApi(tokenStore.apiConfiguration);
				api.acceptContract({
					contractId: contract.id
				}).then(() => {
					contract.accepted = true;
					contract.deadlineToAccept = undefined;
					if (agentStore.agent) {
						agentStore.agent.credits += contract.terms.payment.onAccepted;
					}
				})
				.catch(e => console.error(e));;
			}
		}
	}
});

export default useContractsStore;
