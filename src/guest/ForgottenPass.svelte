<script lang="ts">
    import { route } from '../store/route'
    import { user, message } from '../store/store'
    
    // svg icons
    import IconEmail from '../assets/svg/IconEmail.svelte'

    // fundamental components
    import Button from '../components/Button.svelte'
    import Input  from '../components/Input.svelte'

    $: disableSignIn = /^[^ ]+@[^ ]+\.[a-z]{2,}$/.test($user.email) && $user.password ? false : true

    function forgottenPass() {
        console.log('Reset password')

        $message.status = 'info'
        $message.text = `Password recovery link is sent to your email address - <a href="mailto://${$user.email}">${$user.email}</a>. Follow the link to get temporary password.`
        $message.routeout = 'signin'
        route.goto('message')
    }
</script>

<section>
    <div class="inform">
        To reset a password for your account, you have to enter the email to which the account is linked.
    </div>
    <div class="input-em">
        <Input bind:value={$user.email} type="email" placeholder="Email" class={/^[^ ]+@[^ ]+\.[a-z]{2,}$/.test($user.email) || !$user.email.length ? '' : 'invalid'}>
            <IconEmail />
        </Input>
    </div>
    <div class="errors"></div>
    <div class="button-su">
        <Button class="third link block" on:click={() => route.goto('signup')}>Sign Up</Button>
    </div>
    <div class="button-si">
        <Button class="link block" on:click={() => route.goto('signin')}>Sign In</Button>
    </div>
    <div class="button-fp">
        <Button class="fourth block round" on:click={forgottenPass} disabled={disableSignIn}>Reset password</Button>
    </div>
</section>

<style lang="sass">
    @import ../src/assets/sass/variables

    section
        display: grid
        grid-template-rows: auto repeat(4, min-content)
        grid-template-columns: auto auto
        grid-template-areas: "inform inform" "input-em input-em" "errors errors" "button-su button-si" "button-fp button-fp"
        grid-gap: $grid-gap
        justify-self: center
        width: $media-breakpoint-lk
        .inform
            grid-area: inform
            align-self: center
            font-weight: normal
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
        .button-su
            grid-area: button-su
        .button-si
            grid-area: button-si
        .button-fp
            grid-area: button-fp
</style>