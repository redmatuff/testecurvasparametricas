// console.log("carregou o redmat.js");

// var myTheme = {
// 	collapseActivities : true, // Minimize interactive activities
// 	// Activities (to minify if collapseActivities is true)
// 	// Activities using any of these icons will be minified too: icon_udl_exp_tarea, icon_udl_exp_interactivo
// 	activities : [
// 		"Lista",
// 		"QuizTest",
// 		"ScrambledList",
// 		"Multichoice",
// 		"MultiSelect",
// 		"TrueFalse",
// 		"Cloze",
// 		"interactive-video",
// 		"GeoGebra",
// 		"Eleccionmultiplefpd",
// 		"Clozefpd",
// 		"Clozelangfpd",
// 		"Seleccionmultiplefpd",
// 		"Verdaderofalsofpd",
// 		"Ejercicioresueltofpd"
// 	],
// 	init : function(){
// 		var ie_v = $exe.isIE();
// 		if (ie_v && ie_v<8) return false;
// 		setTimeout(function(){
// 			$(window).resize(function() {
// 				myTheme.reset();
// 			});
// 		},1000);
// 		var tit = $exe_i18n.menu+" ("+$exe_i18n.hide.toLowerCase()+")";
// 		var navToggler = '<p id="header-options">';
// 				navToggler += '<a href="#" class="hide-nav" id="toggle-nav" title="'+tit+'">';
// 					navToggler += '<span>'+$exe_i18n.menu+'</span>';
// 				navToggler += '</a>';
// 			navToggler += '</p>';
// 		var l = $(navToggler);
// 		var nav = $("#siteNav");
// 		nav.before(l);
// 		$("#toggle-nav").click(function(){
// 			myTheme.toggleMenu(this);
// 			return false;
// 		});
// 		$("#print-page").click(function(){
// 			window.print();
// 			return false;
// 		});		
// 		if ( $("A",nav).attr("class").indexOf("active")==0 ) $("BODY").addClass("home-page");
// 		var url = window.location.href;
// 		url = url.split("?");
// 		if (url.length>1){
// 			if (url[1].indexOf("nav=false")!=-1) {
// 				myTheme.hideMenu();
// 			}
// 		}
// 		// Set the min-height for the content wrapper
// 		$("#main-wrapper").css("min-height",(nav.height()+25)+"px");
// 	},
// 	init2 : function(){
// 		var ie_v = $exe.isIE();
// 		if (ie_v && ie_v<8) return false;
// 		setTimeout(function(){
// 			$(window).resize(function() {
// 				myTheme.reset();
// 			});
// 		},1000);
// 		var tit = $exe_i18n.menu+" ("+$exe_i18n.hide.toLowerCase()+")";
// 		var navToggler = '<p id="header-options">';
// 				navToggler += '<a href="#" class="hide-nav" id="toggle-nav" title="'+tit+'">';
// 					navToggler += '<span>'+$exe_i18n.menu+'</span>';
// 				navToggler += '</a>';
// 			navToggler += '</p>';
// 		var l = $(navToggler);
// 		var nav = $("#siteNav");
// 		nav.before(l);
// 		$("#toggle-nav").click(function(){
// 			myTheme.toggleMenu(this);
// 			return false;
// 		});
// 		$("#print-page").click(function(){
// 			window.print();
// 			return false;
// 		});		
// 		if ( $("A",nav).attr("class").indexOf("active")==0 ) $("BODY").addClass("home-page");
// 		var url = window.location.href;
// 		url = url.split("?");
// 		if (url.length>1){
// 			if (url[1].indexOf("nav=false")!=-1) {
// 				myTheme.hideMenu();
// 			}
// 		}
// 		// Set the min-height for the content wrapper
// 		$("#main-wrapper").css("min-height",(nav.height()+25)+"px");
// 		myTheme.hideMenu();
	
// 	},
// 	hideMenu : function(){
// 		$("#siteNav").hide();
// 		$(document.body).addClass("no-nav");
// 		myTheme.params("add");
// 		var tit = $exe_i18n.menu+" ("+$exe_i18n.show.toLowerCase()+")";
// 		$("#toggle-nav").attr("class","show-nav").attr("title",tit);
// 	},
// 	toggleMenu : function(e){
// 		if (typeof(myTheme.isToggling)=='undefined') myTheme.isToggling = false;
// 		if (myTheme.isToggling) return false;
		
