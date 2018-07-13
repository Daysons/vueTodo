<template>
    <header>
        <div class="header">{{text}}</div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                text: "Vtodo"
            }
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>
    .header {
        font-size: 2.4rem;
        color: purple;
        text-align: center;
        line-height: 7.2rem;
    }
</style>