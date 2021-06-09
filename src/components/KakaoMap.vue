<template>
    <div ref="map"></div>
</template>

<script>
export default {
    name: 'KakaoMap',
    props: {
        appkey: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 300
        },
        center: {
            type: Array,
            required: true
        },
        level: {
            type: Number
        },
        isShowing: {
            type: Boolean
        }
    },

    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=93e7ae567c188033ab3c4af5d997866a';
            document.head.appendChild(script);
        }
    },

    data() {
        return {
            map: null,
            mapCenter: this.center
        }
    },

    watch: {
        isShowing(val) {
            if (val) {
                this.relayout();
            }
        },
        width(val) {
            this.$refs.map.style.width = val + 'px';
            this.relayout();
        },
        height(val) {
            this.$refs.map.style.height = val + 'px';
            this.relayout();
        }
    },

    methods: {
        initMap() {
            const container = this.$refs.map;
            container.style.width = this.width + 'px';
            container.style.height = this.height + 'px';

            const options = {
              center: new kakao.maps.LatLng(...this.mapCenter)
            };

            const map = new kakao.maps.Map(container, options);
            map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            kakao.maps.event.addListener(map, 'center_changed', this.onCenterChanged);
            this.map = map;
        },
        relayout() {
            kakao.maps.event.removeListener(this.map, 'center_changed', this.onCenterChanged);
            this.map.relayout();
            const latlng = new kakao.maps.LatLng(...this.mapCenter);
            this.map.setCenter(latlng);
            kakao.maps.event.addListener(this.map, 'center_changed', this.onCenterChanged);
        },
        onCenterChanged() {
            const center = this.map.getCenter();
            this.mapCenter = [center.getLat(), center.getLng()];
        }
    }
}
</script>