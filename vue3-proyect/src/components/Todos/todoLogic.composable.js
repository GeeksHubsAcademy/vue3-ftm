
import { nextTick, computed, watch } from 'vue'

import { useRefPersisted } from "../../composables/useRefPersisted";


export function useTodosLogic() {
    const todos = useRefPersisted('todos', []);
    const newTodoText = useRefPersisted('newTextTodo', '');

    const completedTodos = computed(() => {
        console.log('computed');
        return todos.value.filter(todo => todo.done).length
    })

    watch(completedTodos, (val) => {
        document.title = `Completed todos: ${val}`
    }, { immediate: true });

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

    return {
        todos,
        createNewTodo,
        updateTodo,
        handleDelete,
        completedTodos,
        newTodoText
    }
}