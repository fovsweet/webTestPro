var navBar = [{
    "name": "管理员",
    "check": "stats",
    "href": "",
    "class": "icon-home",
    "menucode": "001",
    "list": [{
        "name": "企业组织架构与职能权限管理",
        "check": 'stats',
        "href": "javascript:open('/system','001001')",
        "class": '',
        "list": [],
        "menucode": "001001"
    }, {
        "name": "系统基础档案设置与管理",
        "check": 'stats',
        "href": "javascript:open('/set','001002')",
        "class": '',
        "list": [],
        "menucode": "001002"
    }]
}, {
    "name": "开发员",
    "check": "stats",
    "href": "",
    "class": "icon-book",
    "menucode": "002",
    "list": [{
        "name": "物料清单档案管理",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "002001",
        "list": [{
            "name": "新增或变更成品档案",
            "check": 'stats',
            "href": "javascript:open('/inventory','002001001')",
            "class": '',
            "menucode": "002001001",
            "list": []
        }]
    }]
}, {
    "name": "业务员",
    "check": "stats",
    "href": "",
    "class": "icon-cogs",
    "menucode": "003",
    "list": [{
        "name": "客户建档与档案管理",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "003001",
        "list": [{
            "name": "新增/变更客户档案",
            "check": 'stats',
            "href": "javascript:open('/customer','003001001')",
            "class": '',
            "menucode": "003001001",
            "list": []
        }]
    }, {
        "name": "销售订单生产",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "003002",
        "list": [{
            "name": "新增/变更销售订单",
            "check": 'stats',
            "href": "javascript:open('http://localhost:8080/order/salersorder','003002001')",
            "class": '',
            "menucode": "003002001",
            "list": []
        }]
    }, {
        "name": "跟单管理",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "003003",
        "list": [{
            "name": "待发货订单",
            "check": 'stats',
            "href": "javascript:open('http://localhost:8080/order/salersorder/wait','003003001')",
            "class": '',
            "menucode": "003003001",
            "list": []
        }, {
            "name": "发货状态",
            "check": 'stats',
            "href": "javascript:open('http://localhost:8080/order/salersorder/status','003003002')",
            "class": '',
            "menucode": "003003002",
            "list": []
        }]
    }]
}, {
    "name": "采购员",
    "check": "stats",
    "href": "",
    "class": "icon-cogs",
    "menucode": "004",
    "list": [{
        "name": "供应商建档与档案管理",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "004001",
        "list": [{
            "name": "新增/变更供应商档案",
            "check": 'stats',
            "href": "javascript:open('/supplier','004001001')",
            "class": '',
            "menucode": "004001001",
            "list": []
        }]
    }, {
        "name": "订单物料采购",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "004002",
        "list": [{
            "name": "采购下单",
            "check": 'stats',
            "href": "javascript:open('http://localhost:8080/order/purchaseorder','004002001')",
            "class": '',
            "menucode": "004002001",
            "list": []
        }]
    }]
}, {
    "name": "仓库员",
    "check": "stats",
    "href": "",
    "class": "icon-cogs",
    "menucode": "005",
    "list": [{
        "name": "订单物料入库",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "005001",
        "list": [{
            "name": "采购待收",
            "check": 'stats',
            "href": "javascript:open('http://localhost:8080/warehouse/inbound/purchase','005001001');",
            "class": '',
            "menucode": "005001001",
            "list": []
        }, {
            "name": "合格入库",
            "check": 'stats',
            "href": "javascript:open('http://localhost:8080/warehouse/inbound','005001002');",
            "class": '',
            "menucode": "005001002",
            "list": []
        }]
    }, {
        "name": "仓库成品出库指令",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "005002",
        "list": [{
            "name": "成品出库指令",
            "check": 'stats',
            "href": "javascript:open('http://localhost:8080/warehouse/outbound/dispatch','005002001');",
            "class": '',
            "menucode": "005002001",
            "list": []
        }, {
            "name": "成品出库记录",
            "check": 'stats',
            "href": "javascript:open('http://localhost:8080/warehouse/outbound','005002002');",
            "class": '',
            "menucode": "005002002",
            "list": []
        }]
    }]
}, {
    "name": "财务员",
    "check": "stats",
    "href": "",
    "class": "icon-cogs",
    "menucode": "006",
    "list": [{
        "name": "应收管理",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "006001",
        "list": [{
            "name": "销售收款",
            "check": 'stats',
            "href": "javascript:open('http://192.168.6.24:8080/financial/receivablenote','006001001')",
            "class": '',
            "menucode": "006001001",
            "list": []
        }]
    }, {
        "name": "应付管理",
        "check": 'stats',
        "href": "",
        "class": '',
        "menucode": "006002",
        "list": [{
            "name": "采购付款",
            "check": 'stats',
            "href": "javascript:open('http://192.168.6.16:8080/financial/debitnote','006001001')",
            "class": '',
            "menucode": "006001001",
            "list": []
        }]
    }]
}, {
    "name": "人事专员",
    "check": "stats",
    "href": "",
    "class": "icon-cogs",
    "menucode": "007",
    "list": [{
        "name": "人事专员",
        "check": 'stats',
        "href": "javascript:open('/employee','006001001')",
        "class": '',
        "menucode": "007001"
    }]
}];
var headBar = [{
    "name": "",
    "check": "stats",
    "href": "",
    "class": "icon-angle-down",
    "list": [{
        "name": "我的邮箱",
        "check": 'stats',
        "href": "",
        "class": ' icon-envelope-alt',
        "list": []
    }, {
        "name": "系统设置",
        "check": 'stats',
        "href": "",
        "class": 'icon-cog',
        "list": []
    }]
}];
sMenuTree({
    data: navBar,
    id: '#nav-list',
    cb: function () {
        compatibleBarClick('#nav-list');
        var menucode = $("#menucode").val();
        if (menucode.length > 8) {
            var one = menucode.substring(0, menucode.length - 6), two = menucode.substring(0, menucode.length - 3), three = menucode;
            $("li[menucode='" + three + "']").parents("li[menucode='" + two + "']").attr("class", "open");
            $("li[menucode='" + three + "']").parents("li[menucode='" + one + "']").attr("class", "open");
        } else {
            var two = menucode.substring(0, menucode.length - 3), three = menucode;
            $("li[menucode='" + three + "']").parents("li[menucode='" + two + "']").attr("class", "open");
        }
    }
});
sMenuTree({
    data: headBar,
    id: '#head-bar',
    cb: function () {
        compatibleBarClick('#head-bar');
        console.log(this);
    }
});

function open(url, menucode) {
    var root = $("#root").val();
    window.location.href = root + "/agent/" + menucode + "?url=" + url;
}