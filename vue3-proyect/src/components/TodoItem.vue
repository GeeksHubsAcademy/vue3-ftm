<script setup>
import { defineProps, defineEmits, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue';

onBeforeMount(() => {
    console.log('before mount', document.querySelector('article[data-text=hola]'));
});
onMounted(() => {
    console.log('mounted' );
});

onBeforeUpdate(() => {
    console.log('before update');
});
onUpdated(() => {
    console.log('updated');
});

onUnmounted(() => {
    console.log('unmounted', data);
    document.title = 'unmounted';

});



onBeforeUnmount(() => {
    console.log('before unmount');
});


// const props = defineProps(['data']);
const props = defineProps({
    data: {
        type: Object,
        required: true,
    }
});


// const emit = defineEmits(['toggleDone']);
const emit = defineEmits({
    toggleDone(payload) {
        return payload === undefined;
    }
});
function handleChange() {
    emit('toggleDone')
}

</script>

<template>
    <article :data-text="props.data.text">
        <input type="checkbox"
            @change="handleChange" />
        <span :style="{ textDecoration: !props.data.done ? 'line-through' : 'none' }">{{ props.data.text }}</span><span
            :style="{ color: 'grey', fontSize: '0.6em', padding: '5px' }">{{ JSON.stringify(props.data) }}</span>
            <button @click="$emit('deleteTodo', props.data.id)">X</button>
    </article>
</template>