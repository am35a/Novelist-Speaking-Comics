<script lang="ts">
    import { route } from '../store/route'
    
    // fundamental components
    import Button from '../components/Button.svelte'
</script>

<section>
    <div class="about">
        <p>
            <img src="http://mobitoon.ru/novelist/images/logo/logoname.svg" alt="Novelist">
        </p>
        &copy;2021 <a class="m-2 text-uppercase text-decoration-none" href="http://noveli.st" target="_blank">www.noveli.st</a> TX USA
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
        .about
            grid-area: error
            align-self: center
            font-weight: normal
            text-align: center
            text-transform: uppercase
            :global(a)
                color: var(--color-link)
        .button-rb
            grid-area: button-rb
</style>