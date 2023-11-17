import { FleetApi, Ship } from '@api';
import { defineStore } from 'pinia';
import useTokenStore from './tokenStore';

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
		}
	}
});

export default useFleetStore;
