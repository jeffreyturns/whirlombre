<script setup lang="ts">
import { IconSize } from './Icon.vue'

type ButtonVariant = 'filled' | 'outlined' | 'text'

type EmitEvents = {
    (e: 'click'): void
}

const BUTTON_VARIANTS = {
  filled: 'btn-wl-filled',
  outlined: 'btn-wl-outlined',
  text: 'btn-wl-text',
  disabled: 'btn-wl-filled-disabled'
} as const

const props = defineProps<{
    text?: string
    href?: string
    disabled?: boolean
    variant?: ButtonVariant
    icon?: string
    iconSize?: IconSize
    iconLeft?: string
    iconRight?: string
}>()

const emit = defineEmits<EmitEvents>()

const onClick = () =>
  props.disabled ? null : emit('click')

const computeVariant = computed((): string => {
  if (props.icon) { return 'icon-btn-wl-text' }

  return props.disabled ? BUTTON_VARIANTS.disabled : BUTTON_VARIANTS[props.variant || 'filled']
})
</script>

<template>
  <NuxtLink :to="props.href" :class="computeVariant" @click="onClick()">
    <template v-if="props.iconLeft">
      <BaseIcon class="mr-1" :icon="props.iconLeft" :size="16" />
    </template>
    <template v-if="props.text || !props.icon">
      {{ props.text }}
    </template>
    <template v-else>
      <BaseIcon :icon="props.icon" :size="props.iconSize || 24" />
    </template>
    <template v-if="props.iconRight">
      <BaseIcon class="ml-1" :icon="props.iconRight" :size="16" />
    </template>
  </NuxtLink>
</template>
