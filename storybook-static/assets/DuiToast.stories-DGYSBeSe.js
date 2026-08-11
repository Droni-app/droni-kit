import{K as L,I as $,f as H,i as K,s as b,j as Q,k as G,p as n,L as U,l as Y,c as v,m as r,n as i,F as J,z as X,v as x,x as D,C as Z}from"./iframe-BtNMLuc9.js";import{_ as f}from"./DuiButton-DzILEqsQ.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-CqHtvVnY.js";const d=$({toasts:[]});function c(e){const t=Math.random().toString(36).slice(2,10),s={id:t,title:e.title,message:e.message,color:e.color??"neutral",duration:e.duration??4e3,closable:e.closable??!0,icon:e.icon};return d.toasts.push(s),s.duration>0&&setTimeout(()=>M(t),s.duration),t}function M(e){const t=d.toasts.findIndex(s=>s.id===e);t!==-1&&d.toasts.splice(t,1)}function tt(){d.toasts.splice(0)}function l(){return{toasts:L(d.toasts),add:c,remove:M,clear:tt,success:(e,t)=>c({...t,message:e,color:"success"}),error:(e,t)=>c({...t,message:e,color:"danger"}),warning:(e,t)=>c({...t,message:e,color:"warning"}),info:(e,t)=>c({...t,message:e,color:"primary"})}}const et={key:0,"aria-hidden":"true",class:"dk:flex-shrink-0 dk:text-lg"},st={class:"dk:flex-1 dk:min-w-0"},ot={key:0,class:"dk:text-sm dk:font-semibold dk:leading-snug"},at=["onClick"],rt="dk:flex-shrink-0 dk:flex dk:items-center dk:justify-center dk:w-5 dk:h-5 dk:rounded dk:text-current dk:opacity-70 dk:hover:opacity-100 dk:transition-opacity dk:text-base dk:leading-none dk:outline-none dk:ring-1 dk:ring-current/30 dk:focus-visible:ring-2",a=H({__name:"DuiToast",props:{position:{default:"top-right"},maxToasts:{default:5},zIndex:{default:9999}},setup(e){const t=e,{toasts:s,remove:P}=l(),I=v(()=>s.slice(0,t.maxToasts)),R={"top-right":"dk:top-4 dk:right-4 dk:items-end","top-left":"dk:top-4 dk:left-4 dk:items-start","top-center":"dk:top-4 dk:left-1/2 dk:-translate-x-1/2 dk:items-center","bottom-right":"dk:bottom-4 dk:right-4 dk:items-end","bottom-left":"dk:bottom-4 dk:left-4 dk:items-start","bottom-center":"dk:bottom-4 dk:left-1/2 dk:-translate-x-1/2 dk:items-center"},j=v(()=>["dk:fixed dk:pointer-events-none",R[t.position],`dk:z-[${t.zIndex}]`].join(" ")),O=v(()=>"dk:relative dk:flex dk:flex-col dk:gap-2 dk:w-80 dk:max-w-[calc(100vw-2rem)]"),V={neutral:"dk:bg-zinc-800 dk:dark:bg-zinc-700 dk:text-white dk:border-zinc-600",primary:"dk:bg-slate-700 dk:dark:bg-slate-700 dk:text-white dk:border-slate-500",secondary:"dk:bg-pink-600 dk:dark:bg-pink-700 dk:text-white dk:border-pink-400",success:"dk:bg-emerald-600 dk:dark:bg-emerald-700 dk:text-white dk:border-emerald-400",warning:"dk:bg-amber-600 dk:dark:bg-amber-700 dk:text-white dk:border-amber-400",danger:"dk:bg-rose-600 dk:dark:bg-rose-700 dk:text-white dk:border-rose-400"},W={neutral:"dk:bg-zinc-300",primary:"dk:bg-slate-300",secondary:"dk:bg-pink-200",success:"dk:bg-emerald-200",warning:"dk:bg-amber-200",danger:"dk:bg-rose-200"};function q(u){return["dk:pointer-events-auto dk:flex dk:items-start dk:gap-3","dk:rounded-xl dk:border dk:px-4 dk:py-3 dk:shadow-xl",V[u]].join(" ")}function F(u){return["dk:flex-shrink-0 dk:w-2 dk:h-2 dk:rounded-full dk:mt-1",W[u]].join(" ")}return(u,dt)=>(r(),K(Y,{to:"body"},[b("div",{class:n(j.value),"aria-live":"polite","aria-atomic":"false"},[Q(U,{tag:"div",class:n(O.value),"enter-active-class":"dk:transition-all dk:duration-300 dk:ease-out","leave-active-class":"dk:transition-all dk:duration-200 dk:ease-in dk:absolute dk:w-full","enter-from-class":"dk:opacity-0 dk:translate-y-2 dk:scale-95","leave-to-class":"dk:opacity-0 dk:scale-95","move-class":"dk:transition-all dk:duration-300"},{default:G(()=>[(r(!0),i(J,null,X(I.value,o=>(r(),i("div",{key:o.id,role:"alert",class:n(q(o.color))},[o.icon?(r(),i("span",et,x(o.icon),1)):(r(),i("span",{key:1,class:n(F(o.color)),"aria-hidden":"true"},null,2)),b("div",st,[o.title?(r(),i("p",ot,x(o.title),1)):D("",!0),b("p",{class:n(["dk:text-sm dk:leading-snug",{"dk:opacity-80":o.title}])},x(o.message),3)]),o.closable?(r(),i("button",{key:2,type:"button",class:n(rt),"aria-label":"Cerrar notificacion",onClick:lt=>Z(P)(o.id)}," × ",8,at)):D("",!0)],2))),128))]),_:1},8,["class"])],2)]))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"DuiToast",description:"",tags:{},props:[{name:"position",required:!1,type:{name:"ToastPosition"},defaultValue:{func:!1,value:"'top-right'"}},{name:"maxToasts",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"zIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"9999"}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiToast.vue"]});const{expect:nt,userEvent:it,within:ct}=__STORYBOOK_MODULE_TEST__,ft={title:"Elements/Toast",component:a,tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"],description:"Posicion del stack de toasts en pantalla"},maxToasts:{control:{type:"number"},description:"Numero maximo de toasts visibles al mismo tiempo"},zIndex:{control:{type:"number"},description:"z-index del contenedor"}},parameters:{docs:{description:{component:"Sistema de notificaciones toast programatico via useToast(). Incluye colores, titulos, iconos y auto-dismiss."}}}},m={args:{position:"top-right",maxToasts:5},render:e=>({components:{DuiToast:a,DuiButton:f},setup(){const t=l();return{args:e,toast:t}},template:`
      <div class="dk:p-6 dk:flex dk:flex-wrap dk:gap-2">
        <DuiToast v-bind="args" />
        <DuiButton size="sm" color="neutral" @click="toast.add({ message: 'Mensaje neutral de prueba', color: 'neutral' })">Neutral</DuiButton>
        <DuiButton size="sm" color="primary" @click="toast.info('Operacion iniciada correctamente')">Info</DuiButton>
        <DuiButton size="sm" color="success" @click="toast.success('Cambios guardados exitosamente')">Success</DuiButton>
        <DuiButton size="sm" color="warning" @click="toast.warning('Revisa tu conexion a internet')">Warning</DuiButton>
        <DuiButton size="sm" color="danger" @click="toast.error('Error al procesar la solicitud')">Error</DuiButton>
      </div>
    `}),play:async({canvasElement:e})=>{const s=ct(e).getByRole("button",{name:"Success"});await it.click(s),await nt(document.querySelector('[role="alert"]')).not.toBeNull()}},p={args:{position:"top-right"},render:e=>({components:{DuiToast:a,DuiButton:f},setup(){const t=l();function s(){t.add({title:"Archivo guardado",message:"documento_final.pdf fue guardado en tu disco.",color:"success",icon:"✅"}),t.add({title:"Nueva asignacion",message:'Se te asigno la tarea "Revision Q2".',color:"primary",icon:"📋"}),t.add({title:"Sesion por vencer",message:"Tu sesion expira en 5 minutos.",color:"warning",icon:"⚠️"})}return{args:e,showAll:s}},template:`
      <div class="dk:p-6">
        <DuiToast v-bind="args" />
        <DuiButton @click="showAll">Mostrar notificaciones</DuiButton>
      </div>
    `})},k={args:{position:"bottom-right"},render:e=>({components:{DuiToast:a,DuiButton:f},setup(){const t=l();function s(){t.add({title:"Actualizacion disponible",message:"Hay una nueva version de la aplicacion. Recarga para aplicarla.",color:"primary",duration:0,icon:"🔄"})}return{args:e,showPersistent:s}},template:`
      <div class="dk:p-6">
        <DuiToast v-bind="args" />
        <DuiButton @click="showPersistent">Mostrar toast persistente</DuiButton>
        <p class="dk:mt-2 dk:text-xs dk:text-zinc-500">duration: 0 = no se cierra automaticamente</p>
      </div>
    `})},g={args:{position:"top-center"},render:e=>({components:{DuiToast:a,DuiButton:f},setup(){const t=l();function s(){t.clear(),t.add({message:"Neutral toast",color:"neutral"}),t.add({message:"Primary toast",color:"primary"}),t.add({message:"Secondary toast",color:"secondary"}),t.add({message:"Success toast",color:"success"}),t.add({message:"Warning toast",color:"warning"}),t.add({message:"Danger toast",color:"danger"})}return{args:e,showAll:s}},template:`
      <div class="dk:p-6">
        <DuiToast v-bind="args" :max-toasts="6" />
        <DuiButton @click="showAll">Mostrar todos los colores</DuiButton>
      </div>
    `})};var h,y,w;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    position: 'top-right',
    maxToasts: 5
  },
  render: args => ({
    components: {
      DuiToast,
      DuiButton
    },
    setup() {
      const toast = useToast();
      return {
        args,
        toast
      };
    },
    template: \`
      <div class="dk:p-6 dk:flex dk:flex-wrap dk:gap-2">
        <DuiToast v-bind="args" />
        <DuiButton size="sm" color="neutral" @click="toast.add({ message: 'Mensaje neutral de prueba', color: 'neutral' })">Neutral</DuiButton>
        <DuiButton size="sm" color="primary" @click="toast.info('Operacion iniciada correctamente')">Info</DuiButton>
        <DuiButton size="sm" color="success" @click="toast.success('Cambios guardados exitosamente')">Success</DuiButton>
        <DuiButton size="sm" color="warning" @click="toast.warning('Revisa tu conexion a internet')">Warning</DuiButton>
        <DuiButton size="sm" color="danger" @click="toast.error('Error al procesar la solicitud')">Error</DuiButton>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button', {
      name: 'Success'
    });
    await userEvent.click(btn);
    await expect(document.querySelector('[role="alert"]')).not.toBeNull();
  }
}`,...(w=(y=m.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var B,T,_;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: args => ({
    components: {
      DuiToast,
      DuiButton
    },
    setup() {
      const toast = useToast();
      function showAll() {
        toast.add({
          title: 'Archivo guardado',
          message: 'documento_final.pdf fue guardado en tu disco.',
          color: 'success',
          icon: '✅'
        });
        toast.add({
          title: 'Nueva asignacion',
          message: 'Se te asigno la tarea "Revision Q2".',
          color: 'primary',
          icon: '📋'
        });
        toast.add({
          title: 'Sesion por vencer',
          message: 'Tu sesion expira en 5 minutos.',
          color: 'warning',
          icon: '⚠️'
        });
      }
      return {
        args,
        showAll
      };
    },
    template: \`
      <div class="dk:p-6">
        <DuiToast v-bind="args" />
        <DuiButton @click="showAll">Mostrar notificaciones</DuiButton>
      </div>
    \`
  })
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var z,S,C;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    position: 'bottom-right'
  },
  render: args => ({
    components: {
      DuiToast,
      DuiButton
    },
    setup() {
      const toast = useToast();
      function showPersistent() {
        toast.add({
          title: 'Actualizacion disponible',
          message: 'Hay una nueva version de la aplicacion. Recarga para aplicarla.',
          color: 'primary',
          duration: 0,
          icon: '🔄'
        });
      }
      return {
        args,
        showPersistent
      };
    },
    template: \`
      <div class="dk:p-6">
        <DuiToast v-bind="args" />
        <DuiButton @click="showPersistent">Mostrar toast persistente</DuiButton>
        <p class="dk:mt-2 dk:text-xs dk:text-zinc-500">duration: 0 = no se cierra automaticamente</p>
      </div>
    \`
  })
}`,...(C=(S=k.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,N,E;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    position: 'top-center'
  },
  render: args => ({
    components: {
      DuiToast,
      DuiButton
    },
    setup() {
      const toast = useToast();
      function showAll() {
        toast.clear();
        toast.add({
          message: 'Neutral toast',
          color: 'neutral'
        });
        toast.add({
          message: 'Primary toast',
          color: 'primary'
        });
        toast.add({
          message: 'Secondary toast',
          color: 'secondary'
        });
        toast.add({
          message: 'Success toast',
          color: 'success'
        });
        toast.add({
          message: 'Warning toast',
          color: 'warning'
        });
        toast.add({
          message: 'Danger toast',
          color: 'danger'
        });
      }
      return {
        args,
        showAll
      };
    },
    template: \`
      <div class="dk:p-6">
        <DuiToast v-bind="args" :max-toasts="6" />
        <DuiButton @click="showAll">Mostrar todos los colores</DuiButton>
      </div>
    \`
  })
}`,...(E=(N=g.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const bt=["Default","WithTitles","Persistent","AllColors"];export{g as AllColors,m as Default,k as Persistent,p as WithTitles,bt as __namedExportsOrder,ft as default};
