<script setup lang="ts">
import { useTokenStore } from './stores/tokenStore';
const tokenStore = useTokenStore();
tokenStore.enableTokenCache();
</script>

<template>
	<p @click="tokenStore.registerNewToken('COSMIC', 'trailblazer')">Update Registration</p>
	<p>{{ tokenStore.token }}</p>
</template>

<style scoped>
</style>
