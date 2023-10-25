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
 * 
 * @export
 * @interface GetStatus200ResponseServerResets
 */
export interface GetStatus200ResponseServerResets {
    /**
     * The date and time when the game server will reset.
     * @type {string}
     * @memberof GetStatus200ResponseServerResets
     */
    next: string;
    /**
     * How often we intend to reset the game server.
     * @type {string}
     * @memberof GetStatus200ResponseServerResets
     */
    frequency: string;
}

/**
 * Check if a given object implements the GetStatus200ResponseServerResets interface.
 */
export function instanceOfGetStatus200ResponseServerResets(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "next" in value;
    isInstance = isInstance && "frequency" in value;

    return isInstance;
}

export function GetStatus200ResponseServerResetsFromJSON(json: any): GetStatus200ResponseServerResets {
    return GetStatus200ResponseServerResetsFromJSONTyped(json, false);
}

export function GetStatus200ResponseServerResetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStatus200ResponseServerResets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'next': json['next'],
        'frequency': json['frequency'],
    };
}

export function GetStatus200ResponseServerResetsToJSON(value?: GetStatus200ResponseServerResets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'next': value.next,
        'frequency': value.frequency,
    };
}
