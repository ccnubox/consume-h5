<template>
	<div class="shareBg">
		<div class="boy"></div>
		<div class="words">喜欢此功能就分享给好友吧~</div>
		<div class="btn"></div>
	</div>
</template>
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
</style>