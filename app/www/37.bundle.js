"undefined"===typeof window||window.ICON_FONT_STYLE?"undefined"!==typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"mx-icons-font",styleContent:'@font-face {\n\tfont-family: "mx-icons-font";\n\tsrc:url("mx-icons-font.ttf?cd29722e76db91d15abf5c3b25b7139e") format("truetype"),\n\turl("mx-icons-font.eot?cd29722e76db91d15abf5c3b25b7139e#iefix") format("embedded-opentype"),\n\turl("mx-icons-font.woff?cd29722e76db91d15abf5c3b25b7139e") format("woff"),\n\turl("mx-icons-font.svg?cd29722e76db91d15abf5c3b25b7139e#mx-icons-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"mx-icons-font",styleContent:'@font-face {\n\tfont-family: "mx-icons-font";\n\tsrc:url("mx-icons-font.ttf?cd29722e76db91d15abf5c3b25b7139e") format("truetype"),\n\turl("mx-icons-font.eot?cd29722e76db91d15abf5c3b25b7139e#iefix") format("embedded-opentype"),\n\turl("mx-icons-font.woff?cd29722e76db91d15abf5c3b25b7139e") format("woff"),\n\turl("mx-icons-font.svg?cd29722e76db91d15abf5c3b25b7139e#mx-icons-font") format("svg");\n}'},webpackJsonp([37,50],{174:function(t,n){!function(){"use strict";JSONEditor.defaults.resolvers.unshift(function(t){if("object"===t.type&&"position"===t.format)return"position"}),JSONEditor.defaults.editors.position=JSONEditor.defaults.editors.object.extend({layoutEditors:function(){var t,n,e,o,i,d,f,a,r,c=this;this.row_container&&(t=document.createElement("div"),this.options.addButtonPos&&(e=function(){for(var t in(o=c.options.idMap)||console.log("no id map provided in position editor as an option"),n={z:"z",lat:"lat",lng:"lng",pitch:"p",bearing:"b",n:"n",s:"s",e:"e",w:"w"},i=mx.helpers.getMapPos({id:o}),d=c.getValue())"undefined"!==typeof i[n[t]]&&(d[t]=i[n[t]]);c.setValue(d)},(f=document.createElement("button")).type="button",f.className+="btn btn-default",(r=document.createElement("i")).className="fa fa-refresh",a=document.createTextNode(this.options.textButton),f.appendChild(r),f.appendChild(a),f.onclick=e,t.appendChild(f)),jQuery.each(this.property_order,function(n,e){var o=c.editors[e];if(!o.property_removed){var i=c.theme.getGridRow();t.appendChild(i),o.options.hidden?o.container.style.display="none":c.theme.setGridColumnSize(o.container,12),i.appendChild(o.container)}}),this.row_container.innerHTML="",this.row_container.appendChild(t))}})}()},29:function(t,n,e){var o="ICON-FONT-FILE-STYLE";function i(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function d(t){var n=document.createElement("style"),e=document.getElementsByTagName("head")[0];n.innerHTML=i(t),n.id=o,n.type="text/css",e?e.appendChild(n):window.addEventListener("load",function(){e.appendChild(n)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(d(),window.HAS_CREATE_FONT_STYLE=!0)}}});