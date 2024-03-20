<!-- eslint-disable @stylistic/max-len -->
<script setup lang="ts">
const features = [
  {
    symbols: '𒾧 𒿇 𒿤',
    title: 'Effortless Integration',
    description:
          'Whirlombre’s super-minimal footprint ensures seamless compatibility with your existing projects. Add it in a breeze and elevate your designs instantly.'
  },
  {
    symbols: '𒾵 𒾓 𒿓',
    title: 'Precision in Shading',
    description:
            'Achieve unmatched accuracy in your shades. Whirlombre’s algorithms guarantee smooth transitions, enhancing the depth and aesthetic of your design elements.'
  },
  {
    symbols: '𒿄 𒿰 𒾜',
    title: 'Lightweight Performance',
    description:
            'Don’t bog down your projects with hefty libraries. Whirlombre offers top-tier shade generation without compromising on load times or performance.'
  },
  {
    symbols: '𒾴 𒿌 𒾬',
    title: 'Versatility in Design',
    description:
            'Whether you’re working on UI interfaces, graphics, or digital art, Whirlombre adjusts perfectly, adding a touch of sophistication to various design realms.'
  },
  {
    symbols: '𒿢 𒾔 𒿏',
    title: 'Open Source Flexibility',
    description:
            'Dive into the code, customize, and contribute. Whirlombre’s open-source nature means the community drives its innovation, adapting to ever-evolving design needs.'
  },
  {
    symbols: '𒿙 𒾫 𒿬',
    title: 'Comprehensive Documentation',
    description:
            'Never feel lost. With Whirlombre’s well-structured and detailed documentation, you/’ll find guidance every step of the way, from integration to advanced utilization.'
  }
]
</script>

<template>
  <UContainer class="py-16">
    <MotionContainer type="fade-in">
      <h2 class="mb-8 text-center font-headline text-3xl leading-10 tracking-tight text-gray-900 dark:text-gray-100">
        Features
      </h2>
    </MotionContainer>
    <div class="gap-px space-y-px overflow-hidden rounded-sm sm:grid sm:grid-cols-2 sm:space-y-0">
      <MotionContainer
        v-for="(it, i) in features"
        :key="it.title"
        type="fade-in"
        :class="[
          i === 0 && 'rounded-t-sm sm:rounded-tr-none',
          i === 1 && 'sm:rounded-tr-sm',
          i === features.length - 2 && 'sm:rounded-bl-sm',
          i === features.length - 1 && 'rounded-b-sm sm:rounded-bl-none',
          'group relative rounded-sm bg-gray-100 p-6 transition-colors hover:bg-gray-200 focus:ring-0 dark:bg-gray-800 dark:hover:bg-gray-700'
        ]">
        <div>
          <div>
            <span class="bg-primary-100 dark:bg-primary-600 inline-flex rounded-sm p-3 font-minoan text-gray-900 dark:text-gray-50">{{ it.symbols }}</span>
          </div>
          <div class="mt-8">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">
              <NuxtLink to="/blog/why-whirlombre" class="font-headline tracking-wider focus:outline-none">
                <span
                  class="absolute inset-0"
                  aria-hidden="true" />
                {{ it.title }}
              </NuxtLink>
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ it.description }}
            </p>
          </div>
          <span class="pointer-events-none absolute right-6 top-6 text-gray-700 dark:text-gray-300">
            <!-- <BaseIcon
              icon="north_east"
              :size="24" /> -->
            <UIcon name="i-material-symbols-north-east" />
          </span>
        </div>
      </MotionContainer>
    </div>
  </UContainer>
</template>
