<script lang="ts">
    import { route } from '../store/route'
    import { user }  from '../store/store'

    // svg icons
    import IconNovelist from '../assets/svg/IconNovelist.svelte'
    import IconEmail    from '../assets/svg/IconEmail.svelte'
    import IconPassword from '../assets/svg/IconPassword.svelte'

    // fundamental components
    import Button from '../components/Button.svelte'
    import Input  from '../components/Input.svelte'

    let errorMessage: string = ''
   
    $: disableSignIn = /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test($user.email) && $user.password ? false : true

    function signIn() {
        console.log('Sign In')

        // start simulation
        if($user.email === 'info@mobitoon.ru' && $user.password === '123456') {
            $user.signedIn = true
            route.goto('list')
            // errorMessage = ''
        } else {
            $user.signedIn = false
            errorMessage = 'Wrong email or password'
        }
        // end simulation
    }
</script>

<section>
    <div class="inform">
        <div class="logo">
            <IconNovelist />
        </div>
        <div class="slogan">
            <div>Book your mind</div>
            <div>to flying high!</div>
        </div>
    </div>
    <div class="input-em">
        <Input bind:value={$user.email} type="email" placeholder="Email" class={/^[^ ]+@[^ ]+\.[a-z]{2,}$/.test($user.email) || !$user.email.length ? '' : 'invalid'}>
            <IconEmail />
        </Input>
    </div>
    <div class="input-pw">
        <Input bind:value={$user.password} type="password" placeholder="Password">
            <IconPassword />
        </Input>
    </div>
    <div class="errors">
        {errorMessage}
    </div>
    <div class="button-fp">
        <Button class="link block" on:click={() => route.goto('forgottenpass')}>Forgotten pass?</Button>
    </div>
    <div class="button-su">
        <Button class="third link block" on:click={() => route.goto('signup')}>Sign Up</Button>
    </div>
    <div class="button-si">
        <Button class="fourth block round" on:click={signIn} disabled={disableSignIn}>Sign In</Button>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: grid
        grid-template-rows: auto repeat(5, min-content)
        grid-template-columns: auto auto
        grid-template-areas: "inform inform" "input-em input-em" "input-pw input-pw" "errors errors" "button-fp button-su" "button-si button-si"
        grid-gap: $grid-gap
        justify-self: center
        // justify-items: center
        width: $media-breakpoint-lk
        .inform
            grid-area: inform
            // justify-self: center
            align-self: center
            // text-align: center
            font-size: 1.5rem
            font-weight: lighter
            line-height: 1.2
            text-transform: uppercase
            display: grid
            grid-gap: 0.5rem
            .logo
                margin-left: auto
                margin-right: auto
                width: $icon-lg
                height: $icon-lg
            .slogan
                text-align: center
            @media (orientation: landscape) and (max-height: 640px)
                grid-template-columns: max-content auto
                justify-content: center
                .logo
                    width: $icon-md
                    height: $icon-md
                .slogan
                   align-self: center
                   text-align: left
            @media (orientation: landscape) and (max-height: 420px)
                display: none
        .input-em
            grid-area: input-em
        .input-pw
            grid-area: input-pw
        .errors
            grid-area: errors
            height: $err-height
            text-align: center
            color: var(--error-color)
            overflow: hidden
        .button-fp
            grid-area: button-fp
        .button-su
            grid-area: button-su
        .button-si
            grid-area: button-si
</style>