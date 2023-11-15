<script setup lang="ts" generic="T">
import SelectOption from '@models/SelectOption';

defineProps<{
	modelValue: T,
	options: SelectOption<T>[]
}>();
defineEmits(['update:model-value']);
</script>

<template>
	<select @change="$emit('update:model-value', ($event.target as any)?.value)">
		<option v-for="option in options" :value="option.value">{{ option.label }}</option>
	</select>
</template>

<style lang="scss" scoped>

select {
	border: 1px solid var(--foreground);
	border-radius: 8px;
	padding: 4px 12px;
	font-size: 1.125rem;
	text-align: center;
	color: var(--foreground);
}

</style>
