<script lang="ts" setup>
const notifications = useNotifications()
</script>

<template>
  <div
    aria-live="assertive"
    class="pointer-events-none fixed end-0 bottom-0 z-10 w-full flex flex-col justify-end px-4 py-6 sm:w-96">
    <TransitionGroup
      name="notification-group"
      tag="div">
      <Notification
        v-for="it in notifications"
        :key="it.id"
        :notification="it"
        @close="dismissNotification(it.id)" />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.notification-group-move,
.notification-group-enter-active,
.notification-group-leave-active {
    @apply anim-all-short duration-300;
}

.notification-group-enter-from,
.notification-group-leave-to {
    @apply anim-all-short opacity-0 transform translate-x-12 duration-300;
}
</style>
