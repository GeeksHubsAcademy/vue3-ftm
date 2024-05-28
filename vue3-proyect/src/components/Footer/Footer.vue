<template>
    <footer>
        <p>© 2021 Todos los derechos reservados</p>
        <footer-column />
        <p>Using text interpolation: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
    padding: 5em;

}
</style>

<script setup>
import FooterColumn from './FooterColumn.vue'
const rawHtml = '<span style="color: red">This should be red.</span>'
</script>