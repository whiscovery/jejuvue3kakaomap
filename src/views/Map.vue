<template>
<div class="wrappers">
  <button type="button" class="btn btn-warning button-loading mt-3 mb-3" @click="getData()" v-if="viewmenus==false">데이터로딩(먼저 클릭)</button>

<span v-if="viewmenus == true"><span v-for="menu, i in menus" :key="i" class="badge rounded-pill bg-danger mt-1 ms-1" @click="filterData(menu)">{{menu}}</span></span>
<div v-else></div>
</div>
<div id="map" class="map"></div>


</template>

<script>
//93e7ae567c188033ab3c4af5d997866a
//구글 시트 키: 1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ
//json: https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json

import axios from 'axios'// eslint-disable-line no-unused-vars
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Map',
  components: {
  },
  data() {
    return {
      jejus: [],
      tempdata: [],
      temps: [],
      markers: [],
      elementId: '',
      blank: [],
      map: {},
      viewmenus: false
    }
  },
  props: {
    menus: Array
  },
  computed: {
      ...mapState(['foods'])
  },
 mounted() {

    this.fetchFoods();
    //Kakao Map
    if (window.kakao && window.kakao.maps) {
      this.initMap();
      this.check = true;
    } else {
      const script = document.createElement('script');
      // global kakao
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        `//dapi.kakao.com/v2/maps/sdk.js?appkey=93e7ae567c188033ab3c4af5d997866a&libraries=services,clusterer,drawing&autoload=false`;
      document.head.appendChild(script);
      this.check = true;
    }
  },
  methods: {
    getData() { 
                // 주소-좌표 변환 객체를 생성합니다
          var geocoder = new kakao.maps.services.Geocoder();

          this.foods.forEach((element)=>{ // eslint-disable-line no-unused-vars
            var coords={};
            var temp={}
              // 주소로 좌표를 검색합니다
            geocoder.addressSearch(element.주소, (result, status)=> {
                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {
                    coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    temp = {
                      title: element.상호,
                      category: element.분류,
                      info: element.정보,
                      latlng: coords
                    };
                    this.jejus.push(temp);
                }
            });
            
          });
      setTimeout(() => {
        alert("데이터로딩 완료")
        this.viewmenus = true;
      }, 1000) 
          // console.log(this.jejus)
          // this.drawData(this.jejus);
        
    },
    filterData(menu)
    {
      switch(menu) {
        case '전체': 
          this.drawData(this.jejus);
          break;

        case '돼지고기':  
          this.jejus.forEach(e => {
            if(e.category == '돼지고기'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '소고기':  
          this.jejus.forEach(e => {
            if(e.category == '소고기'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '실내포장마차':  
          this.jejus.forEach(e => {
            if(e.category == '실내포장마차'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '노포':  
          this.jejus.forEach(e => {
            if(e.category == '노포'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '국밥':  
          this.jejus.forEach(e => {
            if(e.category == '국밥'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '국수':  
          this.jejus.forEach(e => {
            if(e.category == '국수'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '해장국':  
          this.jejus.forEach(e => {
            if(e.category == '해장국'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '회':  
          this.jejus.forEach(e => {
            if(e.category == '회'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '일식':  
          this.jejus.forEach(e => {
            if(e.category == '일식'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '이자카야':  
          this.jejus.forEach(e => {
            if(e.category == '이자캬야'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '양식':  
          this.jejus.forEach(e => {
            if(e.category == '양식'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '해물요리':  
          this.jejus.forEach(e => {
            if(e.category == '해물요리'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '해물라면':  
          this.jejus.forEach(e => {
            if(e.category == '해물라면'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '한식':  
          this.jejus.forEach(e => {
            if(e.category == '한식'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '토속음식':  
          this.jejus.forEach(e => {
            if(e.category == '토속음식'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '바':  
          this.jejus.forEach(e => {
            if(e.category == '바'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '카페':  
          this.jejus.forEach(e => {
            if(e.category == '카페'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '숙소':  
          this.jejus.forEach(e => {
            if(e.category == '숙소'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '갈곳':  
          this.jejus.forEach(e => {
            if(e.category == '갈곳'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        case '기타':  
          this.jejus.forEach(e => {
            if(e.category == '기타'){
             
              this.temps.push(e);
            }
          })
          this.drawData(this.temps);
          break;

        default:
          this.drawData(this.jejus);
          break;
      }
      
    },
    drawData(data){
          
           var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
                center : new kakao.maps.LatLng(35.63919598808177, 127.73894402702498), // 지도의 중심좌표 
                level : 13 // 지도의 확대 레벨 
            });
              // 지도 생성


              // 마커 클러스터러를 생성합니다 
            var clusterer = new kakao.maps.MarkerClusterer({
                map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
                minLevel: 10 // 클러스터 할 최소 지도 레벨 
            });
        

          // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
          

          /* 마커 관련 함수들 */
          // 마커를 표시할 위치와 title 객체 배열입니다 
          var positions = data;

          
            if(positions){
                    //var imageSrc = "marker/marker일식.png"; 
                for (var i = 0; i < positions.length; i ++) {
                    // 마커 이미지의 이미지 주소입니다
                    var imageSrc = "marker/marker"+positions[i].category+".png"; 
                    
                    // 마커 이미지의 이미지 크기 입니다
                    var imageSize = new kakao.maps.Size(25, 32); 
                    
                    // 마커 이미지를 생성합니다    
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                    
                
                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({  // eslint-disable-line no-unused-vars
                        map: map, // 마커를 표시할 지도
                        position: positions[i].latlng, // 마커를 표시할 위치
                        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        image : markerImage, // 마커 이미지 
                        clickable: true
                    });

                    // 마커에 표시할 인포윈도우를 생성합니다 
                    var infoContent = '<a class="infoContent-a" href="https://map.kakao.com/link/search/'+positions[i].title+'" target="_blank">' + positions[i].title + '</a><span class="infoContent-text">('+positions[i].from+')</span><p style="font-size:9px;text-align:left">'+positions[i].info +'</p>';
                    var iwRemoveable = true;
                    var infowindow = new kakao.maps.InfoWindow({
                        content: infoContent, // 인포윈도우에 표시할 내용
                        removable : iwRemoveable
                    });

                    // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
                    // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
                    (function(marker, infowindow) {
                        // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다 
                        kakao.maps.event.addListener(marker, 'click', function() {
                            infowindow.open(map, marker);
                        });

                        // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
                        // kakao.maps.event.addListener(marker, 'mouseout', function() {
                        //     infowindow.close();
                        // });
                    })(marker, infowindow);
                              
                
                    //console.log(positions[i].latlng); //positions[i].latlng.La, positions[i].latlng.Ma
                    marker.setMap(map);  // 마커 표시
                    this.markers.push(marker);
                    var content = '<span class="badge rounded-pill bg-dark mt-2 information">'+positions[i].title +'</span>';

                    // 커스텀 오버레이가 표시될 위치입니다 

                    // 커스텀 오버레이를 생성합니다
                    var customOverlay = new kakao.maps.CustomOverlay({
                        position: positions[i].latlng,
                        content: content  
                    });

                    // 커스텀 오버레이를 지도에 표시합니다
                    customOverlay.setMap(map);
                    
                    // 클릭이벤트 
                    
                    //클릭이벤트 끝

                }
                clusterer.addMarkers(this.markers);

                /* 마커 관련 함수 끝 */
            }
              
          

    },
    async initMap() {
      this.drawData();

    }, //initMap()
    ...mapActions(['fetchFoods'])
  },


};
</script>

<style>
.wrappers {
  margin: 0 auto;
}
.button-loading {
  width: 100%;
}
.map {
  width: 100%;
  height: 700px;
}
.information {
  font-size: 10px;
  font-weight: 300;
  opacity: 1;
  z-index: 25;
}
.infoContent-a {
  font-size: 10px;
  font-weight: 300;
  text-decoration: none;
  text-align: center;
}
</style>
