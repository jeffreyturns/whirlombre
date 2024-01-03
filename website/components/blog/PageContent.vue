<template>
  <div class="pb-16 pt-8">
    <div class="mx-auto max-w-[86rem] px-4 lg:px-8 sm:px-6">
      <div class="relative gap-8 lg:grid lg:grid-cols-4">
        <aside class="hidden overflow-y-auto pb-8 lg:sticky lg:top-[4rem] lg:block lg:max-h-[calc(100vh-4rem)] lg:self-start lg:pt-8 lg:-mt-8 sm:-mb-16">
          <div class="space-y-3">
            <ContentDoc v-slot="{ doc }" :path="useRoute().path">
              <div class="relative w-full">
                <img :src="doc.cover" :alt="doc.title" class="aspect-[16/9] max-h-md w-full rounded-wl-small bg-surface-100 object-cover lg:aspect-[1/2]">
                <div class="absolute inset-0 rounded-wl-small ring-1 ring-surface-950/12 ring-inset" />
              </div>
              <div>
                <div>
                  <p class="mt-2 text-sm text-surface-500">
                    Published at
                  </p>
                  <time :datetime="formatDate(doc.publishedAt)">{{ formatDate(doc.publishedAt) }}</time>
                </div>
                <ul class="mt-4 lg:block divide-y divide-surface-950/12">
                  <li v-for="(link, index) in doc.body.toc.links" :key="index" class="w-full inline-flex items-center py-2 text-surface-600 transition-wl-colors hover:text-accent-800">
                    <a :href="`#${link.id}`" class="line-clamp-1 w-full text-sm/6" style="">{{ link.text }}</a>
                    <BaseIcon :size="18" icon="arrow_forward" />
                  </li>
                </ul>
              </div>
            </ContentDoc>
          </div>
        </aside>
        <div class="mt-12 flex items-center justify-center px-3 lg:hidden">
          <ContentDoc v-slot="{ doc }">
            <div class="relative max-w-3xl">
              <img :src="doc.cover" :alt="doc.title" class="rounded-wl-small bg-surface-100 object-cover">
              <div class="absolute inset-0 rounded-wl-small ring-1 ring-surface-950/12 ring-inset" />
            </div>
          </ContentDoc>
        </div>
        <main class="relative col-span-4 lg:col-span-3">
          <div class="[mask-image:linear-gradient(to_bottom,rgba(var(--un-preset-theme-colors-surface-950),0.95),transparent_100%)] hidden px-4 lg:flex md:px-8 sm:px-6">
            <div class="isolate h-sm overflow-hidden">
              <svg
                width="1002"
                height="1002"
                viewBox="0 0 1002 1002"
                class="pattern-wl-spin z-1 w-3xl stroke-surface-950">
                <path opacity="0.35" d="M501 1001L500.947 501.497L396.471 990.074L500.845 501.476L296.511 957.773L500.749 501.433L205.488 905.508L500.664 501.372L127.381 835.565L500.593 501.294L65.602 751L500.541 501.203L22.8523 655.508L500.508 501.104L1 553.264L500.497 501L1.00001 448.736L500.508 500.896L22.8523 346.491L500.541 500.797L65.6021 251L500.593 500.706L127.381 166.435L500.664 500.628L205.488 96.4915L500.749 500.567L296.511 44.2273L500.845 500.524L396.472 11.9262L500.947 500.503L501 1L501.053 500.503L605.528 11.9263L501.155 500.524L705.489 44.2273L501.251 500.567L796.511 96.4915L501.336 500.628L874.619 166.435L501.407 500.706L936.398 251L501.459 500.797L979.148 346.492L501.492 500.896L1001 448.736L501.503 501L1001 553.264L501.492 501.104L979.148 655.509L501.459 501.203L936.398 751L501.407 501.294L874.619 835.565L501.336 501.372L796.511 905.508L501.251 501.433L705.488 957.773L501.155 501.476L605.528 990.074L501.053 501.497L501 1001Z" stroke-width="2" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
