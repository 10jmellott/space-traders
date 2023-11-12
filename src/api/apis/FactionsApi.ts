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


import * as runtime from '../runtime';
import type {
  GetFaction200Response,
  GetFactions200Response,
} from '../models/index';
import {
	GetFaction200ResponseFromJSON,
	GetFaction200ResponseToJSON,
	GetFactions200ResponseFromJSON,
	GetFactions200ResponseToJSON,
} from '../models/index';

export interface GetFactionRequest {
	factionSymbol: string;
}

export interface GetFactionsRequest {
	page?: number;
	limit?: number;
}

/**
 *
 */
export class FactionsApi extends runtime.BaseAPI {

	/**
	* View the details of a faction.
	* Get Faction
	*/
	async getFactionRaw(requestParameters: GetFactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFaction200Response>> {
		if (requestParameters.factionSymbol === null || requestParameters.factionSymbol === undefined) {
			throw new runtime.RequiredError('factionSymbol','Required parameter requestParameters.factionSymbol was null or undefined when calling getFaction.');
		}

		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		if (this.configuration && this.configuration.accessToken) {
			const token = this.configuration.accessToken;
			const tokenString = await token("AgentToken", []);

			if (tokenString) {
				headerParameters["Authorization"] = `Bearer ${tokenString}`;
			}
		}
		const response = await this.request({
			path: `/factions/{factionSymbol}`.replace(`{${"factionSymbol"}}`, encodeURIComponent(String(requestParameters.factionSymbol))),
			method: 'GET',
			headers: headerParameters,
			query: queryParameters,
		}, initOverrides);

		return new runtime.JSONApiResponse(response, (jsonValue) => GetFaction200ResponseFromJSON(jsonValue));
	}

	/**
	* View the details of a faction.
	* Get Faction
	*/
	async getFaction(requestParameters: GetFactionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFaction200Response> {
		const response = await this.getFactionRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	* Return a paginated list of all the factions in the game.
	* List Factions
	*/
	async getFactionsRaw(requestParameters: GetFactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFactions200Response>> {
		const queryParameters: any = {};

		if (requestParameters.page !== undefined) {
			queryParameters['page'] = requestParameters.page;
		}

		if (requestParameters.limit !== undefined) {
			queryParameters['limit'] = requestParameters.limit;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		if (this.configuration && this.configuration.accessToken) {
			const token = this.configuration.accessToken;
			const tokenString = await token("AgentToken", []);

			if (tokenString) {
				headerParameters["Authorization"] = `Bearer ${tokenString}`;
			}
		}
		const response = await this.request({
			path: `/factions`,
			method: 'GET',
			headers: headerParameters,
			query: queryParameters,
		}, initOverrides);

		return new runtime.JSONApiResponse(response, (jsonValue) => GetFactions200ResponseFromJSON(jsonValue));
	}

	/**
	* Return a paginated list of all the factions in the game.
	* List Factions
	*/
	async getFactions(requestParameters: GetFactionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFactions200Response> {
		const response = await this.getFactionsRaw(requestParameters, initOverrides);
		return await response.value();
	}

}
