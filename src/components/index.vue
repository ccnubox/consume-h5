<template>
    <div class="test" v-mousewheel="changePage">
        <transition mode="out-in" name="bounce">
            <div v-if="page === 1" key="1" class="height">
                <div class="content">
                    2016年3月22日
                    <br> 你在食堂吃了最放肆的一顿
                    <br> 一共花了
                    <span class="strong">23</span>元
                    <br>
                    <br> 你最土豪的月份是
                    <span class="strong">10</span>月
                    <br> 消费高达
                    <span class="strong">1539</span>元
                    <br> 竟是最低月份的
                    <span class="strong">1.2</span>倍
                </div>
                <div class="bottom">
                    <div class="next" v-on:click="nextPage"></div>
                    <div class="purse icon"></div>
                </div>
            </div>
            <div v-else-if="page === 2" key="2" class="height">
                <div class="content">
                    你在食堂共消费<span class="strong">12333</span>元
                    <br>
                    <span class="strong">午餐</span>消费最高
                    <br> 你可能是午食主义者
                    <br>
                    <br>
                    <span class="strong">麻辣烫</span> 窗口是你的最爱
                    <br> 你在此窗口吃了
                    <span class="strong">32</span>顿
                    <br> 共计消费
                    <span class="strong">233</span>元
                </div>
                <div class="bottom">
                    <div class="next" v-on:click="nextPage"></div>
                    <div class="chicken icon"></div>
                </div>
            </div>
            <div v-else-if="page === 3" key="3" class="height">
                <div class="content">
                    2016年11月11日
                    <br> 你在超市疯狂剁手
                    <br> 挥霍了
                    <span class="strong">57</span>元
                    <br> 共计在超市刷卡
                    <span class="strong">23</span>次
                    <br> 累计消费
                    <span class="strong">259</span>元
                    <br>
                </div>
                <div class="bottom">
                    <div class="next" v-on:click="nextPage"></div>
                    <div class="milk icon"></div>
                </div>
            </div>
            <div v-else-if="page === 4" key="4" class="height">
                <div class="content">
                    消费占比详情：
                    <div class="pieBox">
                        <div class="piePic">
                            <svg width="100" height="100" class="pie">
                                <circle r="50" cx="50" cy="50" class="circle1 pieCircle" :style="circle1"> </circle>
                                <circle r="50" cx="50" cy="50" class="circle2 pieCircle" :style="circle2"> </circle>
                                <circle r="50" cx="50" cy="50" class="circle3 pieCircle" :style="circle3"> </circle>
                            </svg>
                        </div>
                        <div class="dataBox">
                            <div class="data">
                                <div class="cir blueC"></div>
                                <div class="des">食堂<span class="scale"> 65%</span></div>
                            </div>
                            <div class="data">
                                <div class="cir greenC"></div>
                                <div class="des">超市<span class="scale"> 25%</span></div>
                            </div>
                            <div>
                                <div class="cir redC"></div>
                                <div class="des">其他<span class="scale"> 10%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="next" v-on:click="nextPage"></div>
                    <div class="fries icon"></div>
                </div>
            </div>
            <div v-else-if="page === 5" key="5" class="height">
                <div class="content">
                    你在近一年<span class="strong">300</span>天内
                    <br> 共消费
                    <span class="strong">12333</span>元
                    <br> 超过全校
                    <span class="strong">85%</span>的人
                    <br> 全校排名第
                    <span class="strong">2348</span>名
                </div>
                <div class="bottom">
                    <div class="next" v-on:click="nextPage"></div>
                    <div class="medal icon"></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import {
    bus
} from '../bus.js'
import MouseWheel from '../directives/mousewheel'

