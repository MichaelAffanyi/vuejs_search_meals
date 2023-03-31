<template>
  <div class="flex flex-col p-8">
    <div>
      <input 
      type="text" 
      class="rounded bottom-2 border-gray-200 w-full" 
      placeholder="Search for meals" />
    </div>
  </div> 
</template>

<script>
import axiosClient from '../axiosClient'
// import { computed } from 'vue';
// import store from '../store';
// const meals = computed(() => store.state.meals)
export default {
  data() {
    return {
      ingredients: [],
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    }
  },
  async mounted() {
    const response = await axiosClient.get('/list.php?i=list')
    this.ingredients = response.data
  }
}
</script>

<style>

</style>