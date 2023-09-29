<script setup lang="ts">
const benefits = [
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
    <AnimFadeIn>
        <h2 class="text-3xl text-center font-headline leading-10 tracking-tight text-surface-900 mt-8 mb-16">Benefits</h2>
    </AnimFadeIn>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 sm:px-8 py-4 space-y-4">
        <div class="divide-y divide-surface-200 overflow-hidden rounded-sm sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            <AnimFadeIn
                v-for="(it, i) in benefits"
                :key="it.title"
                :class="[
                    i === 0 && 'rounded-tl-sm rounded-tr-sm sm:rounded-tr-none',
                    i === 1 && 'sm:rounded-tr-sm',
                    i === benefits.length - 2 && 'sm:rounded-bl-sm',
                    i === benefits.length - 1 && 'rounded-bl-sm rounded-br-sm sm:rounded-bl-none',
                    'group relative rounded-sm bg-surface-50 p-6 focus:ring-none'
                ]">
                <div>
                    <div>
                        <span class="inline-flex rounded-sm p-3 bg-accent-100 font-minoan">{{ it.symbols }}</span>
                    </div>
                    <div class="mt-8">
                        <h3 class="text-base font-semibold leading-6 text-surface-900">
                            <a class="focus:outline-none">
                                <span
                                    class="absolute inset-0"
                                    aria-hidden="true" />
                                {{ it.title }}
                            </a>
                        </h3>
                        <p class="mt-2 text-sm text-surface-500">
                            {{ it.description }}
                        </p>
                    </div>
                    <span
                        class="pointer-events-none absolute right-6 top-6 text-surface-300 group-hover:text-surface-400">
                        <BaseIcon icon="arrowTr" :size="24" />
                    </span>
                </div>
            </AnimFadeIn>
        </div>
    </div>
</template>
