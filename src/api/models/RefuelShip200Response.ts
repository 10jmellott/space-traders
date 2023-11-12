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
import type { RefuelShip200ResponseData } from './RefuelShip200ResponseData';
import {
	RefuelShip200ResponseDataFromJSON,
	RefuelShip200ResponseDataFromJSONTyped,
	RefuelShip200ResponseDataToJSON,
} from './RefuelShip200ResponseData';

/**
 *
 * @export
 * @interface RefuelShip200Response
 */
export interface RefuelShip200Response {
	/**
	*
	* @type {RefuelShip200ResponseData}
	* @memberof RefuelShip200Response
	*/
	data: RefuelShip200ResponseData;
}

/**
 * Check if a given object implements the RefuelShip200Response interface.
 */
export function instanceOfRefuelShip200Response(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "data" in value;

	return isInstance;
}

export function RefuelShip200ResponseFromJSON(json: any): RefuelShip200Response {
	return RefuelShip200ResponseFromJSONTyped(json, false);
}

export function RefuelShip200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefuelShip200Response {
	if ((json === undefined) || (json === null)) {
		return json;
	}
	return {

		'data': RefuelShip200ResponseDataFromJSON(json['data']),
	};
}

export function RefuelShip200ResponseToJSON(value?: RefuelShip200Response | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {

		'data': RefuelShip200ResponseDataToJSON(value.data),
	};
}
