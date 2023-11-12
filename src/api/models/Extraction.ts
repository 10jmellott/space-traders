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
import type { ExtractionYield } from './ExtractionYield';
import {
	ExtractionYieldFromJSON,
	ExtractionYieldFromJSONTyped,
	ExtractionYieldToJSON,
} from './ExtractionYield';

/**
 * Extraction details.
 * @export
 * @interface Extraction
 */
export interface Extraction {
	/**
	* Symbol of the ship that executed the extraction.
	* @type {string}
	* @memberof Extraction
	*/
	shipSymbol: string;
	/**
	*
	* @type {ExtractionYield}
	* @memberof Extraction
	*/
	_yield: ExtractionYield;
}

/**
 * Check if a given object implements the Extraction interface.
 */
export function instanceOfExtraction(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "shipSymbol" in value;
	isInstance = isInstance && "_yield" in value;

	return isInstance;
}

export function ExtractionFromJSON(json: any): Extraction {
	return ExtractionFromJSONTyped(json, false);
}

export function ExtractionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Extraction {
	if ((json === undefined) || (json === null)) {
		return json;
	}
	return {

		'shipSymbol': json['shipSymbol'],
		'_yield': ExtractionYieldFromJSON(json['yield']),
	};
}

export function ExtractionToJSON(value?: Extraction | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {

		'shipSymbol': value.shipSymbol,
		'yield': ExtractionYieldToJSON(value._yield),
	};
}
