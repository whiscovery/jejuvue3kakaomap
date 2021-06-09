<template>
  <div>
      <button @click="moveToMongo">MongoDB로 이전</button>
  </div>
</template>

<script>
import axios from 'axios'
import { baseurl } from '@/config/index'
export default {
    name: 'Data',
    data () {
        return {
            datas : [],
            tempdata : []
        }
    },
created () {
    // axios.get('https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json') //제주
    axios.get('https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/2/public/full?alt=json') //전국
            .then((result)=>{
                let temp = result.data['feed']['entry'];
                for(var i=0; i<temp.length; i++){
                    var Object = {
                        '상호': temp[i]['gsx$상호']['$t'],
                        '주소': temp[i]['gsx$주소']['$t'],
                        '분류': temp[i]['gsx$분류']['$t'],
                        '위치': temp[i]['gsx$위치']['$t'],
                        '기타': temp[i]['gsx$기타']['$t'],
                        '정보': temp[i]['gsx$정보']['$t'],
                        '대표메뉴': temp[i]['gsx$대표메뉴']['$t']
                    };
                    this.tempdata.push(Object);
                }
                this.datas = this.tempdata;
            }
            )
    },
    methods: {
        moveToMongo () {
            console.log(this.datas)
            for (var i=0; i<this.datas.length; i++) {
                axios.post(baseurl + '/transit', {
                    상호: this.datas[i].상호 ? this.datas[i].상호 : '',
                    주소: this.datas[i].주소 ? this.datas[i].주소 : '',
                    분류: this.datas[i].분류 ? this.datas[i].분류 : '',
                    대표메뉴: this.datas[i].대표메뉴 ? this.datas[i].대표메뉴 : '',
                    위치: this.datas[i].위치 ? this.datas[i].위치 : '',
                    기타: this.datas[i].기타 ? this.datas[i].기타 : '',
                    정보: this.datas[i].정보 ? this.datas[i].정보 : ''
                })
                .then((res) => {
                    console.log(res)
                    this.$nextTick();
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }
    }
}
</script>

<style>
</style>