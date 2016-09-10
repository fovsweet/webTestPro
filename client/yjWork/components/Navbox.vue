<script>
import Fresh from './Fresh.vue'
import Table from './Table.vue'
import $ from 'jquery'

export default {
	compontents :{ Fresh,Table },
	methods :{
		fresh(){
			
		},
		option(){
			// 选择框checkbox类——必须有，提交信息通过获取’png-option-check‘类有几个就是选择了几个。
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
				<ul class="list_float">
					<li><a href="javascript:;">阿里巴巴</a></li>
					<li class="ckd"><a href="javascript:;">华为</a></li>
					<li><a href="javascript:;">京东</a></li>
					<li><a href="javascript:;">腾讯</a></li>
				</ul>
			</div>
		</div>
		<div class="right_list">
			<div class="list_header flex-right">
				<a href="javascript:;" class="btn-def">收货</a>
			</div>
			<div class="overflow-box">
				<Table></Table>
			</div>
		</div>
	</div>
</div>
</template>