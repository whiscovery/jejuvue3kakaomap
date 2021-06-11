<template>
<div>
  <div>
    <input class="form-control mt-3" v-model="search" placeholder="검색">
    
    
</div>
<div v-if="foods">
  <!-- <div v-for="food in filteredFood" :key="food.id">
    {{food.대표메뉴}}
  </div> -->
  <table class="table table-striped jejumap mt-3">
  <thead>
    <tr>
      <th style="width: 15%" scope="col">#</th>
      <th style="width: 20%" scope="col">상호</th>
      <th style="width: 25%" scope="col">주요메뉴</th>
      <th style="width: 35%" scope="col">정보</th>
      <th style="width: 5%" scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="food in filteredFood" :key="food.id">
      
      <td>{{food.위치}}</td>
      <td><b>{{food.상호}}</b></td>
      <td>{{food.대표메뉴}}</td>
      <td>{{food.정보}}</td>
      <td><svg @click.prevent="deleteSecondFood(food._id)" class="svg-icon" viewBox="0 0 20 20">
							<path fill="#a5281b" d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
						</svg></td>
    </tr>
  </tbody>
  </table>
</div>
<div v-else>
  로딩 중입니다
</div>
</div>
</template>

<script>
// import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'List',
    data(){
      return {
        search: ''
      }
      
    },
    props: {
    },
    created () {
      this.fetchFoods();
    },
    mounted () {
    },
    computed: {
      filteredFood () {
        return this.$store.state.foods.filter((data) => {
          return data.대표메뉴.toUpperCase().includes(this.search.toUpperCase())
        })
      },
      ...mapState(['foods'])
  },
  methods: {
      deleteSecondFood(value){
            this.deleteFood(value)
            .then((res) => {
                if(res.message == 'deleted'){
                    this.fetchFoods();
                    alert("삭제되었습니다.")
                }
            })
            .catch(err => {
                console.log(err)
            })
    },
        ...mapActions(['fetchFoods', 'deleteFood'])
  }
}
</script>

<style>
.jejumap {
    text-align: left;
    font-size: 12px;
}
table {table-layout: fixed;}
.svg-icon{
    width: 20px;
}
</style>