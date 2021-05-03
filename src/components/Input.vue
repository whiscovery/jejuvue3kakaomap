<template>
  <div class="container mt-5">

    <div class="form-check form-check-inline mb-3">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" @click="jejuview=true;wholeview=false">
        <label class="form-check-label" for="inlineRadio1">제주맛집</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" @click="jejuview=false;wholeview=true">
        <label class="form-check-label" for="inlineRadio2">전국맛집</label>
    </div>
    <div class="jeju-input" v-if="jejuview == true">
        <form class="row g-3" id="jejuForm" @submit.prevent="sendJejuPost">
            <div class="col-md-6 form-floating">
                <input type="text" class="form-control" v-model="jejuname" placeholder="상호">
                <label for="jejuname">상호</label>
            </div>
            <div class="col-md-3 form-floating">
                <select v-model="jejucategory" class="form-select">
                <option v-for="jejumenu, i in jejumenus" :key="i">{{jejumenu}}</option>
                </select>
                <label for="jejucategory">분류</label>
            </div>

            <div class="col-md-3 form-floating">
                <input type="text" class="form-control" v-model="jejumenu" placeholder="대표 메뉴">
                <label for="jejumenu">대표 메뉴</label>
            </div>

            <div class="col-md-2 form-floating">
                <select v-model="jejulocation" class="form-select">
                <option>북부</option>
                <option>남부</option>
                <option>동부</option>
                <option>중부</option>
                </select>
                <label for="jejulocation">위치</label>
            </div>
            <div class="col-md-10 form-floating">
                <input type="text" class="form-control" v-model="jejuaddress" placeholder="주소입력">
                <label for="jejuaddress">주소</label>
            </div>
            <div class="col-12 form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" v-model="jejuinfo" style="height: 100px"></textarea>
                <label for="jejuinfo">관련 정보</label>
            </div>
            <div class="col-12">
                <button class="btn btn-primary">등록</button>
            </div>
            </form>
    </div>


    <div class="whole-input" v-if="wholeview == true">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'input',
    data(){
        return {
            jejuview : false,
            wholeview : true,
            jejuData : {},
            jejuname : '',
            jejucategory : '',
            jejumenu: '',
            jejulocation : '',
            jejuaddress : '',
            jejuinfo : '',

            }

        },
    props: {
        jejumenus: Array,
        wholemenus: Array,
    },
    methods: {
        sendJejuPost() {
            // https://script.google.com/macros/s/AKfycbxYZ-FEzZLeEHo-f6zUOk4jBuRfA8xchPEjJ-cMmXKysixRNVoq/exec
            // this.jejuData = {
            //     "상호" : this.jejuname,
            //     "위치" : this.jejulocation,
            //     "분류" : this.jejucategory,
            //     "대표메뉴" : this.jejumenus,
            //     "주소" : this.jejuaddress,
            //     "정보" : this.jejuinfo
            // }
            axios.post('//script.google.com/macros/s/AKfycbxYZ-FEzZLeEHo-f6zUOk4jBuRfA8xchPEjJ-cMmXKysixRNVoq/exec' , {
                "상호" : this.jejuname,
                "위치" : this.jejulocation,
                "분류" : this.jejucategory,
                "대표메뉴" : this.jejumenus,
                "주소" : this.jejuaddress,
                "정보" : this.jejuinfo
            })
            .then((res)=>{
                console.log(res.data);
            }, ()=>{
                console.log('failed');
            })

        }
    }

}
</script>

<style>
</style>