import { useState } from 'react'
import { useMdtContext } from './context'

export function App() {
    const context = useMdtContext()
    const [result, setResult] = useState<unknown>(null)

    async function ping() {
        const data = await window.mdt.emitNui('ping', { hello: 'from the page' })
        setResult(data)
    }

    async function askToDelete() {
        const confirmed = await window.mdt.confirm({
            title: 'Delete this thing?',
            description: 'This is just a demo - nothing is actually deleted.',
            destructive: true
        })

        window.mdt.toast(confirmed ? 'Confirmed' : 'Cancelled', {
            type: confirmed ? 'success' : 'info'
        })
    }

    return (
        <main>
            <h1>Example Page</h1>
            <p>Locale: <code>{context?.locale ?? 'unknown'}</code></p>
            <p>Theme: <code>{context?.theme ?? 'unknown'}</code></p>

            <button onClick={ping}>Ping my resource</button>
            {result != null && <pre>{JSON.stringify(result, null, 2)}</pre>}

            <button onClick={askToDelete}>Ask to delete (demo)</button>
        </main>
    )
}
