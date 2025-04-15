import{d as u,l as o,b as m,t as c,n as p,m as d,o as b}from"./vue.esm-bundler-DJJpJwIm.js";const y=u({__name:"Button",props:{label:{},primary:{type:Boolean,default:!1},size:{},backgroundColor:{}},emits:["click"],setup(t,{emit:n}){const e=t,a=n,r=o(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),s=o(()=>({backgroundColor:e.backgroundColor})),l=()=>{a("click",1)};return(i,f)=>(b(),m("button",{type:"button",class:d(r.value),onClick:l,style:p(s.value)},c(i.label),7))}});y.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}},{name:"primary",description:"primary or secondary button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the button",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"backgroundColor",description:"background color of the button",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["/home/gustavo/www/Droni.co/Projects/droni-kit/src/stories/Button.vue"]};export{y as _};
