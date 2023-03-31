<template>
  <div class="flex gap-2 justify-center mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      :class="route.params.letter === letter ? 'text-red-500' : ''"
    >
      {{ letter }}
    </router-link>
  </div>
  <!-- <pre>{{ meals }}</pre> -->
  <div v-if="meals">
      <Meals :meals="meals"/>
  </div>
  <div v-else-if="route.params.letter">
    <div class="flex justify-center items-center my-auto">
      <div class="h-48 w-48">
        <img src="../assets/sorry.png" alt="Sorry" class="w-full h-full object-cover">
      </div>
      No meals to show
    </div>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";
import YoutubeButton from "../components/YoutubeButton.vue";

const meals = computed(() => store.state.mealsByLetter);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const route = useRoute();
const searchByLetter = () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
};

watch(route, () => {
  searchByLetter();
});

onMounted(() => {
  searchByLetter();
});
</script>

<style></style>
