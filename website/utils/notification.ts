import type { NotificationMessage } from '~/types/notification'

const defaultNotificationOptions = {
  title: 'Title',
  type: 'info',
  message: 'Message',
  duration: 3000,
  actions: []
}

export function createNotification (options: Partial<NotificationMessage>) {
  const _options = Object.assign({ ...defaultNotificationOptions }, options)

  useNotifications().value?.push(
    ...[
      {
        id: options.id !== null ? generateUUID() : options.id,
        ..._options
      }
    ]
  )
}

export function dismissNotification (id: string) {
  const index = useNotifications().value?.findIndex(item => item.id === id) ?? 0
  if (index > -1) {
    useNotifications().value?.splice(index, 1)
  }
}
