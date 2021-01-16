<script lang="ts">
    // import { route } from '../store/route'

    // svg icons
    import IconSearch from '../assets/svg/IconSearch.svelte'

    // fundamental components
    import Input from '../components/Input.svelte'
</script>

<section>
    <div class="list">
        ...
    </div>
    <div class="input-sc">
        <Input>
            <IconSearch />
        </Input>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: grid
        padding: 0 $key-rem
        overflow-x: hidden
        overflow-y: auto
        .input-sc
            grid-column: 1/2
            grid-row: 1/2
            position: sticky
            top: 0
            align-self: start
            :global(> *)
                margin-left: auto
                margin-right: auto
                width: $media-breakpoint-lk
        .list
            grid-column: 1/2
            grid-row: 1/2
</style>