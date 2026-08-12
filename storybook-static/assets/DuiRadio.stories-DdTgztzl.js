import{e as ae,f as p,p as l,C as R,t as z,i as C,F as oe,j as se,h as n,o as u,u as i,m as re,r as m}from"./iframe-DjC63Ylc.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const te=["aria-labelledby"],le=["id"],de={class:"dk:relative dk:inline-flex dk:flex-shrink-0"},ne=["name","value","checked","disabled","onChange"],t=ae({inheritAttrs:!1,__name:"DuiRadio",props:{modelValue:{default:void 0},options:{},name:{default:()=>`radio-${Math.random().toString(36).slice(2,8)}`},groupLabel:{default:void 0},color:{default:"primary"},size:{default:"md"},orientation:{default:"vertical"},block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:a}){const s=e,w=a,D=Math.random().toString(36).slice(2,8);function F(r){w("update:modelValue",r),w("change",r)}const k={sm:{radio:"dk:w-3.5 dk:h-3.5",dot:"dk:w-1.5 dk:h-1.5",label:"dk:text-xs",description:"dk:text-xs"},md:{radio:"dk:w-4 dk:h-4",dot:"dk:w-2 dk:h-2",label:"dk:text-sm",description:"dk:text-xs"},lg:{radio:"dk:w-5 dk:h-5",dot:"dk:w-2.5 dk:h-2.5",label:"dk:text-base",description:"dk:text-sm"}},N={neutral:"dk:peer-checked:border-zinc-600 dk:dark:peer-checked:border-zinc-400",primary:"dk:peer-checked:border-slate-600 dk:dark:peer-checked:border-slate-400",secondary:"dk:peer-checked:border-pink-600 dk:dark:peer-checked:border-pink-400",success:"dk:peer-checked:border-emerald-600 dk:dark:peer-checked:border-emerald-400",warning:"dk:peer-checked:border-amber-500 dk:dark:peer-checked:border-amber-400",danger:"dk:peer-checked:border-rose-600 dk:dark:peer-checked:border-rose-400"},X={neutral:"dk:peer-checked:bg-zinc-600 dk:dark:peer-checked:bg-zinc-400",primary:"dk:peer-checked:bg-slate-600 dk:dark:peer-checked:bg-slate-400",secondary:"dk:peer-checked:bg-pink-600 dk:dark:peer-checked:bg-pink-400",success:"dk:peer-checked:bg-emerald-600 dk:dark:peer-checked:bg-emerald-400",warning:"dk:peer-checked:bg-amber-500 dk:dark:peer-checked:bg-amber-400",danger:"dk:peer-checked:bg-rose-600 dk:dark:peer-checked:bg-rose-400"},H={neutral:"dk:peer-focus-visible:ring-zinc-400",primary:"dk:peer-focus-visible:ring-slate-400",secondary:"dk:peer-focus-visible:ring-pink-400",success:"dk:peer-focus-visible:ring-emerald-400",warning:"dk:peer-focus-visible:ring-amber-400",danger:"dk:peer-focus-visible:ring-rose-400"},W=n(()=>[s.orientation==="horizontal"?"dk:flex dk:flex-row dk:flex-wrap dk:gap-x-5 dk:gap-y-3":"dk:flex dk:flex-col dk:gap-3"].join(" ")),I=n(()=>"dk:block dk:text-xs dk:font-semibold dk:uppercase dk:tracking-wide dk:text-zinc-500 dk:dark:text-zinc-400 dk:mb-1");function K(r,d){const g=d||s.disabled?"dk:opacity-50 dk:cursor-not-allowed":"dk:cursor-pointer",ee=s.block?"dk:w-full dk:justify-between":"";return["dk:inline-flex dk:items-start dk:gap-3 dk:select-none",g,ee].join(" ")}function U(r){const d=k[s.size],o=N[s.color],g=H[s.color];return["dk:rounded-full dk:border-2 dk:transition-colors dk:duration-150","dk:border-zinc-300 dk:dark:border-zinc-600","dk:peer-focus-visible:outline-none dk:peer-focus-visible:ring-2 dk:peer-focus-visible:ring-offset-2","dk:bg-white dk:dark:bg-zinc-900",d.radio,o,g].join(" ")}const Y=n(()=>{const r=k[s.size],d=X[s.color];return["dk:absolute dk:inset-0 dk:m-auto dk:rounded-full dk:scale-0 dk:peer-checked:scale-100 dk:transition-transform dk:duration-150 dk:pointer-events-none",r.dot,d].join(" ")}),J=n(()=>"dk:flex dk:flex-col"),Q=n(()=>[k[s.size].label,"dk:leading-snug dk:text-zinc-800 dk:dark:text-zinc-200"].join(" ")),Z=n(()=>[k[s.size].description,"dk:leading-snug dk:text-zinc-500 dk:dark:text-zinc-400 dk:mt-0.5"].join(" "));return(r,d)=>(u(),p("div",{class:l(W.value),role:"radiogroup","aria-labelledby":e.groupLabel?`rg-label-${R(D)}`:void 0},[e.groupLabel?(u(),p("span",{key:0,id:`rg-label-${R(D)}`,class:l(I.value)},z(e.groupLabel),11,le)):C("",!0),(u(!0),p(oe,null,se(e.options,o=>(u(),p("label",{key:o.value,class:l(K(o.value,o.disabled))},[i("span",de,[i("input",re({type:"radio",class:"dk:sr-only dk:peer",name:e.name,value:o.value,checked:e.modelValue===o.value,disabled:o.disabled||e.disabled},{ref_for:!0},r.$attrs,{onChange:g=>F(o.value)}),null,16,ne),i("span",{class:l(U(o.value))},null,2),i("span",{class:l(Y.value)},null,2)]),i("span",{class:l(J.value)},[i("span",{class:l(Q.value)},z(o.label),3),o.description?(u(),p("span",{key:0,class:l(Z.value)},z(o.description),3)):C("",!0)],2)],2))),128))],10,te))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"DuiRadio",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"DuiRadioOption"}]}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"() => `radio-${Math.random().toString(36).slice(2, 8)}`"}},{name:"groupLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]},defaultValue:{func:!1,value:"'vertical'"}},{name:"block",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"change",type:{names:["string"]}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiRadio.vue"]});const{expect:b,userEvent:ie,within:ce}=__STORYBOOK_MODULE_TEST__,c=[{value:"free",label:"Gratis",description:"Hasta 3 proyectos, sin colaboradores."},{value:"pro",label:"Pro",description:"Proyectos ilimitados, hasta 5 colaboradores."},{value:"enterprise",label:"Enterprise",description:"Todo incluido + soporte dedicado."}],ke={title:"Forms/Radio",component:t,tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color del radio activo"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano del radio y etiquetas"},orientation:{control:{type:"select"},options:["vertical","horizontal"],description:"Orientacion del grupo"},block:{control:{type:"boolean"},description:"Ancho completo con label a la derecha"},disabled:{control:{type:"boolean"},description:"Deshabilita todo el grupo"}},parameters:{docs:{description:{component:"Grupo de radio buttons accesible con soporte de descripciones, orientacion y colores."}}}},v={args:{modelValue:"pro",options:c,color:"primary",size:"md",orientation:"vertical",disabled:!1},render:e=>({components:{DuiRadio:t},setup(){const a=m(e.modelValue);return{args:e,selected:a}},template:`
      <div class="dk:p-4">
        <DuiRadio v-bind="args" v-model="selected" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Seleccionado: <strong>{{ selected }}</strong></p>
      </div>
    `}),play:async({canvasElement:e})=>{const a=ce(e),s=a.getAllByRole("radio");await b(s.length).toBe(3),await b(a.getByRole("radio",{name:/Pro/i})).toBeChecked(),await ie.click(a.getByRole("radio",{name:/Gratis/i})),await b(a.getByRole("radio",{name:/Gratis/i})).toBeChecked(),await b(a.getByRole("radio",{name:/Pro/i})).not.toBeChecked()}},f={args:{modelValue:"md",options:c},render:()=>({components:{DuiRadio:t},setup(){return{size:m("md"),sizeOptions:[{value:"xs",label:"XS"},{value:"sm",label:"SM"},{value:"md",label:"MD"},{value:"lg",label:"LG"},{value:"xl",label:"XL"}]}},template:`
      <div class="dk:p-4">
        <DuiRadio v-model="size" :options="sizeOptions" orientation="horizontal" color="secondary" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Talla: <strong>{{ size }}</strong></p>
      </div>
    `})},y={args:{modelValue:"a",options:c},render:()=>({components:{DuiRadio:t},setup(){const e=[{value:"a",label:"Opcion A"},{value:"b",label:"Opcion B"}],a=m({neutral:"a",primary:"a",secondary:"a",success:"a",warning:"a",danger:"a"});return{opts:e,vals:a}},template:`
      <div class="dk:p-4 dk:grid dk:grid-cols-2 dk:gap-6 dk:max-w-md">
        <div v-for="color in ['neutral','primary','secondary','success','warning','danger']" :key="color">
          <p class="dk:text-xs dk:text-zinc-400 dk:capitalize dk:mb-2">{{ color }}</p>
          <DuiRadio v-model="vals[color]" :options="opts" :color="color" orientation="horizontal" size="sm" />
        </div>
      </div>
    `})},h={args:{modelValue:"pro",options:c},render:()=>({components:{DuiRadio:t},setup(){return{plan:m("pro"),planOptions:c}},template:`
      <div class="dk:p-4 dk:max-w-sm">
        <DuiRadio
          v-model="plan"
          :options="planOptions"
          group-label="Elige tu plan"
          color="primary"
          size="md"
        />
        <p class="dk:mt-4 dk:text-xs dk:text-zinc-500">Plan elegido: <strong class="dk:capitalize">{{ plan }}</strong></p>
      </div>
    `})},x={args:{modelValue:"a",options:c},render:()=>({components:{DuiRadio:t},setup(){const e=[{value:"a",label:"Activo"},{value:"b",label:"Deshabilitado",disabled:!0},{value:"c",label:"Activo 2"}],a=m("a");return{opts:e,val:a}},template:`
      <div class="dk:p-4">
        <DuiRadio v-model="val" :options="opts" color="primary" />
      </div>
    `})};var V,O,B;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    modelValue: 'pro',
    options: planOptions,
    color: 'primary',
    size: 'md',
    orientation: 'vertical',
    disabled: false
  },
  render: args => ({
    components: {
      DuiRadio
    },
    setup() {
      const selected = ref(args.modelValue);
      return {
        args,
        selected
      };
    },
    template: \`
      <div class="dk:p-4">
        <DuiRadio v-bind="args" v-model="selected" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Seleccionado: <strong>{{ selected }}</strong></p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    await expect(radios.length).toBe(3);
    await expect(canvas.getByRole('radio', {
      name: /Pro/i
    })).toBeChecked();
    await userEvent.click(canvas.getByRole('radio', {
      name: /Gratis/i
    }));
    await expect(canvas.getByRole('radio', {
      name: /Gratis/i
    })).toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: /Pro/i
    })).not.toBeChecked();
  }
}`,...(B=(O=v.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var S,_,L;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    modelValue: 'md',
    options: planOptions
  },
  render: () => ({
    components: {
      DuiRadio
    },
    setup() {
      const size = ref('md');
      const sizeOptions = [{
        value: 'xs',
        label: 'XS'
      }, {
        value: 'sm',
        label: 'SM'
      }, {
        value: 'md',
        label: 'MD'
      }, {
        value: 'lg',
        label: 'LG'
      }, {
        value: 'xl',
        label: 'XL'
      }];
      return {
        size,
        sizeOptions
      };
    },
    template: \`
      <div class="dk:p-4">
        <DuiRadio v-model="size" :options="sizeOptions" orientation="horizontal" color="secondary" />
        <p class="dk:mt-3 dk:text-sm dk:text-zinc-500">Talla: <strong>{{ size }}</strong></p>
      </div>
    \`
  })
}`,...(L=(_=f.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var M,A,E;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    modelValue: 'a',
    options: planOptions
  },
  render: () => ({
    components: {
      DuiRadio
    },
    setup() {
      const opts = [{
        value: 'a',
        label: 'Opcion A'
      }, {
        value: 'b',
        label: 'Opcion B'
      }];
      const vals = ref({
        neutral: 'a',
        primary: 'a',
        secondary: 'a',
        success: 'a',
        warning: 'a',
        danger: 'a'
      });
      return {
        opts,
        vals
      };
    },
    template: \`
      <div class="dk:p-4 dk:grid dk:grid-cols-2 dk:gap-6 dk:max-w-md">
        <div v-for="color in ['neutral','primary','secondary','success','warning','danger']" :key="color">
          <p class="dk:text-xs dk:text-zinc-400 dk:capitalize dk:mb-2">{{ color }}</p>
          <DuiRadio v-model="vals[color]" :options="opts" :color="color" orientation="horizontal" size="sm" />
        </div>
      </div>
    \`
  })
}`,...(E=(A=y.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var q,j,P;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    modelValue: 'pro',
    options: planOptions
  },
  render: () => ({
    components: {
      DuiRadio
    },
    setup() {
      const plan = ref('pro');
      return {
        plan,
        planOptions
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-sm">
        <DuiRadio
          v-model="plan"
          :options="planOptions"
          group-label="Elige tu plan"
          color="primary"
          size="md"
        />
        <p class="dk:mt-4 dk:text-xs dk:text-zinc-500">Plan elegido: <strong class="dk:capitalize">{{ plan }}</strong></p>
      </div>
    \`
  })
}`,...(P=(j=h.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var T,G,$;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    modelValue: 'a',
    options: planOptions
  },
  render: () => ({
    components: {
      DuiRadio
    },
    setup() {
      const opts = [{
        value: 'a',
        label: 'Activo'
      }, {
        value: 'b',
        label: 'Deshabilitado',
        disabled: true
      }, {
        value: 'c',
        label: 'Activo 2'
      }];
      const val = ref('a');
      return {
        opts,
        val
      };
    },
    template: \`
      <div class="dk:p-4">
        <DuiRadio v-model="val" :options="opts" color="primary" />
      </div>
    \`
  })
}`,...($=(G=x.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};const ge=["Default","Horizontal","Colors","WithDescriptions","Disabled"];export{y as Colors,v as Default,x as Disabled,f as Horizontal,h as WithDescriptions,ge as __namedExportsOrder,ke as default};
