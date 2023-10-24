import type { CommandItem, SourceObject } from '~/types/command'

export const navItemToCommandItemMapper = (source: SourceObject[] | null): CommandItem[] => {
  const recursiveTransform = (items: SourceObject[]): CommandItem[] => {
    const result: CommandItem[] = []

    for (const item of items) {
      const transformedItem: CommandItem = {
        name: item.title,
        url: item._path
      }

      if (item.children && item.children.length > 0) {
        transformedItem.data = recursiveTransform(item.children)
      }

      result.push(transformedItem)
    }

    return result
  }

  return source ? recursiveTransform(source) : []
}

export const filterItemsByQuery = (items: CommandItem[], query: string): CommandItem[] => {
  return items
    .map((item) => {
      if (item.name.toLowerCase().includes(query.toLowerCase())) {
        return item
      }

      if (item.data) {
        const filteredChildren = filterItemsByQuery(item.data, query)
        if (filteredChildren.length > 0) {
          return { ...item, data: filteredChildren }
        }
      }

      return null
    })
    .filter(Boolean) as CommandItem[]
}
