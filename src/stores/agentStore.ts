import { AgentsApi, Agent } from '@api';
import { defineStore } from 'pinia';
import { useTokenStore } from './tokenStore';

export const useAgentStore = defineStore('agentStore', {
	state: () => ({
		agent: null as Agent | null
	}),
	actions: {
		refreshAgent() {
			const tokenStore = useTokenStore();
			if (tokenStore.token) {
				const api = new AgentsApi(tokenStore.apiConfiguration);
				api.getMyAgent().then(p => this.agent = p.data);
			} else {
				this.agent = null;
			}
		}
	}
});

export default useAgentStore;
