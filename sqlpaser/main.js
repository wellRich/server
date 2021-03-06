<<<<<<< HEAD
//ztree的测试数据
var testData = [{
        id: 1000,
        pId: 0,
        label: '用户',
        name: 'user',
        flag: 'table',
        checked: false,
        columns: [{
            pId: 1000,
            id: '1000@user_name',
            checked: false,
            name: 'user_name',
            type: 'String',
            label: '用户名'
        }]
    }, {
        id: 2000,
        pId: 0,
        label: '机构',
        name: 'dept',
        flag: 'table',
        checked: false,
        columns: [{
            pId: 2000,
            id: '2000@id',
            checked: false,
            label: 'id',
            name: 'id',
            flag: 'column',
            type: 'Long'
        }, {
            pId: 2000,
            id: '2000@simpleName',
            checked: false,
            label: '机构简称',
            name: 'simpleName',
            flag: 'column',
            type: 'String'
        }, {
            pId: 2000,
            id: '2000@leader',
            checked: false,
            flag: 'column',
            label: '机构负责人',
            name: 'leader',
            type: 'Long'
        }]
    }, {
        id: 3000,
        pId: 0,
        label: '客户',
        name: 'client',
        flag: 'table',
        checked: false,
        columns: [{
            pId: 3000,
            id: '3000@id',
            checked: false,
            label: 'id',
            name: 'id',
            flag: 'column',
            type: 'Long'
        }, {
            pId: 3000,
            id: '3000@name',
            label: '名称',
            checked: false,
            name: 'name',
            flag: 'column',
            type: 'String'
        }, {
            pId: 3000,
            id: '3000@adress',
            flag: 'column',
            checked: false,
            label: '地址',
            name: 'address',
            type: 'String'
        }]
    }], sql_parser_vm = avalon.define({
        $id: "root",
        name: "tangolivesky",
        nodes: {},
        tables: [],
        data: {
            searchValue: ''
        },
        rpt: {},
        findInTree: function () {

            // 重写了zTreeSearch中的查询方法
            // 清除高亮
            var value = sql_parser_vm.data.searchValue,
                allNodes = zTreeObj.transformToArray(zTreeObj.getNodes());
            for (var i in allNodes) {
                allNodes[i].highlight = false;
                zTreeObj.updateNode(allNodes[i]);
            }
            if (value == '') return; // input '' wipe highlight

            // 查询节点
            var nodes = zTreeObj.getNodesByParamFuzzy('name', value);

            // 高亮显示匹配的节点，并展开
            for (var i in nodes) {
                nodes[i].highlight = true;
                zTreeObj.updateNode(nodes[i]);
                zTreeObj.expandNode(nodes[i].getParentNode(), true);

                //定位到匹配的第一个节点
                if (i == 0) {
                    zTreeObj.selectNode(nodes[0]);
                }
            }
        },
        getNodes: function () {
            return zTreeObj.getNodes();
        },
        getCheckedNodes: function () {
            return zTreeObj.getCheckedNodes(true);
        },
        //描绘数据表
        draw: function (event) {
            console.log("draw---> ", event);

            //1 获取节点
            var nodes = zTreeObj.getNodes();
            console.log("draw.nodes------> ", nodes);

            //2

        }

    }),
    setting = {
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId",
                rootPId: 0
            },
            key: {
                children: "columns"
            }
        },
        check: {
            enable: true,
            chkStyle: "checkbox",
            chkboxType: {
                "Y": "ps",
                "N": "s"
            }
        },
        callback: {
            onCheck: myOnCheck
        }
    },
    zTreeInit = $.fn.zTree.init,

    zTreeDom = "tables",
    zTreeObj = buildTree();


console.log("zTreeInit---------> " + zTreeInit);

console.log("zTreeObj---------> ", zTreeObj);


//创建zTree树
function buildTree() {
    var data = testData,
        _search = $('#searchZoning');

    _search.keyup(function (e) {
        if (e.keyCode === 13) {
            sql_parser_vm.findInTree();
        }
    });
    return zTreeInit($("#" + zTreeDom), setting, data);
}

function myOnCheck(event, treeId, treeNode) {
    console.log("treeNode", treeNode);

    console.log("treeId", treeId);

    console.log("event", event);
}


=======
require.config({
    baseUrl: "/server/assets/",
    map: {
        '*': {
            'css': 'vendor/requireJS/require-css'
        }
    },
    paths: {
        "text" : "/server/node_modules/requirejs-text/text",
        "jquery": "vendor/jquery/jquery-2.2.3.min",
        "bootstrap": "vendor/bootstrap/js/bootstrap.min",


        //时间控件
        "bootstrap-datepicker": "vendor/bootstrap/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min",
        "datepicker-zh-CN": "vendor/bootstrap/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
        "bootstrap-datetimepicker": "vendor/bootstrap/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min",
        "datetimepicker.zh-CN": "vendor/bootstrap/plugins/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN",

        //avalon
        "avalon": "vendor/avalon/avalon",

        //zTree
        "zTree": "vendor/jquery/plugins/ztree/jquery.ztree.all",
        "zTreeSearch": "vendor/jquery/plugins/ztree/jquery.ztree.search",

        //jsPlumb
        "jsPlumb": "vendor/jsPlumb/js/jquery.jsPlumb-1.5.2-min",

        //jqueryUi
        "jqueryUi": "vendor/jsPlumb/js/jquery-ui-1.10.3.custom.min",

        //jsPlumbConf
        "jsPlumbConf": "vendor/jsPlumb/js/initConnector",

        //lodash
        "lodash": "vendor/lodash/lodash-3.10.1.min",

        "server": "/server/demo/server"
    },
    shim: {
        "bootstrap": ["jquery", "css!vendor/bootstrap/css/bootstrap.min"],
        //时间控件
        "bootstrap-datepicker": ["bootstrap", "css!vendor/bootstrap/plugins/bootstrap-datepicker/css/bootstrap-datepicker3"],
        "datepicker-zh-CN": ["bootstrap-datepicker"],

        "bootstrap-datetimepicker": ["css!vendor/bootstrap/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker"],
        "datetimepicker.zh-CN": ["bootstrap-datetimepicker"],

        //zTree
        "zTree": ["jquery", "css!vendor/jquery/plugins/ztree/zTreeStyle"],
        "zTreeSearch": ["zTree"],

        //jsPlumb
        "jsPlumb": ["jquery", "css!vendor/jsPlumb/css/jsPlumbChart", "css!vendor/jsPlumb/css/global", "css!vendor/jsPlumb/css/jsPlumbChart"],

        //jqueryUi
        "jqueryUi": ["jquery", "css!vendor/jsPlumb/css/jquery-ui-1.10.3.custom"]
    }
});
>>>>>>> 5f5edfa059637e1f4b17a6659568ee24130b5288
