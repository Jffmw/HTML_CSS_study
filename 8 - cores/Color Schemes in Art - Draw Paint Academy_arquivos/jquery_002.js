function doLightBox(){var e,t,i="object"==typeof JQLBSettings,a=0;i&&JQLBSettings.slideshowSpeed&&(e=parseInt(JQLBSettings.slideshowSpeed)),i&&JQLBSettings.resizeSpeed&&(t=parseInt(JQLBSettings.resizeSpeed)),i&&JQLBSettings.marginSize&&(a=parseInt(JQLBSettings.marginSize));jQuery('a[rel^="lightbox"]').lightbox({adminBarHeight:jQuery("#wpadminbar").height()||0,showNumbers:!i||"0"!=JQLBSettings.showNumbers,showCaption:!i||"0"!=JQLBSettings.showCaption,showTitle:!i||"0"!=JQLBSettings.showTitle,marginSize:i&&a?a:0,fitToScreen:i&&"1"==JQLBSettings.fitToScreen,resizeSpeed:i&&0<=t?t:400,slidehowSpeed:i&&0<=e?e:4e3,showDownload:!i||"0"!=JQLBSettings.showDownload,navbarOnTop:!i||"0"!=JQLBSettings.navbarOnTop,strings:i&&"string"==typeof JQLBSettings.prevLinkTitle?JQLBSettings:{prevLinkTitle:"previous image",nextLinkTitle:"next image",closeTitle:"close image gallery",image:"Image ",of:" of ",download:"Download",pause:"(pause slideshow)",play:"(play slideshow)"}})}!function(u){u.fn.lightbox=function(e){var r=u.extend({},u.fn.lightbox.defaults,e);function t(){return function(){u(window).on("orientationchange",n),u(window).on("resize",n),u("#overlay").remove(),u("#lightbox").remove(),r.inprogress=!1,r.auto=-1;var e,t=r.strings,i='<div id="outerImageContainer"><div id="imageContainer"><img id="lightboxImage"><div id="hoverNav"><a href="javascript://" title="'+t.prevLinkTitle+'" id="prevLink"></a><a href="javascript://" id="nextLink" title="'+t.nextLinkTitle+'"></a></div><div id="jqlb_loading"><a href="javascript://" id="loadingLink"><div id="jqlb_spinner"></div></a></div></div></div>',a='<div id="imageDataContainer" class="clearfix"><div id="imageData"><div id="imageDetails"><span id="titleAndCaption"></span><div id="controls"><span id="numberDisplay"></span> <a id="playPause" href="#"></a> <span id="downloadLink"></span></div></div><div id="bottomNav">';a+='<a href="javascript://" id="bottomNavClose" title="'+t.closeTitle+'"><div id="jqlb_closelabel"></div></a></div></div></div>',r.navbarOnTop?(e='<div id="overlay"></div><div id="lightbox">'+a+i+"</div>",u("body").append(e),u("#imageDataContainer").addClass("ontop")):(e='<div id="overlay"></div><div id="lightbox">'+i+a+"</div>",u("body").append(e)),u("#overlay").on("click",function(){h()}).hide(),u("#lightbox").on("click",function(){h()}).hide(),u("#loadingLink").on("click",function(){return h(),!1}),u("#bottomNavClose").on("click",function(){return h(),!1}),u("#outerImageContainer").width(r.widthCurrent).height(r.heightCurrent),u("#imageDataContainer").width(r.widthCurrent),r.imageClickClose||(u("#lightboxImage").on("click",function(){return!1}),u("#hoverNav").on("click",function(){return!1}))}(),function(n){var e=l();u("#overlay").hide().css({width:e.pageWidth+"px",height:e.pageHeight+"px",opacity:100*r.overlayOpacity+"%"}).fadeIn(400);var t=0,o=[];if(r.downloads={},u("a").each(function(){var e,t,i,a;this.href&&this.rel==n.rel&&(e=u(this),t=r.showTitle?function(e){var t=e.attr("title")||"";t||((e=e.children("img:first-child")).attr("title")?t=e.attr("title"):e.attr("alt")&&(t=e.attr("alt")));return t.trim()}(e):"",i={html:"",text:""},r.showCaption&&(void 0!==(a=e.parent().children("figcaption")[0])?i.html=a.innerHTML:i=function(e){var t={html:"",text:""};{var i;e.parent().next(".gallery-caption").html()?(i=e.parent().next(".gallery-caption"),t.html=i.html(),t.text=i.text()):e.next(".wp-caption-text").html()&&(t.html=e.next(".wp-caption-text").html(),t.text=e.next(".wp-caption-text").text())}return t.text=t.text.trim().replace("&#8217;","&#039;").replace("’","'").replace("…","..."),t}(e)),r.showTitle&&t.toLowerCase()==i.text.toLowerCase()&&(t=i.html,i.html=""),a=""!=t?'<span id="titleText">'+t+"</span>":"",a+=""!=t&&i.html?"<br />":"",a+=""!=i.html?'<span id="captionText">'+i.html+"</span>":"",(r.showDownload||e.attr("data-download"))&&(r.downloads[o.length]=e.attr("data-download")),o.push(new Array(this.href,a,o.length)))}),1<o.length){for(i=0;i<o.length;i++)for(j=o.length-1;j>i;j--)o[i][0]==o[j][0]&&o.splice(j,1);for(;o[t][0]!=n.href;)t++}r.imageArray=o,d((e=g()).y,e.x).show(),a(t),1<r.imageArray.length&&(u("#prevLink").on("click",function(){return a(0==r.activeImage?r.imageArray.length-1:r.activeImage-1),!1}),u("#nextLink").on("click",function(){return a(r.activeImage==r.imageArray.length-1?0:r.activeImage+1),!1}),u.fn.touchwipe&&u("#imageContainer").touchwipe({wipeLeft:function(){a(r.activeImage==r.imageArray.length-1?0:r.activeImage+1)},wipeRight:function(){a(0==r.activeImage?r.imageArray.length-1:r.activeImage-1)},min_move_x:20,preventDefaultEvents:!0}),r.slidehowSpeed&&u("#playPause").off("click").on("click",function(){return-1!=r.auto?(u(this).text(r.strings.play),clearTimeout(r.auto),r.auto=-1):(u(this).text(r.strings.pause),r.auto=setTimeout(function(){a(r.activeImage==r.imageArray.length-1?0:r.activeImage+1)},r.slidehowSpeed)),!1}),c())}(this),!1}return u("#overlay").is(":visible")&&u(window).trigger("resize"),0<function(e,t){var i,a,n;for(e=e.split("."),t=t.split("."),a=Math.min(e.length,t.length),i=0;i<a;i++)if(0!=(n=parseInt(e[i],10)-parseInt(t[i],10)))return n;return e.length-t.length}(u.fn.jquery,"1.7")?u(this).on("click",t):u(this).live("click",t);function n(e){r.resizeTimeout&&(clearTimeout(r.resizeTimeout),r.resizeTimeout=!1),r.resizeTimeout=setTimeout(function(){o()},50)}function l(){return{pageWidth:u(document).width(),pageHeight:u(document).height(),viewportWidth:u(window).width(),viewportHeight:u(window).height()-r.adminBarHeight}}function g(){var e=u(document).scrollTop();return r.adminBarHeight&&0===parseInt(u("#wpadminbar").css("top"),10)&&(e+=r.adminBarHeight),{x:u(document).scrollLeft(),y:e}}function d(e,t){return 0<r.resizeSpeed?u("#lightbox").animate({top:e+"px",left:t+"px"},r.resizeSpeed,"linear"):u("#lightbox").css({top:e+"px",left:t+"px"})}function a(e){0==r.inprogress&&(r.inprogress=!0,r.activeImage=e,u("#jqlb_loading").show(),u("#lightboxImage").hide(),u("#hoverNav").hide(),u("#prevLink").hide(),u("#nextLink").hide(),r.imgPreloader=new Image,r.imgPreloader.onload=function(){var e,t,i,a,n;u("#lightboxImage").attr("src",r.imageArray[r.activeImage][0]),e=r.imageArray,t=r.strings,i=r.activeImage,a=e[i][2],n=r.showNumbers&&1<e.length?t.image+(i+1)+t.of+e.length:"",u("#imageDetails").css("opacity","100%"),""!=e[i][1]?u("#titleAndCaption").css("opacity","100%").html(e[i][1]):u("#titleAndCaption").empty(),r.showNumbers?u("#numberDisplay").css("opacity","100%").html(n):u("#numberDisplay").empty(),r.slidehowSpeed&&1<e.length?(n=-1===r.auto?t.play:t.pause,u("#playPause").css("opacity","100%").attr("href","#").text(n)):u("#playPause").empty(),r.showDownload||r.downloads[a]?(i=r.downloads[a]||e[i][0],u("#downloadLink").css("opacity","100%").html(u("<a>").attr("href",i).attr("target","_blank").attr("download","").text(t.download))):u("#downloadLink").empty(),u("#downloadLink").position(),o(),1<r.imageArray.length?(preloadNextImage=new Image,preloadNextImage.src=r.imageArray[r.activeImage==r.imageArray.length-1?0:r.activeImage+1][0],preloadPrevImage=new Image,preloadPrevImage.src=r.imageArray[0==r.activeImage?r.imageArray.length-1:r.activeImage-1][0]):(r.imageArray.length-1>r.activeImage&&(preloadNextImage=new Image,preloadNextImage.src=r.imageArray[r.activeImage+1][0]),0<r.activeImage&&(preloadPrevImage=new Image,preloadPrevImage.src=r.imageArray[r.activeImage-1][0]))},r.imgPreloader.src=r.imageArray[r.activeImage][0])}function o(){var e,t,i,a,n;r.imgPreloader&&(e=r.imgPreloader.width,t=r.imgPreloader.height,a=(i=l()).viewportWidth<i.pageWidth?i.pageWidth:i.viewportWidth,u("#overlay").css({width:a+"px",height:i.pageHeight+"px"}),a=i.viewportHeight-(u("#imageDataContainer").outerHeight(!0)+2*r.borderSize),i=i.viewportWidth-2*r.borderSize,r.fitToScreen&&(t*=n=(n=a-r.marginSize)<t?n/t:1,n=(i=i-r.marginSize)<(e*=n)?i/e:1,e=Math.round(e*n),t=Math.round(t*n)),a=(n=g()).y+.5*a-.5*t,n=n.x,u("#lightboxImage").width(e).height(t),function(e,t,i,a){r.widthCurrent=u("#outerImageContainer").outerWidth(),r.heightCurrent=u("#outerImageContainer").outerHeight();var n=Math.max(300,e+2*r.borderSize),e=t+2*r.borderSize;d(i,a),u("#imageDataContainer").animate({width:n},r.resizeSpeed,"linear"),u("#outerImageContainer").animate({width:n,height:e},r.resizeSpeed,"linear",function(){u("#jqlb_loading").hide(),u("#titleAndCaption").css("opacity","100%"),r.showDownload&&u("#downloadLink").css("opacity","100%"),r.showNumbers&&u("#numberDisplay").css("opacity","100%"),r.slidehowSpeed&&u("#playPause").css("opacity","100%"),0<r.resizeSpeed?u("#imageDetails").animate({opacity:"100%"},"fast"):u("#imageDetails").css("opacity","100%"),0<r.resizeSpeed?u("#lightboxImage").fadeIn("fast",function(){s()}):(u("#lightboxImage").show(),s()),!void(r.inprogress=!1)}),1<r.imageArray.length&&(u("#hoverNav").show(),u("#prevLink").show(),u("#nextLink").show()),u("#prevLink,#nextLink").height(t)}(e,t,a,n))}function s(){-1!=r.auto&&(clearTimeout(r.auto),r.auto=setTimeout(function(){a(r.activeImage==r.imageArray.length-1?0:r.activeImage+1)},r.slidehowSpeed)),c()}function h(){p(),clearTimeout(r.auto),r.auto=-1,u("#lightbox").hide(),u("#overlay").fadeOut()}function m(e){var t=e.data.opts,i=e.keyCode,e=String.fromCharCode(i).toLowerCase();return"x"==e||"o"==e||"c"==e||27==i?h():"p"==e||37==i?(p(),a(0==t.activeImage?t.imageArray.length-1:t.activeImage-1)):"n"!=e&&39!=i||(p(),a(t.activeImage==t.imageArray.length-1?0:t.activeImage+1)),!1}function c(){u(document).off("keydown").on("keydown",{opts:r},m)}function p(){u(document).off("keydown")}},u.fn.lightbox.defaults={showCaption:!1,showNumbers:!0,adminBarHeight:0,overlayOpacity:"80%",borderSize:10,imageArray:new Array,activeImage:null,inprogress:!1,widthCurrent:300,heightCurrent:300,showTitle:!0,imageClickClose:!0},u(document).ready(doLightBox)}(jQuery);