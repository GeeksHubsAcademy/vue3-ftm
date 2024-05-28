<template>
    <p >
        today is {{ today }}
        <button @click="grandpaFn('blue')">clickme</button>
    </p>
</template>
<style>

</style>

<script setup>
import { inject } from 'vue'
const today = inject('today', 'no date');
const grandpaFn = inject('changeBg');
</script>