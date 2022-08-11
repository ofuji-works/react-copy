export type Props<T> = {
    [key: string]: any
    children?: T[] | T
}

export type Type = ((props: Props<Element>) => Element) | string

export type Element = {
    type: Type
    props: Props<Element>
}
