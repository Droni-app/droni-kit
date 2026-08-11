import{r as c,w as P,c as _}from"./iframe-BtNMLuc9.js";import{_ as y}from"./DuiModal-8vYVDBgN.js";import{_ as g}from"./DuiButton-DzILEqsQ.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-CqHtvVnY.js";const{expect:n,userEvent:a,waitFor:b,within:i}=__STORYBOOK_MODULE_TEST__,G={title:"Elements/Modal",component:y,tags:["autodocs"],argTypes:{modelValue:{control:{type:"boolean"},defaultValue:!1},title:{control:{type:"text"},defaultValue:"Confirmar accion"},description:{control:{type:"text"},defaultValue:"Esta accion no se puede deshacer."},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","full"],defaultValue:"md"},variant:{control:{type:"select"},options:["solid","outline","ghost"],defaultValue:"solid"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],defaultValue:"neutral"},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},showClose:{control:{type:"boolean"},defaultValue:!0},closeOnBackdrop:{control:{type:"boolean"},defaultValue:!0},closeOnEsc:{control:{type:"boolean"},defaultValue:!0},persistent:{control:{type:"boolean"},defaultValue:!1},centered:{control:{type:"boolean"},defaultValue:!0},scrollable:{control:{type:"boolean"},defaultValue:!0},blurBackdrop:{control:{type:"boolean"},defaultValue:!0},zIndex:{control:{type:"number"},defaultValue:50}}},f=o=>({components:{DuiModal:y,DuiButton:g},setup(){const t=c(!!o.modelValue),e=_(()=>{const{modelValue:l,...s}=o;return s});return P(()=>o.modelValue,l=>{t.value=!!l}),{args:o,isOpen:t,modalProps:e}},template:`
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
  `}),r={args:{modelValue:!1,title:"Confirmar accion",description:"Esta accion no se puede deshacer.",size:"md",variant:"solid",color:"neutral",rounded:"all",showClose:!0,closeOnBackdrop:!0,closeOnEsc:!0,persistent:!1,centered:!0,scrollable:!0,blurBackdrop:!0,zIndex:50},render:f,play:async({canvasElement:o})=>{const t=i(o),e=i(document.body);await a.click(t.getByRole("button",{name:"Abrir modal"})),await n(e.getByRole("dialog")).toBeInTheDocument(),await a.click(e.getByRole("button",{name:"Cancelar"})),await b(()=>{n(e.queryByRole("dialog")).not.toBeInTheDocument()})}},u={args:{...r.args,title:"Proceso en curso",description:"Este modal no se puede cerrar con backdrop ni con ESC.",persistent:!0},render:f,play:async({canvasElement:o})=>{var v;const t=i(o),e=i(document.body);await a.click(t.getByRole("button",{name:"Abrir modal"}));const l=e.getByRole("dialog");await n(l).toBeInTheDocument();const s=(v=l.parentElement)==null?void 0:v.parentElement;if(!s)throw new Error("Overlay not found for modal");await a.click(s),await n(e.getByRole("dialog")).toBeInTheDocument(),await a.keyboard("{Escape}"),await n(e.getByRole("dialog")).toBeInTheDocument(),await a.click(e.getByRole("button",{name:"Confirmar"})),await b(()=>{n(e.queryByRole("dialog")).not.toBeInTheDocument()})}},d={args:{...r.args,title:"Terminos y condiciones",description:"Ejemplo de contenido extenso.",size:"lg",scrollable:!0},render:o=>({components:{DuiModal:y,DuiButton:g},setup(){const t=c(!1),e=_(()=>{const{modelValue:l,...s}=o;return s});return{isOpen:t,modalProps:e}},template:`
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
    `})},p={args:{...r.args},render:()=>({components:{DuiModal:y,DuiButton:g},setup(){const o=c(!1),t=c(!1),e=c(!1);return{solidOpen:o,outlineOpen:t,ghostOpen:e}},template:`
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
    `})},m={args:{...r.args,persistent:!1,closeOnEsc:!0},render:f,play:async({canvasElement:o})=>{const t=i(o),e=i(document.body);await a.click(t.getByRole("button",{name:"Abrir modal"})),await n(e.getByRole("dialog")).toBeInTheDocument(),await a.keyboard("{Escape}"),await b(()=>{n(e.queryByRole("dialog")).not.toBeInTheDocument()})}};var B,D,k;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    zIndex: 50
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
}`,...(k=(D=r.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var h,w,O;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(w=u.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var E,V,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var R,x,T;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(T=(x=p.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var I,C,S;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const N=["Default","Persistent","LargeScrollable","Variants","EscapeClose"];export{r as Default,m as EscapeClose,d as LargeScrollable,u as Persistent,p as Variants,N as __namedExportsOrder,G as default};
