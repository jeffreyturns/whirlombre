export type MessageDuration = 1500 | 3000 | 4500 | -1

export type ActionButton = { title: string, action: Function }

export interface NotificationMessage {
    id: string
    title: string
    message: string
    duration: MessageDuration
    actions: ActionButton[]
}

const defaultNotificationOptions = {
  title: 'Title',
  type: 'info',
  message: 'Message',
  duration: 3000,
  actions: []
}

export function createNotification (options: { id?: string; title?: string; message?: string; duration?: MessageDuration, actions?: ActionButton[] }) {
  const _options = Object.assign({ ...defaultNotificationOptions }, options)

  useNotifications().value?.push(
    ...[
      {
        id: options.id !== null ? generateID() : options.id,
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
