import { AgentsApi, Agent, ResponseError } from '@api';
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
				api.getMyAgent()
					.then(p => this.agent = p.data)
					.catch(async (e: ResponseError) => {
						const response = await e.response.json();
						console.error('invalid token', response);
						if (response?.error.code === 401) {
							tokenStore.tokenErrors = [response.error.message] as string[];
							tokenStore.token = '';
						}
					});
			} else {
				this.agent = null;
			}
		}
	}
});

export default useAgentStore;
