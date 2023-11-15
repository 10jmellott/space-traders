<script setup lang="ts">
import { useTokenStore } from '@stores/tokenStore';
import NewGame from '@components/NewGame.vue';
const tokenStore = useTokenStore();
tokenStore.enableTokenCache();
</script>

<template>
	<NewGame class="new-game" v-if="!tokenStore.token" />
	<div v-else>
		<p>{{ tokenStore.token.slice(0, 20) }}</p>
		<button @click="tokenStore.token = ''">Clear</button>
	</div>
</template>

<style lang="scss" scoped>
.new-game {
	width: 320px;
	background: var(--background-accent);
	border-radius: 12px;

}
</style>
