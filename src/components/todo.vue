<template>
    <section class="todo-wrapper">
        <input
                type="text"
                class="add-input"
                @keyup.enter = "addItem"
        />
        <ul class="todo-list">
            <li is="item" v-for="item in todo.items"></li>
        </ul>
    </section>
</template>

<script>
    import item from './todo/item';
    import helper from './todo/helper'
    export default {
        name: "todo",
        components: {
            item,
            helper
        },
        methods: {
            addItem() {

            }
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>

</style>