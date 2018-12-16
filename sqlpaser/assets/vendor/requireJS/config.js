require.config({
    baseUrl: "/server/assets/",
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
        "avalon2": "/server/node_modules/avalon2/dist/avalon",

        //zTree
        "zTree": "vendor/jquery/plugins/ztree/jquery.ztree.all",
        "zTreeSearch": "vendor/jquery/plugins/ztree/jquery.ztree.search",

        //jsPlumb
        //"jsPlumb": "vendor/jsPlumb/js/jquery.jsPlumb-1.5.2-min",
        "jsPlumb": "vendor/jsPlumb/src/jsPlumb",

        //jqueryUi
        "jqueryUi": "vendor/jsPlumb/js/jquery-ui-1.10.3.custom.min",

        //jsPlumbConf
        // "jsPlumbConf": "vendor/jsPlumb/js/initConnector",

        "jsPlumbDefault": "vendor/jsPlumb/src/defaults",

        "jsbezier": "vendor/node_modules/jsbezier/js/jsbezier",

        "biltong": "vendor/node_modules/biltong/src/biltong",

        "katavorio": "vendor/node_modules/katavorio/src/katavorio",

        "mottle": "vendor/node_modules/mottle/js/mottle",

        "anchors": "vendor/jsPlumb/src/anchors",

        "base-library-adapter": "vendor/jsPlumb/src/base-library-adapter",

        "browser-util": "vendor/jsPlumb/src/browser-util",

        "connection": "vendor/jsPlumb/src/connection",

        "connectors-bezier": "vendor/jsPlumb/src/connectors-bezier",

        "connectors-flowchart": "vendor/jsPlumb/src/connectors-flowchart",

        "connectors-statemachine": "vendor/jsPlumb/src/connectors-statemachine",

        "dom.jsPlumb": "vendor/jsPlumb/src/dom.jsPlumb",

        "dom-adapter": "vendor/jsPlumb/src/dom-adapter",

        "endpoint": "vendor/jsPlumb/src/endpoint",

        "group": "vendor/jsPlumb/src/group",

        "overlay-component": "vendor/jsPlumb/src/overlay-component",

        "renderers-svg": "vendor/jsPlumb/src/renderers-svg",

        "util": "vendor/jsPlumb/src/util",

        "demo": "/server/demo/demo",

        //lodash
        "lodash": "vendor/lodash/lodash-3.10.1.min",

        "table": "js/Table",
        "column": "js/Column"

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
        //"jsPlumb": ["jquery", "css!vendor/jsPlumb/css/jsPlumbChart", "css!vendor/jsPlumb/css/global", "css!vendor/jsPlumb/css/jsPlumbChart"],
        //"jsPlumbConf": ["jsPlumb", "jqueryUi"],

        //jqueryUi
        "jqueryUi": ["jquery", "css!vendor/jsPlumb/css/jquery-ui-1.10.3.custom"],

        "anchors": ["jsPlumb", "util"],
        "base-library-adapter": ["jsPlumb"],
        "connection": ["jsPlumb", "util"],
        "connectors-bezier": ["jsPlumb", "util"],
        "connectors-flowchart": ["jsPlumb", "util"],
        "connectors-statemachine": ["jsPlumb", "util"],
        "dom.jsPlumb": ["jsPlumb", "util"],
        "overlay-component": ["jsPlumb", "util"],
        "group": ["jsPlumb", "util"],
        "endpoint":["jsPlumb", "util"],
        "renderers-svg": ["jsPlumb", "util"],

        "browser-util": ["util"],

        "jsPlumbDefault": ["browser-util", "anchors", "base-library-adapter", "connection",  "connectors-bezier",
            "connectors-flowchart", "connectors-statemachine", "overlay-component", "dom.jsPlumb","group",
            "endpoint", "renderers-svg", "biltong", "jsbezier", "katavorio", "mottle"],
        "demo": ["jsPlumbDefault"]
    }
});