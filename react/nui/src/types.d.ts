import type { Context } from './context'

interface ToastOptions {
    type?: 'success' | 'error' | 'warning' | 'info'
    description?: string
}

interface ModalOptions {
    title: string
    description?: string
    confirmLabel?: string
    cancelLabel?: string
    destructive?: boolean
}

declare global {
    interface Window {
        mdt: {
            ready: Promise<Context>
            getContext: () => Context | null
            onContextChange: (listener: (context: Context) => void) => () => void
            emitNui: <T = unknown>(event: string, data?: unknown) => Promise<T>
            formatDate: (timestamp: string | number, includeTime?: boolean) => Promise<string>
            formatNumber: (value: number) => Promise<string>
            formatCurrency: (amount: number) => Promise<string>
            toast: (message: string, options?: ToastOptions) => void
            confirm: (options: ModalOptions) => Promise<boolean>
        }
    }
}
