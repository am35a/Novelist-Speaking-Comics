<script lang="ts">
    import { route } from '../store/route'
    import { user } from '../store/store'
    
    // fundamental components
    import Button from '../components/Button.svelte'

    function signOut() {
        $user.signedIn = false
        route.goto('signin')
    }
</script>

<section>
    <div class="about">

    </div>
    <div class="button-so">
        <Button class="warning block round" on:click={signOut}>Sign Out</Button>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: grid
        grid-template-rows: auto min-content
        grid-template-areas: "error error" "button-so button-so"
        grid-gap: $grid-gap
        justify-self: center
        width: $media-breakpoint-lk
        .about
            grid-area: error
            align-self: center
            font-weight: normal
            text-align: center
            text-transform: uppercase
            :global(a)
                color: var(--color-link)
        .button-so
            grid-area: button-so
</style>