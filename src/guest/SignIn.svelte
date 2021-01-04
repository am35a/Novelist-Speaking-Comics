<script lang="ts">
    import { user, route } from '../store/store'

    import IconNovelist from '../assets/svg/IconNovelist.svelte'
    import IconEmail from '../assets/svg/IconEmail.svelte'
    import IconPassword from '../assets/svg/IconPassword.svelte'
    import Input from '../components/Input.svelte'
    import Button from '../components/Button.svelte'

    // start tmp
    let valueEmail: string = 'info@mobitoon.ru'
    let valuePassword: string = '123456'
    // end tmp

    function signIn() {
        console.log('Sign In')

        $user.signedIn = true
    }

    let disableSignIn: boolean = false
    
    $: disableSignIn = /\S+@\S+\.\S+/.test(valueEmail) && valuePassword ? false : true
</script>

<section>
    <div class="inform">
        <div class="logo">
            <IconNovelist/>
        </div>
        <div>Book your mind</div>
        <div>to flying high!</div>
    </div>
    <div class="input-em">
        <Input bind:value={valueEmail} type="email" placeholder="Email">
            <IconEmail/>
        </Input>
    </div>
    <div class="input-pw">
        <Input bind:value={valuePassword} type="password" placeholder="Password">
            <IconPassword/>
        </Input>
    </div>
    <div class="errors">
        <!-- error message -->&nbsp;
    </div>
    <div class="button-fp">
        <Button class="link block" on:click={() => $route = 'forgottenpass'}>Forgotten pass?</Button>
    </div>
    <div class="button-su">
        <Button class="third link block" on:click={() => $route = 'signup'}>Sign Up</Button>
    </div>
    <div class="button-si">
        <Button class="fourth block round" on:click={signIn} disabled={disableSignIn}>Sign In</Button>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        grid-column: 1/2
        grid-row: 1/2
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
            text-align: center
            font-size: 1.5rem
            font-weight: lighter
            line-height: 1.2
            text-transform: uppercase
            .logo
                margin-left: auto
                margin-right: auto
                width: $icon-lg
        .input-em
            grid-area: input-em
        .input-pw
            grid-area: input-pw
        .errors
            grid-area: errors
        .button-fp
            grid-area: button-fp
        .button-su
            grid-area: button-su
        .button-si
            grid-area: button-si

</style>