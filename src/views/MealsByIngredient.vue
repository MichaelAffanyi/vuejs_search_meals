<template>
  <Meals :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute()
const meals = computed(() => store.state.mealsByIngredient);
// const ingredient = ref('')

const searchByIngredient = () => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
};
onMounted(() => {
  searchByIngredient();
});
</script>

<style></style>
