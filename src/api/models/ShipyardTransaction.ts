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
/**
 * Results of a transaction with a shipyard.
 * @export
 * @interface ShipyardTransaction
 */
export interface ShipyardTransaction {
	/**
	* The symbol of the waypoint where the transaction took place.
	* @type {string}
	* @memberof ShipyardTransaction
	*/
	waypointSymbol: string;
	/**
	* The symbol of the ship that was the subject of the transaction.
	* @type {string}
	* @memberof ShipyardTransaction
	*/
	shipSymbol: string;
	/**
	* The price of the transaction.
	* @type {number}
	* @memberof ShipyardTransaction
	*/
	price: number;
	/**
	* The symbol of the agent that made the transaction.
	* @type {string}
	* @memberof ShipyardTransaction
	*/
	agentSymbol: string;
	/**
	* The timestamp of the transaction.
	* @type {Date}
	* @memberof ShipyardTransaction
	*/
	timestamp: Date;
}

/**
 * Check if a given object implements the ShipyardTransaction interface.
 */
export function instanceOfShipyardTransaction(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "waypointSymbol" in value;
	isInstance = isInstance && "shipSymbol" in value;
	isInstance = isInstance && "price" in value;
	isInstance = isInstance && "agentSymbol" in value;
	isInstance = isInstance && "timestamp" in value;

	return isInstance;
}

export function ShipyardTransactionFromJSON(json: any): ShipyardTransaction {
	return ShipyardTransactionFromJSONTyped(json, false);
}

export function ShipyardTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipyardTransaction {
	if ((json === undefined) || (json === null)) {
		return json;
	}
	return {

		'waypointSymbol': json['waypointSymbol'],
		'shipSymbol': json['shipSymbol'],
		'price': json['price'],
		'agentSymbol': json['agentSymbol'],
		'timestamp': (new Date(json['timestamp'])),
	};
}

export function ShipyardTransactionToJSON(value?: ShipyardTransaction | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {

		'waypointSymbol': value.waypointSymbol,
		'shipSymbol': value.shipSymbol,
		'price': value.price,
		'agentSymbol': value.agentSymbol,
		'timestamp': (value.timestamp.toISOString()),
	};
}
