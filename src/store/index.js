import { createStore } from 'vuex'
import axios from 'axios'
import { baseurl } from '@/config/index'

export default createStore({
  state: {
    foods: [],
    foodslocation: [],
    secondfoods: []
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
    DELETE_FOOD (state, food_ID) {
      const targetIndex = state.foods.findIndex(food => food._id === food_ID)
      state.foods.splice(targetIndex, 1)
    },
    FETCH_SECOND_FOODS (state, payload) {
      state.secondfoods = payload
    },
    DELETE_SECOND (state, second_ID) {
      const targetIndex = state.secondfoods.findIndex(second => second._id === second_ID)
      state.secondfoods.splice(targetIndex, 1)
    }
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
    deleteFood ({ commit }, payload) {
      console.log(payload)
      if(confirm("삭제하시겠습니까?")) {
        axios.delete(baseurl + `/food/delete/${payload}`)
        .then((res) => {
          console.log(res)
          commit('DELETE_FOOD', payload)
        })
      }
    },
    fetchSecondFoods ({ commit }) {
      axios.get(baseurl + '/secondfoods')
      .then((res) => {
        commit('FETCH_SECOND_FOODS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // addtoFoods ({ commit }, payload) {
    //   console.log(payload)
    //   axios.delete(baseurl + `/second/delete/${payload}`)
    //   .then(res => {
    //     console.log(res);
    //     commit('DELETE_SECOND', payload)
    //   })
    // }
    deleteSecondFood ({ commit }, payload) {
      console.log(payload)
      if(confirm("삭제하시겠습니까?")) {
        axios.delete(baseurl + `/second/delete/${payload}`)
        .then(res => {
          console.log(res);
          commit('DELETE_SECOND', payload)
        })
      }
    }
  }
})
