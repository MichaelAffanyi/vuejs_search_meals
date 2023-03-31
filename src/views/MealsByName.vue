<template>
  <div class="pt-8 px-8">
      <input 
      type="text" 
      class="rounded bottom-2 border-gray-200 w-full" placeholder="Search for meals by name"
      v-model="keyword"
      @change="searchByName" />
    </div>
      <Meals :meals="meals"/>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from 'vue-router'
import YoutubeButton from "../components/YoutubeButton.vue";
import store from '../store'
import Meals from "../components/Meals.vue";

const route = useRoute()
const meals = computed(() => store.state.searchedMeals)
const keyword = ref('')
const searchByName = () => {
  store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name
  if(keyword.value) {
    searchByName()
  }
})
</script>

<style>

</style> 