// 		var l = $("#toggle-nav");
		
// 		if (!e && $(window).width()<900 && l.css("display")!='none') return false; // No reset in mobile view
// 		if (!e) {
// 			var tit = $exe_i18n.menu+" ("+$exe_i18n.show.toLowerCase()+")";
// 			l.attr("class","show-nav").attr("title",tit); // Reset
// 		}
		
// 		myTheme.isToggling = true;
		
// 		if (l.attr("class")=='hide-nav') {  
// 			var tit = $exe_i18n.menu+" ("+$exe_i18n.show.toLowerCase()+")";
// 			l.attr("class","show-nav").attr("title",tit);
// 			$("#siteFooter").hide();
// 			$("#siteNav").slideUp(400,function(){
// 				$(document.body).addClass("no-nav");
// 				$("#siteFooter").show();
// 				myTheme.isToggling = false;
// 			}); 
// 			myTheme.params("add");
// 		} else {
// 			var tit = $exe_i18n.menu+" ("+$exe_i18n.hide.toLowerCase()+")";
// 			l.attr("class","hide-nav").attr("title",tit);
// 			$(document.body).removeClass("no-nav");
// 			$("#siteNav").slideDown(400,function(){
// 				myTheme.isToggling = false;
// 			});
// 			myTheme.params("delete");			
// 		}
		
