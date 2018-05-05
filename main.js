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

require(['avalon', "zTree"],function(avalon){
    avalon.log("引入avalon");

    var model = avalon.define({
        $id: "root",
        name: "tangolivesky",
        fullScreen: function () {
            var de = document.documentElement;

            if (de.requestFullscreen) {
                de.requestFullscreen();
            } else if (de.mozRequestFullScreen) {
                de.mozRequestFullScreen();
            } else if (de.webkitRequestFullScreen) {
                de.webkitRequestFullScreen();
            }
            else {
                App.alert({message: "该浏览器不支持全屏！", type: "danger"});
            }

        }
    });
    avalon.scan();
});