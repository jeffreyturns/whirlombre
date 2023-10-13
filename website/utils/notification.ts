export type MessageDuration = 1500 | 3000 | 4500 | -1

export interface NotificationMessage {
    id: string
    title: string
    message: string
    duration: MessageDuration
}

const defaultNotificationOptions = {
  title: 'Title',
  type: 'info',
  message: 'Message',
  duration: 3000
}

export function createNotification (options: { title?: string; message?: string; duration?: MessageDuration }) {
  const _options = Object.assign({
    ...defaultNotificationOptions
  }, options)

  useNotifications().value?.push(
    ...[
      {
        id: generateID(),
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
