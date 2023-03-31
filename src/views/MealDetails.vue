<template>
  <!-- <pre>{{ meals }}</pre> -->
  <div class="w-full md:w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meals.strMeal }}</h1>
    <img :src="meals.strMealThumb" :alt="meals.strMeal" class="max-w-full"/>
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category</strong> {{ meals.strCategory }}
      </div>
      <div><strong class="font-bold">Area</strong> {{ meals.strArea }}</div>
      <div><strong class="font-bold">Tags</strong> {{ meals.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meals.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(ele, ind) of new Array(20)">
            <li v-if="meals[`strIngredient${ind + 1}`]" :key="ind">
              {{ ind + 1 }}. {{ meals[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(ele, ind) in new Array(20)">
            <li v-if="meals[`strMeasure${ind + 1}`] && meals[`strMeasure${ind + 1}`] !== ' '" :key="ind">
              {{ ind + 1 }}. {{ meals[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4 flex justify-between">
      <YoutubeButton :href="meals.strYoutube">Go To Youtube</YoutubeButton>
      <a
        :href="meals.strSource"
        target="_blank"
        class="px-3 py-2 rounded border-2 border-transparent transition-colors text-indigo-400 hover:bg-indigo-500 hover:text-white"
      >
        View original source
      </a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const meals = ref({});
const route = useRoute();

onMounted(() => {
  axiosClient(`lookup.php?i=${route.params.id}`)
  .then(({ data }) => {
    meals.value = data.meals[0] || {};
  });
  console.log(route.params.id);
});
</script>

<style></style>
