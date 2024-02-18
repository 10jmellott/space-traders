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
  GetConstruction200Response,
  GetJumpGate200Response,
  GetMarket200Response,
  GetShipyard200Response,
  GetSystem200Response,
  GetSystemWaypoints200Response,
  GetSystems200Response,
  GetWaypoint200Response,
  SupplyConstruction201Response,
  SupplyConstructionRequest,
  WaypointType,
} from '../models/index';
import type {
	GetSystemWaypointsTraitsParameter
} from '../models/GetSystemWaypointsTraitsParameter';
import {
    GetConstruction200ResponseFromJSON,
    GetConstruction200ResponseToJSON,
    GetJumpGate200ResponseFromJSON,
    GetJumpGate200ResponseToJSON,
    GetMarket200ResponseFromJSON,
    GetMarket200ResponseToJSON,
    GetShipyard200ResponseFromJSON,
    GetShipyard200ResponseToJSON,
    GetSystem200ResponseFromJSON,
    GetSystem200ResponseToJSON,
    GetSystemWaypoints200ResponseFromJSON,
    GetSystemWaypoints200ResponseToJSON,
    GetSystems200ResponseFromJSON,
    GetSystems200ResponseToJSON,
    GetWaypoint200ResponseFromJSON,
    GetWaypoint200ResponseToJSON,
    SupplyConstruction201ResponseFromJSON,
    SupplyConstruction201ResponseToJSON,
    SupplyConstructionRequestFromJSON,
    SupplyConstructionRequestToJSON,
    WaypointTypeFromJSON,
    WaypointTypeToJSON,
} from '../models/index';

export interface GetConstructionRequest {
    systemSymbol: string;
    waypointSymbol: string;
}

export interface GetJumpGateRequest {
    systemSymbol: string;
    waypointSymbol: string;
}

export interface GetMarketRequest {
    systemSymbol: string;
    waypointSymbol: string;
}

export interface GetShipyardRequest {
    systemSymbol: string;
    waypointSymbol: string;
}

export interface GetSystemRequest {
    systemSymbol: string;
}

export interface GetSystemWaypointsRequest {
    systemSymbol: string;
    page?: number;
    limit?: number;
    type?: WaypointType;
    traits?: GetSystemWaypointsTraitsParameter;
}

export interface GetSystemsRequest {
    page?: number;
    limit?: number;
}

export interface GetWaypointRequest {
    systemSymbol: string;
    waypointSymbol: string;
}

export interface SupplyConstructionOperationRequest {
    systemSymbol: string;
    waypointSymbol: string;
    supplyConstructionRequest?: SupplyConstructionRequest;
}

/**
 *
 */
export class SystemsApi extends runtime.BaseAPI {

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     */
    async getConstructionRaw(requestParameters: GetConstructionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetConstruction200Response>> {
        if (requestParameters.systemSymbol === null || requestParameters.systemSymbol === undefined) {
            throw new runtime.RequiredError('systemSymbol','Required parameter requestParameters.systemSymbol was null or undefined when calling getConstruction.');
        }

        if (requestParameters.waypointSymbol === null || requestParameters.waypointSymbol === undefined) {
            throw new runtime.RequiredError('waypointSymbol','Required parameter requestParameters.waypointSymbol was null or undefined when calling getConstruction.');
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
            path: `/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction`.replace(`{${"systemSymbol"}}`, encodeURIComponent(String(requestParameters.systemSymbol))).replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(requestParameters.waypointSymbol))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetConstruction200ResponseFromJSON(jsonValue));
    }

