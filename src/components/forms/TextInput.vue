<script setup lang="ts">
defineProps<{
	modelValue: string
	pattern?: string | undefined
	placeholder?: string | undefined
}>();
defineEmits(['update:model-value']);
</script>

<template>
	<input
		type="text"
		:placeholder="placeholder"
		:pattern="pattern"
		:value="modelValue"
    	@input="$emit('update:model-value', ($event.target as any)?.value)"
	/>
</template>

<style lang="scss" scoped>
input {
	color: var(--foreground);
	border: 1px solid var(--foreground);
	border-radius: 8px;
	padding: 4px 12px;
	font-size: 1.125rem;

	&:invalid {
		border: 1px solid red;
	}

	&::placeholder {
		color: var(--foreground);
		opacity: 0.5;
		text-align: center;
	}
}
</style>
