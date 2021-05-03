<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
   <div class="container-fluid">
    <a class="navbar-brand" href="#">
         <img src="../assets/logo.png" alt="" width="30" height="30" class="d-inline-block align-text-top">맛집지도</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list">제주맛집리스트</router-link>
        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" to="/map">제주맛집지도</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/whole">전국맛집지도(제주제외)</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/input">입력</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
      
      

 
</template>

<script>
export default {
    name: 'Menu',
    data(){
        return {
        }
    }

}
</script>

<style>

</style>