<template>
  <h3>입력</h3>
  <div class="container mt-3">

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" @click="jejuview=true;wholeview=false">
        <label class="form-check-label" for="inlineRadio1">1</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" @click="jejuview=false;wholeview=true">
        <label class="form-check-label" for="inlineRadio2">2</label>
    </div>
    <div class="jeju-input" v-if="jejuview == true">
        <form class="row g-3">
            <div class="col-md-6">
                <input type="email" class="form-control" id="inputEmail4" placeholder="상호">
            </div>
            <div class="col-md-3">
                <select id="inputState" class="form-select">
                <option selected>분류</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
                </select>
            </div>

            <div class="col-md-3">
                <input type="text" class="form-control" id="inputAddress" placeholder="대표 메뉴">
            </div>

            <div class="col-md-2">
                <select id="inputState" class="form-select">
                <option selected>위치</option>
                <option>...</option>
                <option>...</option>
                <option>...</option>
                </select>
            </div>
            <div class="col-md-10">
                <input type="text" class="form-control" id="inputAddress" placeholder="주소입력">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">관련 정보 입력</label>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip">
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
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
export default {
    name: 'input',
    data(){
        return {
            jejuview : false,
            wholeview : true,

        }
    },

}
</script>

<style>
</style>