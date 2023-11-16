<script setup lang="ts" generic="T">
import SelectOption from '@models/SelectOption';

defineProps<{
	modelValue: T,
	options: SelectOption<T>[]
}>();
defineEmits(['update:model-value']);
</script>

<template>
	<div class="select-input">
		<select @change="$emit('update:model-value', ($event.target as any)?.value)">
			<option v-for="option in options" :value="option.value">{{ option.label }}</option>
		</select>
		<font-awesome-icon class="select-input__chevron" icon="chevron-down" />
	</div>
</template>

<style lang="scss" scoped>
.select-input {
	display: flex;
	align-items: center;
	position: relative;

	&__chevron {
		position: absolute;
		right: 12px;
		pointer-events: none;
	}
}
select {
	border: 1px solid var(--foreground);
	border-radius: 8px;
	padding: 4px 12px;
	font-size: 1.125rem;
	text-align: center;
	color: var(--foreground);
	width: 100%;
}
</style>
