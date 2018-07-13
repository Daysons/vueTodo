<template>
    <div class="todo-item">
        <input type="checkbox" v-model="todo.completed" @click = "toggleState"/>
        <label>{{todo.item}}</label>
        <button class="destroy" @click = "deleteItem"></button>
    </div>
</template>

<script>
    export default {
        name: "item",
        props: {
            todo: {
                items: "",
                type: Object,
                require: true,
                completed: false,
            }
        },
        methods: {
            toggleState() {

            },
            deleteItem() {

            }
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>

</style>