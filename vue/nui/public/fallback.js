//  Installs a mock window.mdt when the real SDK isn't available (opening index.html directly in a browser) 
; (function () {
    if (window.mdt) return

    console.warn("window.mdt not found - using the local mock from fallback.js. emitNui will reject; this is expected outside FiveM.")

    const context = {
        resource: 'custom-page',
        name: 'custom-page',
        locale: 'en-US',
        theme: 'Default'
    }

    window.mdt = {
        ready: Promise.resolve(context),
        getContext: () => context,
        onContextChange: () => {
            return () => { }
        },
        emitNui: event => Promise.reject(
            new Error("emitNui('" + event + "') has no real resource to answer it - you're not running inside FiveM.")
        ),
        formatDate: (timestamp, includeTime) => {
            let date = new Date(timestamp)
            return Promise.resolve(
                includeTime === false
                    ? date.toLocaleDateString()
                    : date.toLocaleString()
            )
        },
        formatNumber: value => Promise.resolve(
            new Intl.NumberFormat()
                .format(value)
        ),
        formatCurrency: amount => Promise.resolve(
            new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' })
                .format(amount)
        ),
        toast: (message, options) => console.log('toast:', message, options || {}),
        confirm: options => {
            let text = options.title + (options.description ? '\n\n' + options.description : '')
            return Promise.resolve(
                window.confirm(text)
            )
        }
    }
})()
