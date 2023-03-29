<template>
  <div class="p-8">
      <input 
      type="text" 
      class="rounded bottom-2 border-gray-200 w-full" placeholder="Search for meals by name"
      v-model="keyword"
      @change="searchByName" />
    </div>
    <pre>{{ meals }}</pre>
</template>

<script setup>
import { computed, ref } from "vue";
import store from '../store'

const meals = computed(() => store.state.searchedMeals)
const keyword = ref('')
const searchByName = () => {
  store.dispatch('searchMeals', keyword.value)
}
</script>

<style>

</style> 