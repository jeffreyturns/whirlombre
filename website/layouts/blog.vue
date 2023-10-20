<script setup lang="ts">
import DefaultLayout from '~/layouts/default.vue'
</script>

<template>
  <DefaultLayout>
    <div class="pb-16 pt-8">
      <div class="mx-auto max-w-6xl px-4 lg:px-8 sm:px-6">
        <BlogBackAction />
        <div class="px-4 md:px-8 sm:px-6">
          <div class="mx-auto max-w-3xl">
            <main>
              <slot />
            </main>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
