<script setup lang="ts">
const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' }
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' }
  ]
}
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
    <footer aria-labelledby="footer-heading">
      <h2
        id="footer-heading"
        class="sr-only">
        Footer
      </h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8 lg:pt-32 sm:pt-24">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-6">
            <NuxtLink
              class="inline-block"
              to="/">
              <NavLogo class="text-accent-600" />
            </NuxtLink>
            <p class="text-sm leading-6 text-surface-600">
              Minimal library to generate smooth shades.
            </p>
            <ThemeDropdown />
          </div>
          <div class="grid grid-cols-2 mt-16 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-surface-900">
                  Solutions
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-4">
                  <li
                    v-for="item in navigation.solutions"
                    :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-surface-600 hover:text-surface-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-surface-900">
                  Support
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-4">
                  <li
                    v-for="item in navigation.support"
                    :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-surface-600 hover:text-surface-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-surface-900">
                  Company
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-4">
                  <li
                    v-for="item in navigation.company"
                    :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-surface-600 hover:text-surface-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-surface-900">
                  Legal
                </h3>
                <ul
                  role="list"
                  class="mt-6 space-y-4">
                  <li
                    v-for="item in navigation.legal"
                    :key="item.name">
                    <a
                      :href="item.href"
                      class="text-sm leading-6 text-surface-600 hover:text-surface-900">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-surface-950/12 pt-8 lg:mt-24 sm:mt-20">
          <p class="text-xs leading-5 text-surface-700">
            &copy; 2023 Jeffrey Turns.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
