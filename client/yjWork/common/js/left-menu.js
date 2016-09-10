var navBar = [{
    "name": "管理员",
    "check": "stats",
    "href": "",
    "className": "icon-home",
    "menucode": "001",
    "list": [{
        "name": "企业组织架构与职能权限管理",
        "check": 'stats',
        "href": "javascript:open('http://192.168.1.183:8081/archieve/system','001001')",
        "className": '',
        "list": [],
        "menucode": "001001"
    }, {
        "name": "系统基础档案设置与管理",
        "check": 'stats',
        "href": "javascript:open('http://192.168.1.183:8081/archieve/set','001002')",
        "className": '',
        "list": [],
        "menucode": "001002"
    }]
}, {
    "name": "开发员",
    "check": "stats",
    "href": "",
    "className": "icon-book",
    "menucode": "002",
    "list": [{
        "name": "物料清单档案管理",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "002001",
        "list": [{
            "name": "新增或变更成品档案",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8081/archieve/inventory','002001001')",
            "className": '',
            "menucode": "002001001",
            "list": []
        }]
    }]
}, {
    "name": "业务员",
    "check": "stats",
    "href": "",
    "className": "icon-cogs",
    "menucode": "003",
    "list": [{
        "name": "客户建档与档案管理",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "003001",
        "list": [{
            "name": "新增/变更客户档案",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8081/archieve/customer','003001001')",
            "className": '',
            "menucode": "003001001",
            "list": []
        }]
    }, {
        "name": "销售订单生产",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "003002",
        "list": [{
            "name": "新增/变更销售订单",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8084/order/salesorder','003002001')",
            "className": '',
            "menucode": "003002001",
            "list": []
        }]
    }, {
        "name": "跟单管理",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "003003",
        "list": [{
            "name": "待发货订单",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8084/order/dispatch/wait','003003001')",
            "className": '',
            "menucode": "003003001",
            "list": []
        }, {
            "name": "发货状态",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8084/order/dispatch/status','003003002')",
            "className": '',
            "menucode": "003003002",
            "list": []
        }]
    }]
}, {
    "name": "采购员",
    "check": "stats",
    "href": "",
    "className": "icon-cogs",
    "menucode": "004",
    "list": [{
        "name": "供应商建档与档案管理",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "004001",
        "list": [{
            "name": "新增/变更供应商档案",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8081/archieve/supplier','004001001')",
            "className": '',
            "menucode": "004001001",
            "list": []
        }]
    }, {
        "name": "订单物料采购",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "004002",
        "list": [{
            "name": "采购下单",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8084/order/purchaseorder','004002001')",
            "className": '',
            "menucode": "004002001",
            "list": []
        }]
    }]
}, {
    "name": "仓库员",
    "check": "stats",
    "href": "",
    "className": "icon-cogs",
    "menucode": "005",
    "list": [{
        "name": "订单物料入库",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "005001",
        "list": [{
            "name": "采购待收",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8083/warehouse/inbound/purchase','005001001');",
            "className": '',
            "menucode": "005001001",
            "list": []
        }, {
            "name": "合格入库",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8083/warehouse/inbound','005001002');",
            "className": '',
            "menucode": "005001002",
            "list": []
        }]
    }, {
        "name": "仓库成品出库指令",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "005002",
        "list": [{
            "name": "成品出库指令",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8083/warehouse/outbound/dispatch','005002001');",
            "className": '',
            "menucode": "005002001",
            "list": []
        }, {
            "name": "成品出库记录",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8083/warehouse/outbound','005002002');",
            "className": '',
            "menucode": "005002002",
            "list": []
        }]
    }]
}, {
    "name": "财务员",
    "check": "stats",
    "href": "",
    "className": "icon-cogs",
    "menucode": "006",
    "list": [{
        "name": "应收管理",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "006001",
        "list": [{
            "name": "销售收款",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8082/financial/receivablenote/wait','006001001')",
            "className": '',
            "menucode": "006001001",
            "list": []
        }]
    }, {
        "name": "应付管理",
        "check": 'stats',
        "href": "",
        "className": '',
        "menucode": "006002",
        "list": [{
            "name": "采购付款",
            "check": 'stats',
            "href": "javascript:open('http://192.168.1.183:8082/financial/debitnote/wait','006001001')",
            "className": '',
            "menucode": "006001001",
            "list": []
        }]
    }]
}, {
    "name": "人事专员",
    "check": "stats",
    "href": "",
    "className": "icon-cogs",
    "menucode": "007",
    "list": [{
        "name": "人事专员",
        "check": 'stats',
        "href": "javascript:open('http://192.168.1.183:8081/archieve/employee','006001001')",
        "className": '',
        "menucode": "007001"
    }]
}];
var headBar = [{
    "name": "",
    "check": "stats",
    "href": "",
    "className": "icon-angle-down",
    "list": [{
        "name": "我的邮箱",
        "check": 'stats',
        "href": "",
        "className": ' icon-envelope-alt',
        "list": []
    }, {
        "name": "系统设置",
        "check": 'stats',
        "href": "",
        "className": 'icon-cog',
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
            $("li[menucode='" + three + "']").parents("li[menucode='" + two + "']").attr("className", "open");
            $("li[menucode='" + three + "']").parents("li[menucode='" + one + "']").attr("className", "open");
        } else {
            var two = menucode.substring(0, menucode.length - 3), three = menucode;
            $("li[menucode='" + three + "']").parents("li[menucode='" + two + "']").attr("className", "open");
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