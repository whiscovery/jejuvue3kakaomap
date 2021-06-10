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
      <th style="width: 15%" scope="col">위치</th>
      <th style="width: 20%" scope="col">상호</th>
      <th style="width: 30%" scope="col">주요메뉴</th>
      <th style="width: 35%" scope="col">정보</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="food in filteredFood" :key="food.id">
      
      <td>{{food.위치}}</td>
      <td><b>{{food.상호}}</b></td>
      <td>{{food.대표메뉴}}</td>
      <td>{{food.정보}}</td>
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
    // async created(){
    //   // google json data 받아오기
    //   axios.get('https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json')
    //                 .then((result)=>{
    //                     const temp = result.data.feed.entry;
    //                     for(var i=0; i<temp.length; i++){
    //                         var Object = {
    //                             상호: temp[i]['gsx$상호'].$t,
    //                             주소: temp[i]['gsx$주소'].$t,
    //                             분류: temp[i]['gsx$분류'].$t,
    //                             위치: temp[i]['gsx$위치'].$t,
    //                             대표메뉴: temp[i]['gsx$대표메뉴'].$t,
    //                             정보: temp[i]['gsx$정보'].$t,
    //                             기타: temp[i]['gsx$기타'].$t
    //                         };
    //                         this.tempdata.push(Object);
    //                     }
    //                     this.datas = this.tempdata;
    //                 })
    //                 .catch((err) => {
    //                   console.log(err)
    //                 })
    //               await this.$nextTick()
    //   // google json data end
    // },
    computed: {
      filteredFood () {
        return this.$store.state.foods.filter((data) => {
          return data.대표메뉴.toUpperCase().includes(this.search.toUpperCase())
        })
      },
      ...mapState(['foods'])
  },
  methods: {
        ...mapActions(['fetchFoods'])
  }
}
</script>

<style>
.jejumap {
    text-align: left;
    font-size: 12px;
}
table {table-layout: fixed;}
</style>