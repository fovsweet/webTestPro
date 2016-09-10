<script>
	import Yhead from './Head.vue'
	import Ynav from './Nav.vue'
	import Navbox from './Navbox.vue'

	export default{
		components: { Yhead,Ynav,Navbox },
		ready(){
			console.log('I have ready')
		}
	}
</script>

<template>
    <h2 id="test">123</h2>

	<Yhead></Yhead>
	<Ynav></Ynav>
	<Navbox></Navbox>
</template>

<style lang='less'>
	@import "../common/css/reset.css";
	@import "../common/css/common.css";
</style>