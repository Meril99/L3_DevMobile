<template>
      <h1>Todos</h1>

    <div class="home">

        <TodoList></TodoList>
        <Todos></Todos>

    </div>
</template>

<script>
    import Todos from '@/components/Todos.vue';
    import TodoList from '@/components/TodoList.vue';

    export default {
        name: 'Home',
        components: {
            Todos,
            TodoList,
        },
    }
</script>

<style src="../style/app.css"></style>
