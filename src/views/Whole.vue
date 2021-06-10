<template>
  <div class="mt-3">
    <KakaoMap :elementId="mapmap" />
  </div>
</template>

<script>
import KakaoMap from '@/components/KakaoMap'
export default {
  name: 'Whole',
  components: {
    KakaoMap: KakaoMap
  }
}
</script>

<style>

</style>