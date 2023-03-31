<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 mt-8 gap-5 p-8">
      <div
        v-for="meal in meals"
        :key="meal.idMeal"
        class="border shadow rounded-xl"
      >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl w-full h-48 object-cover"
          />
        </router-link>
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <div class="py-4">
            <YoutubeButton :href="meal.strYoutube" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import YoutubeButton from "./YoutubeButton.vue";
export default {
  props: {
    meals: Array,
  },
  components: {
    YoutubeButton,
  },
};
</script>

<style></style>
