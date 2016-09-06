! function(window, undefined) {
	/**************************
	 *  
	 * @parame {data}   json
	 *  @parame {id}  string
	 *
	 ***********************/
	sMenuTree = function(option) {
		return new sMenuTree.prototype.init(option);
	}
	sMenuTree.prototype = {
		constructor: sMenuTree,
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
				this.html += '<span class="' + data[i].class + '"></span><span>' + data[i].name + '</span>';
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
	sMenuTree.prototype.init.prototype = sMenuTree.prototype;
	
	
	/************************
	 @param {#id} 目标元素的id
	 ************************/
	navBarClick = function(obj) {
		return new navBarClick.prototype.init(obj);
	}
	navBarClick.prototype = {
		constructor: navBarClick,
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
	navBarClick.prototype.init.prototype = navBarClick.prototype;
	
	
	/*******************************
	 @param {#id} string 目标ID
	 兼容火狐浏览器
	 *****************************/
	compatibleBarClick = function(obj) {
		return new compatibleBarClick.prototype.init(obj);
	}
	compatibleBarClick.prototype = {
		constructor: navBarClick,
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
	compatibleBarClick.prototype.init.prototype = compatibleBarClick.prototype;
}(window, undefined)
