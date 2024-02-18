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
import type { WaypointTraitSymbol } from './WaypointTraitSymbol';
import {
    WaypointTraitSymbolFromJSON,
    WaypointTraitSymbolFromJSONTyped,
    WaypointTraitSymbolToJSON,
} from './WaypointTraitSymbol';

/**
 * 
 * @export
 * @interface WaypointTrait
 */
export interface WaypointTrait {
    /**
     * 
     * @type {WaypointTraitSymbol}
     * @memberof WaypointTrait
     */
    symbol: WaypointTraitSymbol;
    /**
     * The name of the trait.
     * @type {string}
     * @memberof WaypointTrait
     */
    name: string;
    /**
     * A description of the trait.
     * @type {string}
     * @memberof WaypointTrait
     */
    description: string;
}

/**
 * Check if a given object implements the WaypointTrait interface.
 */
export function instanceOfWaypointTrait(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function WaypointTraitFromJSON(json: any): WaypointTrait {
    return WaypointTraitFromJSONTyped(json, false);
}

export function WaypointTraitFromJSONTyped(json: any, ignoreDiscriminator: boolean): WaypointTrait {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': WaypointTraitSymbolFromJSON(json['symbol']),
        'name': json['name'],
        'description': json['description'],
    };
}

export function WaypointTraitToJSON(value?: WaypointTrait | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'symbol': WaypointTraitSymbolToJSON(value.symbol),
        'name': value.name,
        'description': value.description,
    };
}

