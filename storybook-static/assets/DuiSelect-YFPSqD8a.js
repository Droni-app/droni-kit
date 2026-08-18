import{f as g,h as n,t as i,j as y,F as b,k as V,m as v,i as h,o as d}from"./iframe-BX9sGRHr.js";const S={key:0,disabled:"",selected:"",hidden:""},z=["value","selected"],x=`
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
`,o=g({inheritAttrs:!1,__name:"DuiSelect",props:{modelValue:{type:[String,Number],default:""},options:{type:Array,default:()=>[]},size:{type:String,default:"md"},block:{type:Boolean,default:!0},rounded:{type:String,default:"all"},itemLabel:{type:String,default:"label"},itemValue:{type:String,default:"value"},placeholder:{type:String,default:void 0}},emits:["update:modelValue"],setup(t,{emit:m}){const u=t,r=m;function c(a){const e=a.target.value,l=Number(e);!isNaN(l)&&e!==""?r("update:modelValue",l):r("update:modelValue",e)}const f={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-4 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},k={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},p=h(()=>{const a=f[u.size]||"",s=u.block?"dk:w-full":"",e=k[u.rounded]||"";return[x,a,s,e].join(" ")});return(a,s)=>(d(),n("select",v(a.$attrs,{class:p.value,onChange:c}),[t.placeholder?(d(),n("option",S,i(t.placeholder),1)):y("",!0),(d(!0),n(b,null,V(t.options,(e,l)=>(d(),n("option",{key:l,value:e[t.itemValue]??"",selected:e[t.itemValue]==t.modelValue},i(e[t.itemLabel]??""),9,z))),128))],16))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"DuiSelect",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"options",type:{name:"Array as () => Array<Record<string, any>>"},defaultValue:{func:!0,value:"() => []"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}},{name:"itemLabel",type:{name:"string"},defaultValue:{func:!1,value:"'label'"}},{name:"itemValue",type:{name:"string"},defaultValue:{func:!1,value:"'value'"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiSelect.vue"]});export{o as _};
