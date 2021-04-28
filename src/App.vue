<template>
<button @click="getData">data</button>
<div id="map" style="width:100%;height:600px;"></div>

</template>

<script>
//93e7ae567c188033ab3c4af5d997866a


export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      datas: [],
      jusos: [
        {
          'name': '산지해장국',
          'juso': '제주특별자치도 제주시 임항로 34',
        },
        {
          'name': '삼대국수회관',
          'juso': '제주특별자치도 제주시 삼성로 41',
        },
        {
          'name': '제주곱',
          'juso': '제주특별자치도 제주시 신대로16길 42',
        },
      ]
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      // global kakao
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=93e7ae567c188033ab3c4af5d997866a&libraries=services,clusterer,drawing';
      document.head.appendChild(script);
    }
  },
  methods: {
    getData() {
      
                // 주소-좌표 변환 객체를 생성합니다
          var geocoder = new kakao.maps.services.Geocoder();

          this.jusos.forEach((element)=>{ // eslint-disable-line no-unused-vars
          var coords={};
          var temp={}
          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(element.juso, (result, status)=> {
                console.log("1");
              // 정상적으로 검색이 완료됐으면 
              if (status === kakao.maps.services.Status.OK) {
                console.log("2");
                  coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                  console.log(coords);
                  temp = {
                    title: element.name,
                    latlng: coords
                  };
                  console.log(temp);
                  console.log(this.datas);
                  this.datas.push(temp);
                  
                  console.log(this.datas);
              }
          });
          

          });

          
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(33.360701, 126.570667), // 지도의 중심좌표
            level: 9, // 지도의 확대 레벨
          };
      var map = new kakao.maps.Map(mapContainer, mapOption); // eslint-disable-line no-unused-vars

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new kakao.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);




      /* 마커 관련 함수들 */
      // 마커를 표시할 위치와 title 객체 배열입니다 
      var positions = this.datas;

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
          
      for (var i = 0; i < positions.length; i ++) {
          
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(24, 35); 
          
          // 마커 이미지를 생성합니다    
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
          
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({  // eslint-disable-line no-unused-vars
              map: map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image : markerImage // 마커 이미지 
          });
      }


      /* 마커 관련 함수 끝 */

    },
    initMap() {
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(33.360701, 126.570667), // 지도의 중심좌표
            level: 9, // 지도의 확대 레벨
          };
      var map = new kakao.maps.Map(mapContainer, mapOption); // eslint-disable-line no-unused-vars

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new kakao.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);




      /* 마커 관련 함수들 */
      // 마커를 표시할 위치와 title 객체 배열입니다 
      var positions = this.datas;

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
          
      for (var i = 0; i < positions.length; i ++) {
          
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(24, 35); 
          
          // 마커 이미지를 생성합니다    
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
          
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({  // eslint-disable-line no-unused-vars
              map: map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image : markerImage // 마커 이미지 
          });
      }


      /* 마커 관련 함수 끝 */
    } //initMap()
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
  margin-top: 60px;
}
</style>
