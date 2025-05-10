import{d as h,b as r,e as d,l as s,g as S,n as u,k as _,t as q,o as n}from"./vue.esm-bundler-df8_pf1c.js";/* empty css              */const w=["for"],C={key:0,class:"dk:text-rose-500"},I=["type","value","disabled","placeholder","required","name","id","pattern","readonly","aria-label","aria-disabled","aria-required"],B=`
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
  dk:dark:[color-scheme:dark]`,f=h({__name:"DuiInput",props:{modelValue:{type:String,default:""},type:{type:String,default:"text"},size:{type:String,default:"md"},block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:void 0},name:{type:String,default:void 0},id:{type:String,default:void 0},required:{type:Boolean,default:!1},label:{type:String,default:void 0},pattern:{type:String,default:void 0},readonly:{type:Boolean,default:!1},rounded:{type:String,default:"all"}},emits:["update:modelValue"],setup(o,{emit:m}){const e=o,k=m;function y(a){const t=a.target;k("update:modelValue",t.value)}const b={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-4 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},g={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},V={sm:"dk:text-sm dk:pb-0.5",md:"dk:text-base dk:pb-1",lg:"dk:text-lg dk:pb-2"},v=r(()=>{const a=b[e.size]||"",t=e.block?"dk:w-full":"",z=g[e.rounded]||"";return[B,a,t,z].join(" ")}),x=r(()=>{const a=V[e.size]||"",t=e.block?"dk:w-full":"";return[a,t].join(" ")});return(a,t)=>(n(),d("div",null,[e.label?(n(),d("label",{key:0,for:e.id,class:u([x.value,"dk:text-start dk:block dk:text-zinc-700 dk:dark:text-zinc-200 dk:px-0"])},[_(q(e.label)+" ",1),e.required?(n(),d("span",C,"*")):s("",!0)],10,w)):s("",!0),S("input",{type:e.type,class:u(v.value),value:o.modelValue,disabled:e.disabled,placeholder:e.placeholder,required:e.required,name:e.name,id:e.id,pattern:e.pattern,readonly:e.readonly,"aria-label":e.placeholder,"aria-disabled":e.disabled,"aria-required":e.required,onInput:y},null,42,I)]))}});f.__docgenInfo={exportName:"default",displayName:"DuiInput",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"String as () => 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'week' | 'time'"},defaultValue:{func:!1,value:"'text'"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"pattern",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/gustavo/www/Droni.co/Projects/droni-kit/src/stories/Forms/DuiInput.vue"]};const Z={title:"Forms/Input",component:f,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","tel","url","search","date","datetime-local","month","week","time"],defaultValue:"text"},block:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},disabled:{control:{type:"boolean"},defaultValue:!1},placeholder:{control:{type:"text"},defaultValue:void 0},name:{control:{type:"text"},defaultValue:void 0},required:{control:{type:"boolean"},defaultValue:!1},label:{control:{type:"text"},defaultValue:void 0},pattern:{control:{type:"text"},defaultValue:void 0},rounded:{constrol:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},readonly:{control:{type:"boolean"},defaultValue:!1}}},l={args:{type:"text",required:!0,disabled:!1,block:!1,size:"md",label:"Ingresa tu correo",id:"correo",placeholder:"ej. kalvin@droni.co",name:"correo",pattern:"[0-9a-zA-Z._%+-]+@[0-9a-zA-Z.-]+\\.[a-zA-Z]{2,}",rounded:"all",modelValue:""}};var i,c,p;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'text',
    required: true,
    disabled: false,
    block: false,
    size: 'md',
    label: 'Ingresa tu correo',
    id: 'correo',
    placeholder: 'ej. kalvin@droni.co',
    name: 'correo',
    pattern: '[0-9a-zA-Z._%+-]+@[0-9a-zA-Z.-]+\\\\.[a-zA-Z]{2,}',
    rounded: 'all',
    modelValue: ''
  }
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const j=["Default"];export{l as Default,j as __namedExportsOrder,Z as default};
