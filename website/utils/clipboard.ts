export const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch (err) {
        console.error('Ошибка копирования в буфер обмена:', err)
        return false
    }
}