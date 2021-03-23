<template>
    <div class="home">
        <Sidebar></Sidebar>
        <TodoList></TodoList>

    </div>
</template>

<script>
    import TodoList from '@/components/TodoList.vue';
    import Sidebar from '@/components/sidebar.vue';

    export default {
        name: 'Home',
        components: {
            TodoList,
            Sidebar,
        },
    }
</script>

<style src="../style/app.css"></style>
