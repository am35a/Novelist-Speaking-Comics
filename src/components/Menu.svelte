<script lang="ts">
    import { user } from '../store/store'

    import IconNovelist from '../assets/svg/IconNovelist.svelte'
    import IconHelp from '../assets/svg/IconHelp.svelte'
    import IconAccount from '../assets/svg/IconAccount.svelte'
    import IconFilter from '../assets/svg/IconFilter.svelte'
    import IconList from '../assets/svg/IconList.svelte'
    
    import Button from './Button.svelte'

    // export let guest: boolean = true
</script>

<section>
    {#if $user.signedIn}
        <div class="item">
            <Button on:click={() => console.log('Novelist about')}>
                <IconNovelist/>
            </Button>
        </div>
        <div class="devider"></div>
        <div class="item">
            <Button on:click={() => console.log('List')}>
                <IconList/>
            </Button>
        </div>
        <div class="item">
            <Button on:click={() => console.log('Filter')}>
                <IconFilter/>
            </Button>
        </div>
        <div class="item">
            <Button on:click={() => console.log('Account page')}>
                <IconAccount/>
            </Button>
        </div>
    {:else}
        <div class="item">
            <Button on:click={() => console.log('Novelist about')}>
                <IconNovelist/>
            </Button>
        </div>
        <div class="devider"></div>
        <div class="item">
            <Button on:click={() => console.log('Help')}>
                <IconHelp/>
            </Button>
        </div>
    {/if}
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        grid-column: 1/2
        grid-row: 2/3
        display: flex
        .item
            width: $menu-item-width
            height: $menu-item-height
            padding: $menu-item-padding
        .devider
            flex: 1 1 auto

</style>