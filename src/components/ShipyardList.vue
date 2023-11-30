<script setup lang="ts">
import ButtonInput from './forms/ButtonInput.vue';
import { parseSystemSymbol } from '@stores/systemsStore';
import useTokenStore from '@stores/tokenStore';
import { Waypoint, WaypointTraitSymbolEnum, Shipyard as SY, SystemsApi, ShipyardShip } from '@api';
import useFleetStore from '@/stores/fleetStore';
import { ref } from 'vue';

const fleetStore = useFleetStore();

const props = defineProps<{
	waypoint: Waypoint | null
}>();

const shipyard = ref<SY>();

function getShipyard() {
	if (props.waypoint?.symbol) {
		const api = new SystemsApi(useTokenStore().apiConfiguration);
		api.getShipyard({
			systemSymbol: parseSystemSymbol(props.waypoint.symbol),
			waypointSymbol: props.waypoint.symbol
		}).then(p => shipyard.value = p.data);
	}
}

function purchaseShip(ship: ShipyardShip) {
	if (props.waypoint) {
		fleetStore.purchaseShip(ship, props.waypoint.symbol);
	}
	shipyard.value = undefined;
}
</script>

<template>
	<div class="shipyard" v-if="waypoint?.traits.some(t => t.symbol === WaypointTraitSymbolEnum.Shipyard)">
		<ButtonInput class="shipyard__button" @click="getShipyard" v-show="!shipyard">
			<font-awesome-icon icon="magnifying-glass" />
			<span>Search Ships</span>
		</ButtonInput>

		<h2 v-if="shipyard?.ships">Ships</h2>
		<div class="shipyard__ships" v-if="shipyard?.ships">
			<div class="shipyard__ship" v-for="ship in shipyard.ships" :key="ship.name">
				<h3>{{ ship.name }}</h3>
				<p>{{ ship.description }}</p>
				<div class="shipyard__ship-purchase">
					<ButtonInput class="shipyard__button" @click="purchaseShip(ship)">Purchase</ButtonInput>
					<font-awesome-icon icon="coins" />
					<span>{{ ship.purchasePrice }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.shipyard {
	h2 {
		font-size: 1.25rem;
		font-weight: 500;
		margin-bottom: 8px;
	}

	&__button {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	&__ship {
		border-top: 1px solid var(--foreground-accent);
		padding-top: 8px;
		margin-bottom: 8px;
		display: flex;
		flex-direction: column;
		gap: 8px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	&__ship-purchase {
		display: flex;
		align-items: center;
		gap: 8px;
	}
}
</style>
