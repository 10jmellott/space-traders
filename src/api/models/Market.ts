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
import type { MarketTradeGood } from './MarketTradeGood';
import {
	MarketTradeGoodFromJSON,
	MarketTradeGoodFromJSONTyped,
	MarketTradeGoodToJSON,
} from './MarketTradeGood';
import type { MarketTransaction } from './MarketTransaction';
import {
	MarketTransactionFromJSON,
	MarketTransactionFromJSONTyped,
	MarketTransactionToJSON,
} from './MarketTransaction';
import type { TradeGood } from './TradeGood';
import {
	TradeGoodFromJSON,
	TradeGoodFromJSONTyped,
	TradeGoodToJSON,
} from './TradeGood';

/**
 *
 * @export
 * @interface Market
 */
export interface Market {
	/**
	* The symbol of the market. The symbol is the same as the waypoint where the market is located.
	* @type {string}
	* @memberof Market
	*/
	symbol: string;
	/**
	* The list of goods that are exported from this market.
	* @type {Array<TradeGood>}
	* @memberof Market
	*/
	exports: Array<TradeGood>;
	/**
	* The list of goods that are sought as imports in this market.
	* @type {Array<TradeGood>}
	* @memberof Market
	*/
	imports: Array<TradeGood>;
	/**
	* The list of goods that are bought and sold between agents at this market.
	* @type {Array<TradeGood>}
	* @memberof Market
	*/
	exchange: Array<TradeGood>;
	/**
	* The list of recent transactions at this market. Visible only when a ship is present at the market.
	* @type {Array<MarketTransaction>}
	* @memberof Market
	*/
	transactions?: Array<MarketTransaction>;
	/**
	* The list of goods that are traded at this market. Visible only when a ship is present at the market.
	* @type {Array<MarketTradeGood>}
	* @memberof Market
	*/
	tradeGoods?: Array<MarketTradeGood>;
}

/**
 * Check if a given object implements the Market interface.
 */
export function instanceOfMarket(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "symbol" in value;
	isInstance = isInstance && "exports" in value;
	isInstance = isInstance && "imports" in value;
	isInstance = isInstance && "exchange" in value;

	return isInstance;
}

export function MarketFromJSON(json: any): Market {
	return MarketFromJSONTyped(json, false);
}

export function MarketFromJSONTyped(json: any, ignoreDiscriminator: boolean): Market {
	if ((json === undefined) || (json === null)) {
		return json;
	}
	return {

		'symbol': json['symbol'],
		'exports': ((json['exports'] as Array<any>).map(TradeGoodFromJSON)),
		'imports': ((json['imports'] as Array<any>).map(TradeGoodFromJSON)),
		'exchange': ((json['exchange'] as Array<any>).map(TradeGoodFromJSON)),
		'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(MarketTransactionFromJSON)),
		'tradeGoods': !exists(json, 'tradeGoods') ? undefined : ((json['tradeGoods'] as Array<any>).map(MarketTradeGoodFromJSON)),
	};
}

export function MarketToJSON(value?: Market | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {

		'symbol': value.symbol,
		'exports': ((value.exports as Array<any>).map(TradeGoodToJSON)),
		'imports': ((value.imports as Array<any>).map(TradeGoodToJSON)),
		'exchange': ((value.exchange as Array<any>).map(TradeGoodToJSON)),
		'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(MarketTransactionToJSON)),
		'tradeGoods': value.tradeGoods === undefined ? undefined : ((value.tradeGoods as Array<any>).map(MarketTradeGoodToJSON)),
	};
}
