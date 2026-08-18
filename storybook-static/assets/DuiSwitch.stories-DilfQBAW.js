import{r as o}from"./iframe-BX9sGRHr.js";import{_ as s}from"./DuiSwitch-CoXoiC3Q.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const{expect:i,userEvent:u,within:E}=__STORYBOOK_MODULE_TEST__,_={title:"Forms/Switch",component:s,tags:["autodocs"],argTypes:{modelValue:{control:{type:"boolean"},description:"Estado del switch (v-model)"},label:{control:{type:"text"},description:"Etiqueta principal"},description:{control:{type:"text"},description:"Texto secundario debajo de la etiqueta"},labelPosition:{control:{type:"select"},options:["left","right"],description:"Posicion de la etiqueta"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color activo"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano del switch"},block:{control:{type:"boolean"},description:"Ancho completo"},disabled:{control:{type:"boolean"},description:"Deshabilita el switch"},showIcons:{control:{type:"boolean"},description:"Muestra icono de check/x dentro del thumb"}},parameters:{docs:{description:{component:"Switch/Toggle compacto con descripcion opcional, iconos internos y soporte completo de colores y tamanos. Complementa DuiCheckbox que usa estilo pill."}}}},n={args:{modelValue:!1,label:"Modo oscuro",description:"Cambia la apariencia de la interfaz",labelPosition:"right",color:"primary",size:"md",block:!1,disabled:!1,showIcons:!1},render:e=>({components:{DuiSwitch:s},setup(){const t=o(e.modelValue);return{args:e,enabled:t}},template:`
      <div class="dk:p-4">
        <DuiSwitch v-bind="args" v-model="enabled" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Estado: {{ enabled ? 'Activado' : 'Desactivado' }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{const t=E(e),a=t.getByRole("switch");await i(a).not.toBeChecked(),await u.click(a),await i(a).toBeChecked(),await i(t.getByText("Estado: Activado")).toBeInTheDocument(),await u.click(a),await i(a).not.toBeChecked()}},l={render:()=>({components:{DuiSwitch:s},setup(){return{vals:o({neutral:!0,primary:!0,secondary:!0,success:!0,warning:!0,danger:!0})}},template:`
      <div class="dk:p-4 dk:space-y-3">
        <DuiSwitch v-model="vals.neutral" color="neutral" label="Neutral" />
        <DuiSwitch v-model="vals.primary" color="primary" label="Primary" />
        <DuiSwitch v-model="vals.secondary" color="secondary" label="Secondary" />
        <DuiSwitch v-model="vals.success" color="success" label="Success" />
        <DuiSwitch v-model="vals.warning" color="warning" label="Warning" />
        <DuiSwitch v-model="vals.danger" color="danger" label="Danger" />
      </div>
    `})},c={render:()=>({components:{DuiSwitch:s},setup(){const e=o(!0),t=o(!0),a=o(!0);return{sm:e,md:t,lg:a}},template:`
      <div class="dk:p-4 dk:space-y-4">
        <DuiSwitch v-model="sm" size="sm" label="Small" />
        <DuiSwitch v-model="md" size="md" label="Medium" />
        <DuiSwitch v-model="lg" size="lg" label="Large" />
      </div>
    `})},r={render:()=>({components:{DuiSwitch:s},setup(){const e=o(!0),t=o(!1),a=o(!0);return{v1:e,v2:t,v3:a}},template:`
      <div class="dk:p-4 dk:space-y-3">
        <DuiSwitch v-model="v1" label="Notificaciones push" show-icons />
        <DuiSwitch v-model="v2" label="Marketing emails" show-icons />
        <DuiSwitch v-model="v3" label="Autenticacion de dos factores" description="Recomendado para mayor seguridad" show-icons color="success" />
      </div>
    `})},d={render:()=>({components:{DuiSwitch:s},setup(){return{settings:o({darkMode:!1,notifications:!0,autoSave:!0,analytics:!1,betaFeatures:!1})}},template:`
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
    `})};var p,m,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,k,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var h,g,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,f,D;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(f=r.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var x,z,C;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(z=d.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const P=["Default","Colors","Sizes","WithIcons","SettingsList"];export{l as Colors,n as Default,d as SettingsList,c as Sizes,r as WithIcons,P as __namedExportsOrder,_ as default};
