<script setup>
import TodoItem from '@comps/TodoItem.vue'
import { ref, nextTick, computed, watch, watchEffect } from 'vue'


const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

const state = ref({
  newTodoText: '',
  todos: initialTodos
})

const completedTodos = computed(() => {
  console.log('computed');
  return state.value.todos.filter(todo => todo.done).length
})



watch(completedTodos, (val) => {
  document.title = `Completed todos: ${val}`
}, { immediate: true });



// watchEffect( () => {
//   console.log('watch');
//   localStorage.setItem('todos', JSON.stringify(state.value.todos));
// });


// watch(() => state.value.todos.length, () => {
//   console.log('watch');
//   localStorage.setItem('todos', JSON.stringify(state.value.todos));
// });


watch(state.value.todos, () => {
  console.log('watch');
  localStorage.setItem('todos', JSON.stringify(state.value.todos));
}, { deep: false });




function createNewTodo(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    text: state.value.newTodoText,
    done: false
  };
  state.value.todos.push(newTodo);
  state.value.newTodoText = ''
}

function updateTodo(todo) {
  todo.done = !todo.done
}

async function handleDelete(event) {
  const id = event;
  const index = state.value.todos.findIndex(todo => todo.id === id);
  state.value.todos.splice(index, 1);
  await nextTick()
  console.log(document.querySelectorAll('article').length);
}

</script>

<template>
  <div>
    <form @submit="e => createNewTodo(e)">
      <input type="text"
        v-model="state.newTodoText">
      <button> crear</button>

    </form>
    <section>
      completed: {{ completedTodos }} / {{ state.todos.length }}

    </section>
    <ul>
      <li v-for="todo of state.todos">
        <todo-item :data="todo"
          @toggle-done="() => updateTodo(todo)"
          @delete-todo="handleDelete" />
      </li>
    </ul>
    <pre>
      {{ state }}
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