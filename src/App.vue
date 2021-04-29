<template>
<Data />
<button @click="getData">data</button>
<div id="map" style="width:100%;height:600px;"></div>

</template>

<script>
//93e7ae567c188033ab3c4af5d997866a
//구글 시트 키: 1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ
//json: https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json

import axios from 'axios'// eslint-disable-line no-unused-vars
import Data from './Data'

export default {
  name: 'App',
  components: {
    Data: Data,
  },
  data(){
    return {
      datas: [],
      tempdata: [],
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
    // google json data 받아오기
      axios.get('https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json')
                  .then((result)=>{
                      let temp = result.data['feed']['entry'];
                      for(var i=0; i<temp.length; i++){
                          var Object = {
                              '상호': temp[i]['gsx$상호']['$t'],
                              '주소': temp[i]['gsx$주소']['$t'],
                              '분류': temp[i]['gsx$분류']['$t'],
                              '위치': temp[i]['gsx$위치']['$t'],
                              '기타': temp[i]['gsx$기타']['$t']
                          };
                          this.tempdata.push(Object);
                      }
                      console.log(this.tempdata);
                      this.datas = this.tempdata;
                  }
                  )
    // google json data end
  },
  methods: {
    getData() {
      
                // 주소-좌표 변환 객체를 생성합니다
          var geocoder = new kakao.maps.services.Geocoder();

          this.datas.forEach((element)=>{ // eslint-disable-line no-unused-vars
          var coords={};
          var temp={}
          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(element.주소, (result, status)=> {
              // 정상적으로 검색이 완료됐으면 
              if (status === kakao.maps.services.Status.OK) {
                  coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                  temp = {
                    title: element.상호,
                    latlng: coords
                  };
                  this.datas.push(temp);
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
      
                // 주소-좌표 변환 객체를 생성합니다
          var geocoder = new kakao.maps.services.Geocoder();

          this.datas.forEach((element)=>{ // eslint-disable-line no-unused-vars
          var coords={};
          var temp={}
          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(element.주소, (result, status)=> {
              // 정상적으로 검색이 완료됐으면 
              if (status === kakao.maps.services.Status.OK) {
                  coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                  temp = {
                    title: element.상호,
                    latlng: coords
                  };
                  this.datas.push(temp);
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
}
</style>
