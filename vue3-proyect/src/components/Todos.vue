<script setup>
import TodoItem from '@comps/TodoItem.vue'
import { ref, nextTick, computed, watch, watchEffect } from 'vue'

import { useRefPersisted } from "../composables/useRefPersisted.js";






const todos = useRefPersisted('todos', []);

const newTodoText = useRefPersisted('newTextTodo','');

const completedTodos = computed(() => {
  console.log('computed');
  return todos.value.filter(todo => todo.done).length
})



watch(completedTodos, (val) => {
  document.title = `Completed todos: ${val}`
}, { immediate: true });



// watchEffect( () => {
//   console.log('watch');
//   localStorage.setItem('todos', JSON.stringify(todos.value));
// });


// watch(() => todos.value.length, () => {
//   console.log('watch');
//   localStorage.setItem('todos', JSON.stringify(todos.value));
// });




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

async function handleDelete(event) {
  const id = event;
  const index = todos.value.findIndex(todo => todo.id === id);
  todos.value.splice(index, 1);
  await nextTick()
  console.log(document.querySelectorAll('article').length);
}

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