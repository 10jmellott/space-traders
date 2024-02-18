import { WaypointTraitSymbol } from '@api/models/WaypointTraitSymbol';
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
		headquarters: null as Waypoint | null,
		shipyards: [] as Waypoint[]
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
				}).then(p => this.headquarters = p.data).then(this.refreshShipyards);
			} else {
				this.headquarters = null;
			}
		},
		refreshShipyards() {
			if (this.headquarters?.symbol) {
				const tokenStore = useTokenStore();
				const api = new SystemsApi(tokenStore.apiConfiguration);
				api.getSystemWaypoints({
					systemSymbol: parseSystemSymbol(this.headquarters.symbol),
					traits: WaypointTraitSymbol.Shipyard
				}).then(p => {
					this.shipyards = p.data;
				});
			}
		}
	}
});

export default useSystemsStore;
