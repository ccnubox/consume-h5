<template>
    <div class="background">
        <div class="test">
        	<purse></purse>
        </div>
    </div>
</template>
<script>
import Purse from './purse.vue'
export default {
    components: {
        "purse": Purse,
    },
}
</script>
<style lang='sass'>
@import '../spritesmith-generated/sprite.scss';
@import '../scss/common.scss';
.background {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.test {
    @include _sprite($background, 1156px);
    height: y_size(1156);
    width: 100%;
    margin-top: 30px;
    height: 100%;
}
</style>
