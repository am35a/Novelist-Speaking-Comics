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
    <div class="content">
        Coming soon...
    </div>
    <div class="button-so">
        <Button class="warning block round" on:click={signOut}>Sign Out</Button>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: grid
        grid-template-rows: 1fr min-content
        grid-template-areas: "content content" "button-so button-so"
        grid-gap: $grid-gap
        justify-self: center
        width: 100%
        overflow: hidden
        // overflow-y: auto
        .content
            grid-area: content
            max-height: 100%
            align-self: center
            font-weight: normal
            text-align: center
            overflow-y: auto
            // > *
            //     max-width: $media-breakpoint-lk
        .button-so
            grid-area: button-so
            width: $media-breakpoint-lk
            justify-self: center
</style>