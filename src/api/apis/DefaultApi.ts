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
  GetStatus200Response,
  Register201Response,
  RegisterRequest,
} from '../models/index';
import {
	GetStatus200ResponseFromJSON,
	GetStatus200ResponseToJSON,
	Register201ResponseFromJSON,
	Register201ResponseToJSON,
	RegisterRequestFromJSON,
	RegisterRequestToJSON,
} from '../models/index';

export interface RegisterOperationRequest {
	registerRequest?: RegisterRequest;
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {

	/**
	* Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
	* Get Status
	*/
	async getStatusRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetStatus200Response>> {
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
			path: `/`,
			method: 'GET',
			headers: headerParameters,
			query: queryParameters,
		}, initOverrides);

		return new runtime.JSONApiResponse(response, (jsonValue) => GetStatus200ResponseFromJSON(jsonValue));
	}

	/**
	* Return the status of the game server. This also includes a few global elements, such as announcements, server reset dates and leaderboards.
	* Get Status
	*/
	async getStatus(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetStatus200Response> {
		const response = await this.getStatusRaw(initOverrides);
		return await response.value();
	}

	/**
	* Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
	* Register New Agent
	*/
	async registerRaw(requestParameters: RegisterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Register201Response>> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		headerParameters['Content-Type'] = 'application/json';

		const response = await this.request({
			path: `/register`,
			method: 'POST',
			headers: headerParameters,
			query: queryParameters,
			body: RegisterRequestToJSON(requestParameters.registerRequest),
		}, initOverrides);

		return new runtime.JSONApiResponse(response, (jsonValue) => Register201ResponseFromJSON(jsonValue));
	}

	/**
	* Creates a new agent and ties it to an account.  The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
	* Register New Agent
	*/
	async register(requestParameters: RegisterOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Register201Response> {
		const response = await this.registerRaw(requestParameters, initOverrides);
		return await response.value();
	}

}
