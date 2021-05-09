<script lang="ts">
    import { onMount } from 'svelte'
    import { route } from './store/route'
    import { user }  from './store/store'

    // sections of pages
    import Help          from './between/Help.svelte'
    import About         from './between/About.svelte'
    import Message       from './between/Message.svelte'
    import SignIn        from './guest/SignIn.svelte'
    import SignUp        from './guest/SignUp.svelte'
    import ForgottenPass from './guest/ForgottenPass.svelte'
    import List          from './signed/List.svelte'
    import Account       from './between/Account.svelte'

    import Menu          from './between/Menu.svelte'


	// let photos = [];

	onMount(async () => {
		// const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
        // photos = await res.json()
        // console.log(photos)

        if ($user.settings.autoSignIn) {
            console.log(`autoSignIn = ${$user.settings.autoSignIn}`)
            route.goto('list')
        }
	})

    let inverseColors: boolean = false;
</script>

<svelte:head>
    {#if inverseColors}
        <link rel="stylesheet" href="/inverse-colors.css">
    {/if}
</svelte:head>

<main>
    {#if $route.current === 'signin' && !$user.signedIn}
        <SignIn />
    {:else if $route.current === 'signup' && !$user.signedIn}
        <SignUp />
    {:else if $route.current === 'forgottenpass' && !$user.signedIn}
        <ForgottenPass />
    {:else if $route.current === 'list' && $user.signedIn}
        <List />
    {:else if $route.current === 'account' && $user.signedIn}
        <Account />
    {:else if $route.current === 'help'}
        <Help />
    {:else if $route.current === 'about'}
        <About />
    {:else if $route.current === 'message'}
        <Message />
    {:else}
        <Message status={'error'} text={'Something went wrong...'} routeout={'signin'} />
    {/if}
    <Menu />
</main>

<!-- <button on:click={() => inverseColors = inverseColors === false}>
    toggle theme
</button> -->

<style lang="sass">
    @import ../src/assets/sass/variables

    main
        width: 100vw
        height: 100vh
        display: grid
        grid-gap: $grid-gap
        grid-template-columns: 1fr
        grid-template-rows: 1fr min-content
        :global(> section:first-child)
            grid-column: 1/2
            grid-row: 1/2
        :global(> section:last-child)
            grid-column: 1/2
            grid-row: 2/3
</style>