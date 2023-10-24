<template>
  <div class="relative isolate overflow-hidden">
    <MotionContainer type="fade">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1060 720"
        fill="none"
        class="absolute inset-0 h-full w-full opacity-25 -z-10">
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
    </MotionContainer>

    <MotionContainer type="fade" :delay="300">
      <svg width="1085" height="1089" class="pattern-wl-spin absolute h-screen w-200% stroke-surface-950 -z-10 lg:h-200% lg:w-screen" viewBox="0 0 1085 1089" fill="none">
        <path opacity="0.20" d="M542.5 1088L542.443 545.04L429.5 1076.12L542.332 545.017L321.439 1041.01L542.228 544.971L223.039 984.201L542.137 544.904L138.601 908.172L542.06 544.819L71.8153 816.25L542.004 544.721L25.6008 712.451L541.969 544.613L1.97754 601.311L541.957 544.5L1.97755 487.689L541.969 544.387L25.6009 376.549L542.004 544.279L71.8153 272.75L542.06 544.18L138.601 180.827L542.137 544.096L223.039 104.799L542.228 544.029L321.439 47.988L542.332 543.983L429.5 12.8768L542.443 543.959L542.5 1L542.557 543.959L655.5 12.8768L542.668 543.983L763.562 47.9881L542.772 544.029L861.962 104.799L542.864 544.096L946.399 180.828L542.94 544.18L1013.19 272.75L542.997 544.279L1059.4 376.549L543.032 544.387L1083.02 487.689L543.044 544.5L1083.02 601.311L543.032 544.613L1059.4 712.451L542.997 544.721L1013.18 816.25L542.94 544.819L946.399 908.172L542.864 544.904L861.961 984.201L542.772 544.971L763.562 1041.01L542.668 545.017L655.5 1076.12L542.557 545.04L542.5 1088Z" stroke="currentColor" stroke-width="0.5" />
      </svg>
    </MotionContainer>

    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:flex lg:px-8 lg:py-32 sm:pb-32">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
        <div class="mt-12 sm:mt-24">
          <MotionContainer type="fade-in">
            <NuxtLink to="blog/introducing-whirlombre" class="inline-flex space-x-6">
              <span
                class="flex items-center rounded-wl-small px-3 py-1 text-sm font-semibold leading-6 text-accent-600 transition-colors hover:bg-accent-600/12">
                See what's new in v1.0.0
                <BaseIcon
                  class="ml-1"
                  icon="north_east"
                  :size="16" />
              </span>
            </NuxtLink>
          </MotionContainer>
        </div>
        <MotionContainer type="fade-in" :delay="120">
          <h1
            class="mt-6 from-surface-950 to-surface-500 bg-gradient-to-br bg-clip-text text-4xl tracking-tight font-headline text-transparent drop-shadow-sm sm:text-6xl">
            Elevate Your Designs with Seamless Shades
          </h1>
        </MotionContainer>
        <MotionContainer type="fade-in" :delay="240">
          <p class="mt-6 text-lg leading-8 text-surface-600">
            Super-minimal library & tool empowers you to effortlessly create and generate smooth shades, elevating your projects to a new level of
            sophistication.
          </p>
        </MotionContainer>
        <MotionContainer type="fade-in" :delay="360">
          <div class="mt-10 flex items-center gap-x-6">
            <BaseButton href="/docs" text="Get Started" />
            <BaseButton href="/blog/why-whirlombre" icon-right="north_east" variant="outlined" text="Learn more" />
          </div>
        </MotionContainer>
      </div>
      <div class="mx-auto mt-24 max-w-2xl flex lg:ml-10 lg:mr-0 lg:mt-24 sm:mt-32 xl:ml-32 lg:max-w-none lg:flex-none">
        <div class="max-w-3xl flex-none lg:max-w-none sm:max-w-5xl">
          <MotionContainer type="fade-in" :delay="480">
            <div class="mt-6 text-[150px] font-minoan sm:text-[300px]">
              𒾙·𒾚·𒾛·𒾜
            </div>
          </MotionContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.pattern-wl-spin {
  animation: spin 60s linear infinite;
}
</style>
