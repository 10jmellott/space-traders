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
  GetAgents200Response,
  GetMyAgent200Response,
} from '../models/index';
import {
	GetAgents200ResponseFromJSON,
	GetAgents200ResponseToJSON,
	GetMyAgent200ResponseFromJSON,
	GetMyAgent200ResponseToJSON,
} from '../models/index';

export interface GetAgentRequest {
	agentSymbol: string;
}

export interface GetAgentsRequest {
	page?: number;
	limit?: number;
}

/**
 *
 */
export class AgentsApi extends runtime.BaseAPI {

	/**
	* Fetch agent details.
	* Get Public Agent
	*/
	async getAgentRaw(requestParameters: GetAgentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetMyAgent200Response>> {
		if (requestParameters.agentSymbol === null || requestParameters.agentSymbol === undefined) {
			throw new runtime.RequiredError('agentSymbol','Required parameter requestParameters.agentSymbol was null or undefined when calling getAgent.');
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
			path: `/agents/{agentSymbol}`.replace(`{${"agentSymbol"}}`, encodeURIComponent(String(requestParameters.agentSymbol))),
			method: 'GET',
			headers: headerParameters,
			query: queryParameters,
		}, initOverrides);

		return new runtime.JSONApiResponse(response, (jsonValue) => GetMyAgent200ResponseFromJSON(jsonValue));
	}

	/**
	* Fetch agent details.
	* Get Public Agent
	*/
	async getAgent(requestParameters: GetAgentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMyAgent200Response> {
		const response = await this.getAgentRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	* Fetch agents details.
	* List Agents
	*/
	async getAgentsRaw(requestParameters: GetAgentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAgents200Response>> {
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
			path: `/agents`,
			method: 'GET',
			headers: headerParameters,
			query: queryParameters,
		}, initOverrides);

		return new runtime.JSONApiResponse(response, (jsonValue) => GetAgents200ResponseFromJSON(jsonValue));
	}

	/**
	* Fetch agents details.
	* List Agents
	*/
	async getAgents(requestParameters: GetAgentsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAgents200Response> {
		const response = await this.getAgentsRaw(requestParameters, initOverrides);
		return await response.value();
	}

	/**
	* Fetch your agent\'s details.
	* Get Agent
	*/
	async getMyAgentRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetMyAgent200Response>> {
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
			path: `/my/agent`,
			method: 'GET',
			headers: headerParameters,
			query: queryParameters,
		}, initOverrides);

		return new runtime.JSONApiResponse(response, (jsonValue) => GetMyAgent200ResponseFromJSON(jsonValue));
	}

	/**
	* Fetch your agent\'s details.
	* Get Agent
	*/
	async getMyAgent(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMyAgent200Response> {
		const response = await this.getMyAgentRaw(initOverrides);
		return await response.value();
	}

}
