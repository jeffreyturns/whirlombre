export default defineNuxtRouteMiddleware(() => {
  if (process.client) {
    window.scroll({
      top: 0,
      left: 0
    })
  }
})
