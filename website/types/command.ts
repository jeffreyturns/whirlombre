export type CommandItem = {
    name: string
    url: string
    data?: CommandItem[]
}

export type SourceObject = {
    title: string
    _path: string
    _id?: string
    _draft?: boolean
    children?: SourceObject[]

    [key: string]: any
}
