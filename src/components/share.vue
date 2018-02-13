<template>
	<div class="shareBg">
		<div class="boy"></div>
		<div class="words">喜欢此功能就点击右上角分享匣子给好友吧~</div>
		<div class="btn" v-on:click="change" :style="btnAnimation"></div>
	</div>
</template>
<script>
import YAJB from 'yajb-js'

export default {
    data(){
        return{
            roll:false
        }
    },
    computed:{
        btnAnimation: function () {
            return {
                animation: this.roll ? 'btnShake .5s linear':''
            }
        }
    },
    methods: {
        change: function () {
            var yajb = new YAJB() 
            yajb.send("share","data")
            this.roll = true
            setTimeout(function(){
                this.roll = false
            },1600) 
        }
    }
}
</script>

<style lang ="sass" scoped>
@import '../spritesmith-generated/sprite.scss';
@import '../scss/common.scss';

.shareBg {
    @include _sprite($firstbg, 1417px);
    width: 100%;
    background-size: 110%;
    height: 100%;
    padding-top: 30%;
}
.df{
	background-color: green;
}
.boy{
	@include _sprite($boy, 250px);
    width: 90%;
    height: 115px;
    margin: 0 auto;
}
.words{
	text-align: center;
	color: #59493f;
	font-size: 15px;
	margin: 11%;
}
.btn {
    @include _sprite($sharebuton, 100px);
    width: 90%;
    height: 50px;
    margin: 9% auto;
}
@keyframes btnShake {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.8);
    }
    100% {
        transform: scale(1);
    }
}
</style>