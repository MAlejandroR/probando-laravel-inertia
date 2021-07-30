<template>
    <h1>Esta es la página principal</h1>
        <h1>Valor de número {{num}}</h1>

    <inertia-link :href="route('ruta_ej1')"> a ej1</inertia-link>
</template>

<script>
export default {
    name: "AboutComponent",
    props:[num]
}
</script>

<style scoped>

</style>
