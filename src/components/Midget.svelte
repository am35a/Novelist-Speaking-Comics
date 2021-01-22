<script lang="ts">

</script>

<div class="midget">
    <div class="author">Evil Rat</div>
    <div class="title">Conspiracy theory of cosmic scale!</div>
    <div class="status">
        <div class="range-area"></div>
        <div class="range-saw" style="width: 90%"></div>
    </div>
    <div class="thumb">
        <img src="https://i.pinimg.com/originals/30/c8/7f/30c87f5af193e1a40d4371984dca9f63.jpg" alt="">
    </div>
</div>

<style lang="sass">
    @import ../src/assets/sass/variables

    .midget
        display: inline-grid
        width: $midget-width
        margin: $key-rem 0
        padding: 0 $key-rem
        .author
            font-size: $font-size-small
        .title
            text-transform: uppercase
        .status
            display: grid
            padding: 0 $key-rem
            height: $midget-status-height
            [class*="range-"]
                grid-row: 1/2
                grid-column: 1/2
                height: $midget-status-range-height
                align-self: center
            .range-area
                background-color: var(--fourth-color)
            .range-saw
                background-color: var(--third-color)
        .thumb
            height: $midget-thumb-height
            img
                width: $midget-thumb-img-width
                height: $midget-thumb-img-height
                object-fit: cover
                object-position: center
</style>