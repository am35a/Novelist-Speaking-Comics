<script lang="ts">
    // svg icons
    import IconClear from '../assets/svg/IconClear.svelte'
    import IconError from '../assets/svg/IconError.svelte'

    export let value: string = ''
</script>

<div class="input">
    <input {...$$restProps} bind:value>
    <div class="underline"></div>
    <div class="placeholder"><slot></slot></div>
    <div class="error"><IconError/></div>
    <button class="clear" on:click={() => value = ''}><IconClear/></button>
</div>

<style lang="sass">
    @import ../src/assets/sass/variables

    .input
        display: grid
        height: $npt-height
        overflow: hidden // disable :invalid selector ouline
        > *
            grid-column: 1/2
            grid-row: 1/2
        input
            height: $npt-height
            padding: $key-rem / 1.5 $key-rem * 1.5 + $icon-sm
            background-color: transparent
            border: none
            color: currentColor
            text-align: center
            outline-style: none
            &:valid ~ .error
            &:not(.invalid) ~ .error
                opacity: 0
            &:invalid,
            &.invalid
                color: var(--warning-color)
                ~ .underline
                    background-color: var(--warning-color)
                ~ .placeholder
                    opacity: 0
            &:focus ~ .underline
                padding-left: 0
                padding-right: 0
            &:focus:placeholder-shown ~ .placeholder,
            &:not(:placeholder-shown) ~ .placeholder,
            &:focus:placeholder-shown ~ .error,
            &:not(:placeholder-shown) ~ .error
                margin-left: 0
                transform: translateX(0)
            &:not(:focus):not(:placeholder-shown) ~ .placeholder,
            &:not(:focus):not(:placeholder-shown) ~ .error
                margin-left: $key-rem * 1.5
            &:not(:focus):not(:placeholder-shown) ~ .clear
                margin-left: calc(100% - #{$key-rem * 4.5})
            &:placeholder-shown ~ .clear
                display: none
            &:focus:not(:placeholder-shown) ~ .clear
                margin-left: calc(100% - #{$key-rem * 3})
            &::placeholder
                color: transparent
        .error
            color: var(--warning-color)
        .underline
            margin-top: auto
            height: $range-height
            background-color: var(--first-color)
            background-clip: content-box
            padding-left: $key-rem * 1.5
            padding-right: $key-rem * 1.5
            transition: padding .25s ease-in-out
        .placeholder,
        .error
            width: $icon-sm
            height: $icon-sm
            margin-left: 50%
            margin-top: auto
            margin-bottom: auto
            left: 20px
            opacity: .8
            transition: opacity .25s ease-in-out, transform .25s ease-in-out, margin-left .25s ease-in-out
            transform: translateX(-50%)
        .clear
            display: inline-flex
            width: $icon-sm
            height: $icon-sm
            margin-left: 100%
            margin-top: auto
            margin-bottom: auto
            padding: 0
            border: none
            background-clip: padding-box
            background-color: transparent
            color: currentColor
            outline: none
            appearance: none
            cursor: pointer
            opacity: .4
            transition: opacity .25s ease-in-out, margin-left .25s ease-in-out
            &:focus,
            &:hover
                opacity: 1
</style>