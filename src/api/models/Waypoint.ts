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
import type { Chart } from './Chart';
import {
    ChartFromJSON,
    ChartFromJSONTyped,
    ChartToJSON,
} from './Chart';
import type { WaypointFaction } from './WaypointFaction';
import {
    WaypointFactionFromJSON,
    WaypointFactionFromJSONTyped,
    WaypointFactionToJSON,
} from './WaypointFaction';
import type { WaypointOrbital } from './WaypointOrbital';
import {
    WaypointOrbitalFromJSON,
    WaypointOrbitalFromJSONTyped,
    WaypointOrbitalToJSON,
} from './WaypointOrbital';
import type { WaypointTrait } from './WaypointTrait';
import {
    WaypointTraitFromJSON,
    WaypointTraitFromJSONTyped,
    WaypointTraitToJSON,
} from './WaypointTrait';
import type { WaypointType } from './WaypointType';
import {
    WaypointTypeFromJSON,
    WaypointTypeFromJSONTyped,
    WaypointTypeToJSON,
} from './WaypointType';

/**
 * A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
 * @export
 * @interface Waypoint
 */
export interface Waypoint {
    /**
     * Symbol fo the waypoint.
     * @type {string}
     * @memberof Waypoint
     */
    symbol: string;
    /**
     * 
     * @type {WaypointType}
     * @memberof Waypoint
     */
    type: WaypointType;
    /**
     * The symbol of the system this waypoint belongs to.
     * @type {string}
     * @memberof Waypoint
     */
    systemSymbol: string;
    /**
     * Relative position of the waypoint on the system's x axis. This is not an absolute position in the universe.
     * @type {number}
     * @memberof Waypoint
     */
    x: number;
    /**
     * Relative position of the waypoint on the system's y axis. This is not an absolute position in the universe.
     * @type {number}
     * @memberof Waypoint
     */
    y: number;
    /**
     * Waypoints that orbit this waypoint.
     * @type {Array<WaypointOrbital>}
     * @memberof Waypoint
     */
    orbitals: Array<WaypointOrbital>;
    /**
     * The symbol of the parent waypoint, if this waypoint is in orbit around another waypoint. Otherwise this value is undefined.
     * @type {string}
     * @memberof Waypoint
     */
    orbits?: string;
    /**
     * 
     * @type {WaypointFaction}
     * @memberof Waypoint
     */
    faction?: WaypointFaction;
    /**
     * The traits of the waypoint.
     * @type {Array<WaypointTrait>}
     * @memberof Waypoint
     */
    traits: Array<WaypointTrait>;
    /**
     * 
     * @type {Chart}
     * @memberof Waypoint
     */
    chart?: Chart;
}

/**
 * Check if a given object implements the Waypoint interface.
 */
export function instanceOfWaypoint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "systemSymbol" in value;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;
    isInstance = isInstance && "orbitals" in value;
    isInstance = isInstance && "traits" in value;

    return isInstance;
}

export function WaypointFromJSON(json: any): Waypoint {
    return WaypointFromJSONTyped(json, false);
}

export function WaypointFromJSONTyped(json: any, ignoreDiscriminator: boolean): Waypoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'type': WaypointTypeFromJSON(json['type']),
        'systemSymbol': json['systemSymbol'],
        'x': json['x'],
        'y': json['y'],
        'orbitals': ((json['orbitals'] as Array<any>).map(WaypointOrbitalFromJSON)),
        'orbits': !exists(json, 'orbits') ? undefined : json['orbits'],
        'faction': !exists(json, 'faction') ? undefined : WaypointFactionFromJSON(json['faction']),
        'traits': ((json['traits'] as Array<any>).map(WaypointTraitFromJSON)),
        'chart': !exists(json, 'chart') ? undefined : ChartFromJSON(json['chart']),
    };
}

export function WaypointToJSON(value?: Waypoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'symbol': value.symbol,
        'type': WaypointTypeToJSON(value.type),
        'systemSymbol': value.systemSymbol,
        'x': value.x,
        'y': value.y,
        'orbitals': ((value.orbitals as Array<any>).map(WaypointOrbitalToJSON)),
        'orbits': value.orbits,
        'faction': WaypointFactionToJSON(value.faction),
        'traits': ((value.traits as Array<any>).map(WaypointTraitToJSON)),
        'chart': ChartToJSON(value.chart),
    };
}

