require(['avalon', 'zTreeSearch', 'server', 'text'], function (avalon, s) {

    //ztree的测试数据
    var vm = avalon.define({
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
                var value = vm.data.searchValue,
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
            initNode: function(el) {
                var jsp = vm.data.jsp;
                // initialise draggable elements.
                jsp.draggable(el);

                jsp.makeSource(el, {
                    filter: ".ep",
                    anchor: "Continuous",
                    connectorStyle: { stroke: "#5c96bc", strokeWidth: 2, outlineStroke: "transparent", outlineWidth: 4 },
                    connectionType:"basic",
                    extract:{
                        "action":"the-action"
                    },
                    maxConnections: 2,
                    onMaxConnections: function (info, e) {
                        alert("Maximum connections (" + info.maxConnections + ") reached");
                    }
                });

                jsp.makeTarget(el, {
                    dropOptions: { hoverClass: "dragHover" },
                    anchor: "Continuous",
                    allowLoopback: true
                });

                // this is not part of the core demo functionality; it is a means for the Toolkit edition's wrapped
                // version of this demo to find out about new nodes being added.
                //
                jsp.fire("jsPlumbDemoNodeAdded", el);
            },
            newNode:  function(x, y, id) {
                var d = document.createElement("div");
                var id = id || jsPlumbUtil.uuid();
                d.className = "w";
                d.id = id;
                d.innerHTML = id.substring(0, 7) + "<div class=\"ep\"></div>";
                d.style.left = x + "px";
                d.style.top = y + "px";
                vm.data.jsp.getContainer().appendChild(d);
                vm.initNode(d);
                return d;
            },
            //描绘数据表
            draw: function () {
                var jsp = vm.data.jsp;

                //1 获取节点
                var nodes = zTreeObj.getCheckedNodes();
                console.log("draw.nodes------> ", nodes);

                for(var n in nodes){
                    console.log("draw.node------> ", nodes[n]);
                    if(nodes[n].pId === 0){
                        vm.newNode(100, 200, nodes[n].name );
                    }
                }

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
        zTreeDom = "tables",
        zTreeObj = buildTree();

//创建zTree树
    function buildTree() {
        var data = testData,
            _search = $('#searchZoning');

        _search.keyup(function (e) {
            if (e.keyCode === 13) {
                vm.findInTree();
            }
        });
        return $.fn.zTree.init($("#" + zTreeDom), setting, data);
    }


    function myOnCheck(event, treeId, treeNode) {
        console.log("treeNode", treeNode);

        console.log("treeId", treeId);

        console.log("event", event);
    }


    jsPlumb.ready(function () {

        // setup some defaults for jsPlumb.
        var instance = jsPlumb.getInstance({
            Endpoint: ["Dot", {radius: 2}],
            Connector:"StateMachine",
            HoverPaintStyle: {stroke: "#1e8151", strokeWidth: 2 },

            //覆盖图配置，可以设置5种——Arrow（箭头）、PlainArrow（平尾箭头）、Diamond（菱形）、Label（文本标签）与Custom（自定义元素）
            // 每种又可以设置多个
            //支持自定义的覆盖图，
            // 比如一个元素用来显示表连接信息——连接方式（左连接、右连接）、连接条件（on left = right | left> right）等等
            ConnectionOverlays: [

                //箭头,可以是多个箭头
                [ "Arrow", {
                    location: 1,
                    id: "arrow",
                    length: 14,
                    foldback: 0.8
                } ],


                //文本标签
                [ "Label", { label: "FOO", id: "label", cssClass: "aLabel" }],

                //自定义形状
                ["Custom", {
                    create:function(component) {
                        return $("<select id='myDropDown'><option value='foo'>foo</option><option value='bar'>bar</option></select>");
                    },
                    location:0.7,
                    id:"customOverlay"
                }]
            ],
            Container: "canvas"
        });


        instance.registerConnectionType("basic", { anchor:"Continuous", connector:"StateMachine" });

        vm.data['jsp'] = instance;
        window.jsp = instance;

        var canvas = document.getElementById("canvas");
        var windows = jsPlumb.getSelector(".statemachine-demo .w");

        // bind a click listener to each connection; the connection is deleted. you could of course
        // just do this: instance.bind("click", instance.deleteConnection), but I wanted to make it clear what was
        // happening.
        instance.bind("click", function (c) {

            //删除连接线
            //instance.deleteConnection(c);
        });

        // bind a connection listener. note that the parameter passed to this function contains more than
        // just the new connection - see the documentation for a full list of what is included in 'info'.
        // this listener sets the connection's internal
        // id as the label overlay's text.
        instance.bind("connection", function (info) {
            info.connection.getOverlay("label").setLabel(info.connection.id);
        });

        // bind a double click listener to "canvas"; add new node when this occurs.
        jsPlumb.on(canvas, "dblclick", function(e) {
            newNode(e.offsetX, e.offsetY);
        });

        //
        // initialise element as connection targets and source.
        //
        var initNode = function(el) {

            // initialise draggable elements.
            instance.draggable(el);

            instance.makeSource(el, {
                filter: ".ep",
                anchor: "Continuous",
                connectorStyle: { stroke: "#5c96bc", strokeWidth: 2, outlineStroke: "transparent", outlineWidth: 4 },
                connectionType:"basic",
                extract:{
                    "action":"the-action"
                },
                maxConnections: 2,
                onMaxConnections: function (info, e) {
                    alert("Maximum connections (" + info.maxConnections + ") reached");
                }
            });

            instance.makeTarget(el, {
                dropOptions: { hoverClass: "dragHover" },
                anchor: "Continuous",
                allowLoopback: true
            });

            // this is not part of the core demo functionality; it is a means for the Toolkit edition's wrapped
            // version of this demo to find out about new nodes being added.
            //
            instance.fire("jsPlumbDemoNodeAdded", el);
        };

        var newNode = function(x, y) {
            var d = document.createElement("div");
            var id = jsPlumbUtil.uuid();
            d.className = "w";
            d.id = id;
            d.innerHTML = id.substring(0, 7) + "<div class=\"ep\"></div>";
            d.style.left = x + "px";
            d.style.top = y + "px";
            instance.getContainer().appendChild(d);
            initNode(d);
            return d;
        };

        // suspend drawing and initialise.
        instance.batch(function () {
            for (var i = 0; i < windows.length; i++) {
                initNode(windows[i], true);
            }
            // and finally, make a few connections
            instance.connect({ source: "opened", target: "phone1", type:"basic" });
            instance.connect({ source: "phone1", target: "phone1", type:"basic" });
            instance.connect({ source: "phone1", target: "inperson", type:"basic" });

            instance.connect({
                source:"phone2",
                target:"rejected",
                type:"basic"
            });
        });

        jsPlumb.fire("jsPlumbDemoLoaded", instance);

    });
});

