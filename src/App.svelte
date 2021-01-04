<script lang="ts">
	import { user, route } from './store/store'

	import Menu from './components/Menu.svelte'
	import Error from './components/Error.svelte'
	import SignIn from './guest/SignIn.svelte'
	import SignUp from './guest/SignUp.svelte'

	let inverseColors: boolean = false;
</script>

<!--
	https://github.com/sveltejs/gestures
	https://svelte.dev/repl/ffbdb659f2c52c8510bec42af3ffb0d1?version=3.0.0-beta.10
-->

<svelte:head>
	{#if inverseColors}
		<link rel="stylesheet" href="/inverse-colors.css">
	{/if}
</svelte:head>

<main>
	{#if $user.signedIn}
		<div>
			list of comicses
		</div>
	{:else}
		{#if $route === 'signin'}
			<SignIn/>
		{:else if $route === 'signup'}
			<SignUp/>
		{:else}
			<Error/>
		{/if}
	{/if}
	<Menu/>
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
		grid-template-rows: auto min-content
</style>