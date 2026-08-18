import{f as N,s as f,h as j,B as T,p as R,w as b,j as S,r as d,o as m,q as v,t as g}from"./iframe-BX9sGRHr.js";import{_ as y}from"./DuiButton-oFhP9YFC.js";import{_ as B}from"./DuiSwitch-CoXoiC3Q.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-D0JCgCrd.js";const P={key:1},i=N({__name:"DuiConfirmation",props:{label:{},checkLabel:{},confirmLabel:{},variant:{default:"outline"},color:{default:"danger"},size:{default:"md"}},emits:["confirmed"],setup(n,{emit:t}){const r=d(!1),a=d(!1),q=t,e=n;function E(){r.value=!0,setTimeout(()=>{r.value=!1,a.value=!1},1e4)}function D(){q("confirmed"),r.value=!1,a.value=!1}return($,o)=>r.value?(m(),j("div",P,[T(B,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=p=>a.value=p),label:e.checkLabel,size:e.size,variant:e.variant,color:e.color,checked:a.value},null,8,["modelValue","label","size","variant","color","checked"]),o[2]||(o[2]=R("br",null,null,-1)),a.value?(m(),f(y,{key:0,onClick:o[1]||(o[1]=p=>D()),variant:e.variant,color:e.color,size:e.size},{default:b(()=>[v(g(e.confirmLabel),1)]),_:1},8,["variant","color","size"])):S("",!0)])):(m(),f(y,{key:0,onClick:E,variant:e.variant,color:e.color,size:e.size},{default:b(()=>[v(g(e.label),1)]),_:1},8,["variant","color","size"]))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"DuiConfirmation",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"}},{name:"checkLabel",required:!0,type:{name:"string"}},{name:"confirmLabel",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'outline'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'danger'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}}],events:[{name:"confirmed"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Widgets/DuiConfirmation.vue"]});const G={title:"Widgets/Confirmation",component:i,tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"Texto del boton inicial que activa el modo de confirmacion."},checkLabel:{control:{type:"text"},description:"Texto mostrado en el switch de validacion previa."},confirmLabel:{control:{type:"text"},description:"Texto del boton final que emite la confirmacion."},variant:{control:{type:"select"},options:["solid","outline","ghost"],description:"Variante visual aplicada al boton principal y al boton de confirmar."},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color principal del flujo de confirmacion."},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano de los botones del flujo."},onConfirmed:{action:"confirmed",description:"Evento emitido cuando el usuario confirma la accion.",table:{category:"events"},control:!1}},parameters:{docs:{description:{component:"Flujo de confirmacion en dos pasos para acciones sensibles. Primero muestra un boton disparador y, al activarse, solicita confirmacion explicita mediante un switch antes de permitir la accion final."}}}},u=n=>({components:{DuiConfirmation:i},setup(){const t=d(0);return{args:n,confirmedCount:t,handleConfirmed:()=>{var a;t.value+=1,(a=n.onConfirmed)==null||a.call(n)}}},template:`
    <div class="dk:p-4 dk:space-y-3">
      <DuiConfirmation v-bind="args" @confirmed="handleConfirmed" />
      <p class="dk:text-sm dk:text-zinc-500">Confirmaciones emitidas: {{ confirmedCount }}</p>
      <p class="dk:text-xs dk:text-zinc-400">Nota: el estado de confirmacion se reinicia automaticamente tras 10 segundos.</p>
    </div>
  `}),s={args:{label:"Eliminar registro",checkLabel:"Estoy seguro de eliminar este registro",confirmLabel:"Si, eliminar",variant:"outline",color:"danger",size:"md"},render:u},c={args:{label:"Publicar cambios",checkLabel:"Revise y confirmo la publicacion",confirmLabel:"Confirmar publicacion",variant:"solid",color:"primary",size:"md"},render:u,parameters:{docs:{description:{story:"Ejemplo para operaciones de negocio donde se requiere doble validacion antes de continuar."}}}},l={args:{label:"Cerrar sesion",checkLabel:"Confirmar cierre",confirmLabel:"Confirmar salida",variant:"ghost",color:"warning",size:"sm"},render:u,parameters:{docs:{description:{story:"Variante compacta para espacios reducidos como barras de herramientas o menus contextuales."}}}};var C,k,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Eliminar registro',
    checkLabel: 'Estoy seguro de eliminar este registro',
    confirmLabel: 'Si, eliminar',
    variant: 'outline',
    color: 'danger',
    size: 'md'
  },
  render: confirmationRender
}`,...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var x,z,L;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Publicar cambios',
    checkLabel: 'Revise y confirmo la publicacion',
    confirmLabel: 'Confirmar publicacion',
    variant: 'solid',
    color: 'primary',
    size: 'md'
  },
  render: confirmationRender,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo para operaciones de negocio donde se requiere doble validacion antes de continuar.'
      }
    }
  }
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var _,w,V;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Cerrar sesion',
    checkLabel: 'Confirmar cierre',
    confirmLabel: 'Confirmar salida',
    variant: 'ghost',
    color: 'warning',
    size: 'sm'
  },
  render: confirmationRender,
  parameters: {
    docs: {
      description: {
        story: 'Variante compacta para espacios reducidos como barras de herramientas o menus contextuales.'
      }
    }
  }
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const H=["Default","PrimaryAction","Compact"];export{l as Compact,s as Default,c as PrimaryAction,H as __namedExportsOrder,G as default};
