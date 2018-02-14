<template>
    <div class="homeBg">
        <div class="come"></div>
        <div class="title"></div>
        <div v-on:click="change" class="button" :style="btnAnimation"></div>
        <div class="tip">提醒匣客们：因近期教务系统故障，查成绩和课程表等功能暂时无法使用 QAQ 匣子将与你一起等待学校教务系统的恢复</div>
        <div class="road">
            <div class="bus" :style="busAnimation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.35 136.81">
                    <g id="图层_2" data-name="图层 2">
                        <g id="轮胎">
                            <path class="cls-1" d="M18.42,83.25h0a2.52,2.52,0,0,1-2.52-2.52V62.14a2.52,2.52,0,0,1,2.52-2.52h0a2.52,2.52,0,0,1,2.52,2.52V80.73A2.52,2.52,0,0,1,18.42,83.25Z" />
                            <polygon class="cls-2" points="80.02 107.55 75.78 114.91 84.27 114.91 80.02 107.55" />
                            <rect class="cls-3" x="78.05" y="90.78" width="2.96" height="26.35" />
                            <rect class="cls-4" x="79.05" y="90.78" width="2.96" height="26.35" />
                            <path class="cls-5" d="M94.77,90.11h0a2.71,2.71,0,0,1-2.86,2.52H70.77a2.71,2.71,0,0,1-2.86-2.52h0a2.71,2.71,0,0,1,2.86-2.52H91.91A2.71,2.71,0,0,1,94.77,90.11Z" />
                            <path class="cls-1" d="M70.42,92.63h0c-1.38,0-2.52-1.53-2.52-3.41V64c0-1.88,1.13-3.41,2.52-3.41h0c1.38,0,2.52,1.53,2.52,3.41V89.22C72.94,91.09,71.8,92.63,70.42,92.63Z" />
                            <path class="cls-6" d="M87.08,79.22a5.82,5.82,0,0,1,5.16,6.41c-.35,3.18-4.24,5.47-7.44,5.11" />
                            <rect class="cls-7" x="67.93" y="78.24" width="19.35" height="1.95" />
                            <polygon class="cls-2" points="133.02 107.55 128.78 114.91 137.27 114.91 133.02 107.55" />
                            <rect class="cls-3" x="131.05" y="90.78" width="2.96" height="26.35" />
                            <rect class="cls-4" x="132.05" y="90.78" width="2.96" height="26.35" />
                            <path class="cls-5" d="M147.77,90.11h0a2.71,2.71,0,0,1-2.86,2.52H123.77a2.71,2.71,0,0,1-2.86-2.52h0a2.71,2.71,0,0,1,2.86-2.52h21.14A2.71,2.71,0,0,1,147.77,90.11Z" />
                            <path class="cls-1" d="M123.42,92.63h0c-1.38,0-2.52-1.53-2.52-3.41V64c0-1.88,1.13-3.41,2.52-3.41h0c1.38,0,2.52,1.53,2.52,3.41V89.22C125.94,91.09,124.8,92.63,123.42,92.63Z" />
                            <path class="cls-6" d="M140.08,79.22a5.82,5.82,0,0,1,5.16,6.41c-.35,3.18-4.24,5.47-7.44,5.11" />
                            <rect class="cls-7" x="120.93" y="78.24" width="19.35" height="1.95" />
                            <polygon class="cls-2" points="197.02 107.55 192.78 114.91 201.27 114.91 197.02 107.55" />
                            <rect class="cls-3" x="195.05" y="90.78" width="2.96" height="26.35" />
                            <rect class="cls-4" x="196.05" y="90.78" width="2.96" height="26.35" />
                            <path class="cls-5" d="M211.77,90.11h0a2.71,2.71,0,0,1-2.86,2.52H187.77a2.71,2.71,0,0,1-2.86-2.52h0a2.71,2.71,0,0,1,2.86-2.52h21.14A2.71,2.71,0,0,1,211.77,90.11Z" />
                            <path class="cls-1" d="M187.42,92.63h0c-1.38,0-2.52-1.53-2.52-3.41V64c0-1.88,1.13-3.41,2.52-3.41h0c1.38,0,2.52,1.53,2.52,3.41V89.22C189.94,91.09,188.8,92.63,187.42,92.63Z" />
                            <path class="cls-6" d="M204.08,79.22a5.82,5.82,0,0,1,5.16,6.41c-.35,3.18-4.24,5.47-7.44,5.11" />
                            <rect class="cls-7" x="184.93" y="78.24" width="19.35" height="1.95" />
                            <rect class="cls-8" y="100.13" width="4.09" height="7.64" rx="1.76" ry="1.76" />
                            <rect class="cls-8" y="89.13" width="4.09" height="7.64" rx="1.76" ry="1.76" />
                            <rect class="cls-9" x="278.24" y="82.95" width="4.8" height="11.36" rx="2.4" ry="2.4" transform="translate(-7.11 26.86) rotate(-5.41)" />
                            <path class="cls-10" d="M239.77,1A173.42,173.42,0,0,1,281,117.64" />
                            <path class="cls-11" d="M241.77,2c9.09,10.69,21.3,27.87,30.36,53.53A173.6,173.6,0,0,1,282,117.64" />
                            <rect class="cls-7" x="224.32" y="99.6" width="1.54" height="18.83" transform="matrix(-0.78, -0.62, 0.62, -0.78, 333.34, 334.48)" />
                            <rect class="cls-7" x="223.63" y="110.51" width="1.23" height="5.14" />
                            <path class="cls-12" d="M223.9,69.57h0a1.23,1.23,0,0,1,1.81,0l8.52,8.15a1.46,1.46,0,0,1,.23,1.93h0a1.23,1.23,0,0,1-1.81,0l-8.52-8.15A1.46,1.46,0,0,1,223.9,69.57Z" />
                            <path class="cls-12" d="M218.7,74.46h0a1.23,1.23,0,0,1,0-1.81l8.15-8.52a1.46,1.46,0,0,1,1.93-.23h0a1.23,1.23,0,0,1,0,1.81l-8.15,8.52A1.46,1.46,0,0,1,218.7,74.46Z" />
                            <path class="cls-2" d="M272.95,59.32l-1-.56c-2.22,3.82-7.64,10-9.86,13.8-13.22-.07-25.84,30.32-25.77,43.45H281a171.73,171.73,0,0,0-5.78-48.35C274.38,64.41,273.61,61.65,272.95,59.32Z" />
                            <path class="cls-13" d="M273.95,59.32l-1-.56c-2.22,3.82-7.64,10-9.86,13.8-13.22-.07-18.81-.14-31.71-.21a4.26,4.26,0,0,0-4.28,4.28l.23,39.38H282a171.73,171.73,0,0,0-5.78-48.35C275.38,64.41,274.61,61.65,273.95,59.32Z" />
                            <rect class="cls-8" x="263.38" y="80.03" width="6.43" height="6.43" rx="3" ry="3" />
                            <path class="cls-13" d="M3.65,114.65H282a0,0,0,0,1,0,0v1.17a1.83,1.83,0,0,1-1.83,1.83H4.17a.52.52,0,0,1-.52-.52v-2.48A0,0,0,0,1,3.65,114.65Z" />
                            <path class="cls-13" d="M66.63,115.65h-63v-43H40.84a9.08,9.08,0,0,1,8.24,5.25Z" />
                            <rect class="cls-13" x="3.09" y="1" width="2.71" height="114.65" />
                            <rect class="cls-2" x="2.09" y="1" width="2.71" height="114.65" />
                            <rect class="cls-13" x="173.09" y="1" width="2.71" height="114.65" />
                            <rect class="cls-2" x="172.09" y="1" width="2.71" height="114.65" />
                            <path class="cls-12" d="M1.92,115.65H283a0,0,0,0,1,0,0v1a1.83,1.83,0,0,1-1.83,1.83H2.44a.52.52,0,0,1-.52-.52v-2.31A0,0,0,0,1,1.92,115.65Z" />
                            <path class="cls-14" d="M244.14,7H1.14A.34.34,0,0,1,.8,6.63V1.34A.34.34,0,0,1,1.14,1h236.8a5.31,5.31,0,0,1,4.42,2.36l2.07,3.09A.34.34,0,0,1,244.14,7Z" />
                            <path class="cls-13" d="M245.4,6H.8V.35A.35.35,0,0,1,1.15,0H238.67a4.29,4.29,0,0,1,3.39,1.66Z" />
                            <circle class="cls-7 roll1" cx="31.58" cy="118.47" r="18.34" />
                            <circle class="cls-15 roll1" cx="31.58" cy="118.47" r="8.81" />
                            <circle class="cls-7 roll2" cx="254.58" cy="118.47" r="18.34" />
                            <circle class="cls-15 roll2" cx="254.58" cy="118.47" r="8.81" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import {
    bus
} from '../bus.js'
export default {
    data() {
            return {
                roll: false
            }
        },
        computed: {
            busAnimation: function () {
                return {
                    animation: this.roll ? 'busroll 2s linear':''
                }
            },
            btnAnimation: function () {
                return {
                    animation: this.roll ? 'btnShake .5s linear':''
                }
            }
        },
        methods: {
            change: function () {
                this.roll = true
                setTimeout(function(){
                    bus.$emit("toIndex")
                },1600)
                
            }
        }
}
</script>
<style lang ="sass" scoped>
@import '../spritesmith-generated/sprite.scss';
@import '../scss/common.scss';
@import '../scss/bus.scss';

.homeBg {
    @include _sprite($firstbg, 1417px);
    width: 100%;
    background-size: 130%;
    height: 100%;
    padding-top: 15%;
}

.come {
    @include _sprite($come, 80px);
    width: 90%;
    margin: 0 auto;
    height: 40px;
}

.title {
    @include _sprite($title, 130px);
    width: 90%;
    margin: 2% auto;
    height: 60px;
}

.button {
    @include _sprite($enter, 100px);
    width: 90%;
    height: 50px;
    margin: 9% auto;
    /*animation: btnShake .5s infinite;*/
}

.road {
    @include _sprite($road, 250px);
    width: 100%;
    height: 25%;
    margin: 40% auto;
}

.bus {
    width: 60%;
}

@keyframes busroll {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(200%);
    }
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

.tip {
    font-size: 14px;
    text-align: center;
    width: 200px;
    margin: 0 auto;
    color: #dc704c;
}
</style>
