<script setup lang="ts">
defineProps<{ emoji: string }>()
</script>

<template>
  <div class="not-prose pt-10">
    <div class="flex rounded-wl-small flex-col relative isolate overflow-hidden rounded-wl-small h-35 ring-1 ring-surface-100">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1060 720"
        fill="none"
        class="absolute scale-200 inset-0 h-full w-full opacity-15 -z-10">
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

      <svg width="619" height="350" viewBox="0 0 619 350" fill="none" class="stroke-surface-950">
        <path opacity="0.75" d="M118 794L117.947 294.497L13.4715 783.074L117.845 294.476L-86.4886 750.773L117.749 294.433L-177.512 698.508L117.664 294.372L-255.619 628.565L117.593 294.294L-317.398 544L117.541 294.203L-360.148 448.508L117.508 294.104L-382 346.264L117.497 294L-382 241.736L117.508 293.896L-360.148 139.491L117.541 293.797L-317.398 44L117.593 293.706L-255.619 -40.5653L117.664 293.628L-177.512 -110.509L117.749 293.567L-86.4885 -162.773L117.845 293.524L13.4716 -195.074L117.947 293.503L118 -206L118.053 293.503L222.528 -195.074L118.155 293.524L322.489 -162.773L118.251 293.567L413.511 -110.508L118.336 293.628L491.619 -40.5653L118.407 293.706L553.398 44.0001L118.459 293.797L596.148 139.492L118.492 293.896L618 241.736L118.503 294L618 346.264L118.492 294.104L596.148 448.509L118.459 294.203L553.398 544L118.407 294.294L491.619 628.565L118.336 294.372L413.511 698.508L118.251 294.433L322.488 750.773L118.155 294.476L222.528 783.074L118.053 294.497L118 794Z" stroke="currentColor" stroke-width="0.3" />
      </svg>

      <div class="absolute flex right-10 h-full">
        <span class="text-2xl md:text-5xl justify-center items-center flex">{{ emoji }}</span>
      </div>
    </div>
  </div>
</template>
