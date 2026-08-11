import{f as Z,n as o,s as ee,F as A,z as S,p,c as u,m as c,C as b,v as V,x as q,B as ae,u as te,r as T}from"./iframe-BtNMLuc9.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const se=["aria-label"],le=["id","aria-controls","aria-selected","disabled","onClick","onKeydown"],de={key:0,"aria-hidden":"true",class:"dk:flex-shrink-0"},re=["id","aria-labelledby","tabindex","hidden"],i=Z({__name:"DuiTabs",props:{modelValue:{},tabs:{},variant:{default:"underline"},color:{default:"primary"},size:{default:"md"},fullWidth:{type:Boolean,default:!1},ariaLabel:{default:"Tabs"}},emits:["update:modelValue","change"],setup(s,{emit:r}){const t=s,B=r,k=Math.random().toString(36).slice(2,8);function m(a,n){n||(B("update:modelValue",a),B("change",a))}function M(a,n){const e=t.tabs.filter(l=>!l.disabled).map(l=>l.value),d=e.indexOf(n);if(a.key==="ArrowRight"||a.key==="ArrowDown"){a.preventDefault();const l=e[(d+1)%e.length];m(l)}if(a.key==="ArrowLeft"||a.key==="ArrowUp"){a.preventDefault();const l=e[(d-1+e.length)%e.length];m(l)}a.key==="Home"&&(a.preventDefault(),m(e[0])),a.key==="End"&&(a.preventDefault(),m(e[e.length-1]))}const F={sm:"dk:text-xs dk:px-3 dk:py-1.5",md:"dk:text-sm dk:px-4 dk:py-2",lg:"dk:text-base dk:px-5 dk:py-2.5"},h={neutral:{underline:"dk:border-zinc-600 dk:text-zinc-700 dk:dark:border-zinc-400 dk:dark:text-zinc-200",pills:"dk:bg-zinc-600 dk:text-white dk:dark:bg-zinc-500",boxed:"dk:bg-white dk:text-zinc-700 dk:dark:bg-zinc-800 dk:dark:text-zinc-200 dk:shadow-sm"},primary:{underline:"dk:border-slate-600 dk:text-slate-700 dk:dark:border-slate-400 dk:dark:text-slate-200",pills:"dk:bg-slate-600 dk:text-white dk:dark:bg-slate-500",boxed:"dk:bg-white dk:text-slate-700 dk:dark:bg-zinc-800 dk:dark:text-slate-200 dk:shadow-sm"},secondary:{underline:"dk:border-pink-600 dk:text-pink-700 dk:dark:border-pink-400 dk:dark:text-pink-200",pills:"dk:bg-pink-600 dk:text-white dk:dark:bg-pink-500",boxed:"dk:bg-white dk:text-pink-700 dk:dark:bg-zinc-800 dk:dark:text-pink-200 dk:shadow-sm"},success:{underline:"dk:border-emerald-600 dk:text-emerald-700 dk:dark:border-emerald-400 dk:dark:text-emerald-200",pills:"dk:bg-emerald-600 dk:text-white dk:dark:bg-emerald-500",boxed:"dk:bg-white dk:text-emerald-700 dk:dark:bg-zinc-800 dk:dark:text-emerald-200 dk:shadow-sm"},warning:{underline:"dk:border-amber-500 dk:text-amber-700 dk:dark:border-amber-400 dk:dark:text-amber-200",pills:"dk:bg-amber-500 dk:text-white dk:dark:bg-amber-400",boxed:"dk:bg-white dk:text-amber-700 dk:dark:bg-zinc-800 dk:dark:text-amber-200 dk:shadow-sm"},danger:{underline:"dk:border-rose-600 dk:text-rose-700 dk:dark:border-rose-400 dk:dark:text-rose-200",pills:"dk:bg-rose-600 dk:text-white dk:dark:bg-rose-500",boxed:"dk:bg-white dk:text-rose-700 dk:dark:bg-zinc-800 dk:dark:text-rose-200 dk:shadow-sm"}},U=u(()=>"dk:w-full"),I=u(()=>{const a="dk:flex dk:items-center dk:gap-0.5",n=t.fullWidth?"dk:w-full":"",e={underline:"dk:border-b dk:border-zinc-200 dk:dark:border-zinc-700",pills:"dk:gap-1",boxed:"dk:bg-zinc-100 dk:dark:bg-zinc-800 dk:p-1 dk:rounded-xl dk:gap-1"}[t.variant];return[a,n,e].join(" ")});function Y(a,n){const e="dk:inline-flex dk:items-center dk:gap-1.5 dk:font-medium dk:transition-all dk:duration-150 dk:outline-none dk:select-none dk:rounded-t",d=F[t.size],l=t.modelValue===a,w=n?"dk:opacity-40 dk:cursor-not-allowed":"dk:cursor-pointer",D="dk:focus-visible:ring-2 dk:focus-visible:ring-offset-1 dk:focus-visible:ring-slate-400 dk:dark:focus-visible:ring-slate-500";if(t.variant==="underline"){const C=l?`dk:border-b-2 ${h[t.color].underline}`:"dk:border-b-2 dk:border-transparent dk:text-zinc-500 dk:dark:text-zinc-400 dk:hover:text-zinc-700 dk:dark:hover:text-zinc-200 dk:hover:border-zinc-300 dk:dark:hover:border-zinc-600";return[e,d,C,w,D].join(" ")}if(t.variant==="pills"){const C=l?`dk:rounded-lg ${h[t.color].pills}`:"dk:rounded-lg dk:text-zinc-500 dk:dark:text-zinc-400 dk:hover:bg-zinc-100 dk:dark:hover:bg-zinc-700 dk:hover:text-zinc-700 dk:dark:hover:text-zinc-200";return[e,d,C,w,D].join(" ")}const Q=l?`dk:rounded-lg ${h[t.color].boxed}`:"dk:rounded-lg dk:text-zinc-500 dk:dark:text-zinc-400 dk:hover:bg-black/5 dk:dark:hover:bg-white/5 dk:hover:text-zinc-700 dk:dark:hover:text-zinc-200",X=t.fullWidth?"dk:flex-1 dk:text-center dk:justify-center":"";return[e,d,Q,w,D,X].join(" ")}const G=u(()=>"dk:ml-1 dk:inline-flex dk:items-center dk:justify-center dk:rounded-full dk:bg-current/15 dk:text-current dk:text-[10px] dk:font-semibold dk:px-1.5 dk:py-px dk:leading-none"),J=u(()=>[{sm:"dk:pt-3",md:"dk:pt-4",lg:"dk:pt-5"}[t.size],"dk:outline-none"].join(" "));return(a,n)=>(c(),o("div",{class:p(U.value)},[ee("div",{class:p(I.value),role:"tablist","aria-label":s.ariaLabel},[(c(!0),o(A,null,S(s.tabs,e=>(c(),o("button",{key:e.value,type:"button",id:`tab-${b(k)}-${e.value}`,"aria-controls":`panel-${b(k)}-${e.value}`,"aria-selected":s.modelValue===e.value,disabled:e.disabled,role:"tab",class:p(Y(e.value,e.disabled)),onClick:d=>m(e.value,e.disabled),onKeydown:d=>M(d,e.value)},[e.icon?(c(),o("span",de,V(e.icon),1)):q("",!0),ae(" "+V(e.label)+" ",1),e.badge!==void 0?(c(),o("span",{key:1,class:p(G.value)},V(e.badge),3)):q("",!0)],42,le))),128))],10,se),(c(!0),o(A,null,S(s.tabs,e=>(c(),o("div",{key:e.value,id:`panel-${b(k)}-${e.value}`,"aria-labelledby":`tab-${b(k)}-${e.value}`,role:"tabpanel",tabindex:s.modelValue===e.value?0:-1,hidden:s.modelValue!==e.value,class:p(J.value)},[te(a.$slots,e.value)],10,re))),128))],2))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"DuiTabs",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"string"}},{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"DuiTab"}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"underline"'},{name:'"pills"'},{name:'"boxed"'}]},defaultValue:{func:!1,value:"'underline'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"fullWidth",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Tabs'"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"change",type:{names:["string"]}}],slots:[{name:"tab.value",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiTabs.vue"]});const{expect:v,within:ne}=__STORYBOOK_MODULE_TEST__,z=[{value:"overview",label:"Resumen"},{value:"activity",label:"Actividad"},{value:"settings",label:"Configuracion"},{value:"disabled",label:"Deshabilitado",disabled:!0}],me={title:"Elements/Tabs",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["underline","pills","boxed"],description:"Estilo visual de las tabs"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color del tab activo"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano de los tabs"},fullWidth:{control:{type:"boolean"},description:"Distribuye los tabs en todo el ancho"}},parameters:{docs:{description:{component:"Componente de tabs accesible con tres variantes (underline, pills, boxed), colores, tamanos y soporte de teclado."}}}},x={args:{modelValue:"overview",tabs:z,variant:"underline",color:"primary",size:"md",fullWidth:!1},render:s=>({components:{DuiTabs:i},setup(){const r=T(s.modelValue);return{args:s,active:r}},template:`
      <div class="dk:p-4 dk:max-w-xl">
        <DuiTabs v-bind="args" v-model="active">
          <template #overview>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Contenido del panel <strong>Resumen</strong>. Aqui va informacion general del recurso.
            </p>
          </template>
          <template #activity>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Historial de <strong>Actividad</strong> reciente del usuario o proyecto.
            </p>
          </template>
          <template #settings>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Panel de <strong>Configuracion</strong> con opciones avanzadas.
            </p>
          </template>
        </DuiTabs>
      </div>
    `}),play:async({canvasElement:s})=>{const t=ne(s).getAllByRole("tab");await v(t.length).toBe(4),await v(t[0]).toHaveAttribute("aria-selected","true"),await v(t[1]).toHaveAttribute("aria-selected","false"),await v(t[3]).toBeDisabled()}},g={args:{modelValue:"overview",tabs:z},render:()=>({components:{DuiTabs:i},setup(){return{active:T("overview"),tabs:[{value:"overview",label:"Resumen",icon:"📊"},{value:"team",label:"Equipo",icon:"👥",badge:4},{value:"docs",label:"Documentos",icon:"📄"}]}},template:`
      <div class="dk:p-4 dk:max-w-xl">
        <DuiTabs v-model="active" :tabs="tabs" variant="pills" color="secondary">
          <template #overview>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Vista de resumen con graficos y metricas.</p>
          </template>
          <template #team>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Lista de miembros del equipo.</p>
          </template>
          <template #docs>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Documentos y archivos adjuntos.</p>
          </template>
        </DuiTabs>
      </div>
    `})},f={args:{modelValue:"month",tabs:z},render:()=>({components:{DuiTabs:i},setup(){return{active:T("month"),tabs:[{value:"week",label:"Semana"},{value:"month",label:"Mes"},{value:"year",label:"Ano"}]}},template:`
      <div class="dk:p-4 dk:max-w-sm">
        <DuiTabs v-model="active" :tabs="tabs" variant="boxed" color="neutral" :full-width="true">
          <template #week>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos de la semana actual.</p>
          </template>
          <template #month>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos del mes actual.</p>
          </template>
          <template #year>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos del ano completo.</p>
          </template>
        </DuiTabs>
      </div>
    `})},y={args:{modelValue:"a",tabs:z},render:()=>({components:{DuiTabs:i},setup(){const s=[{value:"a",label:"Tab A"},{value:"b",label:"Tab B"},{value:"c",label:"Tab C"}],r=T({neutral:"a",primary:"a",secondary:"a",success:"a",warning:"a",danger:"a"});return{tabs:s,actives:r}},template:`
      <div class="dk:p-4 dk:space-y-6 dk:max-w-lg">
        <DuiTabs v-model="actives.neutral" :tabs="tabs" color="neutral" variant="underline">
          <template #a><p class="dk:text-sm">Neutral</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.primary" :tabs="tabs" color="primary" variant="underline">
          <template #a><p class="dk:text-sm">Primary</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.secondary" :tabs="tabs" color="secondary" variant="underline">
          <template #a><p class="dk:text-sm">Secondary</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.success" :tabs="tabs" color="success" variant="underline">
          <template #a><p class="dk:text-sm">Success</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.danger" :tabs="tabs" color="danger" variant="underline">
          <template #a><p class="dk:text-sm">Danger</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
      </div>
    `})};var _,$,E;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    modelValue: 'overview',
    tabs: sampleTabs,
    variant: 'underline',
    color: 'primary',
    size: 'md',
    fullWidth: false
  },
  render: args => ({
    components: {
      DuiTabs
    },
    setup() {
      const active = ref(args.modelValue);
      return {
        args,
        active
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-xl">
        <DuiTabs v-bind="args" v-model="active">
          <template #overview>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Contenido del panel <strong>Resumen</strong>. Aqui va informacion general del recurso.
            </p>
          </template>
          <template #activity>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Historial de <strong>Actividad</strong> reciente del usuario o proyecto.
            </p>
          </template>
          <template #settings>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">
              Panel de <strong>Configuracion</strong> con opciones avanzadas.
            </p>
          </template>
        </DuiTabs>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');
    await expect(tabs.length).toBe(4);
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    await expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    await expect(tabs[3]).toBeDisabled();
  }
}`,...(E=($=x.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var j,R,L;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    modelValue: 'overview',
    tabs: sampleTabs
  },
  render: () => ({
    components: {
      DuiTabs
    },
    setup() {
      const active = ref('overview');
      const tabs = [{
        value: 'overview',
        label: 'Resumen',
        icon: '📊'
      }, {
        value: 'team',
        label: 'Equipo',
        icon: '👥',
        badge: 4
      }, {
        value: 'docs',
        label: 'Documentos',
        icon: '📄'
      }];
      return {
        active,
        tabs
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-xl">
        <DuiTabs v-model="active" :tabs="tabs" variant="pills" color="secondary">
          <template #overview>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Vista de resumen con graficos y metricas.</p>
          </template>
          <template #team>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Lista de miembros del equipo.</p>
          </template>
          <template #docs>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Documentos y archivos adjuntos.</p>
          </template>
        </DuiTabs>
      </div>
    \`
  })
}`,...(L=(R=g.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var N,W,H;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: 'month',
    tabs: sampleTabs
  },
  render: () => ({
    components: {
      DuiTabs
    },
    setup() {
      const active = ref('month');
      const tabs = [{
        value: 'week',
        label: 'Semana'
      }, {
        value: 'month',
        label: 'Mes'
      }, {
        value: 'year',
        label: 'Ano'
      }];
      return {
        active,
        tabs
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-sm">
        <DuiTabs v-model="active" :tabs="tabs" variant="boxed" color="neutral" :full-width="true">
          <template #week>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos de la semana actual.</p>
          </template>
          <template #month>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos del mes actual.</p>
          </template>
          <template #year>
            <p class="dk:text-sm dk:text-zinc-600 dk:dark:text-zinc-400">Datos del ano completo.</p>
          </template>
        </DuiTabs>
      </div>
    \`
  })
}`,...(H=(W=f.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var O,P,K;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    modelValue: 'a',
    tabs: sampleTabs
  },
  render: () => ({
    components: {
      DuiTabs
    },
    setup() {
      const tabs = [{
        value: 'a',
        label: 'Tab A'
      }, {
        value: 'b',
        label: 'Tab B'
      }, {
        value: 'c',
        label: 'Tab C'
      }];
      const actives = ref({
        neutral: 'a',
        primary: 'a',
        secondary: 'a',
        success: 'a',
        warning: 'a',
        danger: 'a'
      });
      return {
        tabs,
        actives
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-6 dk:max-w-lg">
        <DuiTabs v-model="actives.neutral" :tabs="tabs" color="neutral" variant="underline">
          <template #a><p class="dk:text-sm">Neutral</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.primary" :tabs="tabs" color="primary" variant="underline">
          <template #a><p class="dk:text-sm">Primary</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.secondary" :tabs="tabs" color="secondary" variant="underline">
          <template #a><p class="dk:text-sm">Secondary</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.success" :tabs="tabs" color="success" variant="underline">
          <template #a><p class="dk:text-sm">Success</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
        <DuiTabs v-model="actives.danger" :tabs="tabs" color="danger" variant="underline">
          <template #a><p class="dk:text-sm">Danger</p></template>
          <template #b><p class="dk:text-sm">Tab B</p></template>
          <template #c><p class="dk:text-sm">Tab C</p></template>
        </DuiTabs>
      </div>
    \`
  })
}`,...(K=(P=y.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};const pe=["Default","Pills","Boxed","Colors"];export{f as Boxed,y as Colors,x as Default,g as Pills,pe as __namedExportsOrder,me as default};
