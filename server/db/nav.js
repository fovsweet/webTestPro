var http = require('http');
var URL = require('url');
var navd = [ {
		"name" : "管理员",
		"check" : "stats",
		"href" : "",
		"className" : "icon-book",
		"menucode" : "R10006",
		"list" : [ {
		"name" : "企业组织架构与职能授权管理",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10006_P10013",
		"list" : [ {
		  "name" : "企业组织架构与职能权限管理",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:3000/archieve/system','R10006_P10013_61261443','http://localhost:8080/archieve')",
		  "className" : "",
		  "menucode" : "R10006_P10013_61261443",
		  "list" : [ ]
		} ]
		}, {
		"name" : "系统基础档案设置与管理",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10006_P10014",
		"list" : [ {
		  "name" : "系统基础档案设置与管理",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:3000/archieve/set','R10006_P10014_32432845','http://localhost:8080/archieve')",
		  "className" : "",
		  "menucode" : "R10006_P10014_32432845",
		  "list" : [ ]
		} ]
		} ]
		}, {
		"name" : "开发工程师",
		"check" : "stats",
		"href" : "",
		"className" : "icon-book",
		"menucode" : "R10000",
		"list" : [ {
		"name" : "物料清单档案管理",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10000_P10001",
		"list" : [ {
		  "name" : "新增或变更成品档案",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:3000/archieve/inventory','R10000_P10001_51764460','http://localhost:8080/archieve')",
		  "className" : "",
		  "menucode" : "R10000_P10001_51764460",
		  "list" : [ ]
		} ]
		} ]
		}, {
		"name" : "业务员",
		"check" : "stats",
		"href" : "",
		"className" : "icon-book",
		"menucode" : "R10001",
		"list" : [ {
		"name" : "客户建档与档案管理",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10001_P10002",
		"list" : [ {
		  "name" : "新增/变更客户档案",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:3000/archieve/customer','R10001_P10002_81392339','http://localhost:8080/archieve')",
		  "className" : "",
		  "menucode" : "R10001_P10002_81392339",
		  "list" : [ ]
		} ]
		}, {
		"name" : "销售订单生成",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10001_P10003",
		"list" : [ {
		  "name" : "新增/变更销售订单",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:8080/order/salesorder','R10001_P10003_32817440','http://localhost:8080/order')",
		  "className" : "",
		  "menucode" : "R10001_P10003_32817440",
		  "list" : [ ]
		} ]
		}, {
		"name" : "跟单管理",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10001_P10004",
		"list" : [ {
		  "name" : "发货状态",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:8080/order/dispatch/status','R10001_P10004_71343497','http://localhost:8080/order')",
		  "className" : "",
		  "menucode" : "R10001_P10004_71343497",
		  "list" : [ ]
		}, {
		  "name" : "待发货订单",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:8080/order/dispatch/wait','R10001_P10004_72684350','http://localhost:8080/order')",
		  "className" : "",
		  "menucode" : "R10001_P10004_72684350",
		  "list" : [ ]
		} ]
		} ]
		}, {
		"name" : "采购员",
		"check" : "stats",
		"href" : "",
		"className" : "icon-book",
		"menucode" : "R10002",
		"list" : [ {
		"name" : "供应商建档与档案管理",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10002_P10005",
		"list" : [ {
		  "name" : "新增/变更供应商档案",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:3000/archieve/supplier','R10002_P10005_42662482','http://localhost:8080/archieve')",
		  "className" : "",
		  "menucode" : "R10002_P10005_42662482",
		  "list" : [ ]
		} ]
		}, {
		"name" : "订单物料采购",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10002_P10006",
		"list" : [ {
		  "name" : "采购下单",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:8080/order/purchaseorder','R10002_P10006_61073521','http://localhost:8080/order')",
		  "className" : "",
		  "menucode" : "R10002_P10006_61073521",
		  "list" : [ ]
		} ]
		} ]
		}, {
		"name" : "仓管员",
		"check" : "stats",
		"href" : "",
		"className" : "icon-book",
		"menucode" : "R10003",
		"list" : [ {
		"name" : "订单物料入库",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10003_P10007",
		"list" : [ {
		  "name" : "采购待收",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:8080/warehouse/inbound/purchase','R10003_P10007_41460503','http://localhost:8080/warehouse')",
		  "className" : "",
		  "menucode" : "R10003_P10007_41460503",
		  "list" : [ ]
		}, {
		  "name" : "合格入库",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:8080/warehouse/inbound','R10003_P10007_42939663','http://localhost:8080/warehouse')",
		  "className" : "",
		  "menucode" : "R10003_P10007_42939663",
		  "list" : [ ]
		} ]
		}, {
		"name" : "仓库成品出库",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10003_P10008",
		"list" : [ {
		  "name" : "成品出库指令",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:8080/warehouse/outbound/dispatch','R10003_P10008_52336346','http://localhost:8080/warehouse')",
		  "className" : "",
		  "menucode" : "R10003_P10008_52336346",
		  "list" : [ ]
		}, {
		  "name" : "成品出库记录",
		  "check" : "stats",
		  "href" : "javascript:open('http://localhost:8080/warehouse/outbound','R10003_P10008_92519387','http://localhost:8080/warehouse')",
		  "className" : "",
		  "menucode" : "R10003_P10008_92519387",
		  "list" : [ ]
		} ]
		} ]
		}, {
		"name" : "会计员",
		"check" : "stats",
		"href" : "",
		"className" : "icon-book",
		"menucode" : "R10004",
		"list" : [ {
		"name" : "应收管理",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10004_P10009",
		"list" : [ {
		  "name" : "销售收款",
		  "check" : "stats",
		  "href" : "javascript:open('http://192.168.1.183:8083/financial/receivablenote/wait','R10004_P10009_22961077','http://192.168.1.183:8083/financial')",
		  "className" : "",
		  "menucode" : "R10004_P10009_22961077",
		  "list" : [ ]
		} ]
		}, {
		"name" : "应付管理",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10004_P10010",
		"list" : [ {
		  "name" : "采购付款",
		  "check" : "stats",
		  "href" : "javascript:open('http://192.168.1.183:8083/financial/debitnote/wait','R10004_P10010_51997608','http://192.168.1.183:8083/financial')",
		  "className" : "",
		  "menucode" : "R10004_P10010_51997608",
		  "list" : [ ]
		} ]
		} ]
		}, {
		"name" : "人事专员",
		"check" : "stats",
		"href" : "",
		"className" : "icon-book",
		"menucode" : "R10005",
		"list" : [ {
		"name" : "人事专员",
		"check" : "stats",
		"href" : "",
		"className" : "",
		"menucode" : "R10005_P10012",
		"list" : [ {
			  "name" : "人事专员",
			  "check" : "stats",
			  "href" : "javascript:open('http://localhost:3000/archieve/employee','R10005_P10012_91047509','http://localhost:8080/archieve')",
			  "className" : "",
			  "menucode" : "R10005_P10012_91047509",
			  "list" : [ ]
			} ]
		} ]
	} ]


module.exports = {
	navDate(req,res){
		return navd;
	}
}