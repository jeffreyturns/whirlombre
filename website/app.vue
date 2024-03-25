<template>
  <AppHeader />
  <UNotifications />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <AppCommandPalette />
  <UDivider />
  <AppFooter />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300 ease-out-glide;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