// 	},
// 	param : function(e,act) {
// 		if (act=="add") {
// 			var ref = e.href;
// 			var con = "?";
// 			if (ref.indexOf(".html?")!=-1) con = "&";
// 			var param = "nav=false";
// 			if (ref.indexOf(param)==-1) {
// 				ref += con+param;
// 				e.href = ref;					
// 			}			
// 		} else {
// 			// This will remove all params
// 			var ref = e.href;
// 			ref = ref.split("?");
// 			e.href = ref[0];
// 		}
// 	},
// 	params : function(act){
// 		$("A",".pagination").each(function(){
// 			myTheme.param(this,act);
// 		});
// 	},
// 	reset : function() {
// 		myTheme.toggleMenu();		
// 	},
// 	common : {
// 		init : function(c){
// 			var iDevices = $(".iDevice_wrapper");
// 			var firstIsText = false;
// 			iDevices.each(function(i){
// 				if (iDevices.length>1 && i==0 && this.className.indexOf("FreeTextIdevice")!=-1) {
// 					$(".iDevice",this).css("margin-top",0);
// 					firstIsText = true;
// 				}
// 				// Use common CSS class names (so they have a similar presentation)
// 				if (!$(this).hasClass("UDLcontentIdevice")) {
// 					var header = $(".iDevice_header",this);
// 					var icon = header.css("background-image");
// 					if (typeof(icon)=='string'){
// 						if (icon.indexOf("icon_udl_eng")!=-1) $(this).addClass("em_iDevice_udl_eng_like");
// 						if (icon.indexOf("icon_udl_exp")!=-1) $(this).addClass("em_iDevice_udl_exp_like");
// 						if (icon.indexOf("icon_udl_rep")!=-1) $(this).addClass("em_iDevice_udl_rep_like");
// 					}
// 				}
// 			}); 
// 			if (myTheme.collapseActivities) {
// 				var as = myTheme.activities;
// 				var editor = $("#activeIdevice");
// 				if (typeof(_)!='function' || editor.length!=1) {
// 					if ($(".iDevice").length>1) {
// 						for (var z=0;z<as.length;z++){
// 							var a = as[z];
// 							// Minimize those iDevices (like clicking on .toggle-idevice a)
// 							var aW = $(".iDevice_wrapper."+a+"Idevice");
// 							aW.addClass("hidden-idevice");
// 							$(".toggle-idevice a",aW).attr("class","show-idevice");
// 							$(".iDevice_inner",aW).hide();
// 							if(a=='GeoGebra') $("div.auto-geogebra",aW).addClass("disableAutoScale"); // Prevent zoom problems when the iDevice is minified
// 						}
// 						// The iDevices with the icon_udl_exp_tarea are minified too
// 						$(".iDevice_wrapper").each(function(){
// 							var header = $(".iDevice_header",this);
// 							if (header.length==1) {
// 								var img = header.attr("style");
// 								if (typeof(img)=='string' && (img.indexOf("icon_udl_exp_tarea.svg")!=-1||img.indexOf("icon_udl_exp_interactivo.svg")!=-1)) {
// 									var aW = $(this);
// 									aW.addClass("hidden-idevice");
// 									$(".toggle-idevice a",aW).attr("class","show-idevice");
// 									$(".iDevice_inner",aW).hide();
// 								}
// 							}
// 						});
// 						// You can toggle the iDevice clicking on any part of its header
// 						$(".iDevice_header").click(function(){
// 							$(".toggle-idevice a",this).trigger("click");
// 							var i = $(this).closest(".iDevice");
// 							if (i.length==1) {
// 								// H5P dynamic size
// 								$("iframe",i).each(function(){
// 									if (this.src && (this.src.indexOf("https://h5p.org/")==0 || this.src.indexOf("/wp-admin/admin-ajax.php?action=h5p_embed")!=-1)) {
// 										if (!this.style || !this.style.height || this.style.height=="") {
// 											this.src = this.src;
// 										}
// 									}
// 								});
// 							}							
// 						}).css("cursor","pointer");
// 					}
// 				}
// 			}   
// 			// "Do it here" will be the default title of the Interactive Activities
// 			if (document.body.className.indexOf("exe-authoring-page")==0) {
// 				if (typeof(top._)!='undefined') {
// 					var d = [
// 						"DropDown Activity",
// 						"SCORM Quiz",
// 						"Scrambled List",
// 						"Multi-choice",
// 						"Multi-select",
// 						"True-False Question",
// 						"Cloze Activity",
// 						"Interactive Video",
// 						"GeoGebra Activity"
// 					];					
// 					var l = [
// 						"ListaIdevice",
// 						"QuizTestIdevice",
// 						"ScrambledListIdevice",
// 						"MultichoiceIdevice",
// 						"MultiSelectIdevice",
// 						"TrueFalseIdevice",
// 						"ClozeIdevice",
// 						"interactive-videoIdevice",
// 						"GeoGebraIdevice"
// 					];
// 					var editor = $("#activeIdevice");
// 					if (editor.length!=1) return;
// 					var c = editor.attr("class");
// 					var i = l.indexOf(c);
// 					if (i==-1) return;
// 					var t = $("input[type='text']",editor).eq(0);
// 					if (t.length!=1) return;
// 					if (t.val()==_(d[i])) t.val(_("Do it here"));
// 				}
// 			}			
// 		}
// 	}
// }

// $(function(){
// 	if ($("body").hasClass("exe-web-site")) {
// 		if($(window).width()<829 && $(window).height()<1800){
// 			myTheme.init2();
// 		} else {
// 			myTheme.init();
// 		}
// 	}
// 	myTheme.common.init();
// });


// console.log("carregou adultos");





// Lógica do menu (abrir e fechar)
var menuAberto = false;
document.addEventListener('DOMContentLoaded', function() {

	var imgMenuIcon = document.createElement('div');
    imgMenuIcon.className = 'img-menu-icon';
    
    var img = document.createElement('img');
    img.src = 'menu-show.png';
    img.alt = 'Menu Icon';
    imgMenuIcon.appendChild(img);
    
    var siteNav = document.querySelector('#siteNav');
    siteNav.parentNode.insertBefore(imgMenuIcon, siteNav);
	if (window.innerWidth < 768){
		siteNav.style.left = 'calc(-50vw + 50px)';
		}else{
			siteNav.style.left = 'calc(-25rem + 50px)';
		}
    
    imgMenuIcon.addEventListener('click', function() {
		if(menuAberto){
			menuAberto = false;
			img.src = 'menu-show.png';
			if (window.innerWidth < 768){
			siteNav.style.left = 'calc(-50vw + 50px)';
			}else{
				siteNav.style.left = 'calc(-25rem + 50px)';
			}
		}else{
			menuAberto = true;
			img.src = 'menu-hide.png';
			siteNav.style.left = '0';
		}

    });
});


