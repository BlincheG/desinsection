<template lang="pug">
    .congrats-app
        modal-component(
            ref="modal"
            className="congrats-modal"
            :triggerclass="triggerclass")

            .congrats-wrap
                .congrats-title Ваша заявка успешно отправлена!
                .congrats-text В ближайшее время с Вами свяжется персональный менеджер и ответит на все Ваши вопросы. Благодарим за сотрудничество!
</template>

<style lang="stylus">
    .congrats-modal
        .modal-wrap
            overflow hidden
            background-image none
            background-size cover
            background-position center center

    .congrats-wrap
        width 100%
        display block
        text-align center

    .congrats-title
        color #333
        font-size 1.2rem

    .congrats-text
        color #333
        font-size 1rem
        font-weight 300
        line-height 1.2rem
        margin-top 30px
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
