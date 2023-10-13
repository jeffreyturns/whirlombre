export const useNotifications = () => useState<NotificationMessage[]>('notifications', () => [])

// export const useTest = () => {

//     const test = () => {
//         return 1
//     }

//     const tests = useState<string[]>('tests', () => [])

//     return {
//         test,
//         tests
//     }
// }
