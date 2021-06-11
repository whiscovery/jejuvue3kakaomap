<template>
  <div class="container mt-5">
    <div class="jeju-input">
        <form class="row g-3" id="jejuForm" @submit.prevent="btnOK">
            <div class="col-md-12 form-floating">
                <input type="text" class="form-control" v-model="상호" placeholder="상호">
                <label for="jejuname">상호</label>
            </div>
            <div class="col-md-5">
                <UploadPhoto @getImageURL="getImageURL" />
            </div>
      <div class="col-md-7">
            <div class="col-md-12 form-floating mt-3">
                <select v-model="분류" class="form-select">
                <option v-for="menus, i in menus" :key="i">{{menus}}</option>
                </select>
                <label for="jejucategory">분류</label>
            </div>

            <div class="col-md-12 form-floating mt-3">
                <input type="text" class="form-control" v-model="대표메뉴" placeholder="대표 메뉴">
                <label for="대표메뉴">대표 메뉴</label>
            </div>
        <div class="col-md-12 form-floating mt-3">
                <select v-model="위치" class="form-select">
                <option>제주</option>
                <option>서울</option>
                <option>경기</option>
                <option>인천</option>
                <option>강원</option>
                <option>전남</option>
                <option>전북</option>
                <option>경남</option>
                <option>경북</option>
                <option>충청</option>
                <option>기타</option>
                </select>
                <label for="위치">위치</label>
            </div>
            <div class="col-md-12 form-floating mt-3">
                <input type="text" class="form-control" v-model="주소" placeholder="주소입력">
                <label for="주소">주소</label>
            </div>
            <div class="col-md-12 form-floating mt-3">
                <input type="text" class="form-control" v-model="기타" placeholder="기타">
                <label for="기타">추천 및 기타</label>
            </div>
      </div>
            <div class="col-12 form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" v-model="정보" style="height: 100px"></textarea>
                <label for="정보">관련 정보</label>
            </div>
            <div class="col-12">
                <button class="btn btn-primary">등록</button>
            </div>
            </form>
    </div>

  </div>
</template>
<script>
import UploadPhoto from '@/components/UploadPhoto'
import { baseurl } from '@/config/index'
import axios from 'axios'
export default {
    name: 'Input',
    data () {
        return {
            imgfile: '',
            상호 : '',
            분류 : '',
            대표메뉴: '',
            위치 : '',
            주소 : '',
            정보 : '',
            기타 : ''
        }
    },
    components: {
        UploadPhoto: UploadPhoto
    },
    props: {
        menus: Array
    },
    methods: {
        btnOK () {
            const data = {
                상호 : this.상호 ? this.상호 : '없음',
                분류 : this.분류 ? this.분류 : '없음',
                대표메뉴: this.대표메뉴 ? this.대표메뉴 : '없음',
                위치 : this.위치 ? this.위치 : '없음',
                주소 : this.주소 ? this.주소 : '없음',
                정보 : this.정보 ? this.정보 : '없음',
                기타 : this.기타 ? this.기타 : '없음',
                이미지: this.imgfile ? this.imgfile : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
            }
            console.log(data)
            axios.post(baseurl + '/writepost', data)
            .then((res) => {
                console.log(res)
                alert("입력되었습니다");
            })
            .catch((err) => {
                console.log(err)
            })
        },
        getImageURL (url) {
            this.imgfile = url
        }
    }

}
</script>

<style>
.no-img{
 width: 80%;
 max-height: 300px;
  margin-bottom: 20px;
}
</style>