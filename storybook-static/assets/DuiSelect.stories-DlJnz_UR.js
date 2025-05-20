import{d as _,b as c,e as t,l as u,g as C,n as m,k as q,t as r,F as N,j as L,o as n}from"./vue.esm-bundler-df8_pf1c.js";/* empty css              */const j=["for"],B={key:0,class:"dk:text-rose-500"},D=["id","name","disabled","required","readonly","aria-label","aria-disabled","aria-required"],w={key:0,disabled:"",selected:"",hidden:""},F=["value","selected"],O=`
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
  dk:dark:[color-scheme:dark]
`,k=_({__name:"DuiSelect",props:{modelValue:{type:[String,Number],default:""},options:{type:Array,default:()=>[]},size:{type:String,default:"md"},block:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},name:{type:String,default:void 0},id:{type:String,default:void 0},required:{type:Boolean,default:!1},label:{type:String,default:void 0},placeholder:{type:String,default:void 0},readonly:{type:Boolean,default:!1},rounded:{type:String,default:"all"},itemLabel:{type:String,default:"label"},itemValue:{type:String,default:"value"}},emits:["update:modelValue"],setup(y,{emit:g}){const e=y,i=g;function V(l){const a=l.target.value,o=Number(a);!isNaN(o)&&a!==""?i("update:modelValue",o):i("update:modelValue",a)}const v={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-4 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},x={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},S={sm:"dk:text-sm dk:pb-0.5",md:"dk:text-base dk:pb-1",lg:"dk:text-lg dk:pb-2"},z=c(()=>{const l=v[e.size]||"",d=e.block?"dk:w-full":"",a=x[e.rounded]||"";return[O,l,d,a].join(" ")}),h=c(()=>{const l=S[e.size]||"",d=e.block?"dk:w-full":"";return[l,d].join(" ")});return(l,d)=>(n(),t("div",null,[e.label?(n(),t("label",{key:0,for:e.id,class:m([h.value,"dk:text-start dk:block dk:text-zinc-700 dk:dark:text-zinc-200 dk:px-0"])},[q(r(e.label)+" ",1),e.required?(n(),t("span",B,"*")):u("",!0)],10,j)):u("",!0),C("select",{id:e.id,name:e.name,disabled:e.disabled,required:e.required,class:m(z.value),readonly:e.readonly,"aria-label":e.label||"select input","aria-disabled":e.disabled,"aria-required":e.required,onChange:V},[e.placeholder?(n(),t("option",w,r(e.placeholder),1)):u("",!0),(n(!0),t(N,null,L(e.options,(a,o)=>(n(),t("option",{key:o,value:a[e.itemValue]??"",selected:a[e.itemValue]==e.modelValue},r(a[e.itemLabel]??""),9,F))),128))],42,D)]))}});k.__docgenInfo={exportName:"default",displayName:"DuiSelect",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"options",type:{name:"Array as () => Array<Record<string, any>>"},defaultValue:{func:!0,value:"() => []"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"readonly",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}},{name:"itemLabel",type:{name:"string"},defaultValue:{func:!1,value:"'label'"}},{name:"itemValue",type:{name:"string"},defaultValue:{func:!1,value:"'value'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/home/gustavo/www/Droni.co/Projects/droni-kit/src/stories/Forms/DuiSelect.vue"]};const P={title:"Forms/Select",component:k,tags:["autodocs"],argTypes:{block:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},disabled:{control:{type:"boolean"},defaultValue:!1},placeholder:{control:{type:"text"},defaultValue:void 0},name:{control:{type:"text"},defaultValue:void 0},required:{control:{type:"boolean"},defaultValue:!1},label:{control:{type:"text"},defaultValue:void 0},rounded:{constrol:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},options:{control:{type:"object"},defaultValue:[{label:"Opción 1",value:"opcion1"},{label:"Opción 2",value:"opcion2"},{label:"Opción 3",value:"opcion3"},{label:"Opción 4",value:"opcion4"}]},readonly:{control:{type:"boolean"},defaultValue:!1}}},s={args:{required:!0,disabled:!1,block:!1,size:"md",label:"Selecciona un país",id:"pais",placeholder:"ej. Colombia",name:"pais",rounded:"all",modelValue:6,itemLabel:"name",itemValue:"id",options:[{id:5,name:"Colombia"},{id:6,name:"México"},{id:7,name:"España"},{id:8,name:"Perú"}]}};var p,f,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    required: true,
    disabled: false,
    block: false,
    size: 'md',
    label: 'Selecciona un país',
    id: 'pais',
    placeholder: 'ej. Colombia',
    name: 'pais',
    rounded: 'all',
    modelValue: 6,
    itemLabel: 'name',
    itemValue: 'id',
    options: [{
      id: 5,
      name: 'Colombia'
    }, {
      id: 6,
      name: 'México'
    }, {
      id: 7,
      name: 'España'
    }, {
      id: 8,
      name: 'Perú'
    }]
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const M=["Default"];export{s as Default,M as __namedExportsOrder,P as default};
