<template>
<Menu />
<div class="container">
  <router-view :menus="menus"></router-view>

</div>


</template>

<script>
//93e7ae567c188033ab3c4af5d997866a
//구글 시트 키: 1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ
//json: https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json

import Menu from './components/Menu'


export default {
  name: 'App',
  components: {
    Menu: Menu,
  },
  data(){
    return {
      menus: ['전체', '돼지고기','소고기','실내포장마차','노포','국밥','국수','해장국','회','일식', '이자카야', '양식','해물요리','해물라면','한식','토속음식', '바','카페','숙소','갈곳','기타']
    }
  }
};
</script>

<style>
body {
  font-family: 'Exo 2', sans-serif;
}
</style>
