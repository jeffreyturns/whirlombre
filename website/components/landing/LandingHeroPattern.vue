<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <MotionContainer type="fade">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1060 720"
      fill="none"
      class="absolute inset-0 -z-10 size-full opacity-25">
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
    <svg width="1085" height="1089" class="pattern-wl-spin absolute -z-10 h-screen w-[200%] stroke-gray-950 lg:h-[200%] lg:w-screen" viewBox="0 0 1085 1089" fill="none">
      <path opacity="0.20" d="M542.5 1088L542.443 545.04L429.5 1076.12L542.332 545.017L321.439 1041.01L542.228 544.971L223.039 984.201L542.137 544.904L138.601 908.172L542.06 544.819L71.8153 816.25L542.004 544.721L25.6008 712.451L541.969 544.613L1.97754 601.311L541.957 544.5L1.97755 487.689L541.969 544.387L25.6009 376.549L542.004 544.279L71.8153 272.75L542.06 544.18L138.601 180.827L542.137 544.096L223.039 104.799L542.228 544.029L321.439 47.988L542.332 543.983L429.5 12.8768L542.443 543.959L542.5 1L542.557 543.959L655.5 12.8768L542.668 543.983L763.562 47.9881L542.772 544.029L861.962 104.799L542.864 544.096L946.399 180.828L542.94 544.18L1013.19 272.75L542.997 544.279L1059.4 376.549L543.032 544.387L1083.02 487.689L543.044 544.5L1083.02 601.311L543.032 544.613L1059.4 712.451L542.997 544.721L1013.18 816.25L542.94 544.819L946.399 908.172L542.864 544.904L861.961 984.201L542.772 544.971L763.562 1041.01L542.668 545.017L655.5 1076.12L542.557 545.04L542.5 1088Z" stroke="currentColor" stroke-width="0.5" />
    </svg>
  </MotionContainer>
</template>

<style scoped>
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
