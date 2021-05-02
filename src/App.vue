<template>
<Menu />
<div class="container">
  
  <router-view :datas="datas" :menus="menus"></router-view>

</div>


</template>

<script>
//93e7ae567c188033ab3c4af5d997866a
//구글 시트 키: 1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ
//json: https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json

import axios from 'axios'// eslint-disable-line no-unused-vars
import Menu from './components/Menu'


export default {
  name: 'App',
  components: {
    Menu: Menu,
  },
  data(){
    return {
      datas: [],
      tempdata: [],
      jejus: [],
      menus: ['전체','돼지고기','소고기','국수','해장국','회','일식','양식','해물요리','해물라면','한식','토속음식','카페','숙소','갈곳','기타'],
      
    }
  },
  async created(){
    // google json data 받아오기
      await axios.get('https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json')
                  .then((result)=>{
                      let temp = result.data['feed']['entry'];
                      for(var i=0; i<temp.length; i++){
                          var Object = {
                              '상호': temp[i]['gsx$상호']['$t'],
                              '주소': temp[i]['gsx$주소']['$t'],
                              '분류': temp[i]['gsx$분류']['$t'],
                              '위치': temp[i]['gsx$위치']['$t'],
                              
                              '대표메뉴': temp[i]['gsx$대표메뉴']['$t'],
                              '정보': temp[i]['gsx$정보']['$t'],
                              '기타': temp[i]['gsx$기타']['$t']
                          };
                          this.tempdata.push(Object);
                      }
                      this.datas = this.tempdata;
                  }
                  );
    // google json data end
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
