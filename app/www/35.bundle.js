"undefined"===typeof window||window.ICON_FONT_STYLE?"undefined"!==typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"mx-icons-font",styleContent:'@font-face {\n\tfont-family: "mx-icons-font";\n\tsrc:url("mx-icons-font.ttf?cd29722e76db91d15abf5c3b25b7139e") format("truetype"),\n\turl("mx-icons-font.eot?cd29722e76db91d15abf5c3b25b7139e#iefix") format("embedded-opentype"),\n\turl("mx-icons-font.woff?cd29722e76db91d15abf5c3b25b7139e") format("woff"),\n\turl("mx-icons-font.svg?cd29722e76db91d15abf5c3b25b7139e#mx-icons-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"mx-icons-font",styleContent:'@font-face {\n\tfont-family: "mx-icons-font";\n\tsrc:url("mx-icons-font.ttf?cd29722e76db91d15abf5c3b25b7139e") format("truetype"),\n\turl("mx-icons-font.eot?cd29722e76db91d15abf5c3b25b7139e#iefix") format("embedded-opentype"),\n\turl("mx-icons-font.woff?cd29722e76db91d15abf5c3b25b7139e") format("woff"),\n\turl("mx-icons-font.svg?cd29722e76db91d15abf5c3b25b7139e#mx-icons-font") format("svg");\n}'},webpackJsonp([35,50],{154:function(e,t){e.exports=function(e){var t="",n=mx.helpers,i=e;if(i)for(var o,d=-1,a=i.length-1;d<a;){o=i[d+=1];var c=n.checkLanguage({obj:o,path:"data.title"});t+='<li id="'+o.id+'" data-view_id="'+o.id+'" data-view_date_modified="'+o.date_modified+'" data-view_title="'+o.data.title[c]+'" class="mx-view-item mx-view-item-'+o.type+' mx-sort-li-item noselect mx-draggable"> <input data-view_action_key="btn_toggle_view" data-view_action_target="'+o.id+'" id="check_view_enable_'+o.id+'" class="mx-view-tgl-input" type="checkbox"/> <label class="mx-view-tgl-content" for="check_view_enable_'+o.id+'"> <div class="btn-circle btn-circle-medium mx-view-tgl-btn-container"> <div class="mx-view-tgl-btn-content"> <div class="mx-view-tgl-btn  "></div> </div> </div> <span class="mx-view-tgl-title"> ',o.data.title&&(t+=" "+o.data.title[c]+" "),t+=" </span> "+n.getReadersIcons(o)+' <span class="mx-view-item-classes">'+o.data.classes+","+o.type+'</span> <span class="mx-view-item-index">'+mx.helpers.getDistinctIndexWords(o)+'</span> </label> <div class="mx-view-tgl-more-container"> <div class="mx-view-tgl-more" data-view_options_for="'+o.id+'"></div> </div></li>'}return t}},29:function(e,t,n){var i="ICON-FONT-FILE-STYLE";function o(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function d(e){var t=document.createElement("style"),n=document.getElementsByTagName("head")[0];t.innerHTML=o(e),t.id=i,t.type="text/css",n?n.appendChild(t):window.addEventListener("load",function(){n.appendChild(t)})}e.exports=function(){window.HAS_CREATE_FONT_STYLE||(d(),window.HAS_CREATE_FONT_STYLE=!0)}}});