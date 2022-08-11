import type {Element, Type} from './types'

const mountComposite = (element: Element) => {
    const type = element.type
    const props = element.props

    if (typeof type !== 'function') {
        console.error("Unexpected value 'element'.")
        return
    }

    return type(props)
}

export const mountHost = (element: Element) => {

    const type = element.type
    const props = element.props
    var children = element.props.children

    if (typeof type !== 'string') {
        console.error("Unexpected value 'element'.")
        return
    }
    var node = document.createElement(type)

    if (children && !Array.isArray(children)) {
        children = [children]
        children.forEach(child => {
            const childNode = mount(child)
            node.appendChild(childNode as HTMLElement)
        })
    }

    return node
}

const mount = (element: Element) => {
    const type = element.type
    if (typeof type === 'function') {
        return mountComposite(element)
    } else {
        return mountHost(element)
    }
}