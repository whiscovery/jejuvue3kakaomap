<template>
  <div>
    <div class="d-grid gap-2 d-md-block mt-3 mb-3">
  <router-link to="/secondfood/list"><button class="btn btn-yellow" type="button">목록</button></router-link>
  <router-link to="/secondfood/secondmap"><button class="btn btn-yellow ms-2" type="button">지도</button></router-link>
  <router-link to="/secondfood/insert"><button class="btn btn-yellow ms-2" type="button">후보지입력</button></router-link>
</div>
  </div>
</template>

<script>
export default {
    name: 'SecondMenu'

}
</script>

<style>
.btn-yellow {
  background-color: gold;
}
</style>