<script setup>
import TodoItem from '@comps/Todos/TodoItem.vue'

import { useTodosLogic } from "./todoLogic.composable.js";


const {
  todos,
  newTodoText,
  handleDelete,
  createNewTodo,
  updateTodo,
  completedTodos
} = useTodosLogic();



</script>

<template>
  <div>
    <form @submit="e => createNewTodo(e)">
      <input type="text"
        v-model="newTodoText">
      <button> crear</button>

    </form>
    <section>
      completed: {{ completedTodos }} / {{ todos.length }}

    </section>
    <ul>
      <li v-for="todo of todos">
        <todo-item :data="todo"
          @toggle-done="() => updateTodo(todo)"
          @delete-todo="handleDelete" />
      </li>
    </ul>
    <pre>
      {{ todos }}
    </pre>
  </div>
</template>
<style scoped>
form {
  display: flex;
  justify-content: center;
  padding: 1em;
}

div {
  font-weight: bold;
  background-color: f5f5f5;
  font-size: 1em;


}
</style>