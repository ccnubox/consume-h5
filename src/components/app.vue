<template>
    <div class = "background">
        <transition name="component-fade" mode="out-in">
            <component v-bind:is="view" :value = "value"></component>
        </transition>
    </div>
</template>
<script>
import Home from './home'
import Index from './index'
import Share from './share'
import {bus} from '../bus.js'

export default {
    data() {
            return {
                view: "home",
                value:"hahahhah",
            }
        },
        components: {
            "home": Home,
            "index": Index,
            "share": Share
        },
        created(){
        	bus.$on('toIndex',this.toIndex)
        	bus.$on('toShare',this.toShare)
        },
        methods:{
        	toIndex:function(){
        		this.view = "index"
        	},
        	toShare:function(){
        		this.view = "share"
        	}
        }
}
</script>
<style lang ="sass">
.component-fade-enter-active{
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

.background{
	width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
