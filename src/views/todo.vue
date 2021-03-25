<template>
<<<<<<< HEAD
      <h1>Todos</h1>

    <div class="home">

        <TodoList></TodoList>
        <Todos></Todos>
=======
    <div class="home">
        <Sidebar></Sidebar>
        <TodoList></TodoList>
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563

    </div>
</template>

<script>
<<<<<<< HEAD
    import Todos from '@/components/Todos.vue';
    import TodoList from '@/components/TodoList.vue';
=======
    import TodoList from '@/components/TodoList.vue';
    import Sidebar from '@/components/sidebar.vue';
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563

    export default {
        name: 'Home',
        components: {
<<<<<<< HEAD
            Todos,
            TodoList,
=======
            TodoList,
            Sidebar,
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
        },
    }
</script>

<style src="../style/app.css"></style>
