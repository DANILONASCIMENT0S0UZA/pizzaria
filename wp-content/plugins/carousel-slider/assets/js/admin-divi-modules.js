!function(){"use strict";var e={n:function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,{a:n}),n},d:function(r,n){for(var a in n)e.o(n,a)&&!e.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:n[a]})},o:function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}};!function(){var r,n,a,i=React,t=e.n(i),s=jQuery,l=e.n(s);class o extends i.Component{render(){const e=this.props.slider_id;if(!e)return null;let r=new URL(window.csDivi.site_url);r.searchParams.append("carousel_slider_preview","1"),r.searchParams.append("carousel_slider_iframe","1"),r.searchParams.append("slider_id",e);let n=r.toString();return t().createElement("div",{className:"carousel-slider-iframe-container"},t().createElement("div",{className:"carousel-slider-iframe-overlay"}),t().createElement("iframe",{className:"carousel-slider-iframe",scrolling:"no",src:n,height:"0",width:"500"}))}}a="carousel_slider_divi_module",(n="slug")in(r=o)?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,l()(window).on("et_builder_api_ready",((e,r)=>{r.registerModules([o])}))}()}();