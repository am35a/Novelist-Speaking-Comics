<script lang="ts">
    import { route } from '../store/route'
    import Button from '../components/Button.svelte'
</script>

<section>
    <div class="help">
        Help content coming soon
    </div>
    <div class="button-rb">
        <Button class="fourth block round" on:click={() => route.back()}>Close</Button>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: grid
        grid-template-rows: auto min-content
        grid-template-areas: "error error" "button-rb button-rb"
        grid-gap: $grid-gap
        justify-self: center
        width: $media-breakpoint-lk
        .help
            grid-area: error
            align-self: center
            font-weight: lighter
            hyphens: auto
            :global(a)
                color: var(--color-link)
        .button-rb
            grid-area: button-rb
</style>