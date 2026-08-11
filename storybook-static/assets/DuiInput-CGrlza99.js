import{f as m,n as k,y as p,c as f,m as g}from"./iframe-BtNMLuc9.js";const b=["value"],y=`
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
  dk:dark:[color-scheme:dark]`,d=m({inheritAttrs:!1,__name:"DuiInput",props:{modelValue:{type:[String,Number],default:""},size:{type:String,default:"md"},block:{type:Boolean,default:!0},rounded:{type:String,default:"all"}},emits:["update:modelValue"],setup(a,{emit:o}){const n=a,l=o;function s(e){const t=e.target;l("update:modelValue",t.value)}const u={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-4 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},r={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},c=f(()=>{const e=u[n.size]||"",t=n.block?"dk:w-full":"",i=r[n.rounded]||"";return[y,e,t,i].join(" ")});return(e,t)=>(g(),k("input",p({class:c.value,value:a.modelValue},e.$attrs,{onInput:s}),null,16,b))}});d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"DuiInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiInput.vue"]});export{d as _};
