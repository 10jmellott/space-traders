import { FleetApi, Ship, ShipyardShip } from '@api';
import { defineStore } from 'pinia';
import useTokenStore from './tokenStore';
import useAgentStore from './agentStore';

export const useFleetStore = defineStore('fleetStore', {
	state: () => ({
		fleet: [] as Ship[]
	}),
	actions: {
		refreshFleet() {
			const tokenStore = useTokenStore();
			if (tokenStore.token) {
				const api = new FleetApi(tokenStore.apiConfiguration);
				api.getMyShips().then(p => this.fleet = p.data);
			} else {
				this.fleet = [];
			}
		},
		purchaseShip(ship: ShipyardShip, waypointSymbol: string) {
			const agentStore = useAgentStore();
			if (ship?.type) {
				const api = new FleetApi(useTokenStore().apiConfiguration);
				api.purchaseShip({
					purchaseShipRequest: {
						shipType: ship.type,
						waypointSymbol: waypointSymbol
					}
				}).then(p => {
					if (agentStore.agent) {
						agentStore.agent.credits -= ship.purchasePrice;
					}
					this.fleet.push(p.data.ship);
				});
			}
		}
	}
});

export default useFleetStore;
