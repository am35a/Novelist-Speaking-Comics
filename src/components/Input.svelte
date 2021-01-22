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
    <div class="error"><IconError /></div>
    <button class="clear" on:click={() => value = ''}><IconClear /></button>
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
            height: $npt-input-height
            padding: 0 $key-rem * 1.5 + $icon-sm
            background-color: transparent
            border: none
            color: currentColor
            text-align: center
            outline-style: none
            z-index: 1
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
                padding: 0
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
            height: $range-height
            margin: auto 0 0 0
            padding: 0 $key-rem * 1.5
            background-color: var(--first-color)
            background-clip: content-box
            transition: padding .25s ease-in-out
        .placeholder,
        .error
            width: $npt-placeholder-width
            height: $npt-placeholder-height
            left: $key-rem * 2.5
            margin: auto 0 auto 50%
            opacity: .8
            transition: opacity .25s ease-in-out, transform .25s ease-in-out, margin-left .25s ease-in-out
            transform: translateX(-50%)
        .clear
            display: inline-flex
            width: $npt-clear-width
            height: $npt-clear-height
            margin: auto 0 auto 100%
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
            z-index: 1
            &:focus,
            &:hover
                opacity: 1
</style>