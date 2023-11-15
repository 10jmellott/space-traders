<script setup lang="ts">
</script>

<template>
	<button><slot></slot></button>
</template>

<style lang="scss" scoped>
button {
	color: var(--foreground);
	border: 1px solid var(--foreground);
	border-radius: 8px;
	padding: 4px 12px;
	font-size: 1.125rem;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

	&:hover {
		background-color: var(--foreground);
		color: var(--background);
	}
}
</style>
