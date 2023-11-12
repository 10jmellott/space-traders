<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { DefaultApi } from './api';
import { ref } from 'vue';

const api = new DefaultApi();
const configurationToken = ref('');

function updateConfigurationTokenAsync() {
	api.register({
		registerRequest: {
			faction: 'COSMIC',
			symbol: 'KINIKIBU'
		}
	}).then(p => configurationToken.value = p.data.token);
}
</script>

<template>
	<div>
		<p @click="updateConfigurationTokenAsync">Update Registration {{ configurationToken }}</p>
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
</style>
