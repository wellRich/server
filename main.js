require.config({
	baseUrl: "assets/",
	map: {
		'*': {
			'css': 'vendor/requireJS/require-css'
		}
	},
	paths: {
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

        //apdminlte
        "app": "vendor/AdminLTE/js/app.min"

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
		"jsPlumbConf": ["jsPlumb", "jqueryUi"],

		//jqueryUi
		"jqueryUi": ["jquery", "css!vendor/jsPlumb/css/jquery-ui-1.10.3.custom"],

        "app": ["jquery"]


	}
});

require(['avalon',  "zTree"],function(avalon){
    avalon.log("引入avalon");

    var sql_parser_vm = avalon.define({
        $id: "root",
        name: "tangolivesky",
        zTreeInit: $.fn.zTree.init,
        data: {
        	zTreeObj: {},
        	searchValue: '',
        	zTreeDom: "tables"
        },
        rpt: {

        },
        findInTree: function(){

            // 重写了zTreeSearch中的查询方法
            // 清除高亮
			var value = sql_parser_vm.data.searchValue,
				zTreeObj = sql_parser_vm.data.zTreeObj,
				allNodes = zTreeObj.transformToArray(zTreeObj.getNodes());
			console.log("value -----> ", value);
			for (var i in allNodes) {
				allNodes[i].highlight = false;
				zTreeObj.updateNode(allNodes[i]);
			}
			console.log("allNodes -----> ", allNodes);
			if (value == '') return; // input '' wipe highlight


			// 查询节点
			var nodes = zTreeObj.getNodesByParamFuzzy('name', value);

			console.log("nodes -----> ", nodes);

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
        draw: function(event) {
        	console.log("draw---> ", event);
        }

    });
    avalon.scan();

    //创建zTree树
    buildTree();
	function buildTree() {
		var data = testData, setting = {
            check: {
                enable: true,
                chkStyle: "checkbox",
                chkboxType: { "Y": "p", "N": "s" }
            }
        }, _search = $('#searchZoning');

        _search.keyup(function(e) {
            if(e.keyCode === 13){
                sql_parser_vm.findInTree();
            }
        });
        sql_parser_vm.data.zTreeObj = sql_parser_vm.zTreeInit($("#" + sql_parser_vm.data.zTreeDom), setting, data);
	}


});

//ztree的测试数据
var testData = [{
	id: 1000,
	label: '用户',
	name: 'user',
	flag: 'table',
	children: [{
		name: 'user_name',
		type: 'String',
		label: '用户名'
	}]
}, {
	id: 2000,
	label: '机构',
	name: 'dept',
	flag: 'table',
	children: [{
		label: 'id',
		name: 'id',
		flag: 'column',
		type: 'Long'
	}, {
		label: '机构简称',
		name: 'simpleName',
		flag: 'column',
		type: 'String'
	}, {
		flag: 'column',
		label: '机构负责人',
		name: 'leader',
		type: 'Long'
	}]
}, {
	id: 3000,
	label: '客户',
	name: 'client',
	flag: 'table',
	children: [{
		label: 'id',
		name: 'id',
		flag: 'column',
		type: 'Long'
	}, {
		label: '名称',
		name: 'name',
		flag: 'column',
		type: 'String'
	}, {
		flag: 'column',
		label: '地址',
		name: 'adress',
		type: 'String'
	}]
}];