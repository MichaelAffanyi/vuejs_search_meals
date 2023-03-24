<template>
    <h1 class="text-3xl font-bold underline">
      {{ meals }}
    </h1>
</template>

<script>
import { computed } from 'vue';
import store from '../store';
const meals = computed(() => store.state.meals)
// ex 
</script>

<style>

</style>