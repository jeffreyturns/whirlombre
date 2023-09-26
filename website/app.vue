<script lang="ts" setup>
useHead({
    titleTemplate: title => {
        return title ? `${title} — Whirlombre` : 'Whirlombre'
    }
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
@import './styles/transitions.css';
</style>