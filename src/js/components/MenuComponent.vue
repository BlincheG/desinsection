<template lang="pug">
    .menu-app
        modal-component(
            ref="modal"
            className="menu-modal"
            :triggerclass="triggerclass")

            .menu-modal-wrap
                .menu-modal-title
                    img(src="/images/bugmobile.png")
                .menu-modal-menu
                    ul
                        li
                            a(href="#whowe") О нас
                        li
                            a(href="#services") Услуги
                        li
                            a(href="#price") Цены
                        li
                            a(href="#contact") Контакты

</template>

<style lang="stylus">
    .menu-modal
        .modal-wrap
            overflow hidden
            background-image url('/images/underlogomobile.png')
            background-size 100%
            background-position top right
            background-repeat no-repeat

    .menu-modal-menu
        text-align right
        margin 100px 0 0 0
        li
            padding-top 67px
        a
            font-weight bold
            font-size 1.3rem
            text-align right
            color #515151
</style>
<script>
    export default {
        props: {
            triggerclass: {
                default: null
            }
        },
        mounted: function() {
            this.$refs.modal.hideTitle();
        },
        methods: {
            show: function() {
                this.$refs.modal.open();
            },
            hide: function() {
                this.$refs.modal.close();
            }
        }
    }
</script>
