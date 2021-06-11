<template>
  <div>
      <div class="alert alert-primary alert-small alert-dismissible fade show" role="alert">
  일단 가보고 맛집인지 판단할 곳, 여행 계획 세울 때 사용하세요.<br />
  +를 누르면 후보지에서 맛집으로 올라가고, x를 누르면 삭제됩니다.<br />
  남의 기록 지우지 않게 조심!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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