import{f as se,y as W,z as ie,A as ue,s as ce,B as pe,w as me,T as ke,C as fe,o as p,h as k,n as f,D as be,p as v,x as ye,l as O,t as T,j as b,i as s,r as x}from"./iframe-BX9sGRHr.js";import{_ as E}from"./DuiButton-oFhP9YFC.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-D0JCgCrd.js";const ge=["aria-labelledby","aria-describedby"],m=se({__name:"DuiModal",props:{modelValue:{type:Boolean,default:!1},title:{default:void 0},description:{default:void 0},size:{default:"md"},variant:{default:"solid"},color:{default:"neutral"},rounded:{default:"all"},showClose:{type:Boolean,default:!0},closeOnBackdrop:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},centered:{type:Boolean,default:!0},scrollable:{type:Boolean,default:!0},blurBackdrop:{type:Boolean,default:!0},zIndex:{default:60}},emits:["update:modelValue","open","close","backdrop","escape"],setup(a,{emit:o}){const e=a,r=o,l=Math.random().toString(36).slice(2,10),g=`dui-modal-title-${l}`,z=`dui-modal-description-${l}`,X={all:"dk:rounded-xl",top:"dk:rounded-t-xl",bottom:"dk:rounded-b-xl",left:"dk:rounded-l-xl",right:"dk:rounded-r-xl",none:"dk:rounded-none"},Z={xs:"dk:w-full dk:max-w-xs",sm:"dk:w-full dk:max-w-md",md:"dk:w-full dk:max-w-xl",lg:"dk:w-full dk:max-w-3xl",xl:"dk:w-full dk:max-w-5xl",full:"dk:h-[calc(100vh-2rem)] dk:w-[calc(100vw-2rem)] dk:max-w-none"},R={solid:{base:"dk:border dk:shadow-xl",neutral:"dk:bg-white dk:text-zinc-900 dk:border-zinc-200 dk:dark:bg-zinc-900 dk:dark:text-zinc-100 dk:dark:border-zinc-700",primary:"dk:bg-slate-50 dk:text-slate-900 dk:border-slate-200 dk:dark:bg-slate-900 dk:dark:text-slate-100 dk:dark:border-slate-700",secondary:"dk:bg-pink-50 dk:text-pink-900 dk:border-pink-200 dk:dark:bg-pink-900 dk:dark:text-pink-100 dk:dark:border-pink-700",success:"dk:bg-emerald-50 dk:text-emerald-900 dk:border-emerald-200 dk:dark:bg-emerald-900 dk:dark:text-emerald-100 dk:dark:border-emerald-700",warning:"dk:bg-amber-50 dk:text-amber-900 dk:border-amber-200 dk:dark:bg-amber-900 dk:dark:text-amber-100 dk:dark:border-amber-700",danger:"dk:bg-rose-50 dk:text-rose-900 dk:border-rose-200 dk:dark:bg-rose-900 dk:dark:text-rose-100 dk:dark:border-rose-700"},outline:{base:"dk:border-2 dk:shadow-lg dk:bg-white/95 dk:dark:bg-zinc-900/95",neutral:"dk:text-zinc-900 dk:border-zinc-300 dk:dark:text-zinc-100 dk:dark:border-zinc-600",primary:"dk:text-slate-900 dk:border-slate-400 dk:dark:text-slate-100 dk:dark:border-slate-500",secondary:"dk:text-pink-900 dk:border-pink-400 dk:dark:text-pink-100 dk:dark:border-pink-500",success:"dk:text-emerald-900 dk:border-emerald-400 dk:dark:text-emerald-100 dk:dark:border-emerald-500",warning:"dk:text-amber-900 dk:border-amber-400 dk:dark:text-amber-100 dk:dark:border-amber-500",danger:"dk:text-rose-900 dk:border-rose-400 dk:dark:text-rose-100 dk:dark:border-rose-500"},ghost:{base:"dk:border dk:shadow-xl dk:backdrop-blur-md",neutral:"dk:bg-white/85 dk:text-zinc-900 dk:border-zinc-300/70 dk:dark:bg-zinc-900/75 dk:dark:text-zinc-100 dk:dark:border-zinc-600/60",primary:"dk:bg-slate-100/85 dk:text-slate-900 dk:border-slate-300/70 dk:dark:bg-slate-900/70 dk:dark:text-slate-100 dk:dark:border-slate-600/60",secondary:"dk:bg-pink-100/85 dk:text-pink-900 dk:border-pink-300/70 dk:dark:bg-pink-900/70 dk:dark:text-pink-100 dk:dark:border-pink-600/60",success:"dk:bg-emerald-100/85 dk:text-emerald-900 dk:border-emerald-300/70 dk:dark:bg-emerald-900/70 dk:dark:text-emerald-100 dk:dark:border-emerald-600/60",warning:"dk:bg-amber-100/85 dk:text-amber-900 dk:border-amber-300/70 dk:dark:bg-amber-900/70 dk:dark:text-amber-100 dk:dark:border-amber-600/60",danger:"dk:bg-rose-100/85 dk:text-rose-900 dk:border-rose-300/70 dk:dark:bg-rose-900/70 dk:dark:text-rose-100 dk:dark:border-rose-600/60"}},ee=s(()=>["dk:fixed dk:inset-0 dk:bg-black/55",e.blurBackdrop?"dk:backdrop-blur-[2px]":""].join(" ")),te=s(()=>["dk:flex dk:min-h-full dk:w-full dk:p-4",e.centered?"dk:items-center":"dk:items-start dk:pt-8","dk:justify-center"].join(" ")),ae=s(()=>{const t=R[e.variant].base,n=R[e.variant][e.color],d=X[e.rounded],de=Z[e.size];return["dk:relative dk:flex dk:flex-col dk:overflow-hidden",t,n,d,de].join(" ")}),oe=s(()=>["dk:flex dk:items-start dk:justify-between dk:gap-3 dk:px-5 dk:pt-5 dk:pb-3","dk:border-b dk:border-current/10"].join(" ")),ne=s(()=>["dk:px-5 dk:py-4",e.scrollable?"dk:max-h-[65vh] dk:overflow-y-auto":""].join(" ")),re=s(()=>["dk:px-5 dk:py-4 dk:border-t dk:border-current/10","dk:flex dk:items-center dk:justify-end dk:gap-2"].join(" "));function I(){if(typeof document>"u")return;const t=document.body,d=Number(t.dataset.duiModalCount||"0")+1;t.dataset.duiModalCount=String(d),d===1&&(t.style.overflow="hidden")}function q(){if(typeof document>"u")return;const t=document.body,n=Number(t.dataset.duiModalCount||"0"),d=Math.max(0,n-1);t.dataset.duiModalCount=String(d),d===0&&(t.style.overflow="")}function V(t){r("update:modelValue",!1),r("close",t)}function le(){r("backdrop"),!(e.persistent||!e.closeOnBackdrop)&&V("backdrop")}function S(t){t.key!=="Escape"||!e.modelValue||(r("escape"),!(e.persistent||!e.closeOnEsc)&&V("escape"))}return W(()=>e.modelValue,(t,n)=>{t&&!n&&(I(),r("open")),!t&&n&&q()}),ie(()=>{e.modelValue&&I(),typeof window<"u"&&window.addEventListener("keydown",S)}),ue(()=>{e.modelValue&&q(),typeof window<"u"&&window.removeEventListener("keydown",S)}),(t,n)=>(p(),ce(fe,{to:"body"},[pe(ke,{"enter-active-class":"dk:transition-opacity dk:duration-200","leave-active-class":"dk:transition-opacity dk:duration-200","enter-from-class":"dk:opacity-0","leave-to-class":"dk:opacity-0"},{default:me(()=>[e.modelValue?(p(),k("div",{key:0,style:be({zIndex:String(e.zIndex)}),class:f(ee.value),onClick:le},[v("div",{class:f(te.value)},[v("div",{role:"dialog","aria-modal":"true","aria-labelledby":e.title?g:void 0,"aria-describedby":e.description?z:void 0,class:f(ae.value),onClick:n[1]||(n[1]=ye(()=>{},["stop"]))},[t.$slots.header||e.title||e.description||e.showClose?(p(),k("header",{key:0,class:f(oe.value)},[v("div",null,[O(t.$slots,"header",{},()=>[e.title?(p(),k("h2",{key:0,id:g,class:"dk:text-lg dk:font-semibold"},T(e.title),1)):b("",!0),e.description?(p(),k("p",{key:1,id:z,class:"dk:mt-1 dk:text-sm dk:opacity-80"},T(e.description),1)):b("",!0)])]),e.showClose?(p(),k("button",{key:0,type:"button",class:"dk:inline-flex dk:h-8 dk:w-8 dk:items-center dk:justify-center dk:rounded dk:text-current dk:opacity-70 dk:transition-opacity dk:hover:opacity-100 dk:focus-visible:opacity-100 dk:outline-none dk:ring-2 dk:ring-current/30","aria-label":"Cerrar modal",onClick:n[0]||(n[0]=d=>V("button"))},[...n[2]||(n[2]=[v("span",{"aria-hidden":"true"},"×",-1)])])):b("",!0)],2)):b("",!0),v("section",{class:f(ne.value)},[O(t.$slots,"default")],2),t.$slots.footer?(p(),k("footer",{key:1,class:f(re.value)},[O(t.$slots,"footer")],2)):b("",!0)],10,ge)],2)],6)):b("",!0)]),_:3})]))}});m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"DuiModal",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'solid'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"all"'},{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'},{name:'"none"'}]},defaultValue:{func:!1,value:"'all'"}},{name:"showClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnBackdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"centered",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"scrollable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"blurBackdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"zIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"60"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"open"},{name:"close",type:{names:["union"],elements:[{name:'"button"'},{name:'"backdrop"'},{name:'"escape"'}]}},{name:"backdrop"},{name:"escape"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiModal.vue"]});const{expect:i,userEvent:u,waitFor:C,within:y}=__STORYBOOK_MODULE_TEST__,De={title:"Elements/Modal",component:m,tags:["autodocs"],argTypes:{modelValue:{control:{type:"boolean"},defaultValue:!1},title:{control:{type:"text"},defaultValue:"Confirmar accion"},description:{control:{type:"text"},defaultValue:"Esta accion no se puede deshacer."},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","full"],defaultValue:"md"},variant:{control:{type:"select"},options:["solid","outline","ghost"],defaultValue:"solid"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],defaultValue:"neutral"},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},showClose:{control:{type:"boolean"},defaultValue:!0},closeOnBackdrop:{control:{type:"boolean"},defaultValue:!0},closeOnEsc:{control:{type:"boolean"},defaultValue:!0},persistent:{control:{type:"boolean"},defaultValue:!1},centered:{control:{type:"boolean"},defaultValue:!0},scrollable:{control:{type:"boolean"},defaultValue:!0},blurBackdrop:{control:{type:"boolean"},defaultValue:!0},zIndex:{control:{type:"number"},defaultValue:60}}},M=a=>({components:{DuiModal:m,DuiButton:E},setup(){const o=x(!!a.modelValue),e=s(()=>{const{modelValue:r,...l}=a;return l});return W(()=>a.modelValue,r=>{o.value=!!r}),{args:a,isOpen:o,modalProps:e}},template:`
    <div class="dk:min-h-[16rem] dk:flex dk:items-center dk:justify-center">
      <DuiButton color="primary" @click="isOpen = true">Abrir modal</DuiButton>

      <DuiModal
        v-model="isOpen"
        v-bind="modalProps">
        <p class="dk:leading-relaxed">
          Este modal esta pensado para reutilizarse en confirmaciones, formularios cortos,
          vistas de detalle y cualquier flujo que necesite foco temporal.
        </p>

        <template #footer>
          <DuiButton variant="ghost" color="neutral" @click="isOpen = false">Cancelar</DuiButton>
          <DuiButton color="primary" @click="isOpen = false">Confirmar</DuiButton>
        </template>
      </DuiModal>
    </div>
  `}),c={args:{modelValue:!1,title:"Confirmar accion",description:"Esta accion no se puede deshacer.",size:"md",variant:"solid",color:"neutral",rounded:"all",showClose:!0,closeOnBackdrop:!0,closeOnEsc:!0,persistent:!1,centered:!0,scrollable:!0,blurBackdrop:!0,zIndex:60},render:M,play:async({canvasElement:a})=>{const o=y(a),e=y(document.body);await u.click(o.getByRole("button",{name:"Abrir modal"})),await i(e.getByRole("dialog")).toBeInTheDocument(),await u.click(e.getByRole("button",{name:"Cancelar"})),await C(()=>{i(e.queryByRole("dialog")).not.toBeInTheDocument()})}},B={args:{...c.args,title:"Proceso en curso",description:"Este modal no se puede cerrar con backdrop ni con ESC.",persistent:!0},render:M,play:async({canvasElement:a})=>{var g;const o=y(a),e=y(document.body);await u.click(o.getByRole("button",{name:"Abrir modal"}));const r=e.getByRole("dialog");await i(r).toBeInTheDocument();const l=(g=r.parentElement)==null?void 0:g.parentElement;if(!l)throw new Error("Overlay not found for modal");await u.click(l),await i(e.getByRole("dialog")).toBeInTheDocument(),await u.keyboard("{Escape}"),await i(e.getByRole("dialog")).toBeInTheDocument(),await u.click(e.getByRole("button",{name:"Confirmar"})),await C(()=>{i(e.queryByRole("dialog")).not.toBeInTheDocument()})}},w={args:{...c.args,title:"Terminos y condiciones",description:"Ejemplo de contenido extenso.",size:"lg",scrollable:!0},render:a=>({components:{DuiModal:m,DuiButton:E},setup(){const o=x(!1),e=s(()=>{const{modelValue:r,...l}=a;return l});return{isOpen:o,modalProps:e}},template:`
      <div class="dk:min-h-[16rem] dk:flex dk:items-center dk:justify-center">
        <DuiButton color="secondary" @click="isOpen = true">Ver contenido largo</DuiButton>

        <DuiModal v-model="isOpen" v-bind="modalProps">
          <div class="dk:space-y-4">
            <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>2. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
            <p>3. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>4. Cras mattis consectetur purus sit amet fermentum.</p>
            <p>5. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>6. Maecenas faucibus mollis interdum.</p>
            <p>7. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>8. Sed posuere consectetur est at lobortis.</p>
            <p>9. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <p>10. Nulla vitae elit libero, a pharetra augue.</p>
            <p>11. Vestibulum id ligula porta felis euismod semper.</p>
            <p>12. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>

          <template #footer>
            <DuiButton color="primary" @click="isOpen = false">Aceptar</DuiButton>
          </template>
        </DuiModal>
      </div>
    `})},h={args:{...c.args},render:()=>({components:{DuiModal:m,DuiButton:E},setup(){const a=x(!1),o=x(!1),e=x(!1);return{solidOpen:a,outlineOpen:o,ghostOpen:e}},template:`
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="solidOpen = true">Solid</DuiButton>
        <DuiButton variant="outline" @click="outlineOpen = true">Outline</DuiButton>
        <DuiButton variant="ghost" @click="ghostOpen = true">Ghost</DuiButton>

        <DuiModal v-model="solidOpen" title="Solid" description="Variante solida" variant="solid" color="primary">
          <p>Modal con fondo solido y contraste alto.</p>
        </DuiModal>

        <DuiModal v-model="outlineOpen" title="Outline" description="Variante con borde" variant="outline" color="success">
          <p>Modal con presencia visual basada en borde.</p>
        </DuiModal>

        <DuiModal v-model="ghostOpen" title="Ghost" description="Variante translúcida" variant="ghost" color="secondary" blur-backdrop>
          <p>Modal con look translúcido para contextos modernos.</p>
        </DuiModal>
      </div>
    `})},D={args:{...c.args,persistent:!1,closeOnEsc:!0},render:M,play:async({canvasElement:a})=>{const o=y(a),e=y(document.body);await u.click(o.getByRole("button",{name:"Abrir modal"})),await i(e.getByRole("dialog")).toBeInTheDocument(),await u.keyboard("{Escape}"),await C(()=>{i(e.queryByRole("dialog")).not.toBeInTheDocument()})}};var j,P,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    title: 'Confirmar accion',
    description: 'Esta accion no se puede deshacer.',
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    rounded: 'all',
    showClose: true,
    closeOnBackdrop: true,
    closeOnEsc: true,
    persistent: false,
    centered: true,
    scrollable: true,
    blurBackdrop: true,
    zIndex: 60
  },
  render: modalRender,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Abrir modal'
    }));
    await expect(body.getByRole('dialog')).toBeInTheDocument();
    await userEvent.click(body.getByRole('button', {
      name: 'Cancelar'
    }));
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var A,N,$;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Proceso en curso',
    description: 'Este modal no se puede cerrar con backdrop ni con ESC.',
    persistent: true
  },
  render: modalRender,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Abrir modal'
    }));
    const dialog = body.getByRole('dialog');
    await expect(dialog).toBeInTheDocument();
    const overlay = dialog.parentElement?.parentElement;
    if (!overlay) {
      throw new Error('Overlay not found for modal');
    }
    await userEvent.click(overlay);
    await expect(body.getByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(body.getByRole('dialog')).toBeInTheDocument();
    await userEvent.click(body.getByRole('button', {
      name: 'Confirmar'
    }));
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  }
}`,...($=(N=B.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var L,F,G;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Terminos y condiciones',
    description: 'Ejemplo de contenido extenso.',
    size: 'lg',
    scrollable: true
  },
  render: (args: any) => ({
    components: {
      DuiModal,
      DuiButton
    },
    setup() {
      const isOpen = ref(false);
      const modalProps = computed(() => {
        const {
          modelValue,
          ...rest
        } = args;
        return rest;
      });
      return {
        isOpen,
        modalProps
      };
    },
    template: \`
      <div class="dk:min-h-[16rem] dk:flex dk:items-center dk:justify-center">
        <DuiButton color="secondary" @click="isOpen = true">Ver contenido largo</DuiButton>

        <DuiModal v-model="isOpen" v-bind="modalProps">
          <div class="dk:space-y-4">
            <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>2. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
            <p>3. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>4. Cras mattis consectetur purus sit amet fermentum.</p>
            <p>5. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>6. Maecenas faucibus mollis interdum.</p>
            <p>7. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>8. Sed posuere consectetur est at lobortis.</p>
            <p>9. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <p>10. Nulla vitae elit libero, a pharetra augue.</p>
            <p>11. Vestibulum id ligula porta felis euismod semper.</p>
            <p>12. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>

          <template #footer>
            <DuiButton color="primary" @click="isOpen = false">Aceptar</DuiButton>
          </template>
        </DuiModal>
      </div>
    \`
  })
}`,...(G=(F=w.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,U,Y;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => ({
    components: {
      DuiModal,
      DuiButton
    },
    setup() {
      const solidOpen = ref(false);
      const outlineOpen = ref(false);
      const ghostOpen = ref(false);
      return {
        solidOpen,
        outlineOpen,
        ghostOpen
      };
    },
    template: \`
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="solidOpen = true">Solid</DuiButton>
        <DuiButton variant="outline" @click="outlineOpen = true">Outline</DuiButton>
        <DuiButton variant="ghost" @click="ghostOpen = true">Ghost</DuiButton>

        <DuiModal v-model="solidOpen" title="Solid" description="Variante solida" variant="solid" color="primary">
          <p>Modal con fondo solido y contraste alto.</p>
        </DuiModal>

        <DuiModal v-model="outlineOpen" title="Outline" description="Variante con borde" variant="outline" color="success">
          <p>Modal con presencia visual basada en borde.</p>
        </DuiModal>

        <DuiModal v-model="ghostOpen" title="Ghost" description="Variante translúcida" variant="ghost" color="secondary" blur-backdrop>
          <p>Modal con look translúcido para contextos modernos.</p>
        </DuiModal>
      </div>
    \`
  })
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var H,J,Q;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    persistent: false,
    closeOnEsc: true
  },
  render: modalRender,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Abrir modal'
    }));
    await expect(body.getByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  }
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ve=["Default","Persistent","LargeScrollable","Variants","EscapeClose"];export{c as Default,D as EscapeClose,w as LargeScrollable,B as Persistent,h as Variants,Ve as __namedExportsOrder,De as default};
