<template>
    <div class="background">
        <transition name="component-fade" mode="out-in">
            <component v-bind:is="view" :value="value"></component>
        </transition>
        <div v-if = "this.modal" class="mask">
        <div class="tip">
            <div class="word">你还没登录噢~<br>请在成绩查询或课表处登录</div></div>
    </div>
    </div>
</template>
<script>
import 'whatwg-fetch'
import Home from './home'
import Index from './index'
import Share from './share'
import YAJB from 'yajb-js'
import {
    bus
} from '../bus.js'

export default {
    data() {
            return {
                view: "home",
                value: "hahahhah",
                modal: false
            }
        },
        components: {
            "home": Home,
            "index": Index,
            "share": Share
        },
        created() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            var data = null;

            if(isAndroid){
                var yajb = new YAJB()
                data = JSON.parse(yajb.data)
            }else if(isiOS){
                if (window.sid === undefined) {
                    window.location = 'https://ccnubox.muxixyz.com/'
                } else if (window.sid === ""){
                    this.modal = true
                } else {
                    data = window.sid
                }
            }
            // else{
            //     console.log("non-Client")
            //     window.location = 'https://ccnubox.muxixyz.com/'
            // }

            fetch('/api/consumption/'+ data + '/').then(res => {
                return res.json()
            })
            .then(res => {
                this.value = res
            })
            bus.$on('toIndex', this.toIndex)
            bus.$on('toShare', this.toShare)
        },
        methods: {
            toIndex: function () {
                this.view = "index";
            },
            toShare: function () {
                this.view = "share"
            }
        }
}
</script>
<style lang="sass" scoped>
.component-fade-enter-active {
    animation: bounce-in .5s;
}

.component-fade-leave-active {
    animation: bounce-out .5s;
}

@keyframes bounce-in {
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    50% {
        transform: translateY(50%);
        opacity: 0.5;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes bounce-out {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(-50%);
        opacity: 0.5;
    }
    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
}

.background {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
    background-color: rgba(51, 51, 51, 0.85);
}
.tip {
    width: 220px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #dcdcdc;
    background-color: #ffffff;
    border-radius: 4px;
    font-size: 18px;
    z-index: 10;   
}
.word {
    text-align: center;
    margin-top: 50px;
}
</style>