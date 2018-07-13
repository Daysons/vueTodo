
<template>
    <div id="app">
        <Header></Header>
        <todo></todo>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header';
    import todo from './components/todo';
    import Footer from './components/Footer';
    export default  {
        components:{
            Header,
            todo,
            Footer
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>
</style>