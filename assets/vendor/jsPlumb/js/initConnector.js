	

	jsPlumb.importDefaults({
		DragOptions : { cursor: "pointer", zIndex:2000 },
		HoverClass:"connector-hover"
	});
	
	var fx_chart_paintStyle = { lineWidth:5, strokeStyle:"#a7b04b", outlineWidth:1, outlineColor:"#666"};
	
	var fx_chart_endpointStyle = { 
		fillStyle:"#a7b04b", gradient : {
			stops:[[ 0, '#ccc'], [ 1, '#a7a7a7' ]], 
			offset:15, 
			innerRadius:2
		}, 
		radius:8
	};

	var fx_chart_anchors = ["Bottom", "Top"];
	
	var fx_chart_connector = ["Bezier", { curviness:50 }];

	var fx_chart_hoverPaintStyle = { strokeStyle:"#7ec3d9" };

	var fx_chart_overlays = [ 
    	["Arrow", { location:0.7 }]
    	/*,
    	[ "Label", {	
    		cssClass:"connecterLabel",									   					
			label : "", 
			location:0.7,
			id:"label",
			events:{
				"click":function(label, evt) {
					//alert("clicked on label for connection " + label.component.id);
				}
			}
		}]*/
	];

	var fx_chart_events = {
		"mouseenter":function(conn) {
			//alert(conn);
		}
	};

	


	/**
	 * 初始化jsPlumb参数
	**/
	var fx_chart_config = {
		//设置链接线样式（宽度及颜色）
		paintStyle:fx_chart_paintStyle,
		//设置链接线两端点样式
	   	endpointStyle:fx_chart_endpointStyle,
	  	//设置链接点方向
	  	anchors:fx_chart_anchors, 	
	  	//设置链接线样式：直线Straight；贝塞尔曲线Bezier,曲度curviness
	  	connector:fx_chart_connector,	
		//设置鼠标悬浮在链接线上时的样式
	  	hoverPaintStyle:fx_chart_hoverPaintStyle,  
		//设置链接线
	    overlays:fx_chart_overlays,
		//设置链接线事件
		events:fx_chart_events
	}