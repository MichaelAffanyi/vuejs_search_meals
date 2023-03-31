import axiosClient from "../axiosClient"

export const searchMeals = ({commit}, keyword) => {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMeals', data.meals)
    })
}

export const searchMealsByLetter = ({commit}, letter) => {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setMealsByLetter', data.meals)
    })
}

export const searchMealsByIngredient = ({ commit }, ingredient) => {
    axiosClient(`filter.php?i=${ingredient}`)
    .then(({data}) => {
        commit('setMealsByIngredient', data.meals)
    })
}

export const searchIngredient = ({commit}) => {
    axiosClient.get(`list.php?i=list`)
    .then(({data}) => {
        commit('setIngredient', data.meals)
    })
}

// export const ser