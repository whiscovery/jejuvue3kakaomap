<template>
  <div>Data</div>
  <div>
      <button @click="getJsonData">자료받기</button>
      {{datas}}
  </div>
</template>

<script>
//구글 시트 키: 1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ
//json: https://spreadsheets.google.com/feeds/list/1m9hym5f6gyaBwk7ypCUNIQiTCwF5X7u60j5KDjbbPGQ/1/public/full?alt=json

import axios from 'axios'// eslint-disable-line no-unused-vars
export default {
    name: 'Data',
    data(){
        return {
            datas: [],
            tempdata: [],
        }
    },
    methods: {
        getJsonData() {
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
        },
    },
}
</script>

<style>

</style>