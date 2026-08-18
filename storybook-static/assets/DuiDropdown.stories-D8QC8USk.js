import{f as U,z as Z,A as ee,h as D,p as Y,l as k,N as V,x as C,B as te,w as H,T as oe,r as m,o as s,D as ne,n as J,j as E,i as u,s as ae,m as re,v as de,q,t as N}from"./iframe-BX9sGRHr.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as x}from"./DuiButton-oFhP9YFC.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-D0JCgCrd.js";const ie=["onKeydown"],se=["aria-label"],r=U({__name:"DuiDropdown",props:{modelValue:{type:Boolean,default:void 0},placement:{default:"bottom-start"},variant:{default:"solid"},color:{default:"neutral"},size:{default:"md"},rounded:{default:"all"},minWidth:{default:"10rem"},ariaLabel:{default:"Menu"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","open","close"],setup(t,{emit:d}){const e=t,n=d,l=m(null),p=m(!1),b=u(()=>e.modelValue!==void 0?e.modelValue:p.value);function c(){if(e.disabled)return;const a=!b.value;p.value=a,n("update:modelValue",a),n(a?"open":"close")}function B(){p.value=!1,n("update:modelValue",!1),n("close")}function o(a){l.value&&!l.value.contains(a.target)&&B()}Z(()=>document.addEventListener("mousedown",o)),ee(()=>document.removeEventListener("mousedown",o));const f={"bottom-start":"dk:top-full dk:left-0 dk:mt-1 dk:origin-top-left","bottom-end":"dk:top-full dk:right-0 dk:mt-1 dk:origin-top-right",bottom:"dk:top-full dk:left-1/2 dk:-translate-x-1/2 dk:mt-1 dk:origin-top","top-start":"dk:bottom-full dk:left-0 dk:mb-1 dk:origin-bottom-left","top-end":"dk:bottom-full dk:right-0 dk:mb-1 dk:origin-bottom-right",top:"dk:bottom-full dk:left-1/2 dk:-translate-x-1/2 dk:mb-1 dk:origin-bottom"},z={all:"dk:rounded-xl",sm:"dk:rounded-lg",none:"dk:rounded-none"},S={solid:{neutral:"dk:bg-white dk:dark:bg-zinc-900 dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:text-zinc-800 dk:dark:text-zinc-200",primary:"dk:bg-slate-50 dk:dark:bg-slate-900 dk:border dk:border-slate-200 dk:dark:border-slate-700 dk:text-slate-800 dk:dark:text-slate-200",secondary:"dk:bg-pink-50 dk:dark:bg-pink-900 dk:border dk:border-pink-200 dk:dark:border-pink-700 dk:text-pink-800 dk:dark:text-pink-200",success:"dk:bg-emerald-50 dk:dark:bg-emerald-900 dk:border dk:border-emerald-200 dk:dark:border-emerald-700 dk:text-emerald-800 dk:dark:text-emerald-200",warning:"dk:bg-amber-50 dk:dark:bg-amber-900 dk:border dk:border-amber-200 dk:dark:border-amber-700 dk:text-amber-800 dk:dark:text-amber-200",danger:"dk:bg-rose-50 dk:dark:bg-rose-900 dk:border dk:border-rose-200 dk:dark:border-rose-700 dk:text-rose-800 dk:dark:text-rose-200"},outline:{neutral:"dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-zinc-300 dk:dark:border-zinc-600 dk:text-zinc-800 dk:dark:text-zinc-200",primary:"dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-slate-400 dk:dark:border-slate-500 dk:text-slate-800 dk:dark:text-slate-200",secondary:"dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-pink-400 dk:dark:border-pink-500 dk:text-pink-800 dk:dark:text-pink-200",success:"dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-emerald-400 dk:dark:border-emerald-500 dk:text-emerald-800 dk:dark:text-emerald-200",warning:"dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-amber-400 dk:dark:border-amber-500 dk:text-amber-800 dk:dark:text-amber-200",danger:"dk:bg-white/95 dk:dark:bg-zinc-900/95 dk:border-2 dk:border-rose-400 dk:dark:border-rose-500 dk:text-rose-800 dk:dark:text-rose-200"},ghost:{neutral:"dk:bg-white/85 dk:dark:bg-zinc-900/75 dk:backdrop-blur-md dk:border dk:border-zinc-300/70 dk:dark:border-zinc-600/60 dk:text-zinc-800 dk:dark:text-zinc-200",primary:"dk:bg-slate-100/85 dk:dark:bg-slate-900/70 dk:backdrop-blur-md dk:border dk:border-slate-300/70 dk:dark:border-slate-600/60 dk:text-slate-800 dk:dark:text-slate-200",secondary:"dk:bg-pink-100/85 dk:dark:bg-pink-900/70 dk:backdrop-blur-md dk:border dk:border-pink-300/70 dk:dark:border-pink-600/60 dk:text-pink-800 dk:dark:text-pink-200",success:"dk:bg-emerald-100/85 dk:dark:bg-emerald-900/70 dk:backdrop-blur-md dk:border dk:border-emerald-300/70 dk:dark:border-emerald-600/60 dk:text-emerald-800 dk:dark:text-emerald-200",warning:"dk:bg-amber-100/85 dk:dark:bg-amber-900/70 dk:backdrop-blur-md dk:border dk:border-amber-300/70 dk:dark:border-amber-600/60 dk:text-amber-800 dk:dark:text-amber-200",danger:"dk:bg-rose-100/85 dk:dark:bg-rose-900/70 dk:backdrop-blur-md dk:border dk:border-rose-300/70 dk:dark:border-rose-600/60 dk:text-rose-800 dk:dark:text-rose-200"}},Q=u(()=>({minWidth:e.minWidth})),X=u(()=>["dk:absolute dk:z-50 dk:shadow-lg dk:py-1",f[e.placement],z[e.rounded],S[e.variant][e.color]].join(" "));return(a,De)=>(s(),D("div",{ref_key:"wrapperRef",ref:l,class:"dk:relative dk:inline-block"},[Y("div",{onClick:c,onKeydown:[V(C(c,["prevent"]),["enter"]),V(C(c,["prevent"]),["space"])]},[k(a.$slots,"trigger")],40,ie),te(oe,{"enter-active-class":"dk:transition-all dk:duration-150 dk:ease-out","leave-active-class":"dk:transition-all dk:duration-100 dk:ease-in","enter-from-class":"dk:opacity-0 dk:scale-95","leave-to-class":"dk:opacity-0 dk:scale-95"},{default:H(()=>[b.value?(s(),D("div",{key:0,class:J(X.value),style:ne(Q.value),role:"menu","aria-label":t.ariaLabel},[k(a.$slots,"default")],14,se)):E("",!0)]),_:3})],512))}});r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"DuiDropdown",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"placement",required:!1,type:{name:"union",elements:[{name:'"bottom-start"'},{name:'"bottom-end"'},{name:'"top-start"'},{name:'"top-end"'},{name:'"bottom"'},{name:'"top"'}]},defaultValue:{func:!1,value:"'bottom-start'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'solid'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"all"'},{name:'"none"'},{name:'"sm"'}]},defaultValue:{func:!1,value:"'all'"}},{name:"minWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'10rem'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Menu'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"open"},{name:"close"}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiDropdown.vue"]});const ue={class:"dk:flex-1 dk:truncate"},me={key:1,class:"dk:ml-auto dk:opacity-60 dk:text-xs"},i=U({__name:"DuiDropdownItem",props:{label:{default:void 0},icon:{default:void 0},href:{default:void 0},target:{default:void 0},disabled:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},size:{default:"md"}},emits:["click"],setup(t,{emit:d}){const e=t,n=d,l=u(()=>e.href?{href:e.href,target:e.target}:{type:"button",disabled:e.disabled}),p={sm:"dk:px-3 dk:py-1 dk:text-xs",md:"dk:px-3 dk:py-2 dk:text-sm",lg:"dk:px-4 dk:py-2.5 dk:text-base"},b=u(()=>{const o="dk:flex dk:w-full dk:items-center dk:gap-2 dk:transition-colors dk:duration-100 dk:outline-none dk:text-left dk:select-none",f=p[e.size],z=e.danger?"dk:text-rose-600 dk:dark:text-rose-400 dk:hover:bg-rose-50 dk:dark:hover:bg-rose-900/40 dk:focus-visible:bg-rose-50 dk:dark:focus-visible:bg-rose-900/40":"dk:hover:bg-black/5 dk:dark:hover:bg-white/10 dk:focus-visible:bg-black/5 dk:dark:focus-visible:bg-white/10",S=e.disabled?"dk:opacity-50 dk:cursor-not-allowed dk:pointer-events-none":"dk:cursor-pointer";return[o,f,z,S].join(" ")}),c=u(()=>"dk:flex-shrink-0 dk:w-4 dk:h-4 dk:flex dk:items-center dk:justify-center dk:opacity-70");function B(o){e.disabled||n("click",o)}return(o,f)=>(s(),ae(de(t.href?"a":"button"),re(l.value,{class:b.value,role:"menuitem","aria-disabled":t.disabled,onClick:B}),{default:H(()=>[o.$slots.icon||t.icon?(s(),D("span",{key:0,class:J(c.value),"aria-hidden":"true"},[k(o.$slots,"icon",{},()=>[q(N(t.icon),1)])],2)):E("",!0),Y("span",ue,[k(o.$slots,"default",{},()=>[q(N(t.label),1)])]),o.$slots.trailing?(s(),D("span",me,[k(o.$slots,"trailing")])):E("",!0)]),_:3},16,["class","aria-disabled"]))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"DuiDropdownItem",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"icon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"href",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"target",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"danger",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"icon"},{name:"default"},{name:"trailing"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiDropdownItem.vue"]});const h={},pe={class:"dk:my-1 dk:border-current/10",role:"separator","aria-orientation":"horizontal"};function ce(t,d){return s(),D("hr",pe)}const _=le(h,[["render",ce]]);h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{displayName:"DuiDropdownSeparator",description:"",tags:{},sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiDropdownSeparator.vue"]});const{expect:g,userEvent:O,within:ke}=__STORYBOOK_MODULE_TEST__,Ie={title:"Elements/Dropdown",component:r,tags:["autodocs"],argTypes:{placement:{control:{type:"select"},options:["bottom-start","bottom-end","bottom","top-start","top-end","top"],description:"Posicion del menu relativa al trigger"},variant:{control:{type:"select"},options:["solid","outline","ghost"],description:"Estilo visual del menu"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color del menu"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano de los items"},rounded:{control:{type:"select"},options:["all","sm","none"],description:"Bordes del menu"},disabled:{control:{type:"boolean"},description:"Deshabilita el dropdown"}},parameters:{docs:{description:{component:"Dropdown/Menu con soporte de posicionamiento, variantes, colores y teclado."}}}},w={args:{placement:"bottom-start",variant:"solid",color:"neutral",size:"md",rounded:"all",disabled:!1},render:t=>({components:{DuiDropdown:r,DuiDropdownItem:i,DuiDropdownSeparator:_,DuiButton:x},setup(){const d=m(!1);return{args:t,open:d}},template:`
      <div class="dk:p-8 dk:flex dk:justify-center">
        <DuiDropdown v-bind="args" v-model="open">
          <template #trigger>
            <DuiButton>Opciones ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Ver perfil" />
          <DuiDropdownItem label="Configuracion" />
          <DuiDropdownItem label="Notificaciones" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Cerrar sesion" danger />
        </DuiDropdown>
      </div>
    `}),play:async({canvasElement:t})=>{const e=ke(t).getByRole("button",{name:/Opciones/i});await g(e).toBeInTheDocument(),await O.click(e);const n=t.querySelector('[role="menu"]');await g(n).not.toBeNull();const l=t.querySelectorAll('[role="menuitem"]');await g(l.length).toBeGreaterThan(0),await O.click(e),await g(t.querySelector('[role="menu"]')).toBeNull()}},v={render:()=>({components:{DuiDropdown:r,DuiDropdownItem:i,DuiButton:x},setup(){return{states:m({bottomStart:!1,bottomEnd:!1,bottom:!1})}},template:`
      <div class="dk:p-16 dk:flex dk:gap-4 dk:justify-center">
        <DuiDropdown v-model="states.bottomStart" placement="bottom-start">
          <template #trigger>
            <DuiButton size="sm">Bottom Start ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>

        <DuiDropdown v-model="states.bottom" placement="bottom">
          <template #trigger>
            <DuiButton size="sm">Bottom Center ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>

        <DuiDropdown v-model="states.bottomEnd" placement="bottom-end">
          <template #trigger>
            <DuiButton size="sm">Bottom End ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>
      </div>
    `})},y={render:()=>({components:{DuiDropdown:r,DuiDropdownItem:i,DuiDropdownSeparator:_,DuiButton:x},setup(){return{states:m({solid:!1,outline:!1,ghost:!1})}},template:`
      <div class="dk:p-12 dk:flex dk:gap-6">
        <DuiDropdown v-model="states.solid" variant="solid">
          <template #trigger><DuiButton>Solid ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>

        <DuiDropdown v-model="states.outline" variant="outline">
          <template #trigger><DuiButton variant="outline">Outline ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>

        <DuiDropdown v-model="states.ghost" variant="ghost">
          <template #trigger><DuiButton variant="ghost">Ghost ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>
      </div>
    `})},I={render:()=>({components:{DuiDropdown:r,DuiDropdownItem:i,DuiDropdownSeparator:_,DuiButton:x},setup(){return{open:m(!1)}},template:`
      <div class="dk:p-12 dk:flex dk:justify-center">
        <DuiDropdown v-model="open">
          <template #trigger>
            <DuiButton>Acciones ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Ver detalle">
            <template #icon>👁</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Editar">
            <template #icon>✏️</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Compartir">
            <template #icon>🔗</template>
          </DuiDropdownItem>
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Archivar" disabled>
            <template #icon>📦</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Eliminar" danger>
            <template #icon>🗑️</template>
          </DuiDropdownItem>
        </DuiDropdown>
      </div>
    `})};var j,$,T;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placement: 'bottom-start',
    variant: 'solid',
    color: 'neutral',
    size: 'md',
    rounded: 'all',
    disabled: false
  },
  render: args => ({
    components: {
      DuiDropdown,
      DuiDropdownItem,
      DuiDropdownSeparator,
      DuiButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div class="dk:p-8 dk:flex dk:justify-center">
        <DuiDropdown v-bind="args" v-model="open">
          <template #trigger>
            <DuiButton>Opciones ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Ver perfil" />
          <DuiDropdownItem label="Configuracion" />
          <DuiDropdownItem label="Notificaciones" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Cerrar sesion" danger />
        </DuiDropdown>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /Opciones/i
    });
    await expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);
    const menu = canvasElement.querySelector('[role="menu"]');
    await expect(menu).not.toBeNull();
    const items = canvasElement.querySelectorAll('[role="menuitem"]');
    await expect(items.length).toBeGreaterThan(0);
    await userEvent.click(trigger);
    await expect(canvasElement.querySelector('[role="menu"]')).toBeNull();
  }
}`,...(T=($=w.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var M,A,L;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiDropdown,
      DuiDropdownItem,
      DuiButton
    },
    setup() {
      const states = ref({
        bottomStart: false,
        bottomEnd: false,
        bottom: false
      });
      return {
        states
      };
    },
    template: \`
      <div class="dk:p-16 dk:flex dk:gap-4 dk:justify-center">
        <DuiDropdown v-model="states.bottomStart" placement="bottom-start">
          <template #trigger>
            <DuiButton size="sm">Bottom Start ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>

        <DuiDropdown v-model="states.bottom" placement="bottom">
          <template #trigger>
            <DuiButton size="sm">Bottom Center ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>

        <DuiDropdown v-model="states.bottomEnd" placement="bottom-end">
          <template #trigger>
            <DuiButton size="sm">Bottom End ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Item 1" />
          <DuiDropdownItem label="Item 2" />
        </DuiDropdown>
      </div>
    \`
  })
}`,...(L=(A=v.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var W,P,R;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiDropdown,
      DuiDropdownItem,
      DuiDropdownSeparator,
      DuiButton
    },
    setup() {
      const states = ref({
        solid: false,
        outline: false,
        ghost: false
      });
      return {
        states
      };
    },
    template: \`
      <div class="dk:p-12 dk:flex dk:gap-6">
        <DuiDropdown v-model="states.solid" variant="solid">
          <template #trigger><DuiButton>Solid ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>

        <DuiDropdown v-model="states.outline" variant="outline">
          <template #trigger><DuiButton variant="outline">Outline ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>

        <DuiDropdown v-model="states.ghost" variant="ghost">
          <template #trigger><DuiButton variant="ghost">Ghost ▾</DuiButton></template>
          <DuiDropdownItem label="Editar" />
          <DuiDropdownItem label="Duplicar" />
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Eliminar" danger />
        </DuiDropdown>
      </div>
    \`
  })
}`,...(R=(P=y.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var G,K,F;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiDropdown,
      DuiDropdownItem,
      DuiDropdownSeparator,
      DuiButton
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div class="dk:p-12 dk:flex dk:justify-center">
        <DuiDropdown v-model="open">
          <template #trigger>
            <DuiButton>Acciones ▾</DuiButton>
          </template>
          <DuiDropdownItem label="Ver detalle">
            <template #icon>👁</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Editar">
            <template #icon>✏️</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Compartir">
            <template #icon>🔗</template>
          </DuiDropdownItem>
          <DuiDropdownSeparator />
          <DuiDropdownItem label="Archivar" disabled>
            <template #icon>📦</template>
          </DuiDropdownItem>
          <DuiDropdownItem label="Eliminar" danger>
            <template #icon>🗑️</template>
          </DuiDropdownItem>
        </DuiDropdown>
      </div>
    \`
  })
}`,...(F=(K=I.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};const he=["Default","Placements","Variants","WithIcons"];export{w as Default,v as Placements,y as Variants,I as WithIcons,he as __namedExportsOrder,Ie as default};
