
$(function(){
	// 首页
	  $("#we").mouseenter(function(){
		$(".er").css("background-color","#fff");
	  });
	  $("#we").mouseleave(function(){
		$(".er").css("background-color","#121212");
	  });
	  
	 $("#we").mouseenter(function(){
	 	$(".z").css("color","#fff");
	 });
	 $("#we").mouseleave(function(){
	 	$(".z").css("color","#B8860B");
	 }); 
	 
	 $("#we").mouseenter(function(){
	 	$("#content").css("color","#fff");
	 });
	 $("#we").mouseleave(function(){
	 	$("#content").css("color","#B8860B");
	 }); 
	 
	 
	 // 暗裔
	 $("#we2").mouseenter(function(){
	 		$(".er2").css("background-color","#fff");
	 });
	 $("#we2").mouseleave(function(){
	 		$(".er2").css("background-color","#121212");
	 });
	 
	 $("#we2").mouseenter(function(){
	 	$(".z2").css("color","#fff");
	 });
	 $("#we2").mouseleave(function(){
	 	$(".z2").css("color","#B8860B");
	 }); 
	 
	 $("#we2").mouseenter(function(){
	 	$("#content2").css("color","#fff");
	 });
	 $("#we2").mouseleave(function(){
	 	$("#content2").css("color","#B8860B");
	 }); 
	 
	 
	 // 奥德赛
	 $("#we3").mouseenter(function(){
	 		$(".er3").css("background-color","#fff");
	 });
	 $("#we3").mouseleave(function(){
	 		$(".er3").css("background-color","#121212");
	 });
	 
	 $("#we3").mouseenter(function(){
	 	$(".z3").css("color","#fff");
	 });
	 $("#we3").mouseleave(function(){
	 	$(".z3").css("color","#B8860B");
	 });
	  
	  $("#we3").mouseenter(function(){
	  	$("#content3").css("color","#fff");
	  });
	  $("#we3").mouseleave(function(){
	  	$("#content3").css("color","#B8860B");
	  }); 
	  
	  
	  // 星光守护者
	  $("#we4").mouseenter(function(){
	  		$(".er4").css("background-color","#fff");
	  });
	  $("#we4").mouseleave(function(){
	  		$(".er4").css("background-color","#121212");
	  });
	  
	  $("#we4").mouseenter(function(){
	  	$(".z4").css("color","#fff");
	  });
	  $("#we4").mouseleave(function(){
	  	$(".z4").css("color","#B8860B");
	  });
	   
	   $("#we4").mouseenter(function(){
	   	$("#content4").css("color","#fff");
	   });
	   $("#we4").mouseleave(function(){
	   	$("#content4").css("color","#B8860B");
	   }); 
	   
	   
	   // 探索
	   $("#we5").mouseenter(function(){
	   		$(".er5").css("background-color","#fff");
	   });
	   $("#we5").mouseleave(function(){
	   		$(".er5").css("background-color","#121212");
	   });
	   
	   $("#we5").mouseenter(function(){
	   	$(".z5").css("color","#fff");
	   });
	   $("#we5").mouseleave(function(){
	   	$(".z5").css("color","#B8860B");
	   });
	    
	    $("#we5").mouseenter(function(){
	    	$("#content5").css("color","#fff");
	    });
	    $("#we5").mouseleave(function(){
	    	$("#content5").css("color","#B8860B");
	    }); 
	
	// 分栏1
	$(window).scroll(function (){
	 	var top = $("html,body").scrollTop();
		if ( top>1100) {
			$(".Columns4").css({
				// width:"634px",
				opacity:"1"
			})
		}

		// if (top>100) {
		// 	$(".Columns4").css({
		// 		width: "170px",
		// 		opacity:"1",
		// 	})
		// }
	
	});
	 
});

