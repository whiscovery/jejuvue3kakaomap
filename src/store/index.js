import { createStore } from 'vuex'
import axios from 'axios'
import { baseurl } from '@/config/index'

export default createStore({
  state: {
    foods: [],
    foodslocation: []
  },
  getters: {
  },
  mutations: {
    FETCH_FOODS (state, payload) {
      state.foods = payload
    },
    FETCH_FOODS_LOCATION (state, payload) {
      state.foodslocation = payload
    },
  },
  actions: {
    fetchFoods ({ commit }) {
      axios.get(baseurl + '/foods')
      .then((res) => {
        commit('FETCH_FOODS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    fetchFoodslocation ({ commit }, payload) {
      axios.get(baseurl + '/foods/' + payload)
      .then((res) => {
        commit('FETCH_FOODS_LOCATION', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
  }
})
