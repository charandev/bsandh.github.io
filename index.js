$('#click-me-subdrop').click(function(){
	$('#sub-drop').slideToggle();
});

$('.this').click(function(){
	$('#events-drop').slideToggle();
});

$('#clickmeToDrop').click(function(){
	$('#drop-one').slideDown();
});

$('#nav-button').click(function(){
	$('#side-nav-slider').animate({
		marginLeft:".3%"
	},500);
});

$('#cross').click(function(){
	$('#side-nav-slider').animate({
		marginLeft:"-80%"
	},500)
});


    		$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				
				
				scrollingSpeed: 800,
				autoScrolling: true,
				scrollOverflowReset: true,
				 fitToSection: true,
				  animateAnchor: true,
				  responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: true,
            parallax: true,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            }

			});
		});



   $("#physics-info").click(function(){
   		$("#physics-box").slideDown("slow",function(){
   			$("#chemistry-info , #english-info,#math-info,#es-info,#mech-info,#cp-info").click(function(){
   				$("#physics-box").hide(100);
   			})
   		})
   });	
   $("#chemistry-info").click(function(){
   		$("#chemistry-box").slideDown("slow",function(){

   			$("#physics-info, #english-info,#math-info,#es-info,#mech-info,#cp-info").click(function(){
   				$("#chemistry-box").hide(100);
   			});
   		})
   });	
   $("#english-info").click(function(){
   		$("#english-box").slideDown("slow",function(){
   			$("#physics-info, #chemistry-info , #math-info,#es-info,#mech-info,#cp-info").click(function(){
   				$("#english-box").hide(100);
   			})
   		})
   });	
   $("#math-info").click(function(){
   		$("#math-box").slideDown("slow",function(){
   			$("#physics-info, #chemistry-info , #english-info,#es-info,#mech-info,#cp-info").click(function(){
   				$("#math-box").hide(100);
   			})
   		})
   });	
   $("#es-info").click(function(){
   		$("#es-box").slideDown("slow",function(){
   			$("#physics-info, #chemistry-info , #english-info,#math-info,#mech-info,#cp-info").click(function(){
   				$("#es-box").hide(100);
   			})
   		})
   });	
   $("#mech-info").click(function(){
   		$("#mechanics-box").slideDown("slow",function(){
   			$("#physics-info, #chemistry-info , #english-info,#math-info,#es-info,#cp-info").click(function(){
   				$("#mechanics-box").hide(100);
   			})
   		})
   });	
   $("#cp-info").click(function(){
   		$("#cp-box").slideDown("slow",function(){
   			$("#physics-info, #chemistry-info , #english-info,#math-info,#es-info,#mech-info").click(function(){
   				$("#cp-box").hide(100);
   			})
   		})
   });	

   $(document).ready(function(){
      $('.carousel').carousel();
    });
	
