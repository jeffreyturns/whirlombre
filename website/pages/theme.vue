<script setup lang="ts">
useHead({ title: 'Theme' })
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-4 py-4 pt-20 space-y-4 lg:px-8 sm:px-6">
      <div class="h-64 w-full flex items-center justify-center rounded-wl-small ring-1 ring-surface-950/12">
        <NavLogo class="h-24 w-24 text-surface-950" />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1060 720"
          fill="none"
          class="h-full w-full opacity-25">
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
      </div>
    </div>
    <ThemeSiteColor />
  </div>
</template>
