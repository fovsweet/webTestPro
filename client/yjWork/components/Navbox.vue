<script>
import Fresh from './Fresh.vue';
import Ytable from './Table.vue';
import List from './Lilist.vue';

export default {
	components: { Fresh,Ytable,List },
	data () {
		return {

		}
	},
	ready(){
		this.todo();
	},
	methods:{
		todo(){
			console.log('this components is done')
		},
		fresh(){
			console.log(123)
		}
	}
}
</script>

<template>
<div class="nav-box">
	<div class="content flex">
		<div class="left_list">
			<div class="list_header flex">
				<div class="wd30 textleft">
					<a href="javascript:;" class="btn-def">
						新增
						<i class="sp-add">+</i>
					</a>
				</div>
				<div class="wd70 textright">
					<a href="javascript:;" class="btn-def icon-fresh">刷新</a>
					<a @click='fresh' href="javascript:;" class="btn-def icon-down ml-10">筛选</a>	
				</div>
			</div>
			<div>
				<List></List>
			</div>
		</div>
		<div class="right_list">
			<div class="list_header flex-right">
				<a href="javascript:;" class="btn-def">收货</a>
			</div>
			<div class="overflow-box">
				<Ytable></Ytable>
			</div>
		</div>
	</div>
</div>
</template>