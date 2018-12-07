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
