<template>
  <div>
      <div class="alert alert-primary alert-small" role="alert">
  일단 가보고 맛집인지 판단할 곳, 여행 계획 세울 때 사용하세요. 귀찮으니 로그인같은거 없어요.
</div>
      <SecondMenu />
      <div>
          <router-view :menus="menus"></router-view>
      </div>
    </div>
</template>

<script>
import SecondMenu from '@/components/second/SecondMenu'
export default {
    name: 'SecondFood',
    components: {
        SecondMenu: SecondMenu
    },
    props: {
        menus: Array
    }
}
</script>

<style scoped>
.alert-small {
    font-size: 13px;
    margin-top: 10px;
}
</style>