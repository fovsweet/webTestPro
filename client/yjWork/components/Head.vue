<template>
	<div class="header header-fixed-top">
		<a href="" class="header-logo">
			 <span class="logo"></span> 我的经管
		</a>
		<div class="header-title header-wh">
		</div>
		
		<div class="header-bar header-wh" id="head-bar">
			<!--此处会渲染头部菜单-->
		</div>
		<div class="user-info">
			<img src="" alt="" />
			<span>天下第一</span>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			treeData:[],
			sMenuTree(){
				return new sMenuTree.prototype.init(option);
			},
			navBarClick(obj){
				return new navBarClick.prototype.init(obj);
			},
			compatibleBarClick(obj){
				return new compatibleBarClick.prototype.init(obj);
			}
		}
	},
	ready(){
		this.init();
		this.todo();
	},
	methods:{
		init(){
			this.sMenuTree.prototype = {
				constructor: this.sMenuTree,
				html: '',
				init: function(option) {
					if(option.data != null && option.data && option.id != '') {
						this.tree(option.data);
						document.querySelector(option.id).innerHTML = this.html;
						option.cb && option.cb();
					} else {
						console.log('sMenuTree init error:请检查配置文件')
					}
				},
				tree: function(data) {
					this.html += '<ul><i></i>';
					for(var i = 0, l = data.length; i < l; i++) {
						this.html += '<li data-check="' + data[i].check + '" menucode="'+data[i].menucode+'">';
						if(typeof data[i].href == 'undefined' || this.trim(data[i].href) == '') {
							this.html += '<a href="javascript:;">';
						} else {
							this.html += '<a href="' + data[i].href + '">';
						}
						this.html += '<span class="' + data[i].className + '"></span><span>' + data[i].name + '</span>';
						if(data[i].list != null && data[i].list.length > 0) {
							this.html += '<i class="arrow icon-angle-right"></i></a>';
						} else {
							this.html += '<i></i></a>';
						}
						if(data[i].list != null && data[i].list.length > 0) {
							this.tree(data[i].list);
						}
						this.html += '</li>';
					}
					this.html += '</ul>';
				},
				extend: function(copy, target) {
					for(var attr in target) {
						copy[attr] = target[attr];
					}
					return copy;
				},
				trim: function(str) {　　
					return str.replace(/(^\s*)|(\s*$)/g, "");
				},
			}
			this.sMenuTree.prototype.init.prototype = this.sMenuTree.prototype;
			this.navBarClick.prototype = {
				constructor: this.navBarClick,
				init: function(obj) {
					var obj = document.querySelector(obj);
					obj.querySelectorAll('li').forEach(function(item, index) {
						item.addEventListener('click', function(e) {
							e.stopPropagation();
							if(item.className == '') {
								item.parentNode.querySelectorAll('li').forEach(function(it) {
									it.className = '';
								});
								item.className = 'open';
							} else {
								item.className = '';
							}
						})
					})
				}
			}
			this.navBarClick.prototype.init.prototype = this.navBarClick.prototype;
			this.compatibleBarClick.prototype = {
				constructor: this.navBarClick,
				init: function(obj) {
					var $this = this;
					var liArr = document.querySelector(obj).querySelectorAll('li');
					for(var i = 0, l = liArr.length; i < l; i++) {
						(function(i) {
							var item = liArr[i];
							item.addEventListener('click', function(e) {
								e.stopPropagation();
								if(item.className == '') {
									$this.clearAll(item);
									item.className = 'open';
								} else {
									item.className = '';
								}
							})
						})(i)
					}
				},
				clearAll:function(obj){
					var cliArr = obj.parentNode.querySelectorAll('li');
					for(var c = 0, cl = cliArr.length; c < cl; c++) {
						(function(c) {
							cliArr[c].className = '';
						})(c)
					}
				}
			}
			this.compatibleBarClick.prototype.init.prototype = this.compatibleBarClick.prototype;
		},
		makeNav(){

		},
		todo(){
			var _ = this;
			this.$http.post('/nav').then((res)=>{
				_.treeData = res.data;
				console.log(_.treeData)
			})
		}
	}
}
</script>