    /**
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     * Get Construction Site
     */
    async getConstruction(requestParameters: GetConstructionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetConstruction200Response> {
        const response = await this.getConstructionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be
     * Get Jump Gate
     */
    async getJumpGateRaw(requestParameters: GetJumpGateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetJumpGate200Response>> {
        if (requestParameters.systemSymbol === null || requestParameters.systemSymbol === undefined) {
            throw new runtime.RequiredError('systemSymbol','Required parameter requestParameters.systemSymbol was null or undefined when calling getJumpGate.');
        }

        if (requestParameters.waypointSymbol === null || requestParameters.waypointSymbol === undefined) {
            throw new runtime.RequiredError('waypointSymbol','Required parameter requestParameters.waypointSymbol was null or undefined when calling getJumpGate.');
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
            path: `/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate`.replace(`{${"systemSymbol"}}`, encodeURIComponent(String(requestParameters.systemSymbol))).replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(requestParameters.waypointSymbol))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetJumpGate200ResponseFromJSON(jsonValue));
    }

    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  Waypoints connected to this jump gate can be
     * Get Jump Gate
     */
    async getJumpGate(requestParameters: GetJumpGateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetJumpGate200Response> {
        const response = await this.getJumpGateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     */
    async getMarketRaw(requestParameters: GetMarketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetMarket200Response>> {
        if (requestParameters.systemSymbol === null || requestParameters.systemSymbol === undefined) {
            throw new runtime.RequiredError('systemSymbol','Required parameter requestParameters.systemSymbol was null or undefined when calling getMarket.');
        }

        if (requestParameters.waypointSymbol === null || requestParameters.waypointSymbol === undefined) {
            throw new runtime.RequiredError('waypointSymbol','Required parameter requestParameters.waypointSymbol was null or undefined when calling getMarket.');
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
            path: `/systems/{systemSymbol}/waypoints/{waypointSymbol}/market`.replace(`{${"systemSymbol"}}`, encodeURIComponent(String(requestParameters.systemSymbol))).replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(requestParameters.waypointSymbol))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetMarket200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * Get Market
     */
    async getMarket(requestParameters: GetMarketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMarket200Response> {
        const response = await this.getMarketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     */
    async getShipyardRaw(requestParameters: GetShipyardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetShipyard200Response>> {
        if (requestParameters.systemSymbol === null || requestParameters.systemSymbol === undefined) {
            throw new runtime.RequiredError('systemSymbol','Required parameter requestParameters.systemSymbol was null or undefined when calling getShipyard.');
        }

        if (requestParameters.waypointSymbol === null || requestParameters.waypointSymbol === undefined) {
            throw new runtime.RequiredError('waypointSymbol','Required parameter requestParameters.waypointSymbol was null or undefined when calling getShipyard.');
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
            path: `/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard`.replace(`{${"systemSymbol"}}`, encodeURIComponent(String(requestParameters.systemSymbol))).replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(requestParameters.waypointSymbol))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetShipyard200ResponseFromJSON(jsonValue));
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     */
    async getShipyard(requestParameters: GetShipyardRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetShipyard200Response> {
        const response = await this.getShipyardRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the details of a system.
     * Get System
     */
    async getSystemRaw(requestParameters: GetSystemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSystem200Response>> {
        if (requestParameters.systemSymbol === null || requestParameters.systemSymbol === undefined) {
            throw new runtime.RequiredError('systemSymbol','Required parameter requestParameters.systemSymbol was null or undefined when calling getSystem.');
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
            path: `/systems/{systemSymbol}`.replace(`{${"systemSymbol"}}`, encodeURIComponent(String(requestParameters.systemSymbol))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSystem200ResponseFromJSON(jsonValue));
    }

    /**
     * Get the details of a system.
     * Get System
     */
    async getSystem(requestParameters: GetSystemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSystem200Response> {
        const response = await this.getSystemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     */
    async getSystemWaypointsRaw(requestParameters: GetSystemWaypointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSystemWaypoints200Response>> {
        if (requestParameters.systemSymbol === null || requestParameters.systemSymbol === undefined) {
            throw new runtime.RequiredError('systemSymbol','Required parameter requestParameters.systemSymbol was null or undefined when calling getSystemWaypoints.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.traits !== undefined) {
            queryParameters['traits'] = requestParameters.traits;
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
            path: `/systems/{systemSymbol}/waypoints`.replace(`{${"systemSymbol"}}`, encodeURIComponent(String(requestParameters.systemSymbol))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSystemWaypoints200ResponseFromJSON(jsonValue));
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * List Waypoints in System
     */
    async getSystemWaypoints(requestParameters: GetSystemWaypointsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSystemWaypoints200Response> {
        const response = await this.getSystemWaypointsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     */
    async getSystemsRaw(requestParameters: GetSystemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSystems200Response>> {
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
            path: `/systems`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSystems200ResponseFromJSON(jsonValue));
    }

    /**
     * Return a paginated list of all systems.
     * List Systems
     */
    async getSystems(requestParameters: GetSystemsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSystems200Response> {
        const response = await this.getSystemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     */
    async getWaypointRaw(requestParameters: GetWaypointRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetWaypoint200Response>> {
        if (requestParameters.systemSymbol === null || requestParameters.systemSymbol === undefined) {
            throw new runtime.RequiredError('systemSymbol','Required parameter requestParameters.systemSymbol was null or undefined when calling getWaypoint.');
        }

        if (requestParameters.waypointSymbol === null || requestParameters.waypointSymbol === undefined) {
            throw new runtime.RequiredError('waypointSymbol','Required parameter requestParameters.waypointSymbol was null or undefined when calling getWaypoint.');
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
            path: `/systems/{systemSymbol}/waypoints/{waypointSymbol}`.replace(`{${"systemSymbol"}}`, encodeURIComponent(String(requestParameters.systemSymbol))).replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(requestParameters.waypointSymbol))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetWaypoint200ResponseFromJSON(jsonValue));
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * Get Waypoint
     */
    async getWaypoint(requestParameters: GetWaypointRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWaypoint200Response> {
        const response = await this.getWaypointRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     */
    async supplyConstructionRaw(requestParameters: SupplyConstructionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SupplyConstruction201Response>> {
        if (requestParameters.systemSymbol === null || requestParameters.systemSymbol === undefined) {
            throw new runtime.RequiredError('systemSymbol','Required parameter requestParameters.systemSymbol was null or undefined when calling supplyConstruction.');
        }

        if (requestParameters.waypointSymbol === null || requestParameters.waypointSymbol === undefined) {
            throw new runtime.RequiredError('waypointSymbol','Required parameter requestParameters.waypointSymbol was null or undefined when calling supplyConstruction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("AgentToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply`.replace(`{${"systemSymbol"}}`, encodeURIComponent(String(requestParameters.systemSymbol))).replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(requestParameters.waypointSymbol))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SupplyConstructionRequestToJSON(requestParameters.supplyConstructionRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SupplyConstruction201ResponseFromJSON(jsonValue));
    }

    /**
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.  The good must be in your ship\'s cargo. The good will be removed from your ship\'s cargo and added to the construction site\'s materials.
     * Supply Construction Site
     */
    async supplyConstruction(requestParameters: SupplyConstructionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SupplyConstruction201Response> {
        const response = await this.supplyConstructionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
