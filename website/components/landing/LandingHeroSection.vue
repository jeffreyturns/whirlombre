<template>
  <div class="relative isolate overflow-hidden">
    <LandingHeroPattern />

    <div class="mx-auto h-full max-w-screen-2xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-32">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:shrink-0 lg:pt-8">
        <div class="mt-12 sm:mt-24">
          <MotionContainer type="fade-in">
            <NuxtLink to="blog/introducing-whirlombre" class="inline-flex space-x-6">
              <span
                class="dark:text-primary-200 text-primary-600 dark:hover:bg-primary-600/25 hover:bg-primary-200/25 flex items-center rounded-sm px-3 py-1 text-sm leading-6 transition-colors">
                See what's new in v1.0.0
                <UIcon name="i-material-symbols-north-east" class="ml-1 size-4" />
              </span>
            </NuxtLink>
          </MotionContainer>
        </div>
        <MotionContainer type="fade-in" :delay="120">
          <h1
            class="mt-6 bg-gradient-to-br from-gray-950 to-gray-500 bg-clip-text font-headline text-4xl tracking-tight text-transparent drop-shadow-sm sm:text-6xl dark:from-gray-50 dark:to-gray-500">
            Elevate Your Designs with Seamless Shades
          </h1>
        </MotionContainer>
        <MotionContainer type="fade-in" :delay="240">
          <p class="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
            Super-minimal library & tool empowers you to effortlessly create and generate smooth shades, elevating your projects to a new level of
            sophistication.
          </p>
        </MotionContainer>
        <MotionContainer type="fade-in" :delay="360">
          <div class="mt-10 flex items-center gap-x-6">
            <UButton size="xl" to="/docs" label="Get Started" />
            <UButton size="xl" to="/blog/why-whirlombre" variant="outline">
              Learn More
              <UIcon name="i-material-symbols-north-east" class="size-4" />
            </UButton>
          </div>
        </MotionContainer>
      </div>
      <div class="mx-auto mt-24 flex max-w-2xl sm:mt-32 lg:ml-10 lg:mr-0 lg:mt-24 lg:max-w-none lg:flex-none xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <MotionContainer type="fade-in" :delay="480">
            <div class="mt-6 font-minoan text-[150px] text-gray-900 sm:text-[300px] dark:text-gray-100">
              𒾙·𒾚·𒾛·𒾜·𒾗
            </div>
          </MotionContainer>
        </div>
      </div>
    </div>
  </div>
</template>
