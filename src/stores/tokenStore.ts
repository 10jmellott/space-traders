import { Configuration, DefaultApi, FactionSymbols } from '@api';
import { defineStore } from 'pinia';

const localStorageKey = 'space-traders-token';

function cacheSettings(token: string) {
	localStorage?.setItem(localStorageKey, token);
}

const api = new DefaultApi();

export const useTokenStore = defineStore('tokenStore', {
	state: () => ({
		tokenCacheEnabled: false,
		token: localStorage?.getItem(localStorageKey) ?? '',
		tokenErrors: [] as string[]
	}),
	getters: {
		apiConfiguration(): Configuration {
			return new Configuration({
				accessToken: this.token
			});
		}
	},
	actions: {
		enableTokenCache() {
			if (this.tokenCacheEnabled) return;
			this.tokenCacheEnabled = true;
			cacheSettings(this.token);
			this.$subscribe(() => cacheSettings(this.token));
		},
		registerNewToken(faction: FactionSymbols, symbol: string) {
			return api.register({
				registerRequest: {
					faction: faction,
					symbol: symbol
				}
			}).then(p => this.token = p.data.token);
		}
	}
});

export default useTokenStore;
