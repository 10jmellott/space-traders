import { DefaultApi, FactionSymbols } from '@api';
import { defineStore } from 'pinia';

const localStorageKey = 'space-traders-token';

function cacheSettings(token: string) {
	localStorage?.setItem(localStorageKey, token);
}

const api = new DefaultApi();

export const useTokenStore = defineStore('token', {
	state: () => ({
		tokenCacheEnabled: false,
		token: localStorage?.getItem(localStorageKey) ?? ''
	}),
	actions: {
		enableTokenCache() {
			if (this.tokenCacheEnabled) return;
			this.tokenCacheEnabled = true;
			cacheSettings(this.token);
			this.$subscribe(() => cacheSettings(this.token));
		},
		registerNewToken(faction: FactionSymbols, symbol: string) {
			api.register({
				registerRequest: {
					faction: faction,
					symbol: symbol
				}
			}).then(p => this.token = p.data.token);
		}
	}
});
