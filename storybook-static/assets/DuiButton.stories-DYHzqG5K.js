import{_ as V}from"./DuiButton-DzILEqsQ.js";/* empty css              */import"./iframe-BtNMLuc9.js";import"./preload-helper-Dp1pzeXC.js";import"./router-detection-CqHtvVnY.js";const D={title:"Forms/Button",component:V,tags:["autodocs"],argTypes:{default:{control:{type:"text"},defaultValue:"Botón simple"},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},variant:{control:{type:"select"},options:["solid","outline","ghost"],defaultValue:"solid"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],defaultValue:"neutral"},loading:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1},block:{control:{type:"boolean"},defaultValue:!1},type:{control:{type:"select"},options:["button","submit","reset"],defaultValue:"button"},title:{control:{type:"text"},defaultValue:void 0},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},to:{control:{type:"text"},defaultValue:void 0,description:"Router destination. Can be a string path or route object. Works with vue-router and Nuxt router."}}},e={args:{default:"Botón simple",disabled:!1,block:!1,size:"md",variant:"solid",color:"neutral",loading:!1,type:"button"}},o={args:{default:"Ir a página",to:"/some-route",variant:"solid",color:"primary",size:"md"},parameters:{docs:{description:{story:"Botón que actúa como enlace de navegación. Detecta automáticamente si vue-router o Nuxt están disponibles y renderiza el componente apropiado."}}}},t={args:{default:"Navegar con parámetros",to:{name:"user-profile",params:{id:"123"},query:{tab:"settings"}},variant:"outline",color:"secondary",size:"md"},parameters:{docs:{description:{story:"Botón con objeto de ruta complejo que incluye nombre, parámetros y query string."}}}},a={args:{default:"Enlace externo",to:"https://example.com",variant:"ghost",color:"neutral",size:"md"},parameters:{docs:{description:{story:"Cuando no hay router disponible y se proporciona una URL, el componente renderiza un enlace HTML regular."}}}},n={args:{default:"Navegando...",to:"/loading-destination",loading:!0,variant:"solid",color:"primary",size:"md"},parameters:{docs:{description:{story:"Botón de navegación en estado de carga."}}}},r={args:{default:"No disponible",to:"/disabled-route",disabled:!0,variant:"outline",color:"neutral",size:"md"},parameters:{docs:{description:{story:"Botón de navegación deshabilitado."}}}};var s,i,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var y,f,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,h,z;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(z=(h=n.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var x,B,R;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(B=r.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const S=["Default","WithRouting","WithComplexRoute","ExternalLink","LoadingWithRoute","DisabledWithRoute"];export{e as Default,r as DisabledWithRoute,a as ExternalLink,n as LoadingWithRoute,t as WithComplexRoute,o as WithRouting,S as __namedExportsOrder,D as default};
