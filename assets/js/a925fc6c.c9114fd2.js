"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8987],{9144:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7462),l=a(7294),i=a(2389);function o(e){let{children:t,fallback:a}=e;return(0,i.Z)()?l.createElement(l.Fragment,null,t?.()):a??null}const s=a.p+"assets/images/img_4-a94884232788280e2d42417039f84088.jpg",r=a.p+"assets/images/img_1-3aba49b2846264c19799a87654c12193.jpg",A=a.p+"assets/images/img_3-c9bb5748f3a68624eeddba2393312fa8.jpg",c="drawingPanel_TlWm",p="drawBtn_mPyv",m="contentContent_cxFI";var u=a(2263);const d=e=>{const[t,i]=(0,l.useState)(null),d=(0,l.useRef)(null),{siteConfig:g}=(0,u.Z)(),{customFields:f}=g,w=[{id:"1",position:[106.52025,29.5855],title:"\u8fd9\u662f\u7b2c\u4e00\u4e2amark",content:"\u5185\u5bb93",img:s},{id:"2",position:[106.494059,29.59269],title:"\u8fd9\u662f\u7b2c\u4e8c\u4e2amark",content:"\u5185\u5bb9-12",img:r},{id:"3",position:[106.552396,29.613392],title:"\u8fd9\u662f\u7b2c\u4e09\u4e2amark",content:"\u5185-------\u5bb9",img:A}],[E,b]=(0,l.useState)("#51c4d3"),k=e=>{const t=d.current?.map;t.setMapStyleV2({styleId:e})};return(0,l.useEffect)((()=>{a.e(7636).then(a.t.bind(a,7636,23)).then((e=>{const{Map:t,MapApiLoaderHOC:a,Marker:o}=e,s=a({ak:f.BaiDuMapKey})((e=>l.createElement(l.Fragment,null,l.createElement("div",{className:c},l.createElement("input",{style:{background:E,border:`1px solid ${E}`},onClick:()=>k(""),type:"button",className:p,value:"\u539f\u59cb\u4e3b\u9898"}),l.createElement("input",{style:{background:E,border:`1px solid ${E}`},onClick:()=>k("f42b5e908ca8f238e6fdf2faf6779899"),type:"button",className:p,value:"\u773c\u7738\u4e3b\u9898"}),l.createElement("input",{style:{background:E,border:`1px solid ${E}`},onClick:()=>k("15ad7c1ac87c46576b6ad9e7ff3a3286"),type:"button",className:p,value:"\u8336\u7530\u4e3b\u9898"})),l.createElement(t,(0,n.Z)({className:m,ref:d,center:new BMapGL.Point(106.513538,29.583036),enableScrollWheelZoom:!0,zoom:15,style:{height:"57rem"},displayOptions:{skyColors:["rgba(186, 0, 255, 0)","rgba(186, 0, 255, 0.2)"]}},e),w.map(((e,t)=>l.createElement(o,{key:t,position:new BMapGL.Point(e.position[0],e.position[1]),icon:new BMapGL.Icon("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArpJREFUWEfNl89rU0EQx2e2L+aHkmdID2pLTUOh4MWDV8H0HxA8JM1F2oIHKXgTCoWSFnyhl+JByMFL4y1NEARvXhqLRw/qP2BEKOLBNlWpqXk7Ms9E8mPfe0uNJnsJ2Z2d/ex3Z2f2IQy54ZDXh9EEqGcyOSnEE1ZHSLlARClETAFAjfuIqIaIVbaJlUpOn1s7Xl6+Hi4UXrmN9ylwkM2mhJS7mkdTAwZBZNgawxxks4k2uBGJ3I1MTFwAgE9oWRdVPlUACSHle00AT7PI5CQY4fBvG9uexs3NPrX+KYAwDAjG40C2/SxYKNwauALG5R8QuvkFvj265CfYulkub2gBsFE9kyE/jzweuf0ZGKKxZ8LJngmukxCL5s7O0kAAAle/gzCb0P5lp7JuQONFDOirgOZ+sH+dUwBwEDrR3Nl44XP39j3F+fn2LBw/j3fbDAqAvbLkLL2qsRKqeCCi6vlKZU77CA7T6d1W4lEu1D773sGjB1NK+/8C4LZ7JmIAc3Z2A4hyaFldSihrgZ8CHAccD80PIWfHfCxeAJwlo8nkHAixgPl813VUAtTn57eBaNEt2vgGcLC1G8OMJRpdfT1za2a5PK0dA34AOjni7wAymRwArJ9iIdcp0WRSrxa0MqEKwKl8JKWTH7xuSS9FaHz88Ews9qY3AB0/KmR+D7QU4OpVVOVxLrv8VgAAjpW+pNX2yzcAhLhjzsycoGV97F1PCXCUTi8S4jYSLUUrlaLfUTDMmG2nSIgbji1RTQrxMlYqVWllxYRA4B0QTQHRFubz9zv9KQE6HiWuVcwP6o8Ca2vXQMrXrf9VrTwwSABHkNXVp4B4BQAeomU91lfAo4joKuBn53YEzrPMK4f7OdYdH20AzuFuKVR3h352rh8mrWfZEAG4IAGA21vOb2e646P5aaZLPwi7oSvwC7ZKQjDqHAG+AAAAAElFTkSuQmCC",new BMapGL.Size(40,40)),map:"",onClick:()=>(e=>{const t={width:340,height:210,title:e.title},a=d.current?.map,n=`<div style="position: relative;cursor: pointer">\n                                           <img src=${e.img} alt=${e.title} height="200px" width="300px" />\n                               </div>`,l=new BMapGL.InfoWindow(n,t);a.openInfoWindow(l,new BMapGL.Point(e.position[0],e.position[1]))})(e)})))))));i((()=>s))}))}),[]),l.createElement(o,{fallback:l.createElement("div",null,"Loading map...")},(()=>t?l.createElement(t,e):l.createElement("div",null,"Loading map...")))}}}]);