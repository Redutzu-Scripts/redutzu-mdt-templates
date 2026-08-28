<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { Context } from '@/context'

const context = ref<Context | null>(null)
const result = ref<unknown>(null)

let unsubscribe: (() => void) | undefined

onMounted(() => {
    window.mdt.ready.then(c => { context.value = c })
    unsubscribe = window.mdt.onContextChange(c => { context.value = c })
})

onUnmounted(() => unsubscribe?.())

async function ping() {
    result.value = await window.mdt.emitNui('ping', { hello: 'from the page' })
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
</script>

<template>
    <main>
        <h1>Example Page</h1>
        <p>Locale: <code>{{ context?.locale ?? '…' }}</code></p>
        <p>Theme: <code>{{ context?.theme ?? '…' }}</code></p>

        <button @click="ping">Ping my resource</button>
        <pre v-if="result != null">{{ JSON.stringify(result, null, 2) }}</pre>

        <button @click="askToDelete">Ask to delete (demo)</button>
    </main>
</template>
