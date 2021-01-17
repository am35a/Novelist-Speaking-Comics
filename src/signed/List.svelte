<script lang="ts">
    // import { route } from '../store/route'

    // svg icons
    import IconSearch from '../assets/svg/IconSearch.svelte'

    // fundamental components
    import Input  from '../components/Input.svelte'
    import Midget from '../components/Midget.svelte'

    let search: any = {
        text: '' as string,
        visible: true as boolean
    }
</script>

<section>
    {#if search.visible}
        <div class="input-sc">
            <Input bind:value={search.text} type="text" placeholder="search">
                <IconSearch />
            </Input>
        </div>
    {/if}
    <div class="items" on:click={() => search.visible = !search.visible}>
        <Midget />
        <Midget />
        <Midget />
        <Midget />
        <Midget />
        <Midget />
        <Midget />
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: grid
        overflow-x: hidden
        overflow-y: auto
        .input-sc
            grid-column: 1/2
            grid-row: 1/2
            position: sticky
            top: 0
            align-self: start
            background-color: var(--second-color)
            :global(> *)
                margin-left: auto
                margin-right: auto
                width: $media-breakpoint-lk
            & + .items
                padding: $items-padding
        .items
            grid-column: 1/2
            grid-row: 1/2
            // padding: $items-padding
</style>