import{d as $,b as a,e as j,f as F,m as O,g as G,j as H,o as b,k as J,l as K}from"./vue.esm-bundler-D6qDGZGf.js";/* empty css              */const M={key:1},Q=`
  dk:transition
  dk:text-center
  dk:disabled:opacity-50
  dk:disabled:cursor-not-allowed
  dk:cursor-pointer
  dk:hover:shadow-md
  dk:overflow-hidden
  dk:text-ellipsis
  dk:whitespace-nowrap
  dk:active:scale-95
  dk:max-w-full`,S=$({__name:"DuiAction",props:{variant:{default:"solid"},color:{default:"neutral"},size:{default:"md"},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},title:{default:void 0},rounded:{default:"all"},to:{default:void 0}},setup(D){const e=D,k=H(),r=k==null?void 0:k.appContext.app,A=a(()=>{try{return!!(r!=null&&r.config.globalProperties.$router||r!=null&&r.config.globalProperties.$route||globalThis.VueRouter||r!=null&&r.component("RouterLink"))}catch{return!1}}),E=a(()=>{try{return!!(globalThis.$nuxt||globalThis.useNuxtApp||globalThis.navigateTo||typeof window<"u"&&window.$nuxt||r!=null&&r.component("NuxtLink"))}catch{return!1}}),i=a(()=>e.to?E.value?"NuxtLink":A.value?"RouterLink":"a":"span"),L=a(()=>{const t={};return i.value==="a"?(t.href=typeof e.to=="string"?e.to:"#",t.role="button"):i.value!=="span"&&(t.to=e.to),t}),T={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-4 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},W={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},u={solid:{base:"dk:border-b",neutral:`
      dk:border-zinc-500
      dk:dark:border-zinc-600
      dk:bg-zinc-200
      dk:text-zinc-800
      dk:hover:bg-zinc-300
      dk:hover:text-zinc-900
      dk:dark:bg-zinc-700
      dk:dark:text-zinc-200
      dk:dark:hover:bg-zinc-600
      dk:dark:hover:text-zinc-50`,primary:`
      dk:border-slate-500
      dk:dark:border-slate-600
      dk:bg-slate-200
      dk:text-slate-800
      dk:hover:bg-slate-300
      dk:hover:text-slate-900
      dk:dark:bg-slate-700
      dk:dark:text-slate-200
      dk:dark:hover:bg-slate-600
      dk:dark:hover:text-slate-100`,secondary:`
      dk:border-pink-500
      dk:dark:border-pink-600
      dk:bg-pink-200
      dk:text-pink-800
      dk:hover:bg-pink-300
      dk:hover:text-pink-900
      dk:dark:bg-pink-700
      dk:dark:text-pink-200
      dk:dark:hover:bg-pink-600
      dk:dark:hover:text-pink-100`,success:`
      dk:border-emerald-500
      dk:dark:border-emerald-600
      dk:bg-emerald-200
      dk:text-emerald-800
      dk:hover:bg-emerald-300
      dk:hover:text-emerald-900
      dk:dark:bg-emerald-700
      dk:dark:text-emerald-200
      dk:dark:hover:bg-emerald-600
      dk:dark:hover:text-emerald-100`,danger:`
      dk:border-rose-500
      dk:dark:border-rose-600
      dk:bg-rose-200
      dk:text-rose-800
      dk:hover:bg-rose-300
      dk:hover:text-rose-900
      dk:dark:bg-rose-700
      dk:dark:text-rose-200
      dk:dark:hover:bg-rose-600
      dk:dark:hover:text-rose-100`,warning:`
      dk:border-amber-500
      dk:dark:border-amber-600
      dk:bg-amber-200
      dk:text-amber-800
      dk:hover:bg-amber-300
      dk:hover:text-amber-900
      dk:dark:bg-amber-700
      dk:dark:text-amber-200
      dk:dark:hover:bg-amber-600
      dk:dark:hover:text-amber-100`},outline:{base:"dk:border",neutral:`
      dk:border-zinc-600
      dk:text-zinc-800
      dk:hover:bg-zinc-100
      dk:hover:text-zinc-900
      dk:dark:border-zinc-300
      dk:dark:text-zinc-200
      dk:dark:hover:bg-zinc-800
      dk:dark:hover:text-zinc-50`,primary:`
      dk:border-sky-600
      dk:text-sky-800
      dk:hover:bg-sky-100
      dk:hover:text-sky-900
      dk:dark:border-sky-300
      dk:dark:text-sky-200
      dk:dark:hover:bg-sky-800
      dk:dark:hover:text-sky-50`,secondary:`
      dk:border-pink-600
      dk:text-pink-800
      dk:hover:bg-pink-100
      dk:hover:text-pink-900
      dk:dark:border-pink-300
      dk:dark:text-pink-200
      dk:dark:hover:bg-pink-800
      dk:dark:hover:text-pink-50`,success:`
      dk:border-green-600
      dk:text-green-800
      dk:hover:bg-green-100
      dk:hover:text-green-900
      dk:dark:border-green-300
      dk:dark:text-green-200
      dk:dark:hover:bg-green-800
      dk:dark:hover:text-green-50`,danger:`
      dk:border-red-600
      dk:text-red-800
      dk:hover:bg-red-100
      dk:hover:text-red-900
      dk:dark:border-red-300
      dk:dark:text-red-200
      dk:dark:hover:bg-red-800
      dk:dark:hover:text-red-50`,warning:`
      dk:border-yellow-600
      dk:text-yellow-800
      dk:hover:bg-yellow-100
      dk:hover:text-yellow-900
      dk:dark:border-yellow-300
      dk:dark:text-yellow-200
      dk:dark:hover:bg-yellow-800
      dk:dark:hover:text-yellow-50`},ghost:{base:"dk:border-b dk:border-transparent",neutral:`
      dk:hover:border-zinc-500
      dk:hover:dark:border-zinc-600
      dk:text-zinc-600
      dk:hover:bg-zinc-50
      dk:dark:text-zinc-100
      dk:dark:hover:bg-zinc-800`,primary:`
      dk:hover:border-slate-500
      dk:hover:dark:border-slate-600
      dk:text-slate-600
      dk:hover:bg-slate-50
      dk:dark:text-slate-100
      dk:dark:hover:bg-slate-800`,secondary:`
      dk:hover:border-pink-500
      dk:hover:dark:border-pink-600
      dk:text-pink-600
      dk:hover:bg-pink-50
      dk:dark:text-pink-100
      dk:dark:hover:bg-pink-800`,success:`
      dk:hover:border-emerald-500
      dk:hover:dark:border-emerald-600
      dk:text-emerald-600
      dk:hover:bg-emerald-50
      dk:dark:text-emerald-100
      dk:dark:hover:bg-emerald-800`,danger:`
      dk:hover:border-rose-500
      dk:hover:dark:border-rose-600
      dk:text-rose-600
      dk:hover:bg-rose-50
      dk:dark:text-rose-100
      dk:dark:hover:bg-rose-800`,warning:`
      dk:hover:border-amber-500
      dk:hover:dark:border-amber-600
      dk:text-amber-600
      dk:hover:bg-amber-50
      dk:dark:text-amber-100
      dk:dark:hover:bg-amber-800`}},B=a(()=>{var m;const t=(((m=u[e.variant])==null?void 0:m[e.color])||"")+" "+u[e.variant].base,c=T[e.size]||"",I=e.block?"dk:block":"dk:inline-block",P=W[e.rounded]||"";return[Q,t,c,I,P].join(" ")});return(t,c)=>(b(),j(G(i.value),O(L.value,{class:B.value,title:e.title}),{default:F(()=>[e.loading?(b(),K("span",M,"Cargando...")):J(t.$slots,"default",{key:0})]),_:3},16,["class","title"]))}});S.__docgenInfo={exportName:"default",displayName:"DuiAction",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'solid'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"block",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"all"'},{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'},{name:'"none"'}]},defaultValue:{func:!1,value:"'all'"}},{name:"to",required:!1,type:{name:"RouteTo"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/home/gustavo/www/DroniApps/droni-kit/src/stories/Elements/DuiAction.vue"]};const Y={title:"Elements/Action",component:S,tags:["autodocs"],argTypes:{default:{control:{type:"text"},defaultValue:"Botón simple"},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},variant:{control:{type:"select"},options:["solid","outline","ghost"],defaultValue:"solid"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],defaultValue:"neutral"},loading:{control:{type:"boolean"},defaultValue:!1},block:{control:{type:"boolean"},defaultValue:!1},title:{control:{type:"text"},defaultValue:void 0},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},to:{control:{type:"text"},defaultValue:void 0,description:"Router destination. Can be a string path or route object. Works with vue-router and Nuxt router."}}},o={args:{default:"Acción simple",block:!1,size:"md",variant:"solid",color:"neutral",loading:!1,title:"Ir a Droni.co"}},d={args:{default:"Ir a página",to:"/some-route",variant:"outline",color:"primary",size:"md"}},n={args:{default:"Navegar con parámetros",to:{name:"user-profile",params:{id:"123"},query:{tab:"settings"}},variant:"ghost",color:"secondary",size:"md"}},s={args:{default:"Enlace externo",to:"https://droni.co",variant:"solid",color:"success",size:"sm"}},l={args:{default:"Navegando...",to:"/loading-destination",loading:!0,variant:"outline",color:"warning",size:"md"}};var g,p,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    default: 'Acción simple',
    block: false,
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    loading: false,
    title: 'Ir a Droni.co'
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var h,f,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    default: 'Ir a página',
    to: '/some-route',
    variant: 'outline',
    color: 'primary',
    size: 'md'
  }
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,z,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    default: 'Navegar con parámetros',
    to: {
      name: 'user-profile',
      params: {
        id: '123'
      },
      query: {
        tab: 'settings'
      }
    },
    variant: 'ghost',
    color: 'secondary',
    size: 'md'
  }
}`,...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var V,C,R;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    default: 'Enlace externo',
    to: 'https://droni.co',
    variant: 'solid',
    color: 'success',
    size: 'sm'
  }
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var _,N,q;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    default: 'Navegando...',
    to: '/loading-destination',
    loading: true,
    variant: 'outline',
    color: 'warning',
    size: 'md'
  }
}`,...(q=(N=l.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const Z=["Default","WithRouting","WithComplexRoute","ExternalLink","LoadingWithRoute"];export{o as Default,s as ExternalLink,l as LoadingWithRoute,n as WithComplexRoute,d as WithRouting,Z as __namedExportsOrder,Y as default};
