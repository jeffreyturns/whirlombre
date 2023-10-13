<template>
    <div
        class="block pl-4 pr-6 py-3 rounded-sm bg-accent-50/75 text-surface-950 text-sm/6 my-5 last:mb-0 font-normal group relative">
        <ContentSlot
            :use="$slots.default"
            unwrap="p" />
    </div>
</template>
