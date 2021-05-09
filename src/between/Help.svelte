<script lang="ts">
    import { route } from '../store/route'
    
    // fundamental components
    import Button from '../components/Button.svelte'
</script>

<section>
    <div class="info">
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
        grid-template-areas: "info info" "button-rb button-rb"
        grid-gap: $grid-gap
        justify-self: center
        width: $media-breakpoint-lk
        .info
            grid-area: info
            align-self: center
            font-weight: normal
            hyphens: auto
            :global(a)
                color: var(--color-link)
        .button-rb
            grid-area: button-rb
</style>