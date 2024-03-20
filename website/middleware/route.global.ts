export default defineNuxtRouteMiddleware((to, _) => {
  if (process.client && !to.hash) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  if (to.path === '/docs') {
    return navigateTo('/docs/getting-started/installation')
  }
})
