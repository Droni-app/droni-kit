import{d as q,b as r,e as o,g as s,j as C,n as u,k as B,t as D,o as n}from"./vue.esm-bundler-DsTq9UXQ.js";/* empty css              */const j=["for"],T={key:0,class:"dk:text-rose-500"},w=["value","disabled","placeholder","required","name","id","aria-label","aria-disabled","aria-required"],N=`
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
  dk:dark:[color-scheme:dark]`,p=q({__name:"DuiTextarea",props:{modelValue:{type:String,default:""},size:{type:String,default:"md"},block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:void 0},name:{type:String,default:void 0},id:{type:String,default:void 0},required:{type:Boolean,default:!1},label:{type:String,default:void 0},rounded:{type:String,default:"all"},autoheight:{type:Boolean,default:!0},resize:{type:String,default:"none"}},emits:["update:modelValue"],setup(d,{emit:m}){const e=d,k=m;function b(a){const t=a.target;e.autoheight&&x(t),k("update:modelValue",t.value)}const g={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-3 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},y={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},h={sm:"dk:text-sm dk:pb-0.5",md:"dk:text-base dk:pb-1",lg:"dk:text-lg dk:pb-2"},z={none:"dk:resize-none",both:"dk:resize",horizontal:"dk:resize-x",vertical:"dk:resize-y"},v=r(()=>{const a=g[e.size]||"",t=e.block?"dk:w-full":"",S=y[e.rounded]||"",_=z[e.resize]||"";return[N,a,t,S,_].join(" ")}),V=r(()=>{const a=h[e.size]||"",t=e.block?"dk:w-full":"";return[a,t].join(" ")}),x=a=>{a.style.height="auto",a.style.height=`${a.scrollHeight+5}px`};return(a,t)=>(n(),o("div",null,[e.label?(n(),o("label",{key:0,for:e.id,class:u([V.value,"dk:text-start dk:block dk:text-zinc-700 dk:dark:text-zinc-200 dk:px-0"])},[B(D(e.label)+" ",1),e.required?(n(),o("span",T,"*")):s("",!0)],10,j)):s("",!0),C("textarea",{class:u(v.value),value:d.modelValue,disabled:e.disabled,placeholder:e.placeholder,required:e.required,name:e.name,id:e.id,"aria-label":e.placeholder,"aria-disabled":e.disabled,"aria-required":e.required,onInput:b},null,42,w)]))}});p.__docgenInfo={exportName:"default",displayName:"DuiTextarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}},{name:"autoheight",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"resize",type:{name:"String as () => 'none' | 'both' | 'horizontal' | 'vertical'"},defaultValue:{func:!1,value:"'none'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/gustavo/www/Droni.co/Projects/droni-kit/src/stories/Forms/DuiTextarea.vue"]};const E={title:"Forms/Textarea",component:p,tags:["autodocs"],argTypes:{block:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},disabled:{control:{type:"boolean"},defaultValue:!1},placeholder:{control:{type:"text"},defaultValue:void 0},name:{control:{type:"text"},defaultValue:void 0},required:{control:{type:"boolean"},defaultValue:!1},label:{control:{type:"text"},defaultValue:void 0},rounded:{constrol:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},autoheight:{control:{type:"boolean"},defaultValue:!0},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"],defaultValue:"none"}}},l={args:{required:!0,disabled:!1,block:!1,size:"md",label:"Ingresa tu correo",id:"correo",placeholder:"ej. kalvin@droni.co",name:"correo",rounded:"all",modelValue:"",autoheight:!0,resize:"none"}};var i,c,f;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    required: true,
    disabled: false,
    block: false,
    size: 'md',
    label: 'Ingresa tu correo',
    id: 'correo',
    placeholder: 'ej. kalvin@droni.co',
    name: 'correo',
    rounded: 'all',
    modelValue: '',
    autoheight: true,
    resize: 'none'
  }
}`,...(f=(c=l.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,E as default};
