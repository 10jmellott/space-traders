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
import type { Cooldown } from './Cooldown';
import {
	CooldownFromJSON,
	CooldownFromJSONTyped,
	CooldownToJSON,
} from './Cooldown';
import type { Survey } from './Survey';
import {
	SurveyFromJSON,
	SurveyFromJSONTyped,
	SurveyToJSON,
} from './Survey';

/**
 *
 * @export
 * @interface CreateSurvey201ResponseData
 */
export interface CreateSurvey201ResponseData {
	/**
	*
	* @type {Cooldown}
	* @memberof CreateSurvey201ResponseData
	*/
	cooldown: Cooldown;
	/**
	* Surveys created by this action.
	* @type {Array<Survey>}
	* @memberof CreateSurvey201ResponseData
	*/
	surveys: Array<Survey>;
}

/**
 * Check if a given object implements the CreateSurvey201ResponseData interface.
 */
export function instanceOfCreateSurvey201ResponseData(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "cooldown" in value;
	isInstance = isInstance && "surveys" in value;

	return isInstance;
}

export function CreateSurvey201ResponseDataFromJSON(json: any): CreateSurvey201ResponseData {
	return CreateSurvey201ResponseDataFromJSONTyped(json, false);
}

export function CreateSurvey201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSurvey201ResponseData {
	if ((json === undefined) || (json === null)) {
		return json;
	}
	return {

		'cooldown': CooldownFromJSON(json['cooldown']),
		'surveys': ((json['surveys'] as Array<any>).map(SurveyFromJSON)),
	};
}

export function CreateSurvey201ResponseDataToJSON(value?: CreateSurvey201ResponseData | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {

		'cooldown': CooldownToJSON(value.cooldown),
		'surveys': ((value.surveys as Array<any>).map(SurveyToJSON)),
	};
}
