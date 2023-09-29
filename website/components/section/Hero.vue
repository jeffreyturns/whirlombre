<template>
    <div class="relative isolate overflow-hidden">
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 1060 720"
            fill="none"
            class="absolute inset-0 -z-10 h-full w-full opacity-25">
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
        <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-32">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                <div class="mt-12 sm:mt-24">
                    <AnimFadeIn>
                        <a class="inline-flex space-x-6">
                            <span class="rounded-sm px-3 py-1 text-sm items-center flex font-semibold transition-colors leading-6 text-accent-600 hover:bg-accent-600/12">
                                See what's new in v1.0.0
                                <BaseIcon
                                    class="ml-1"
                                    icon="arrowTr"
                                    :size="16" />
                            </span>
                        </a>
                    </AnimFadeIn>
                </div>
                <AnimFadeIn :delay="120">
                    <h1
                        class="mt-6 text-4xl font-headline tracking-tight sm:text-6xl text-transparent drop-shadow-sm bg-gradient-to-br from-surface-950 to-surface-500 bg-clip-text">
                        Elevate Your Designs with Seamless Shades
                    </h1>
                </AnimFadeIn>
                <AnimFadeIn :delay="240">
                    <p class="mt-6 text-lg leading-8 text-surface-600">
                        Super-minimal library empowers you to effortlessly create and generate smooth shades, elevating your projects to a new level of
                        sophistication.
                    </p>
                </AnimFadeIn>
                <AnimFadeIn :delay="360">
                    <div class="mt-10 flex items-center gap-x-6">
                        <NuxtLink
                            to="docs/get-started/introduction"
                            class="text-sm h-10 inline-flex items-center px-4 py-2.5 rounded-sm leading-6 transition-colors bg-accent-600 text-surface-10 hover:bg-accent-700 focus:bg-accent-700 dark:hover:bg-accent-900 focus:outline-none">
                            Get Started
                        </NuxtLink>
                        <a
                            class="text-sm h-10 inline-flex items-center px-4 py-2.5 rounded-sm ring-1 transition-colors ring-surface-950/12 leading-6 bg-transparent hover:bg-accent-700/12 text-accent-700 focus:bg-accent-700/12">
                            Learn more
                            <BaseIcon class="ml-1" icon="arrowTr" :size="16" />
                        </a>
                    </div>
                </AnimFadeIn>
            </div>
            <div class="mx-auto mt-24 flex max-w-2xl sm:mt-32 lg:ml-10 lg:mr-0 lg:mt-24 lg:max-w-none lg:flex-none xl:ml-32">
                <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                    <AnimFadeIn :delay="480">
                        <div class="font-minoan text-[150px] sm:text-[300px] mt-6">𒾙·𒾚·𒾛·𒾜</div>
                    </AnimFadeIn>
                </div>
            </div>
        </div>
    </div>
</template>
