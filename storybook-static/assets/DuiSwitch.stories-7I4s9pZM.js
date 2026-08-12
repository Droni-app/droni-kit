import{e as Z,E as _,f as i,p as d,l as z,t as p,i as k,u as c,m as ee,h as u,o as r,q as C,r as o}from"./iframe-DjC63Ylc.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const ae={class:"dk:relative dk:inline-flex dk:items-center dk:flex-shrink-0"},te=["aria-checked","checked","disabled"],se={key:0,viewBox:"0 0 12 12",fill:"currentColor",class:"dk:w-2.5 dk:h-2.5"},ne={key:1,viewBox:"0 0 12 12",fill:"none",class:"dk:w-2.5 dk:h-2.5"},l=Z({inheritAttrs:!1,__name:"DuiSwitch",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""},description:{type:String,default:""},labelPosition:{type:String,default:"right"},color:{type:String,default:"primary"},size:{type:String,default:"md"},block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showIcons:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:n}){const a=e,w=n,$=_(),y={sm:{track:"dk:w-8 dk:h-4",thumb:"dk:w-3 dk:h-3",translate:"dk:peer-checked:translate-x-[16px]",offset:"dk:top-0.5 dk:left-0.5"},md:{track:"dk:w-10 dk:h-5",thumb:"dk:w-4 dk:h-4",translate:"dk:peer-checked:translate-x-5",offset:"dk:top-0.5 dk:left-0.5"},lg:{track:"dk:w-12 dk:h-6",thumb:"dk:w-5 dk:h-5",translate:"dk:peer-checked:translate-x-6",offset:"dk:top-0.5 dk:left-0.5"}},G={neutral:"dk:peer-checked:bg-zinc-600 dk:dark:peer-checked:bg-zinc-500",primary:"dk:peer-checked:bg-slate-600 dk:dark:peer-checked:bg-slate-500",secondary:"dk:peer-checked:bg-pink-600 dk:dark:peer-checked:bg-pink-500",success:"dk:peer-checked:bg-emerald-600 dk:dark:peer-checked:bg-emerald-500",warning:"dk:peer-checked:bg-amber-500 dk:dark:peer-checked:bg-amber-400",danger:"dk:peer-checked:bg-rose-600 dk:dark:peer-checked:bg-rose-500"},S=u(()=>!!(a.label||$.default)),K=u(()=>{const t=a.block?"dk:w-full dk:justify-between":"",s=a.block?"dk:flex":"dk:inline-flex",X=a.disabled?"dk:opacity-60 dk:cursor-not-allowed":"dk:cursor-pointer";return[s,"dk:items-center dk:gap-3 dk:select-none",t,X].join(" ")}),x=u(()=>["dk:flex dk:flex-col","dk:text-sm dk:leading-snug dk:text-zinc-700 dk:dark:text-zinc-200",a.disabled?"dk:cursor-not-allowed":"dk:cursor-pointer"].join(" ")),D=u(()=>"dk:text-xs dk:text-zinc-500 dk:dark:text-zinc-400 dk:mt-0.5"),U=u(()=>{const t=y[a.size],s=G[a.color];return["dk:relative dk:inline-flex dk:items-center dk:transition-colors dk:duration-200 dk:rounded-full","dk:bg-zinc-300 dk:dark:bg-zinc-600","dk:peer-focus-visible:outline-none dk:peer-focus-visible:ring-2 dk:peer-focus-visible:ring-offset-2 dk:peer-focus-visible:ring-slate-400 dk:dark:peer-focus-visible:ring-slate-500","dk:peer-disabled:opacity-70",t.track,s].join(" ")}),Y=u(()=>{const t=y[a.size];return["dk:absolute",t.offset,"dk:bg-white dk:dark:bg-zinc-100","dk:rounded-full dk:shadow-sm dk:transition-all dk:duration-200","dk:pointer-events-none dk:flex dk:items-center dk:justify-center",t.thumb,t.translate].join(" ")}),H={neutral:"dk:text-zinc-600 dk:dark:text-zinc-400",primary:"dk:text-slate-600 dk:dark:text-slate-400",secondary:"dk:text-pink-600 dk:dark:text-pink-400",success:"dk:text-emerald-600 dk:dark:text-emerald-400",warning:"dk:text-amber-600 dk:dark:text-amber-400",danger:"dk:text-rose-600 dk:dark:text-rose-400"},J=u(()=>a.modelValue?H[a.color]:"dk:text-zinc-400 dk:dark:text-zinc-500");function Q(t){const s=t.target;w("update:modelValue",s.checked),w("change",s.checked)}return(t,s)=>(r(),i("label",{class:d(K.value)},[S.value&&e.labelPosition==="left"?(r(),i("span",{key:0,class:d(x.value)},[z(t.$slots,"default",{},()=>[C(p(e.label),1)]),e.description?(r(),i("span",{key:0,class:d(D.value)},p(e.description),3)):k("",!0)],2)):k("",!0),c("span",ae,[c("input",ee({type:"checkbox",class:"dk:sr-only dk:peer",role:"switch","aria-checked":e.modelValue,checked:e.modelValue,disabled:e.disabled},t.$attrs,{onChange:Q}),null,16,te),c("span",{class:d(U.value)},null,2),c("span",{class:d(Y.value)},[e.showIcons?(r(),i("span",{key:0,"aria-hidden":"true",class:d(J.value)},[e.modelValue?(r(),i("svg",se,[...s[0]||(s[0]=[c("path",{d:"M3.5 6.5l2 2 3-3",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"},null,-1)])])):(r(),i("svg",ne,[...s[1]||(s[1]=[c("line",{x1:"3",y1:"3",x2:"9",y2:"9",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1),c("line",{x1:"9",y1:"3",x2:"3",y2:"9",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"},null,-1)])]))],2)):k("",!0)],2)]),S.value&&e.labelPosition==="right"?(r(),i("span",{key:1,class:d(x.value)},[z(t.$slots,"default",{},()=>[C(p(e.label),1)]),e.description?(r(),i("span",{key:0,class:d(D.value)},p(e.description),3)):k("",!0)],2)):k("",!0)],2))}});l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"DuiSwitch",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelPosition",type:{name:"String as () => 'left' | 'right'"},defaultValue:{func:!1,value:"'right'"}},{name:"color",type:{name:"String as () => 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showIcons",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"change",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiSwitch.vue"]});const{expect:m,userEvent:V,within:oe}=__STORYBOOK_MODULE_TEST__,re={title:"Forms/Switch",component:l,tags:["autodocs"],argTypes:{modelValue:{control:{type:"boolean"},description:"Estado del switch (v-model)"},label:{control:{type:"text"},description:"Etiqueta principal"},description:{control:{type:"text"},description:"Texto secundario debajo de la etiqueta"},labelPosition:{control:{type:"select"},options:["left","right"],description:"Posicion de la etiqueta"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color activo"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano del switch"},block:{control:{type:"boolean"},description:"Ancho completo"},disabled:{control:{type:"boolean"},description:"Deshabilita el switch"},showIcons:{control:{type:"boolean"},description:"Muestra icono de check/x dentro del thumb"}},parameters:{docs:{description:{component:"Switch/Toggle compacto con descripcion opcional, iconos internos y soporte completo de colores y tamanos. Complementa DuiCheckbox que usa estilo pill."}}}},v={args:{modelValue:!1,label:"Modo oscuro",description:"Cambia la apariencia de la interfaz",labelPosition:"right",color:"primary",size:"md",block:!1,disabled:!1,showIcons:!1},render:e=>({components:{DuiSwitch:l},setup(){const n=o(e.modelValue);return{args:e,enabled:n}},template:`
      <div class="dk:p-4">
        <DuiSwitch v-bind="args" v-model="enabled" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Estado: {{ enabled ? 'Activado' : 'Desactivado' }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{const n=oe(e),a=n.getByRole("switch");await m(a).not.toBeChecked(),await V.click(a),await m(a).toBeChecked(),await m(n.getByText("Estado: Activado")).toBeInTheDocument(),await V.click(a),await m(a).not.toBeChecked()}},b={render:()=>({components:{DuiSwitch:l},setup(){return{vals:o({neutral:!0,primary:!0,secondary:!0,success:!0,warning:!0,danger:!0})}},template:`
      <div class="dk:p-4 dk:space-y-3">
        <DuiSwitch v-model="vals.neutral" color="neutral" label="Neutral" />
        <DuiSwitch v-model="vals.primary" color="primary" label="Primary" />
        <DuiSwitch v-model="vals.secondary" color="secondary" label="Secondary" />
        <DuiSwitch v-model="vals.success" color="success" label="Success" />
        <DuiSwitch v-model="vals.warning" color="warning" label="Warning" />
        <DuiSwitch v-model="vals.danger" color="danger" label="Danger" />
      </div>
    `})},h={render:()=>({components:{DuiSwitch:l},setup(){const e=o(!0),n=o(!0),a=o(!0);return{sm:e,md:n,lg:a}},template:`
      <div class="dk:p-4 dk:space-y-4">
        <DuiSwitch v-model="sm" size="sm" label="Small" />
        <DuiSwitch v-model="md" size="md" label="Medium" />
        <DuiSwitch v-model="lg" size="lg" label="Large" />
      </div>
    `})},f={render:()=>({components:{DuiSwitch:l},setup(){const e=o(!0),n=o(!1),a=o(!0);return{v1:e,v2:n,v3:a}},template:`
      <div class="dk:p-4 dk:space-y-3">
        <DuiSwitch v-model="v1" label="Notificaciones push" show-icons />
        <DuiSwitch v-model="v2" label="Marketing emails" show-icons />
        <DuiSwitch v-model="v3" label="Autenticacion de dos factores" description="Recomendado para mayor seguridad" show-icons color="success" />
      </div>
    `})},g={render:()=>({components:{DuiSwitch:l},setup(){return{settings:o({darkMode:!1,notifications:!0,autoSave:!0,analytics:!1,betaFeatures:!1})}},template:`
      <div class="dk:p-4 dk:max-w-sm dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:divide-y dk:divide-zinc-100 dk:dark:divide-zinc-800">
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.darkMode" label="Modo oscuro" description="Cambia el tema de la aplicacion" block label-position="left" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.notifications" label="Notificaciones" description="Recibe alertas en tiempo real" block label-position="left" color="success" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.autoSave" label="Autoguardado" description="Guarda cambios automaticamente" block label-position="left" color="primary" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.analytics" label="Analisis de uso" description="Ayuda a mejorar la plataforma" block label-position="left" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.betaFeatures" label="Funciones beta" description="Prueba las ultimas novedades" block label-position="left" color="secondary" />
        </div>
      </div>
    `})};var B,E,M;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: 'Modo oscuro',
    description: 'Cambia la apariencia de la interfaz',
    labelPosition: 'right',
    color: 'primary',
    size: 'md',
    block: false,
    disabled: false,
    showIcons: false
  },
  render: args => ({
    components: {
      DuiSwitch
    },
    setup() {
      const enabled = ref(args.modelValue);
      return {
        args,
        enabled
      };
    },
    template: \`
      <div class="dk:p-4">
        <DuiSwitch v-bind="args" v-model="enabled" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Estado: {{ enabled ? 'Activado' : 'Desactivado' }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole('switch');
    await expect(sw).not.toBeChecked();
    await userEvent.click(sw);
    await expect(sw).toBeChecked();
    await expect(canvas.getByText('Estado: Activado')).toBeInTheDocument();
    await userEvent.click(sw);
    await expect(sw).not.toBeChecked();
  }
}`,...(M=(E=v.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var A,P,N;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSwitch
    },
    setup() {
      const vals = ref({
        neutral: true,
        primary: true,
        secondary: true,
        success: true,
        warning: true,
        danger: true
      });
      return {
        vals
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-3">
        <DuiSwitch v-model="vals.neutral" color="neutral" label="Neutral" />
        <DuiSwitch v-model="vals.primary" color="primary" label="Primary" />
        <DuiSwitch v-model="vals.secondary" color="secondary" label="Secondary" />
        <DuiSwitch v-model="vals.success" color="success" label="Success" />
        <DuiSwitch v-model="vals.warning" color="warning" label="Warning" />
        <DuiSwitch v-model="vals.danger" color="danger" label="Danger" />
      </div>
    \`
  })
}`,...(N=(P=b.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var T,j,I;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSwitch
    },
    setup() {
      const sm = ref(true),
        md = ref(true),
        lg = ref(true);
      return {
        sm,
        md,
        lg
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-4">
        <DuiSwitch v-model="sm" size="sm" label="Small" />
        <DuiSwitch v-model="md" size="md" label="Medium" />
        <DuiSwitch v-model="lg" size="lg" label="Large" />
      </div>
    \`
  })
}`,...(I=(j=h.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var F,R,L;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSwitch
    },
    setup() {
      const v1 = ref(true),
        v2 = ref(false),
        v3 = ref(true);
      return {
        v1,
        v2,
        v3
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-3">
        <DuiSwitch v-model="v1" label="Notificaciones push" show-icons />
        <DuiSwitch v-model="v2" label="Marketing emails" show-icons />
        <DuiSwitch v-model="v3" label="Autenticacion de dos factores" description="Recomendado para mayor seguridad" show-icons color="success" />
      </div>
    \`
  })
}`,...(L=(R=f.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var O,q,W;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSwitch
    },
    setup() {
      const settings = ref({
        darkMode: false,
        notifications: true,
        autoSave: true,
        analytics: false,
        betaFeatures: false
      });
      return {
        settings
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-sm dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:divide-y dk:divide-zinc-100 dk:dark:divide-zinc-800">
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.darkMode" label="Modo oscuro" description="Cambia el tema de la aplicacion" block label-position="left" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.notifications" label="Notificaciones" description="Recibe alertas en tiempo real" block label-position="left" color="success" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.autoSave" label="Autoguardado" description="Guarda cambios automaticamente" block label-position="left" color="primary" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.analytics" label="Analisis de uso" description="Ayuda a mejorar la plataforma" block label-position="left" />
        </div>
        <div class="dk:px-4 dk:py-3">
          <DuiSwitch v-model="settings.betaFeatures" label="Funciones beta" description="Prueba las ultimas novedades" block label-position="left" color="secondary" />
        </div>
      </div>
    \`
  })
}`,...(W=(q=g.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const ce=["Default","Colors","Sizes","WithIcons","SettingsList"];export{b as Colors,v as Default,g as SettingsList,h as Sizes,f as WithIcons,ce as __namedExportsOrder,re as default};
