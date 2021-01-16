<script lang="ts">
    import { route } from '../store/route'
    import { user, message } from '../store/store'

    // svg icons
    import IconEmail from '../assets/svg/IconEmail.svelte'

    // fundamental components
    import Button from '../components/Button.svelte'
    import Input  from '../components/Input.svelte'

    $: disableSignIn = /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test($user.email) && $user.password ? false : true

    function signUp() {
        console.log('Sign Up')

        $message.status = 'info'
        $message.text = `The confirmation link is sent to your email address - <a href="mailto://${$user.email}">${$user.email}</a>. Follow the link to complete the registration.`
        $message.routeout = 'signin'
        route.goto('message')
    }
</script>

<section>
    <div class="inform">
        By clicking Sign Up, you agree to Novelist <a class="mr-5" href="https://noveli.st/agreements-policies.html" target="_blank">User agreement...</a> <a class="mr-5" href="https://noveli.st/agreements-policies.html#PrivacyPolicy" target="_blank">Privacy policy...</a> and <a class="mr-5" href="https://noveli.st/agreements-policies.html#CookiePolicy" target="_blank">Cookie policy...</a>
    </div>
    <div class="input-em">
        <Input bind:value={$user.email} type="email" placeholder="Email" class={/^[^ ]+@[^ ]+\.[a-z]{2,}$/.test($user.email) || !$user.email.length ? '' : 'invalid'}>
            <IconEmail />
        </Input>
    </div>
    <div class="errors"></div>
    <div class="button-si">
        <Button class="link block" on:click={() => route.goto('signin')}>Sign In</Button>
    </div>
    <div class="button-fp">
        <Button class="link block" on:click={() => route.goto('forgottenpass')}>Forgotten pass?</Button>
    </div>
    <div class="button-su">
        <Button class="third block round" on:click={signUp} disabled={disableSignIn}>Sign Up</Button>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: grid
        grid-template-rows: auto repeat(4, min-content)
        grid-template-columns: auto auto
        grid-template-areas: "inform inform" "input-em input-em" "errors errors" "button-si button-fp" "button-su button-su"
        grid-gap: $grid-gap
        justify-self: center
        width: $media-breakpoint-lk
        .inform
            grid-area: inform
            align-self: center
            font-weight: lighter
            hyphens: auto
            :global(a)
                color: var(--color-link)
        .input-em
            grid-area: input-em
        .errors
            grid-area: errors
            height: $err-height
            text-align: center
            color: var(--error-color)
            overflow: hidden
        .button-si
            grid-area: button-si
        .button-fp
            grid-area: button-fp
        .button-su
            grid-area: button-su
</style>