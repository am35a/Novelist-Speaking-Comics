<script lang="ts">
    import { user, route } from '../store/store'
    import Button from '../components/Button.svelte'

    export let message: string = 'Something went wrong...'

    function resetBack() {
        console.log('Reset to back')

        $user.signedIn = false
        $route = 'signin'
    }
</script>

<section>
    <div class="error">
        {message}
    </div>
    <div class="button-rb">
        <Button class="fourth block round" on:click={resetBack}>Reset to back</Button>
    </div>

</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        grid-column: 1/2
        grid-row: 1/2
        display: grid
        grid-template-rows: auto min-content
        grid-template-areas: "error error" "button-rb button-rb"
        grid-gap: $grid-gap
        justify-self: center
        width: $media-breakpoint-lk
        .error
            grid-area: error
            align-self: center
            // margin: auto
        .button-rb
            grid-area: button-rb

</style>