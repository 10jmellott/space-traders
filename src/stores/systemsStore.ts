import { SystemsApi, Waypoint } from '@api';
import { defineStore } from 'pinia';
import { useTokenStore } from './tokenStore';
import { useAgentStore } from './agentStore';

export function parseSystemSymbol(waypoint: string) {
	const parts = waypoint.split('-');
	return parts[0] + '-' + parts[1];
}

export const useSystemsStore = defineStore('systemsStore', {
	state: () => ({
		headquarters: null as Waypoint | null
	}),
	actions: {
		refreshHeadquarters() {
			const agentStore = useAgentStore();
			const tokenStore = useTokenStore();
			if (agentStore.agent?.headquarters) {
				const api = new SystemsApi(tokenStore.apiConfiguration);
				api.getWaypoint({
					waypointSymbol: agentStore.agent.headquarters,
					systemSymbol: parseSystemSymbol(agentStore.agent.headquarters)
				}).then(p => this.headquarters = p.data);
			} else {
				this.headquarters = null;
			}
		}
	}
});

export default useSystemsStore;
