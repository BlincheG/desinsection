<template lang="pug">
    .modal-component
        .vue-modal(v-if="showed" :class="className")
            .modal-overlay(@click.stop="close")
            .modal-wrap
                .modal-close-btn(@click.prevent="close")
                .modal-title(v-if="titleVisibile") {{ title }}
                slot
</template>

<script>
    export default {
        props: {
            triggerclass: {
                default: null
            },
            title: {
                default: null
            },
            className: {
                default: null
            },
            visible: {
                default: false
            }
        },
        data: function() {
            return {
                showed: this.visible,
                titleVisibile: true
            };
        },
        created: function() {
            if (this.triggerclass) {
                $('body')
                    .on('click', this.triggerclass, (function(e) {
                        e.preventDefault();

                        this.open();
                    }).bind(this));
            }
        },
        methods: {
            showTitle: function() {
                this.titleVisibile = true;
            },

            hideTitle: function() {
                this.titleVisibile = false;
            },

            close: function() {
                this.showed = false;

                /* jQuery */
                $('body')
                    .css({overflow: 'auto'})
                    .removeClass('modal-active');

                /* event */
                this.$emit('closed');
            },

            open: function() {
                this.showed = true;

                /* jQuery */
                $('body')
                    .css({overflow: 'hidden'})
                    .addClass('modal-active');

                /* event */
                this.$emit('showed');
            }
        }
    }
</script>

<style lang="stylus">
    .vue-modal
        width 100%
        height 100%

        position fixed
        top 0
        left 0

        z-index 999

        .modal-overlay
            width 100%
            height 100%

            background-color rgba(0,0,0,0.4)
            position absolute
            top 0
            left 0
            z-index 0

        .modal-close-btn
            cursor pointer
            color #2F80ED
            width 30px
            height 30px
            line-height 30px
            border-radius 30px
            text-align center
            background-color #FFF
            box-shadow 0px 1px 1px 1px rgba(0,0,0,0.2)

            position absolute
            top 20px
            right 20px
            z-index 9999

            &:after
                content "\f00d"
                color inherit
                font-family FontAwesome

            @media screen and (max-width: 500px)
                top 10px
                right 10px

        .modal-wrap
            width 450px
            height auto
            background-color #FFF
            border-radius 5px
            box-shadow 0 0 50px 0px rgba(0,0,0,0.2)
            padding 40px 30px
            position absolute
            top 50%
            left 50%
            z-index 9
            transform translate(-50%, -50%)

            @media screen and (max-width: 500px)
                max-width 100%
                width 100%
                height 100%
                border-radius 0px
                box-shadow none
                top 0
                left 0
                transform none

        .modal-title
            color #333
            font-family Montserrat
            font-size 1.3rem
            font-weight 400
            display block
            text-align center
            margin 0 auto 20px
</style>
