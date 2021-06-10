<template>
<div>
  <div :id="elementId" :style="{ width, height }">
    <!-- daum kakao map -->
  </div>
</div>
</template>

<script>
import Map from '@/services/map/index'
// ...

export default {
    name: 'KakaoMap',

  props: {
    elementId: {
      type: String,
      required: true,
    },
    markers: {
      type: Array,
      default () {
        return []
      },
      required: true,
    },
    width: {
      type: String,
      required: false,
      default: '100%',
    },
    height: {
      type: String,
      required: false,
      default: '640px',
    },
  },
  data () {
    return {
      map: null,
    }
  },
  watch: {
    markers: {
      handler () {
        if (typeof window === 'undefined') return // SSR
        this.initMap(this.markers)
      },
      immediate: true,
    },
  },
  methods: {
    async initMap (markers) {
      if (!this.map) {
        const map = new Map()
        await map.mount(this.elementId)

        map.addMarkerClusters([
          {
            key: 'cluster1',
            color: '#222529',
            zIndex: 0,
            singleIconURL: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
          },
          {
            key: 'cluster2',
            color: '#209cee',
            zIndex: 1,
            singleIconURL: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
          },
        ])

        this.map = map
      } else {
        this.map.clearMarkers()
      }

      this.map.addMarkers(
        markers.map(
          (marker) => {
            const { name, type, location: { lat, lng } } = marker
            return {
              lat,
              lng,
              clusterKey: type,
              title: name,
              onClick: () => {
                this.$emit('click-marker', marker)
              },
            }
          }
        )
      )
    },
    setCenter (lat, lng) {
      this.map && this.map.setCenter({ lat, lng, maxLevel: 10 })
    },
  },
}
</script>