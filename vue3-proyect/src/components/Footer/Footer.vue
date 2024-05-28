<template>
    <footer>
        <p>© 2021 Todos los derechos reservados</p>
        <footer-column />
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
</script>