export default {
    data() {
            return {
                page: 1,
                circlel1: 0.3,
                circlel2: 0.3,
                circlel3: 0.4,
            };
        },
        directives: {
            mousewheel: MouseWheel
        },
        props: ['value'],
        methods: {
            nextPage: function () {
                console.log(this.value)
                this.page++
                    if (this.page == 6)
                        bus.$emit("toShare")
            },
            changePage: function (e) {
                if (e.deltaY < 0 && this.page > 1) {
                    this.page--;
                } else if (e.deltaY > 0 && this.page < 6) {
                    this.page++;
                }
                if (this.page == 6)
                    bus.$emit("toShare")
            }
        },
        computed: {
            circle1: function () {
                return {
                    strokeDasharray: this.circlel1 * 314 + ' 314'
                }
            },
            circle2: function () {
                return {
                    strokeDashoffset: this.circlel2 * 314 * 2,
                    strokeDasharray: this.circlel2 * 314 + ' 314'
                }
            },
            circle3: function () {
                var c3OffSet = this.circlel1 + this.circlel2
                return {
                    strokeDashoffset: -this.circlel1 * 314,
                    strokeDasharray: this.circlel3 * 314 + ' 314'
                }
            }
        }
}
</script>
<style lang='sass' scoped>
@import '../spritesmith-generated/sprite.scss';
@import '../scss/common.scss';
.des {
    margin-left: 5%;
    font-size: 15px;
    display: inline-block;
    vertical-align: middle;
}

.scale {
    font-size: 16px;
    font-weight: bolder;
}

.pieBox {
    margin-top: 30%;
    font-size: 0;
}

.data {
    font-size: 0;
    margin-bottom: 5px;
}

.cir {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
}

.pie {
    transform: rotate(-90deg);
    background: transparent;
    border-radius: 50%;
}

.blueC {
    background-color: #54b7b8;
}

.dataBox {
    display: inline-block;
    vertical-align: middle;
    padding-left: 4%;
    width: 50%;
    box-sizing: border-box;
    animation: boxRoll 1s ease-in-out;
}

.piePic {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
}

.pieCircle {
    fill: transparent;
    stroke-width: 100;
    animation: fillup 1s ease-in-out;
}

@keyframes fillup {
    from {
        stroke-dasharray: 0 314;
    }
}

@keyframes boxRoll {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.circle1 {
    stroke: #acd598;
}

.circle2 {
    stroke: #ec6941;
}

.circle3 {
    stroke: #54b7b8;
}

.greenC {
    background-color: #acd598;
}

.redC {
    background-color: #ec6941;
}

.height {
    height: 100%;
}

.bounce-enter-active {
    animation: bounce-in .4s;
}

.bounce-leave-active {
    animation: bounce-out .4s;
}

@keyframes bounce-in {
    0% {
        transform: translateY(100px);
        opacity: 0;
    }
    50% {
        transform: translateY(50px);
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
        transform: translateY(-50px);
        opacity: 0.5;
    }
    100% {
        transform: translateY(-100px);
        opacity: 0;
    }
}

.background {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.test {
    @include _sprite($background, 1300px);
    width: 100%;
    margin-top: 50px;
    height: 100%;
}

.next {
    @include _sprite($next, 60px);
    height: 23px;
    background-position-x: left;
    display: inline-block;
    vertical-align: top;
    width: 40%;
    animation: toNext 0.5s infinite;
}

@keyframes toNext {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0px);
    }
}

.icon {
    display: inline-block;
    vertical-align: middle;
    width: 60%;
}

.purse {
    @include _sprite($purse, 250px);
    background-position-x: left;
    height: 111px;
    transform: translate(30%, -30%);
}

.chicken {
    @include _sprite($chicken, 140px);
    background-position-x: left;
    height: 60px;
    transform: translate(10%, 10%);
}

.milk {
    @include _sprite($milk, 220px);
    background-position-x: left;
    height: 98px;
    transform: translate(30%, -30%);
}

.fries {
    @include _sprite($fries, 220px);
    background-position-x: left;
    height: 103px;
    transform: translate(30%, -30%);
}

.medal {
    @include _sprite($medal, 200px);
    background-position-x: left;
    height: 96px;
    transform: translate(40%, -30%);
}

.bottom {
    font-size: 0;
    width: 55%;
    margin: 0 auto;
}

.content {
    font-size: 15px;
    color: #59493f;
    padding-top: 65px;
    margin: 0 auto;
    width: 58%;
    height: 44%;
}

.strong {
    color: #ec6941;
    font-size: 20px;
}
</style>
