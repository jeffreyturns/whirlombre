<script lang="ts" setup>
const notifications = useNotifications()
</script>

<template>
    <div
        aria-live="assertive"
        class="pointer-events-none fixed flex flex-col justify-end z-10 bottom-0 end-0 w-full sm:w-96 px-4 py-6">
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
    @apply transition-all duration-300;
}

.notification-group-enter-from,
.notification-group-leave-to {
    @apply transition-all opacity-0 transform translate-x-12 duration-300 ease-[cubic-bezier(.87,0,.13,1)];
}
</style>
