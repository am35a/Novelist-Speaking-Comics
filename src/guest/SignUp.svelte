<script lang="ts">
    import { route } from '../store/store'

    import IconEmail from '../assets/svg/IconEmail.svelte'
    import Input from '../components/Input.svelte'
    import Button from '../components/Button.svelte'

    // start tmp
    let valueEmail: string = 'info@mobitoon.ru'
    // end tmp
    
    function forgottenPass() {
        console.log('Forgotten pass?')

        $route = 'forgottenpass'
    }
    function signIn() {
        console.log('Sign In')

        $route = 'signin'
    }
    function signUp() {
        console.log('Sign Up')

        // $route = 'signup'
    }

    // let disableSignIn: boolean = false
    
    // $: disableSignIn = /\S+@\S+\.\S+/.test(valueEmail) ? false : true
</script>

<section>
    <div class="inform">
        <!-- <div class="display-5">Registration info</div>
        The confirmation link is sent to your eMail address. Follow the link to complete the registration. -->

        By clicking Sign Up, you agree to Novelist <a class="mr-5" href="https://noveli.st/agreements-policies.html" target="_blank">User agreement...</a> <a class="mr-5" href="https://noveli.st/agreements-policies.html#PrivacyPolicy" target="_blank">Privacy policy...</a> and <a class="mr-5" href="https://noveli.st/agreements-policies.html#CookiePolicy" target="_blank">Cookie policy...</a>
    </div>
    <div class="input-em">
        <Input bind:value={valueEmail} type="email" placeholder="Email">
            <IconEmail/>
        </Input>
    </div>
    <div class="errors">
        <!-- error message -->&nbsp;
    </div>
    <div class="button-fp">
        <Button class="link block" on:click={signIn}>Sign In</Button>
    </div>
    <div class="button-su">
        <Button class="link block" on:click={forgottenPass}>Forgotten pass?</Button>
    </div>
    <div class="button-si">
        <Button class="third block round" on:click={signUp}>Sign Up</Button>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        grid-column: 1/2
        grid-row: 1/2
        display: grid
        grid-template-rows: auto repeat(4, min-content)
        grid-template-columns: auto auto
        grid-template-areas: "inform inform" "input-em input-em" "errors errors" "button-fp button-su" "button-si button-si"
        grid-gap: $grid-gap
        justify-self: center
        // justify-items: center
        width: $media-breakpoint-lk
        .inform
            grid-area: inform
            // justify-self: center
            align-self: center
            text-align: center
            // font-size: 1.5rem
            font-weight: lighter
            // line-height: 1.2
            // text-transform: uppercase
            a
                color: var(--color-link)
        .input-em
            grid-area: input-em
        .errors
            grid-area: errors
        .button-fp
            grid-area: button-fp
        .button-su
            grid-area: button-su
        .button-si
            grid-area: button-si

</style>