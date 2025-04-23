import{d as _,b as i,e as t,g as s,j as C,n as r,k as q,t as u,F as L,l as j,o as n}from"./vue.esm-bundler-DsTq9UXQ.js";/* empty css              */const D=["for"],B={key:0,class:"dk:text-rose-500"},w=["id","name","disabled","required","aria-label","aria-disabled","aria-required"],F={key:0,disabled:"",selected:"",hidden:""},N=["value","selected"],O=`
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
`,f=_({__name:"DuiSelect",props:{modelValue:{type:String,default:""},options:{type:Array,default:()=>[]},size:{type:String,default:"md"},block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:void 0},id:{type:String,default:void 0},required:{type:Boolean,default:!1},label:{type:String,default:void 0},placeholder:{type:String,default:void 0},rounded:{type:String,default:"all"},itemLabel:{type:String,default:"label"},itemValue:{type:String,default:"value"}},emits:["update:modelValue"],setup(b,{emit:k}){const e=b,y=k;function g(a){const l=a.target;y("update:modelValue",l.value)}const V={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-4 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},v={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},x={sm:"dk:text-sm dk:pb-0.5",md:"dk:text-base dk:pb-1",lg:"dk:text-lg dk:pb-2"},S=i(()=>{const a=V[e.size]||"",l=e.block?"dk:w-full":"",d=v[e.rounded]||"";return[O,a,l,d].join(" ")}),z=i(()=>{const a=x[e.size]||"",l=e.block?"dk:w-full":"";return[a,l].join(" ")});return(a,l)=>(n(),t("div",null,[e.label?(n(),t("label",{key:0,for:e.id,class:r([z.value,"dk:text-start dk:block dk:text-zinc-700 dk:dark:text-zinc-200 dk:px-0"])},[q(u(e.label)+" ",1),e.required?(n(),t("span",B,"*")):s("",!0)],10,D)):s("",!0),C("select",{id:e.id,name:e.name,disabled:e.disabled,required:e.required,class:r(S.value),"aria-label":e.label||"select input","aria-disabled":e.disabled,"aria-required":e.required,onChange:g},[e.placeholder?(n(),t("option",F,u(e.placeholder),1)):s("",!0),(n(!0),t(L,null,j(e.options,(d,h)=>(n(),t("option",{key:h,value:d[e.itemValue]??"",selected:d[e.itemValue]==e.modelValue},u(d[e.itemLabel]??""),9,N))),128))],42,w)]))}});f.__docgenInfo={exportName:"default",displayName:"DuiSelect",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",type:{name:"Array as () => Array<Record<string, any>>"},defaultValue:{func:!0,value:"() => []"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}},{name:"itemLabel",type:{name:"string"},defaultValue:{func:!1,value:"'label'"}},{name:"itemValue",type:{name:"string"},defaultValue:{func:!1,value:"'value'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/gustavo/www/Droni.co/Projects/droni-kit/src/stories/Forms/DuiSelect.vue"]};const P={title:"Forms/Select",component:f,tags:["autodocs"],argTypes:{block:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},disabled:{control:{type:"boolean"},defaultValue:!1},placeholder:{control:{type:"text"},defaultValue:void 0},name:{control:{type:"text"},defaultValue:void 0},required:{control:{type:"boolean"},defaultValue:!1},label:{control:{type:"text"},defaultValue:void 0},rounded:{constrol:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},options:{control:{type:"object"},defaultValue:[{label:"Opción 1",value:"opcion1"},{label:"Opción 2",value:"opcion2"},{label:"Opción 3",value:"opcion3"},{label:"Opción 4",value:"opcion4"}]}}},o={args:{required:!0,disabled:!1,block:!1,size:"md",label:"Selecciona un país",id:"pais",placeholder:"ej. Colombia",name:"pais",rounded:"all",modelValue:"5",itemLabel:"name",itemValue:"id",options:[{id:5,name:"Colombia"},{id:6,name:"México"},{id:7,name:"España"},{id:8,name:"Perú"}]}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    modelValue: '5',
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,P as default};
