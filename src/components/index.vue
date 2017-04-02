<template>
	<div class="background">
		<div class="test"></div>
	</div>
</template>

<style lang = 'sass'>
@import '../spritesmith-generated/sprite.scss';
@import '../scss/common.scss';
.background{
	width:100%;
	height: 100%;
}
.test {
  	@include _sprite($background,1156px);
  	height: y_size(1156);
  	width: 100%;
  	margin-top: 30px;
}
</style>