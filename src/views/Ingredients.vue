<template>
   <div class="pt-8 px-8">
      <input 
      type="text" 
      class="rounded bottom-2 border-gray-200 w-full" placeholder="Search for meals by name"
      v-model="keyword"
      @change="searchByName" />
    </div>
  <h1 class="text-4xl font-bold p-8">Ingredients</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <router-link
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="block bg-white p-3 mx-8 my-3 rounded"
      :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient} }"
    >
      <h1 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h1>
      <!-- <span>{{ ingredient.strDescription }}</span> -->
    </router-link>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";

const keyword = ref('')
const ingredients = computed(() => store.state.Ingredient);

console.log(ingredients);

const computedIngredients = computed(
  () => {
  return ingredients.value.filter(ele => ele.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
}
)
// const ingredient = ref('')
const searchByIngredient = () => {
  store.dispatch("searchIngredient");
};
onMounted(() => {
  searchByIngredient();
});
</script>

<style></style>
