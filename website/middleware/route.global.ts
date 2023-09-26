export default defineNuxtRouteMiddleware((to, from) => {
    window.scroll({
        top: 0,
        left: 0,
    })
})
