<template>
    <p>
        today is {{ today }}
    </p>
</template>

<script setup>
import { inject } from 'vue'
const today = inject('today', 'no date');
</script>