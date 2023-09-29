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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
