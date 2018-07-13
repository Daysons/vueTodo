<template>
    <div class="helper-item">
        <ul class="helper-filter">
            <li v-for="item in currentItems">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "helper",
        data: {
            currentItems:["所有", "未完成", "已完成"]
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>

</style>