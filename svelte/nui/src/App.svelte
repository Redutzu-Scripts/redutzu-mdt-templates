<script lang="ts">
    import { onMount } from "svelte";
    import type { Context } from "@/context";

    let context = $state<Context | null>(null);
    let result = $state<unknown>(null);

    onMount(() => {
        window.mdt.ready.then((c) => {
            context = c;
        });
        return window.mdt.onContextChange((c) => {
            context = c;
        });
    });

    async function ping() {
        result = await window.mdt.emitNui("ping", { hello: "from the page" });
    }

    async function askToDelete() {
        const confirmed = await window.mdt.confirm({
            title: "Delete this thing?",
            description: "This is just a demo - nothing is actually deleted.",
            destructive: true,
        });

        window.mdt.toast(confirmed ? "Confirmed" : "Cancelled", {
            type: confirmed ? "success" : "info",
        });
    }
</script>

<main>
    <h1>Example Page</h1>
    <p>Locale: <code>{context?.locale ?? "…"}</code></p>
    <p>Theme: <code>{context?.theme ?? "…"}</code></p>

    <button onclick={ping}>Ping my resource</button>
    {#if result != null}
        <pre>{JSON.stringify(result, null, 2)}</pre>
    {/if}

    <button onclick={askToDelete}>Ask to delete (demo)</button>
</main>
