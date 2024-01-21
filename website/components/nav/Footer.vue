<script setup lang="ts">
const navigation = [
  { name: 'Documentation', href: '/docs' },
  { name: 'Palette Generator', href: '/generator' },
  { name: 'Site Color', href: '/theme' },
  { name: 'Blog', href: '/blog' }
]
</script>

<template>
  <div class="relative isolate">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1060 720"
      fill="none"
      class="absolute inset-0 h-full w-full rotate-180 opacity-25 -z-10"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_1_436)">
        <path
          d="M1202.24 -57.5132C1103.96 -151.154 1058.75 -319.947 923.781 -333.097C785.498 -346.57 692.557 -206.193 585.353 -117.618C585.094 -117.403 584.834 -117.191 584.575 -116.976L923.139 221.588L1202.24 -57.5132Z"
          fill="#0A7CFF" />
        <path
          d="M1202.24 -57.5132L923.139 221.588H1505.98C1482.4 131.4 1404.57 82.117 1324.55 31.4602C1281.75 4.35398 1238.31 -23.1442 1202.24 -57.5132Z"
          fill="#0A7CFF" />
        <path
          d="M923.139 221.588L584.575 -116.976C550.852 -89.2071 512.792 -63.8496 474.76 -38.512C369.643 31.5182 264.764 101.391 252.43 221.588H923.139Z"
          fill="#FF469D" />
        <path
          d="M252.43 221.588C235.122 390.235 377.979 529.835 507.749 638.576L923.139 221.588H252.43Z"
          fill="#FF7847" />
        <path
          d="M1399.99 698.885C1521.69 581.283 1548.82 385.496 1505.98 221.588H923.139L1399.99 698.885Z"
          fill="#00DFDF" />
        <path
          d="M923.139 221.588L507.749 638.576C641.937 751.021 774.686 773.717 950.075 785.969L950.124 785.971L923.139 221.588Z"
          fill="#7733FF" />
        <path
          d="M1399.99 698.885L923.139 221.588L950.124 785.971C1110.49 797.176 1285.6 809.407 1399.99 698.885Z"
          fill="#00DFDF" />
      </g>
      <defs>
        <filter
          id="filter0_f_1_436"
          x="0.998535"
          y="-584"
          width="1774"
          height="1627"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood
            flood-opacity="0"
            result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape" />
          <feGaussianBlur
            stdDeviation="125"
            result="effect1_foregroundBlur_1_436" />
        </filter>
      </defs>
    </svg>
    <footer>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-8 lg:pt-16 sm:pt-12">
        <div class="grid-cols-1 xl:grid xl:grid-cols-2 xl:gap-8">
          <div class="space-y-6">
            <NuxtLink
              class="inline-block"
              to="/">
              <NavLogo class="text-accent-600" />
            </NuxtLink>
            <p class="text-sm leading-6 text-surface-600">
              Minimal library to generate smooth shades.
            </p>
            <nav class="columns-2 -mb-6 sm:flex sm:space-x-12" aria-label="Footer">
              <div v-for="item in navigation" :key="item.name" class="pb-6">
                <NuxtLink :to="item.href" class="text-sm leading-6 text-surface-600 transition-colors hover:text-surface-900">
                  {{ item.name }}
                </NuxtLink>
              </div>
            </nav>
          </div>
          <div class="xl:flex xl:justify-end">
            <ThemeDropdown />
          </div>
        </div>
        <div class="mt-6 lg:mt-16 sm:mt-8">
          <p class="text-sm text-surface-600">
            &copy; {{ new Date().getFullYear() }} Jeffrey Turns.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
