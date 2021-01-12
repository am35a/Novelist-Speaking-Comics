<script lang="ts">
    import { route } from '../store/route'
    import { user } from '../store/store'

    import IconNovelist from '../assets/svg/IconNovelist.svelte'
    import IconHelp     from '../assets/svg/IconHelp.svelte'
    import IconAccount  from '../assets/svg/IconAccount.svelte'
    import IconFilter   from '../assets/svg/IconFilter.svelte'
    import IconList     from '../assets/svg/IconList.svelte'
    
    import Button from '../components/Button.svelte'
</script>

<section>
    {#if $user.signedIn}
        <div class="item">
            <Button on:click={() => console.log('Novelist about')}>
                <IconNovelist />
            </Button>
        </div>
        <div class="devider"></div>
        <div class="item">
            <Button on:click={() => console.log('List')}>
                <IconList />
            </Button>
        </div>
        <div class="item">
            <Button on:click={() => console.log('Filter')}>
                <IconFilter />
            </Button>
        </div>
        <div class="item">
            <Button on:click={() => console.log('Account page')}>
                <IconAccount />
            </Button>
        </div>
    {:else}
        <div class="item">
            <Button on:click={() => route.goto('about')} disabled={$route.current === 'about'}>
                <IconNovelist />
            </Button>
        </div>
        <div class="devider"></div>
        <div class="item">
            <Button on:click={() => route.goto('help')} disabled={$route.current === 'help'}>
                <IconHelp />
            </Button>
        </div>
    {/if}
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: flex
        .item
            width: $menu-item-width
            height: $menu-item-height
            > :global(button)
                padding: $menu-item-padding
        .devider
            flex: 1 1 auto

</style>