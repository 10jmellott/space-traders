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
import type { WaypointType } from './WaypointType';
import {
	WaypointTypeFromJSON,
	WaypointTypeFromJSONTyped,
	WaypointTypeToJSON,
} from './WaypointType';

/**
 * The destination or departure of a ships nav route.
 * @export
 * @interface ShipNavRouteWaypoint
 */
export interface ShipNavRouteWaypoint {
	/**
	* The symbol of the waypoint.
	* @type {string}
	* @memberof ShipNavRouteWaypoint
	*/
	symbol: string;
	/**
	*
	* @type {WaypointType}
	* @memberof ShipNavRouteWaypoint
	*/
	type: WaypointType;
	/**
	* The symbol of the system the waypoint is in.
	* @type {string}
	* @memberof ShipNavRouteWaypoint
	*/
	systemSymbol: string;
	/**
	* Position in the universe in the x axis.
	* @type {number}
	* @memberof ShipNavRouteWaypoint
	*/
	x: number;
	/**
	* Position in the universe in the y axis.
	* @type {number}
	* @memberof ShipNavRouteWaypoint
	*/
	y: number;
}

/**
 * Check if a given object implements the ShipNavRouteWaypoint interface.
 */
export function instanceOfShipNavRouteWaypoint(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "symbol" in value;
	isInstance = isInstance && "type" in value;
	isInstance = isInstance && "systemSymbol" in value;
	isInstance = isInstance && "x" in value;
	isInstance = isInstance && "y" in value;

	return isInstance;
}

export function ShipNavRouteWaypointFromJSON(json: any): ShipNavRouteWaypoint {
	return ShipNavRouteWaypointFromJSONTyped(json, false);
}

export function ShipNavRouteWaypointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipNavRouteWaypoint {
	if ((json === undefined) || (json === null)) {
		return json;
	}
	return {

		'symbol': json['symbol'],
		'type': WaypointTypeFromJSON(json['type']),
		'systemSymbol': json['systemSymbol'],
		'x': json['x'],
		'y': json['y'],
	};
}

export function ShipNavRouteWaypointToJSON(value?: ShipNavRouteWaypoint | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {

		'symbol': value.symbol,
		'type': WaypointTypeToJSON(value.type),
		'systemSymbol': value.systemSymbol,
		'x': value.x,
		'y': value.y,
	};
}
