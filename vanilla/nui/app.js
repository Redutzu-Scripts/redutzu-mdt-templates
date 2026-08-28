window.mdt.ready.then(() => {
    const { locale, theme } = window.mdt.getContext()
    document.getElementById('locale').textContent = locale
    document.getElementById('theme').textContent = theme
})

window.mdt.onContextChange(({ locale, theme }) => {
    document.getElementById('locale').textContent = locale
    document.getElementById('theme').textContent = theme
})

document.getElementById('ping').addEventListener('click', async () => {
    const result = await window.mdt.emitNui('ping', { hello: 'from the page' })
    document.getElementById('result').textContent = JSON.stringify(result, null, 2)
})

document.getElementById('delete').addEventListener('click', async () => {
    const confirmed = await window.mdt.confirm({
        title: 'Delete this thing?',
        description: 'This is just a demo - nothing is actually deleted.',
        destructive: true
    })

    window.mdt.toast(confirmed ? 'Confirmed' : 'Cancelled', {
        type: confirmed ? 'success' : 'info'
    })
})
