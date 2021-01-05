<button on:click {...$$restProps}>
    <slot></slot>
</button>

<style lang="sass">
    @import ../src/assets/sass/variables
    
    button
        width: $btn-width
        max-width: 100%
        height: $btn-height
        max-height: 100%
        display: inline-flex
        justify-content: center
        align-items: center
        padding: $btn-padding
        border: $btn-border
        background-clip: padding-box
        background-color: transparent
        color: currentColor
        font-size: 1rem
        font-weight: 400
        outline: none
        appearance: none
        transition: opacity 0.25s ease-in-out
        &:not(:disabled)
            cursor: pointer
        &:disabled
            opacity: .25
        &.block
            width: 100%
        &.round
            border-radius: $btn-radius
        &.first
            &.link
                color: var(--first-color)
            &:not(.link)
                color: var(--fourth-color)
                background-color: var(--first-color)
        &.second
            &.link
                color: var(--second-color)
            &:not(.link)
                color: var(--fourth-color)
                background-color: var(--second-color)
        &.third
            &.link
                color: var(--third-color)
            &:not(.link)
                color: var(--fourth-color)
                background-color: var(--third-color)
        &.fourth
            &.link
                color: var(--fourth-color)
            &:not(.link)
                color: var(--second-color)
                background-color: var(--fourth-color)
        &.warning
            &.link
                color: var(--warning-color)
            &:not(.link)
                color: var(--fourth-color)
                background-color: var(--warning-color)
        &.error
            &.link
                color: var(--error-color)
            &:not(.link)
                color: var(--fourth-color)
                background-color: var(--error-color)
</style>