export type MessageDuration = 1500 | 3000 | 4500 | -1

export type ActionButton = { title: string, action: Function }

export type NotificationMessage = {
    id: string
    title: string
    message: string
    duration: MessageDuration
    actions: ActionButton[]
}
