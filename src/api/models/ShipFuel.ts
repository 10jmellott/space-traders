/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ShipFuelConsumed } from './ShipFuelConsumed';
import {
	ShipFuelConsumedFromJSON,
	ShipFuelConsumedFromJSONTyped,
	ShipFuelConsumedToJSON,
} from './ShipFuelConsumed';

/**
 * Details of the ship's fuel tanks including how much fuel was consumed during the last transit or action.
 * @export
 * @interface ShipFuel
 */
export interface ShipFuel {
	/**
	* The current amount of fuel in the ship's tanks.
	* @type {number}
	* @memberof ShipFuel
	*/
	current: number;
	/**
	* The maximum amount of fuel the ship's tanks can hold.
	* @type {number}
	* @memberof ShipFuel
	*/
	capacity: number;
	/**
	*
	* @type {ShipFuelConsumed}
	* @memberof ShipFuel
	*/
	consumed?: ShipFuelConsumed;
}

/**
 * Check if a given object implements the ShipFuel interface.
 */
export function instanceOfShipFuel(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "current" in value;
	isInstance = isInstance && "capacity" in value;

	return isInstance;
}

export function ShipFuelFromJSON(json: any): ShipFuel {
	return ShipFuelFromJSONTyped(json, false);
}

export function ShipFuelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipFuel {
	if ((json === undefined) || (json === null)) {
		return json;
	}
	return {

		'current': json['current'],
		'capacity': json['capacity'],
		'consumed': !exists(json, 'consumed') ? undefined : ShipFuelConsumedFromJSON(json['consumed']),
	};
}

export function ShipFuelToJSON(value?: ShipFuel | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {

		'current': value.current,
		'capacity': value.capacity,
		'consumed': ShipFuelConsumedToJSON(value.consumed),
	};
}
