<template>
  <div class="bg">
  <div class="py-4">
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 border rounded-3">
          <h2>제주 지역</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item contents" v-for="jeju, i in filteredJeju" :key="i">{{jeju.상호}} <span class="contents-category"> ({{jeju.분류}})</span></li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 border rounded-3">
          <h2>기타 전국</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item contents" v-for="etc, j in filteredEtc" :key="j">{{etc.상호}} <span class="contents-category"> ({{etc.분류}})</span></li>
          </ul>
        </div>
      </div>
    </div>


  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Home',
    created () {
      this.fetchFoods();
    },
    mounted () {
    },
    computed: {
      filteredJeju () {
        return this.$store.state.foods.filter((data) => {
          return (data.위치 == '제주') ? true : false
        })
      },
      filteredEtc () {
        return this.$store.state.foods.filter((data) => {
          return (data.위치 == '제주') ? false : true
        })
      },
      ...mapState(['foods'])
  },
  methods: {
        ...mapActions(['fetchFoods'])
  }
}
</script>

<style scoped>
.bg {
  margin-top: 30px;
  width: 100%;
}
.contents {
  font-size: 12px;
}
.contents-category {
  font-size: 10px;
  color:coral;
}
</style>