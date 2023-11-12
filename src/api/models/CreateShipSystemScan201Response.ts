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
import type { CreateShipSystemScan201ResponseData } from './CreateShipSystemScan201ResponseData';
import {
	CreateShipSystemScan201ResponseDataFromJSON,
	CreateShipSystemScan201ResponseDataFromJSONTyped,
	CreateShipSystemScan201ResponseDataToJSON,
} from './CreateShipSystemScan201ResponseData';

/**
 *
 * @export
 * @interface CreateShipSystemScan201Response
 */
export interface CreateShipSystemScan201Response {
	/**
	*
	* @type {CreateShipSystemScan201ResponseData}
	* @memberof CreateShipSystemScan201Response
	*/
	data: CreateShipSystemScan201ResponseData;
}

/**
 * Check if a given object implements the CreateShipSystemScan201Response interface.
 */
export function instanceOfCreateShipSystemScan201Response(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "data" in value;

	return isInstance;
}

export function CreateShipSystemScan201ResponseFromJSON(json: any): CreateShipSystemScan201Response {
	return CreateShipSystemScan201ResponseFromJSONTyped(json, false);
}

export function CreateShipSystemScan201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateShipSystemScan201Response {
	if ((json === undefined) || (json === null)) {
		return json;
	}
	return {

		'data': CreateShipSystemScan201ResponseDataFromJSON(json['data']),
	};
}

export function CreateShipSystemScan201ResponseToJSON(value?: CreateShipSystemScan201Response | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {

		'data': CreateShipSystemScan201ResponseDataToJSON(value.data),
	};
}