// Ajusta menu ao redimensionar tela
function adjustSiteNavPosition() {
    if (window.innerWidth < 768 && menuAberto == false) {
		siteNav.style.left = 'calc(-50vw + 50px)';
	}else{
		siteNav.style.left = 'calc(-25rem + 50px)';
	}
	if (menuAberto == true) {
		siteNav.style.left = '0';
	}
}
adjustSiteNavPosition();
window.addEventListener('resize', adjustSiteNavPosition);






// Logo do Header
var divHeader = document.querySelector('#header');
var img = document.createElement('img');
img.src = 'redmatlogo.png';
img.alt = 'redmatlogo';
// img.className = 'redmatlogo';
var firstChild = divHeader.firstChild;
divHeader.insertBefore(img, firstChild);
// divHeader.appendChild(img);
// divHeader.style.paddingTop = "10rem";
// divHeader.style.backgroundImage = "url('banner4.png')";
// divHeader.style.zIndex = '-2';
// divHeader.style.borderRadius = "10px";




// Contador
var divMain = document.querySelector('#main');
var novaDiv = document.createElement('div');
novaDiv.innerHTML = "<a href='https://www.webcontadores.com' title='contador de visitas blogger'><img src='https://counter4.optistats.ovh/private/webcontadores.php?c=grrmsg7da3nd22a1txyyjxcu7j7ewe71' border='0' title='contador de visitas blogger' alt='contador de visitas blogger'></a>";
divMain.appendChild(novaDiv);

// var headerOptions = document.querySelector('#header-options');
// console.log(headerOptions);
// headerOptions.style.backgroundColor = 'red';
// headerOptions.style.color = 'blue';
// headerOptions.style.position = 'relative';



// var siteNav = document.querySelector('#siteNav');
// siteNav.style.backgroundColor = 'black';
// siteNav.style.color='red';
// console.log("Printa: " + siteNav.innerHTML);
// var mainWrapper = document.querySelector('#main-wrapper');
// mainWrapper.style.backgroundColor = "red";
// mainWrapper.style.margin = "0px";


// Tentativa frustrada de criar uma div para escurecer a imagem:
// var divEscurecer = document.createElement('div');
// divEscurecer.classList.add("divEscurecer");
// divEscurecer.innerHTML = "Nova Div Escurecer";
// divHeader.appendChild(divEscurecer);
// divEscurecer.style.position = 'absolute';
// var estilosHeader = window.getComputedStyle(divHeader);
// var paddingLeft = parseFloat(estilosHeader.paddingLeft);
// var larguraTotal = divHeader.offsetWidth;
// divEscurecer.style.width = larguraTotal + "px";
// divEscurecer.style.transform = "translateX(-" + paddingLeft + "px)";
// var alturaTotal = divHeader.getBoundingClientRect().height;
// console.log(alturaTotal);
// divEscurecer.style.height = alturaTotal + "px";
// console.log(divEscurecer.style.height);
// divEscurecer.style.top="0";
// divEscurecer.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent, rgba(0, 0, 0, 0.5))";
// divEscurecer.style.zIndex = '-1';
// var divHeaderContent = document.querySelector('#headerContent');
// divHeaderContent.style.zIndex = "10";




document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.iDevice_inner');
    elements.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.stopPropagation();
            // Fecha todos os iDevice_inner, exceto o atual
            elements.forEach(function(innerElement) {
                if (innerElement !== element && innerElement.style.maxHeight === 'none') {
                    innerElement.style.maxHeight = '100px';
                }
            });
            // Abre ou fecha o iDevice_inner clicado
            if (this.style.maxHeight === 'none') {
                // this.style.maxHeight = '100px';
            } else {
                this.style.maxHeight = 'none';
            }
        });
    });
    // Fecha todos os iDevice_inner quando qualquer outro lugar é clicado
    document.addEventListener('click', function(event) {
        elements.forEach(function(innerElement) {
            // Verifica se o clique foi dentro de algum iDevice_inner
            if (!innerElement.contains(event.target)) {
                innerElement.style.maxHeight = '100px'; // Volta ao estilo original
            }
        });
    });
});

