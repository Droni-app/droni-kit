import{d as M,c as t,a as U,m as O,b as G,g as J,o as b,w as K,f as Q,h as X}from"./iframe-Dqbl3-QT.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const Y={key:1},Z=`
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
  dk:max-w-full`,T=M({__name:"DuiButton",props:{variant:{default:"solid"},color:{default:"neutral"},size:{default:"md"},type:{default:"button"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1},title:{default:void 0},rounded:{default:"all"},to:{default:void 0}},setup(W){const e=W,k=J(),r=k==null?void 0:k.appContext.app,j=t(()=>{try{return!!(r!=null&&r.config.globalProperties.$router||r!=null&&r.config.globalProperties.$route||globalThis.VueRouter||r!=null&&r.component("RouterLink"))}catch{return!1}}),E=t(()=>{try{return!!(globalThis.$nuxt||globalThis.useNuxtApp||globalThis.navigateTo||typeof window<"u"&&window.$nuxt||r!=null&&r.component("NuxtLink"))}catch{return!1}}),u=t(()=>e.to?E.value?"NuxtLink":j.value?"RouterLink":"a":"button"),P=t(()=>{const a={};return u.value==="button"?a.type=e.type:u.value==="a"?(a.href=typeof e.to=="string"?e.to:"#",a.role="button"):a.to=e.to,a}),$={sm:"dk:text-sm dk:px-3 dk:py-1.5",md:"dk:text-base dk:px-4 dk:py-2",lg:"dk:text-lg dk:px-5 dk:py-3"},I={all:"dk:rounded",top:"dk:rounded-t",bottom:"dk:rounded-b",left:"dk:rounded-l",right:"dk:rounded-r",none:"dk:rounded-none"},c={solid:{base:"dk:border-b",neutral:`
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
      dk:border-zinc-500
      dk:dark:border-zinc-600
      dk:text-zinc-800
      dk:hover:bg-zinc-300
      dk:hover:text-zinc-900
      dk:dark:text-zinc-200
      dk:dark:hover:bg-zinc-600
      dk:dark:hover:text-zinc-100`,primary:`
      dk:border-slate-500
      dk:dark:border-slate-600
      dk:text-slate-800
      dk:hover:bg-slate-300
      dk:hover:text-slate-900
      dk:dark:text-slate-200
      dk:dark:hover:bg-slate-600
      dk:dark:hover:text-slate-100`,secondary:`
      dk:border-pink-500
      dk:dark:border-pink-600
      dk:text-pink-800
      dk:hover:bg-pink-300
      dk:hover:text-pink-900
      dk:dark:text-pink-200
      dk:dark:hover:bg-pink-600
      dk:dark:hover:text-pink-100`,success:`
      dk:border-emerald-500
      dk:dark:border-emerald-600
      dk:text-emerald-800
      dk:hover:bg-emerald-300
      dk:hover:text-emerald-900
      dk:dark:text-emerald-200
      dk:dark:hover:bg-emerald-600
      dk:dark:hover:text-emerald-100`,danger:`
      dk:border-rose-500
      dk:dark:border-rose-600
      dk:text-rose-800
      dk:hover:bg-rose-300
      dk:hover:text-rose-900
      dk:dark:text-rose-200
      dk:dark:hover:bg-rose-600
      dk:dark:hover:text-rose-100`,warning:`
      dk:border-amber-500
      dk:dark:border-amber-600
      dk:text-amber-800
      dk:hover:bg-amber-300
      dk:hover:text-amber-900
      dk:dark:text-amber-200
      dk:dark:hover:bg-amber-600
      dk:dark:hover:text-amber-100`},ghost:{base:"dk:border-b dk:border-transparent",neutral:`
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
      dk:dark:hover:bg-amber-800`}},F=t(()=>{var p;const a=(((p=c[e.variant])==null?void 0:p[e.color])||"")+" "+c[e.variant].base,m=$[e.size]||"",A=e.block?"dk:w-full":"",H=I[e.rounded]||"";return[Z,a,m,A,H].join(" ")});return(a,m)=>(b(),U(G(u.value),O(P.value,{class:F.value,title:e.title,disabled:e.disabled||e.loading}),{default:K(()=>[e.loading?(b(),X("span",Y,"Cargando...")):Q(a.$slots,"default",{key:0})]),_:3},16,["class","title","disabled"]))}});T.__docgenInfo={exportName:"default",displayName:"DuiButton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'solid'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"submit"'},{name:'"reset"'}]},defaultValue:{func:!1,value:"'button'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"block",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"all"'},{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'},{name:'"none"'}]},defaultValue:{func:!1,value:"'all'"}},{name:"to",required:!1,type:{name:"RouteTo"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/home/gustavo/www/DroniApps/droni-kit/src/stories/Forms/DuiButton.vue"]};const te={title:"Forms/Button",component:T,tags:["autodocs"],argTypes:{default:{control:{type:"text"},defaultValue:"Botón simple"},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},variant:{control:{type:"select"},options:["solid","outline","ghost"],defaultValue:"solid"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],defaultValue:"neutral"},loading:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1},block:{control:{type:"boolean"},defaultValue:!1},type:{control:{type:"select"},options:["button","submit","reset"],defaultValue:"button"},title:{control:{type:"text"},defaultValue:void 0},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},to:{control:{type:"text"},defaultValue:void 0,description:"Router destination. Can be a string path or route object. Works with vue-router and Nuxt router."}}},o={args:{default:"Botón simple",disabled:!1,block:!1,size:"md",variant:"solid",color:"neutral",loading:!1,type:"button"}},d={args:{default:"Ir a página",to:"/some-route",variant:"solid",color:"primary",size:"md"},parameters:{docs:{description:{story:"Botón que actúa como enlace de navegación. Detecta automáticamente si vue-router o Nuxt están disponibles y renderiza el componente apropiado."}}}},n={args:{default:"Navegar con parámetros",to:{name:"user-profile",params:{id:"123"},query:{tab:"settings"}},variant:"outline",color:"secondary",size:"md"},parameters:{docs:{description:{story:"Botón con objeto de ruta complejo que incluye nombre, parámetros y query string."}}}},s={args:{default:"Enlace externo",to:"https://example.com",variant:"ghost",color:"neutral",size:"md"},parameters:{docs:{description:{story:"Cuando no hay router disponible y se proporciona una URL, el componente renderiza un enlace HTML regular."}}}},l={args:{default:"Navegando...",to:"/loading-destination",loading:!0,variant:"solid",color:"primary",size:"md"},parameters:{docs:{description:{story:"Botón de navegación en estado de carga."}}}},i={args:{default:"No disponible",to:"/disabled-route",disabled:!0,variant:"outline",color:"neutral",size:"md"},parameters:{docs:{description:{story:"Botón de navegación deshabilitado."}}}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    default: 'Botón simple',
    disabled: false,
    block: false,
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    loading: false,
    type: 'button'
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,x,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    default: 'Ir a página',
    to: '/some-route',
    variant: 'solid',
    color: 'primary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón que actúa como enlace de navegación. Detecta automáticamente si vue-router o Nuxt están disponibles y renderiza el componente apropiado.'
      }
    }
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var z,V,w;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    variant: 'outline',
    color: 'secondary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con objeto de ruta complejo que incluye nombre, parámetros y query string.'
      }
    }
  }
}`,...(w=(V=n.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var B,q,R;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    default: 'Enlace externo',
    to: 'https://example.com',
    variant: 'ghost',
    color: 'neutral',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Cuando no hay router disponible y se proporciona una URL, el componente renderiza un enlace HTML regular.'
      }
    }
  }
}`,...(R=(q=s.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var C,N,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    default: 'Navegando...',
    to: '/loading-destination',
    loading: true,
    variant: 'solid',
    color: 'primary',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de navegación en estado de carga.'
      }
    }
  }
}`,...(L=(N=l.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var _,D,S;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    default: 'No disponible',
    to: '/disabled-route',
    disabled: true,
    variant: 'outline',
    color: 'neutral',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de navegación deshabilitado.'
      }
    }
  }
}`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const oe=["Default","WithRouting","WithComplexRoute","ExternalLink","LoadingWithRoute","DisabledWithRoute"];export{o as Default,i as DisabledWithRoute,s as ExternalLink,l as LoadingWithRoute,n as WithComplexRoute,d as WithRouting,oe as __namedExportsOrder,te as default};
