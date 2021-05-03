<template>
<div>
  <div class="form-floating mb-3">
  <input type="email" class="form-control mt-3"  v-model="search">
  <label for="floatingInput">메뉴검색</label>
</div>
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
    <tr v-for="data,i in filteredList" :key="i">
      
      <td>{{datas[i]["위치"]}}</td>
      <td>{{datas[i]["상호"]}}</td>
      <td>{{datas[i]["대표메뉴"]}}</td>
      <td>{{datas[i]["정보"]}}</td>
    </tr>
  </tbody>
  </table>
</div>
</template>

<script>
export default {
    name: 'List',
    data(){
      return {
        search: '',
      }
      
    },
    props: {
        datas: Array,
    },
    computed: {
      filteredList() {
        return this.datas.filter((data) => {
          // console.log(data["상호"] + "-" + data["대표메뉴"] + ":" + data["대표메뉴"].includes(this.search));
          return data["대표메뉴"].includes(this.search);
        })
      }
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