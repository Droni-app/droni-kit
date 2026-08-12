import{e as te,f as l,F as ae,j as ne,p as d,h as f,o as u,s as _,u as c,t as D,i as oe,l as se,r as i}from"./iframe-DjC63Ylc.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const ie=["open"],de=["onClick"],ce={class:"dui-acc-title"},le={class:"dui-acc-panel"},w=te({__name:"DuiAccordion",props:{items:{},modelValue:{default:void 0},multiple:{type:Boolean,default:!1},variant:{default:"bordered"},color:{default:"neutral"},size:{default:"md"},flush:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(o,{emit:r}){const e=o,k=r,V=i([]);function q(){return e.modelValue===void 0?V.value:Array.isArray(e.modelValue)?e.modelValue:e.modelValue?[e.modelValue]:[]}function A(a){return q().includes(a)}function G(a,s){if(s)return;const t=q();let n;e.multiple?n=t.includes(a)?t.filter(g=>g!==a):[...t,a]:n=t.includes(a)?[]:[a],V.value=n,k("update:modelValue",e.multiple?n:n[0]??""),k("change",a)}const v={sm:{summary:"dk:px-3 dk:py-2.5 dk:text-sm dk:gap-2",content:"dk:px-3 dk:pt-0 dk:pb-3 dk:text-sm",icon:"dk:text-base",chevron:"dk:w-3.5 dk:h-3.5"},md:{summary:"dk:px-4 dk:py-3.5 dk:text-sm dk:gap-2.5",content:"dk:px-4 dk:pt-0 dk:pb-4 dk:text-sm",icon:"dk:text-lg",chevron:"dk:w-4 dk:h-4"},lg:{summary:"dk:px-5 dk:py-4 dk:text-base dk:gap-3",content:"dk:px-5 dk:pt-0 dk:pb-5 dk:text-base",icon:"dk:text-xl",chevron:"dk:w-5 dk:h-5"}},R={neutral:"dk:bg-zinc-50 dk:dark:bg-zinc-800/60",primary:"dk:bg-slate-50 dk:dark:bg-slate-800/60",secondary:"dk:bg-pink-50 dk:dark:bg-pink-900/30",success:"dk:bg-emerald-50 dk:dark:bg-emerald-900/30",warning:"dk:bg-amber-50 dk:dark:bg-amber-900/30",danger:"dk:bg-rose-50 dk:dark:bg-rose-900/30"},$={neutral:"dk:text-zinc-900 dk:dark:text-zinc-50",primary:"dk:text-slate-800 dk:dark:text-slate-100",secondary:"dk:text-pink-800 dk:dark:text-pink-100",success:"dk:text-emerald-800 dk:dark:text-emerald-100",warning:"dk:text-amber-800 dk:dark:text-amber-100",danger:"dk:text-rose-800 dk:dark:text-rose-100"},L={neutral:"dk:text-zinc-500 dk:dark:text-zinc-400",primary:"dk:text-slate-500 dk:dark:text-slate-400",secondary:"dk:text-pink-500 dk:dark:text-pink-400",success:"dk:text-emerald-500 dk:dark:text-emerald-400",warning:"dk:text-amber-500 dk:dark:text-amber-400",danger:"dk:text-rose-500 dk:dark:text-rose-400"},W=f(()=>e.variant==="separated"?"dk:flex dk:flex-col dk:gap-2":e.variant==="ghost"?"dk:divide-y dk:divide-zinc-200 dk:dark:divide-zinc-700/60":e.flush?"dk:divide-y dk:divide-zinc-200 dk:dark:divide-zinc-700":"dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:divide-y dk:divide-zinc-200 dk:dark:divide-zinc-700 dk:overflow-hidden dk:shadow-sm"),K=f(()=>e.variant==="separated"?"dk:rounded-xl dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:overflow-hidden dk:shadow-sm dk:bg-white dk:dark:bg-zinc-900":e.variant==="ghost"?"":"dk:bg-white dk:dark:bg-zinc-900");function U(a,s){const t=v[e.size],n=A(a),g=["dk:flex dk:w-full dk:items-center dk:select-none dk:outline-none","dk:transition-colors dk:duration-150",t.summary],X=n?[R[e.color],$[e.color]]:["dk:text-zinc-700 dk:dark:text-zinc-300","dk:hover:bg-zinc-50 dk:dark:hover:bg-zinc-800/50 dk:hover:text-zinc-900 dk:dark:hover:text-zinc-100"],Z="dk:focus-visible:ring-2 dk:focus-visible:ring-inset dk:focus-visible:ring-slate-400 dk:dark:focus-visible:ring-slate-500",ee=s?"dk:opacity-40 dk:cursor-not-allowed dk:pointer-events-none":"dk:cursor-pointer";return[...g,...X,Z,ee].join(" ")}function Y(a){const s=v[e.size];return["dk:flex-shrink-0 dk:transition-transform dk:duration-250 dk:ease-in-out dk:ml-auto",A(a)?"dk:rotate-180 "+L[e.color]:"dk:text-zinc-400 dk:dark:text-zinc-500",s.chevron].join(" ")}const J=f(()=>["dk:flex-shrink-0 dk:leading-none",v[e.size].icon].join(" ")),Q=f(()=>[v[e.size].content,"dk:text-zinc-600 dk:dark:text-zinc-400 dk:leading-relaxed"].join(" "));return(a,s)=>(u(),l("div",{class:d(W.value)},[(u(!0),l(ae,null,ne(o.items,(t,n)=>(u(),l("details",{key:t.value??n,open:A(t.value??String(n)),class:d(K.value),onToggle:s[0]||(s[0]=_(()=>{},["prevent"]))},[c("summary",{class:d(U(t.value??String(n),t.disabled)),onClick:_(g=>G(t.value??String(n),t.disabled),["prevent"])},[t.icon?(u(),l("span",{key:0,"aria-hidden":"true",class:d(J.value)},D(t.icon),3)):oe("",!0),c("span",ce,D(t.title),1),(u(),l("svg",{class:d(Y(t.value??String(n))),viewBox:"0 0 16 16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[...s[1]||(s[1]=[c("polyline",{points:"4 6 8 10 12 6"},null,-1)])],2))],10,de),c("div",le,[c("div",{class:d(Q.value)},[se(a.$slots,t.value??String(n),{},()=>[c("p",null,D(t.content),1)],!0)],2)])],42,ie))),128))],2))}}),p=re(w,[["__scopeId","data-v-9bd77ff3"]]);w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:"default",displayName:"DuiAccordion",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"DuiAccordionItem"}]}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"bordered"'},{name:'"separated"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'bordered'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"flush",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"change",type:{names:["string"]}}],slots:[{name:"item.value ?? String(index)",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiAccordion.vue"]});const{expect:x,userEvent:S,within:ue}=__STORYBOOK_MODULE_TEST__,m=[{value:"q1",title:"¿Como creo una cuenta nueva?",content:'Haz clic en "Registrarse" en la esquina superior derecha, completa el formulario con tu nombre, correo y contrasena, y confirma tu correo electronico.'},{value:"q2",title:"¿Cuales son los metodos de pago aceptados?",content:"Aceptamos tarjetas de credito Visa, Mastercard y American Express, ademas de PayPal y transferencia bancaria para planes anuales."},{value:"q3",title:"¿Puedo cancelar mi suscripcion en cualquier momento?",content:"Si, puedes cancelar tu suscripcion en cualquier momento desde la seccion de Configuracion > Facturacion. El acceso se mantiene hasta el fin del periodo pagado."},{value:"q4",title:"¿Hay soporte tecnico disponible?",content:"Ofrecemos soporte via chat en vivo (lunes a viernes 9-18h) y por correo electronico con tiempo de respuesta de menos de 24 horas.",disabled:!0}],ge={title:"Elements/Accordion",component:p,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["bordered","separated","ghost"],description:"Estilo visual del acordeon"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color activo"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano del acordeon"},multiple:{control:{type:"boolean"},description:"Permite abrir multiples items a la vez"},flush:{control:{type:"boolean"},description:"Elimina bordes externos (solo variante bordered)"}},parameters:{docs:{description:{component:"Acordeon accesible con soporte de apertura multiple, variantes y navegacion por teclado."}}}},b={args:{items:m,variant:"bordered",color:"neutral",size:"md",multiple:!1,flush:!1},render:o=>({components:{DuiAccordion:p},setup(){const r=i("");return{args:o,open:r}},template:`
      <div class="dk:p-4 dk:max-w-xl">
        <DuiAccordion v-bind="args" v-model="open" />
      </div>
    `}),play:async({canvasElement:o})=>{const e=ue(o).getAllByRole("button");await x(e.length).toBeGreaterThan(0),await S.click(e[0]),await x(e[0]).toHaveAttribute("aria-expanded","true"),await S.click(e[1]),await x(e[0]).toHaveAttribute("aria-expanded","false"),await x(e[1]).toHaveAttribute("aria-expanded","true")}},y={args:{items:m,modelValue:["q1"]},render:()=>({components:{DuiAccordion:p},setup(){const o=i(["q1"]),r=m.slice(0,3);return{open:o,items:r}},template:`
      <div class="dk:p-4 dk:max-w-xl">
        <p class="dk:text-xs dk:text-zinc-500 dk:mb-3">multiple: true — se pueden abrir varios a la vez</p>
        <DuiAccordion
          v-model="open"
          :items="items"
          multiple
          color="primary"
        />
      </div>
    `})},h={args:{items:m,modelValue:""},render:()=>({components:{DuiAccordion:p},setup(){const o=[{value:"a",title:"Seccion uno",content:"Contenido de la primera seccion."},{value:"b",title:"Seccion dos",content:"Contenido de la segunda seccion."}],r=i("a"),e=i(""),k=i("");return{items:o,o1:r,o2:e,o3:k}},template:`
      <div class="dk:p-4 dk:space-y-6 dk:max-w-lg">
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Bordered</p>
          <DuiAccordion v-model="o1" :items="items" variant="bordered" />
        </div>
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Separated</p>
          <DuiAccordion v-model="o2" :items="items" variant="separated" color="primary" />
        </div>
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Ghost</p>
          <DuiAccordion v-model="o3" :items="items" variant="ghost" />
        </div>
      </div>
    `})},z={args:{items:m,modelValue:""},render:()=>({components:{DuiAccordion:p},setup(){return{open:i("shipping"),items:[{value:"shipping",title:"Politica de envios",icon:"🚚",content:"Envios gratis en pedidos mayores a $50. Tiempo de entrega: 3-5 dias habiles."},{value:"returns",title:"Devoluciones y reembolsos",icon:"↩️",content:"Tienes 30 dias para devolver cualquier producto en perfectas condiciones."},{value:"privacy",title:"Privacidad de datos",icon:"🔒",content:"Tus datos personales nunca seran compartidos con terceros sin tu consentimiento."}]}},template:`
      <div class="dk:p-4 dk:max-w-lg">
        <DuiAccordion v-model="open" :items="items" variant="separated" color="primary" size="lg" />
      </div>
    `})};var C,E,T;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: faqItems,
    variant: 'bordered',
    color: 'neutral',
    size: 'md',
    multiple: false,
    flush: false
  },
  render: args => ({
    components: {
      DuiAccordion
    },
    setup() {
      const open = ref('');
      return {
        args,
        open
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-xl">
        <DuiAccordion v-bind="args" v-model="open" />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggers = canvas.getAllByRole('button');
    await expect(triggers.length).toBeGreaterThan(0);
    await userEvent.click(triggers[0]);
    await expect(triggers[0]).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(triggers[1]);
    await expect(triggers[0]).toHaveAttribute('aria-expanded', 'false');
    await expect(triggers[1]).toHaveAttribute('aria-expanded', 'true');
  }
}`,...(T=(E=b.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var B,I,M;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: faqItems,
    modelValue: ['q1']
  },
  render: () => ({
    components: {
      DuiAccordion
    },
    setup() {
      const open = ref<string[]>(['q1']);
      const items = faqItems.slice(0, 3);
      return {
        open,
        items
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-xl">
        <p class="dk:text-xs dk:text-zinc-500 dk:mb-3">multiple: true — se pueden abrir varios a la vez</p>
        <DuiAccordion
          v-model="open"
          :items="items"
          multiple
          color="primary"
        />
      </div>
    \`
  })
}`,...(M=(I=y.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var O,j,H;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: faqItems,
    modelValue: ''
  },
  render: () => ({
    components: {
      DuiAccordion
    },
    setup() {
      const items = [{
        value: 'a',
        title: 'Seccion uno',
        content: 'Contenido de la primera seccion.'
      }, {
        value: 'b',
        title: 'Seccion dos',
        content: 'Contenido de la segunda seccion.'
      }];
      const o1 = ref('a'),
        o2 = ref(''),
        o3 = ref('');
      return {
        items,
        o1,
        o2,
        o3
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-6 dk:max-w-lg">
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Bordered</p>
          <DuiAccordion v-model="o1" :items="items" variant="bordered" />
        </div>
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Separated</p>
          <DuiAccordion v-model="o2" :items="items" variant="separated" color="primary" />
        </div>
        <div>
          <p class="dk:text-xs dk:font-semibold dk:text-zinc-500 dk:mb-2">Ghost</p>
          <DuiAccordion v-model="o3" :items="items" variant="ghost" />
        </div>
      </div>
    \`
  })
}`,...(H=(j=h.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var P,N,F;z.parameters={...z.parameters,docs:{...(P=z.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: faqItems,
    modelValue: ''
  },
  render: () => ({
    components: {
      DuiAccordion
    },
    setup() {
      const open = ref('shipping');
      const items = [{
        value: 'shipping',
        title: 'Politica de envios',
        icon: '🚚',
        content: 'Envios gratis en pedidos mayores a $50. Tiempo de entrega: 3-5 dias habiles.'
      }, {
        value: 'returns',
        title: 'Devoluciones y reembolsos',
        icon: '↩️',
        content: 'Tienes 30 dias para devolver cualquier producto en perfectas condiciones.'
      }, {
        value: 'privacy',
        title: 'Privacidad de datos',
        icon: '🔒',
        content: 'Tus datos personales nunca seran compartidos con terceros sin tu consentimiento.'
      }];
      return {
        open,
        items
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-lg">
        <DuiAccordion v-model="open" :items="items" variant="separated" color="primary" size="lg" />
      </div>
    \`
  })
}`,...(F=(N=z.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const fe=["Default","Multiple","Variants","WithIcons"];export{b as Default,y as Multiple,h as Variants,z as WithIcons,fe as __namedExportsOrder,ge as default};
