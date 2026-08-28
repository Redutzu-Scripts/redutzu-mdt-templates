import { useEffect, useState } from 'react'

export interface Context {
    resource: string
    name: string
    locale: string
    theme: string
}

export function useMdtContext() {
    const [context, setContext] = useState<Context | null>(null)

    useEffect(() => {
        window.mdt.ready.then(setContext)
        return window.mdt.onContextChange(setContext)
    }, [])

    return context
}