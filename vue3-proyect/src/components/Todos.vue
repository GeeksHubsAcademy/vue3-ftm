<script setup>
import TodoItem from '@comps/TodoItem.vue'
import { ref } from 'vue'

const newTodoText = ref('')

const todos = ref([
  // { id: 1, text: 'Learn Vue 3', done: true },
  // { id: 2, text: 'Learn React', done: false },
  // { id: 3, text: 'Build something awesome', done: false },
]);



function createNewTodo(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: newTodoText.value,
    done: false
  };
  todos.value.push(newTodo);
  newTodoText.value = ''
}

function updateTodo(todo) {
  todo.done = !todo.done
}

function handleDelete(event) {
  const id = event;
  const index = todos.value.findIndex(todo => todo.id === id);
  todos.value.splice(index, 1);
}
</script>

<template>
  <div>
    <form @submit="e => createNewTodo(e)">
      <input type="text"
        v-model="newTodoText">
      <button> crear</button>

    </form>
    <ul>
      <li v-for="todo of todos">
        <todo-item :data="todo"
        @toggle-done="todo.done = !todo.done"
        @delete-todo="handleDelete"
        />
      </li>
    </ul>
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