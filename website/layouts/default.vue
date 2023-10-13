<template>
    <ProviderDynamicTheme>
        <ClientOnly>
            <NotificationGroup />
        </ClientOnly>
        <NavHeader />
        <slot />
        <NavFooter />
    </ProviderDynamicTheme>
</template>
