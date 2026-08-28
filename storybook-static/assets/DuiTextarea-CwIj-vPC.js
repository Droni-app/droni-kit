import{f,h as g,m as z,i as y,o as b}from"./iframe-sEkeUlo0.js";const h=["value"],v=`
  dk:border-b
  dk:border-zinc-300
  dk:bg-zinc-50
  dk:text-zinc-800
  dk:focus:outline-none
  dk:focus:bg-zinc-100
  dk:dark:bg-zinc-700
  dk:dark:border-zinc-600
  dk:dark:bg-zinc-800
  dk:dark:text-zinc-100
  dk:dark:focus:bg-zinc-700
  dk:dark:[color-scheme:dark]`,n=f({inheritAttrs:!1,__name:"DuiTextarea",props:{modelValue:{type:String,default:""},size:{type:String,default:"md"},block:{type:Boolean,default:!0},rounded:{type:String,default:"all"},autoheight:{type:Boolean,default:!0},resize:{type:String,default:"vertical"}},emits:["update:modelValue"],setup(o,{emit:l}){const t=o,s=l;function d(e){const a=e.target;t.autoheight&&m(a),s("update:modelValue",a.value)}const r={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-3 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},u={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},i={none:"dk:resize-none",both:"dk:resize",horizontal:"dk:resize-x",vertical:"dk:resize-y"},c=y(()=>{const e=r[t.size]||"",a=t.block?"dk:w-full":"",k=u[t.rounded]||"",p=i[t.resize]||"";return[v,e,a,k,p].join(" ")}),m=e=>{e.style.height="auto",e.style.height=`${e.scrollHeight+5}px`};return(e,a)=>(b(),g("textarea",z(e.$attrs,{class:c.value,value:o.modelValue,onInput:d}),null,16,h))}});n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"DuiTextarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}},{name:"autoheight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"resize",type:{name:"String as () => 'none' | 'both' | 'horizontal' | 'vertical'"},defaultValue:{func:!1,value:"'vertical'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiTextarea.vue"]});export{n as _};
