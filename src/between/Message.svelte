<script lang="ts">
    import { route } from '../store/route'
    import { user, message } from '../store/store'

    // fundamental components
    import Button from '../components/Button.svelte'

    export let status: string = $message.status
    export let text: string = $message.text
    export let routeout: string = $message.routeout

    function resetBack() {
        console.log('Message action button')

        if (status === 'error')
            $user.signedIn = false
        route.goto(routeout)
    }
</script>

<section>
    <div class={status}>
        {@html text}
    </div>
    <div class="button-rb">
        <Button class="fourth block round" on:click={resetBack}>
            {status === 'error' ? 'Reset' : 'Ok'}
        </Button>
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
        .info,
        .error
            grid-area: error
            align-self: center
            font-weight: lighter
            hyphens: auto
            :global(a)
                color: var(--color-link)
        // .info
        //     color: var(--info-color)
        .error
            color: var(--error-color)
        .button-rb
            grid-area: button-rb
</style>