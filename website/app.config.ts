/* eslint-disable @stylistic/max-len */
export default defineAppConfig({
  ui: {
    primary: 'foo',
    gray: 'bar',
    accordion: {
      item: {
        base: 'px-3',
        size: 'text-base'
      },
      transition: {
        enterActiveClass: 'duration-150 ease-quick-snap',
        leaveActiveClass: 'duration-150 ease-quick-snap'
      },
      default: { variant: 'soft', class: 'mb-px' }
    },
    button: {
      base: 'transition-colors',
      rounded: 'rounded-sm',
      variant: {
        solid: 'shadow-none text-gray-50 dark:text-gray-800 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-500 dark:bg-primary-200 dark:hover:bg-primary-300 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400',
        outline: 'ring-1 ring-inset ring-gray-200 dark:ring-gray-700 text-primary-600 dark:text-primary-200 hover:bg-primary-500/10 disabled:bg-transparent dark:hover:bg-primary-400/10 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        soft: 'text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
      },
      default: { size: 'md' }
    },
    input: {
      rounded: 'rounded-sm',
      color: { white: { outline: 'shadow-none bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 ring-0' } },
      default: { size: 'md' }
    },
    kbd: { rounded: 'rounded-sm' },
    select: {
      rounded: 'rounded-sm',
      color: { white: { outline: 'shadow-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400' } }
    },
    selectMenu: {
      rounded: 'rounded-sm',
      option: { rounded: 'rounded-sm' },
      transition: {
        enterActiveClass: 'transition ease-quick-snap duration-300',
        enterFromClass: 'opacity-0 scale-90 origin-bottom',
        enterToClass: 'opacity-100 scale-1 origin-bottom',
        leaveActiveClass: 'transition ease-quick-snap duration-150',
        leaveFromClass: 'opacity-100 scale-1',
        leaveToClass: 'opacity-0 scale-90'
      },
      default: { selectedIcon: 'i-material-symbols-check' }
    },
    container: { constrained: 'max-w-screen-2xl' }
  }
})
