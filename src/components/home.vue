<template>
	<div>
		<button v-on:click = "change">click!</button>
		<br>It's Home!
		</div>
</template>
<script>
import {bus} from '../bus.js'
	export default{
        methods:{
        	change:function(){
        		bus.$emit("toIndex")
        	}
        }
	}
</script>