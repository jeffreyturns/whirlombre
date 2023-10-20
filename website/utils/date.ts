export const formatDate = (date: string) => {
  return Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(Date.parse(date))
}
