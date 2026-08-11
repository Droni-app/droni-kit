import{f as U,E as Y,n as f,p as r,u as S,x as z,s as b,y as G,c as u,m as y,B as E,v as N,r as i}from"./iframe-BtNMLuc9.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const J={class:"dk:relative dk:inline-flex dk:items-center dk:flex-shrink-0"},Q=["checked","disabled"],c=U({inheritAttrs:!1,__name:"DuiCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""},labelPosition:{type:String,default:"right"},color:{type:String,default:"primary"},size:{type:String,default:"md"},block:{type:Boolean,default:!1},rounded:{type:String,default:"all"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:t}){const e=a,o=t,k=Y(),n={sm:{track:"dk:w-9 dk:h-5",thumb:"dk:w-3.5 dk:h-3.5",translate:"dk:peer-checked:translate-x-[14px]"},md:{track:"dk:w-11 dk:h-6",thumb:"dk:w-4 dk:h-4",translate:"dk:peer-checked:translate-x-5"},lg:{track:"dk:w-14 dk:h-7",thumb:"dk:w-5 dk:h-5",translate:"dk:peer-checked:translate-x-7"}},D={all:"dk:rounded-full",top:"dk:rounded-t-full",bottom:"dk:rounded-b-full",left:"dk:rounded-l-full",right:"dk:rounded-r-full",none:"dk:rounded-none"},C={neutral:"dk:peer-checked:bg-zinc-500 dk:peer-checked:dark:bg-zinc-500",primary:"dk:peer-checked:bg-slate-600 dk:peer-checked:dark:bg-slate-500",secondary:"dk:peer-checked:bg-pink-600 dk:peer-checked:dark:bg-pink-500",success:"dk:peer-checked:bg-emerald-600 dk:peer-checked:dark:bg-emerald-500",warning:"dk:peer-checked:bg-amber-500 dk:peer-checked:dark:bg-amber-400",danger:"dk:peer-checked:bg-rose-600 dk:peer-checked:dark:bg-rose-500"},w=u(()=>!!(e.label||k.default)),W=u(()=>{const s=e.block?"dk:w-full dk:justify-between":"",d=e.disabled?"dk:opacity-60 dk:cursor-not-allowed":"dk:cursor-pointer";return["dk:inline-flex dk:items-center dk:gap-3 dk:select-none",s,d].join(" ")}),B=u(()=>["dk:text-sm dk:leading-none dk:text-zinc-700 dk:dark:text-zinc-200",e.disabled?"dk:cursor-not-allowed":"dk:cursor-pointer"].join(" ")),F=u(()=>{const s=n[e.size]||n.md,d=D[e.rounded]||D.all,K=C[e.color]||C.primary;return["dk:inline-flex dk:items-center dk:transition-colors dk:duration-200","dk:bg-zinc-300 dk:dark:bg-zinc-700","dk:peer-focus-visible:outline-none dk:peer-focus-visible:ring-2 dk:peer-focus-visible:ring-offset-2 dk:peer-focus-visible:ring-slate-400 dk:dark:peer-focus-visible:ring-slate-500","dk:peer-disabled:opacity-70",s.track,d,K].join(" ")}),H=u(()=>{const s=n[e.size]||n.md;return["dk:absolute dk:left-1 dk:top-1/2 dk:-translate-y-1/2","dk:bg-white dk:dark:bg-zinc-100","dk:rounded-full dk:shadow-sm dk:transition-transform dk:duration-200","dk:pointer-events-none",s.thumb,s.translate].join(" ")});function $(s){const d=s.target;o("update:modelValue",d.checked)}return(s,d)=>(y(),f("label",{class:r(W.value)},[w.value&&a.labelPosition==="left"?(y(),f("span",{key:0,class:r(B.value)},[S(s.$slots,"default",{},()=>[E(N(a.label),1)])],2)):z("",!0),b("span",J,[b("input",G({type:"checkbox",class:"dk:sr-only dk:peer",checked:a.modelValue,disabled:a.disabled},s.$attrs,{onChange:$}),null,16,Q),b("span",{class:r(F.value)},null,2),b("span",{class:r(H.value)},null,2)]),w.value&&a.labelPosition==="right"?(y(),f("span",{key:1,class:r(B.value)},[S(s.$slots,"default",{},()=>[E(N(a.label),1)])],2)):z("",!0)],2))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"DuiCheckbox",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelPosition",type:{name:"String as () => 'left' | 'right'"},defaultValue:{func:!1,value:"'right'"}},{name:"color",type:{name:"String as () => 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiCheckbox.vue"]});const{expect:l,userEvent:g,within:x}=__STORYBOOK_MODULE_TEST__,ae={title:"Forms/Checkbox",component:c,tags:["autodocs"],argTypes:{modelValue:{control:{type:"boolean"},description:"Valor del switch (v-model)"},label:{control:{type:"text"},description:"Texto de etiqueta"},labelPosition:{control:{type:"select"},options:["left","right"],description:"Posicion de la etiqueta"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color del switch cuando esta activo"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano del switch"},block:{control:{type:"boolean"},description:"Ancho completo con espacio entre label y switch"},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"],description:"Bordes del track"},disabled:{control:{type:"boolean"},description:"Deshabilita interaccion"}},parameters:{docs:{description:{component:"Checkbox tipo switch con soporte de modo oscuro, tamanos y variaciones de color."}}}},m={args:{modelValue:!1,label:"Recibir notificaciones",labelPosition:"right",color:"primary",size:"md",block:!1,rounded:"all",disabled:!1},render:a=>({components:{DuiCheckbox:c},setup(){const t=i(a.modelValue);return{args:a,enabled:t}},template:`
      <div class="dk:p-4">
        <DuiCheckbox v-bind="args" v-model="enabled" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
          Estado: {{ enabled ? 'Activo' : 'Inactivo' }}
        </p>
      </div>
    `}),play:async({canvasElement:a})=>{const t=x(a),e=t.getByRole("checkbox",{name:"Recibir notificaciones"}),o=t.getByText("Recibir notificaciones");await l(e).not.toBeChecked(),await l(t.getByText("Estado: Inactivo")).toBeInTheDocument(),await g.click(e),await l(e).toBeChecked(),await l(t.getByText("Estado: Activo")).toBeInTheDocument(),await g.click(o),await l(e).not.toBeChecked(),await l(t.getByText("Estado: Inactivo")).toBeInTheDocument()}},p={render:()=>({components:{DuiCheckbox:c},setup(){return{values:i({neutral:!0,primary:!0,secondary:!0,success:!0,warning:!0,danger:!0})}},template:`
      <div class="dk:p-4 dk:space-y-4">
        <DuiCheckbox v-model="values.neutral" color="neutral" label="Neutral" />
        <DuiCheckbox v-model="values.primary" color="primary" label="Primary" />
        <DuiCheckbox v-model="values.secondary" color="secondary" label="Secondary" />
        <DuiCheckbox v-model="values.success" color="success" label="Success" />
        <DuiCheckbox v-model="values.warning" color="warning" label="Warning" />
        <DuiCheckbox v-model="values.danger" color="danger" label="Danger" />
      </div>
    `}),play:async({canvasElement:a})=>{const t=x(a),e=[{label:"Neutral",className:"dk:peer-checked:bg-zinc-500"},{label:"Primary",className:"dk:peer-checked:bg-slate-600"},{label:"Secondary",className:"dk:peer-checked:bg-pink-600"},{label:"Success",className:"dk:peer-checked:bg-emerald-600"},{label:"Warning",className:"dk:peer-checked:bg-amber-500"},{label:"Danger",className:"dk:peer-checked:bg-rose-600"}];for(const o of e){const k=t.getByRole("checkbox",{name:o.label}),n=k.nextElementSibling;await l(k).toBeChecked(),await l(n).not.toBeNull(),await l(n).toHaveClass(o.className)}}},h={render:()=>({components:{DuiCheckbox:c},setup(){const a=i(!1),t=i(!0),e=i(!1);return{small:a,medium:t,large:e}},template:`
      <div class="dk:p-4 dk:space-y-5">
        <DuiCheckbox v-model="small" size="sm" label="Small" />
        <DuiCheckbox v-model="medium" size="md" label="Medium" />
        <DuiCheckbox v-model="large" size="lg" label="Large" />
        <DuiCheckbox :model-value="true" disabled label="Disabled activo" />
        <DuiCheckbox :model-value="false" disabled label="Disabled inactivo" />
      </div>
    `}),play:async({canvasElement:a})=>{const t=x(a),e=t.getByRole("checkbox",{name:"Disabled activo"}),o=t.getByRole("checkbox",{name:"Disabled inactivo"});await l(e).toBeDisabled(),await l(e).toBeChecked(),await l(o).toBeDisabled(),await l(o).not.toBeChecked(),await g.click(e),await g.click(o),await l(e).toBeChecked(),await l(o).not.toBeChecked()}},v={render:()=>({components:{DuiCheckbox:c},setup(){const a=i(!0),t=i(!0);return{left:a,right:t}},template:`
      <div class="dk:p-4 dk:space-y-4">
        <DuiCheckbox v-model="right" label="Etiqueta a la derecha" label-position="right" />
        <DuiCheckbox v-model="left" label="Etiqueta a la izquierda" label-position="left" />
      </div>
    `})};var V,T,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: 'Recibir notificaciones',
    labelPosition: 'right',
    color: 'primary',
    size: 'md',
    block: false,
    rounded: 'all',
    disabled: false
  },
  render: args => ({
    components: {
      DuiCheckbox
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
        <DuiCheckbox v-bind="args" v-model="enabled" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
          Estado: {{ enabled ? 'Activo' : 'Inactivo' }}
        </p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: 'Recibir notificaciones'
    });
    const label = canvas.getByText('Recibir notificaciones');
    await expect(checkbox).not.toBeChecked();
    await expect(canvas.getByText('Estado: Inactivo')).toBeInTheDocument();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
    await expect(canvas.getByText('Estado: Activo')).toBeInTheDocument();
    await userEvent.click(label);
    await expect(checkbox).not.toBeChecked();
    await expect(canvas.getByText('Estado: Inactivo')).toBeInTheDocument();
  }
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var R,I,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiCheckbox
    },
    setup() {
      const values = ref({
        neutral: true,
        primary: true,
        secondary: true,
        success: true,
        warning: true,
        danger: true
      });
      return {
        values
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-4">
        <DuiCheckbox v-model="values.neutral" color="neutral" label="Neutral" />
        <DuiCheckbox v-model="values.primary" color="primary" label="Primary" />
        <DuiCheckbox v-model="values.secondary" color="secondary" label="Secondary" />
        <DuiCheckbox v-model="values.success" color="success" label="Success" />
        <DuiCheckbox v-model="values.warning" color="warning" label="Warning" />
        <DuiCheckbox v-model="values.danger" color="danger" label="Danger" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cases = [{
      label: 'Neutral',
      className: 'dk:peer-checked:bg-zinc-500'
    }, {
      label: 'Primary',
      className: 'dk:peer-checked:bg-slate-600'
    }, {
      label: 'Secondary',
      className: 'dk:peer-checked:bg-pink-600'
    }, {
      label: 'Success',
      className: 'dk:peer-checked:bg-emerald-600'
    }, {
      label: 'Warning',
      className: 'dk:peer-checked:bg-amber-500'
    }, {
      label: 'Danger',
      className: 'dk:peer-checked:bg-rose-600'
    }] as const;
    for (const item of cases) {
      const checkbox = canvas.getByRole('checkbox', {
        name: item.label
      });
      const track = checkbox.nextElementSibling as HTMLElement | null;
      await expect(checkbox).toBeChecked();
      await expect(track).not.toBeNull();
      await expect(track).toHaveClass(item.className);
    }
  }
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var A,L,_;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiCheckbox
    },
    setup() {
      const small = ref(false);
      const medium = ref(true);
      const large = ref(false);
      return {
        small,
        medium,
        large
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-5">
        <DuiCheckbox v-model="small" size="sm" label="Small" />
        <DuiCheckbox v-model="medium" size="md" label="Medium" />
        <DuiCheckbox v-model="large" size="lg" label="Large" />
        <DuiCheckbox :model-value="true" disabled label="Disabled activo" />
        <DuiCheckbox :model-value="false" disabled label="Disabled inactivo" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const activeDisabled = canvas.getByRole('checkbox', {
      name: 'Disabled activo'
    });
    const inactiveDisabled = canvas.getByRole('checkbox', {
      name: 'Disabled inactivo'
    });
    await expect(activeDisabled).toBeDisabled();
    await expect(activeDisabled).toBeChecked();
    await expect(inactiveDisabled).toBeDisabled();
    await expect(inactiveDisabled).not.toBeChecked();
    await userEvent.click(activeDisabled);
    await userEvent.click(inactiveDisabled);
    await expect(activeDisabled).toBeChecked();
    await expect(inactiveDisabled).not.toBeChecked();
  }
}`,...(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var j,O,M;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiCheckbox
    },
    setup() {
      const left = ref(true);
      const right = ref(true);
      return {
        left,
        right
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-4">
        <DuiCheckbox v-model="right" label="Etiqueta a la derecha" label-position="right" />
        <DuiCheckbox v-model="left" label="Etiqueta a la izquierda" label-position="left" />
      </div>
    \`
  })
}`,...(M=(O=v.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const te=["Default","Colors","SizesAndStates","LabelPositions"];export{p as Colors,m as Default,v as LabelPositions,h as SizesAndStates,te as __namedExportsOrder,ae as default};
