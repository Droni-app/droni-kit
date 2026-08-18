import{f as se,y as ee,z as ie,A as ue,s as ce,B as S,w as A,T as P,C as pe,i as y,o as i,h as k,n as b,D as j,j as m,x as ke,l as h,t as me,p as _,E as fe,r as d}from"./iframe-BX9sGRHr.js";import{_ as O}from"./DuiButton-oFhP9YFC.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-D0JCgCrd.js";const be=["aria-labelledby"],ye="dk:flex-1 dk:overflow-y-auto dk:px-5 dk:py-4",u=se({__name:"DuiDrawer",props:{modelValue:{type:Boolean,default:!1},name:{default:void 0},position:{default:"right"},size:{default:"md"},variant:{default:"solid"},color:{default:"neutral"},showClose:{type:Boolean,default:!0},closeOnBackdrop:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},blurBackdrop:{type:Boolean,default:!0},zIndex:{default:50}},emits:["update:modelValue","open","close","backdrop","escape"],setup(n,{emit:t}){const e=n,r=t,E=`dui-drawer-title-${Math.random().toString(36).slice(2,10)}`,ae={left:{sm:"dk:w-[95%] dk:md:w-16",md:"dk:w-[95%] dk:md:w-1/3",lg:"dk:w-[95%] dk:md:w-1/2",xl:"dk:w-[95%] dk:md:w-[90%]"},right:{sm:"dk:w-[95%] dk:md:w-16",md:"dk:w-[95%] dk:md:w-1/3",lg:"dk:w-[95%] dk:md:w-1/2",xl:"dk:w-[95%] dk:md:w-[90%]"},top:{sm:"dk:h-[95%] dk:md:h-16",md:"dk:h-[95%] dk:md:h-1/3",lg:"dk:h-[95%] dk:md:h-1/2",xl:"dk:h-[95%] dk:md:h-[90%]"},bottom:{sm:"dk:h-[95%] dk:md:h-16",md:"dk:h-[95%] dk:md:h-1/3",lg:"dk:h-[95%] dk:md:h-1/2",xl:"dk:h-[95%] dk:md:h-[90%]"}},ne={left:"dk:inset-y-0 dk:left-0 dk:h-full dk:rounded-r-xl",right:"dk:inset-y-0 dk:right-0 dk:h-full dk:rounded-l-xl",top:"dk:inset-x-0 dk:top-0 dk:w-full dk:rounded-b-xl",bottom:"dk:inset-x-0 dk:bottom-0 dk:w-full dk:rounded-t-xl"},D=y(()=>({enterActive:"dk:transition-transform dk:duration-300",leaveActive:"dk:transition-transform dk:duration-300",hidden:{left:"dk:-translate-x-full",right:"dk:translate-x-full",top:"dk:-translate-y-full",bottom:"dk:translate-y-full"}[e.position]})),q={solid:{base:"dk:border dk:shadow-xl",neutral:"dk:bg-white dk:text-zinc-900 dk:border-zinc-200 dk:dark:bg-zinc-900 dk:dark:text-zinc-100 dk:dark:border-zinc-700",primary:"dk:bg-slate-50 dk:text-slate-900 dk:border-slate-200 dk:dark:bg-slate-900 dk:dark:text-slate-100 dk:dark:border-slate-700",secondary:"dk:bg-pink-50 dk:text-pink-900 dk:border-pink-200 dk:dark:bg-pink-900 dk:dark:text-pink-100 dk:dark:border-pink-700",success:"dk:bg-emerald-50 dk:text-emerald-900 dk:border-emerald-200 dk:dark:bg-emerald-900 dk:dark:text-emerald-100 dk:dark:border-emerald-700",warning:"dk:bg-amber-50 dk:text-amber-900 dk:border-amber-200 dk:dark:bg-amber-900 dk:dark:text-amber-100 dk:dark:border-amber-700",danger:"dk:bg-rose-50 dk:text-rose-900 dk:border-rose-200 dk:dark:bg-rose-900 dk:dark:text-rose-100 dk:dark:border-rose-700"},outline:{base:"dk:border-2 dk:shadow-lg dk:bg-white/95 dk:dark:bg-zinc-900/95",neutral:"dk:text-zinc-900 dk:border-zinc-300 dk:dark:text-zinc-100 dk:dark:border-zinc-600",primary:"dk:text-slate-900 dk:border-slate-400 dk:dark:text-slate-100 dk:dark:border-slate-500",secondary:"dk:text-pink-900 dk:border-pink-400 dk:dark:text-pink-100 dk:dark:border-pink-500",success:"dk:text-emerald-900 dk:border-emerald-400 dk:dark:text-emerald-100 dk:dark:border-emerald-500",warning:"dk:text-amber-900 dk:border-amber-400 dk:dark:text-amber-100 dk:dark:border-amber-500",danger:"dk:text-rose-900 dk:border-rose-400 dk:dark:text-rose-100 dk:dark:border-rose-500"},ghost:{base:"dk:border dk:shadow-xl dk:backdrop-blur-md",neutral:"dk:bg-white/85 dk:text-zinc-900 dk:border-zinc-300/70 dk:dark:bg-zinc-900/75 dk:dark:text-zinc-100 dk:dark:border-zinc-600/60",primary:"dk:bg-slate-100/85 dk:text-slate-900 dk:border-slate-300/70 dk:dark:bg-slate-900/70 dk:dark:text-slate-100 dk:dark:border-slate-600/60",secondary:"dk:bg-pink-100/85 dk:text-pink-900 dk:border-pink-300/70 dk:dark:bg-pink-900/70 dk:dark:text-pink-100 dk:dark:border-pink-600/60",success:"dk:bg-emerald-100/85 dk:text-emerald-900 dk:border-emerald-300/70 dk:dark:bg-emerald-900/70 dk:dark:text-emerald-100 dk:dark:border-emerald-600/60",warning:"dk:bg-amber-100/85 dk:text-amber-900 dk:border-amber-300/70 dk:dark:bg-amber-900/70 dk:dark:text-amber-100 dk:dark:border-amber-600/60",danger:"dk:bg-rose-100/85 dk:text-rose-900 dk:border-rose-300/70 dk:dark:bg-rose-900/70 dk:dark:text-rose-100 dk:dark:border-rose-600/60"}},te=y(()=>["dk:fixed dk:inset-0 dk:bg-black/55",e.blurBackdrop?"dk:backdrop-blur-[2px]":""].join(" ")),re=y(()=>{const a=q[e.variant].base,o=q[e.variant][e.color],l=ae[e.position][e.size];return["dk:fixed dk:flex dk:flex-col dk:overflow-hidden",ne[e.position],a,o,l].join(" ")}),oe=y(()=>["dk:flex dk:items-center dk:justify-between dk:gap-3 dk:px-5 dk:py-4 dk:shrink-0","dk:border-b dk:border-current/10"].join(" ")),de=["dk:px-5 dk:py-4 dk:border-t dk:border-current/10 dk:shrink-0","dk:flex dk:items-center dk:justify-end dk:gap-2"].join(" ");function R(){if(typeof document>"u")return;const a=document.body,l=Number(a.dataset.duiDrawerCount||"0")+1;a.dataset.duiDrawerCount=String(l),l===1&&(a.style.overflow="hidden")}function I(){if(typeof document>"u")return;const a=document.body,o=Number(a.dataset.duiDrawerCount||"0"),l=Math.max(0,o-1);a.dataset.duiDrawerCount=String(l),l===0&&(a.style.overflow="")}function B(a){r("update:modelValue",!1),r("close",a)}function le(){r("backdrop"),!(e.persistent||!e.closeOnBackdrop)&&B("backdrop")}function T(a){a.key!=="Escape"||!e.modelValue||(r("escape"),!(e.persistent||!e.closeOnEsc)&&B("escape"))}return ee(()=>e.modelValue,(a,o)=>{a&&!o&&(R(),r("open")),!a&&o&&I()}),ie(()=>{e.modelValue&&R(),typeof window<"u"&&window.addEventListener("keydown",T)}),ue(()=>{e.modelValue&&I(),typeof window<"u"&&window.removeEventListener("keydown",T)}),(a,o)=>(i(),ce(pe,{to:"body"},[S(P,{"enter-active-class":"dk:transition-opacity dk:duration-200","leave-active-class":"dk:transition-opacity dk:duration-200","enter-from-class":"dk:opacity-0","leave-to-class":"dk:opacity-0"},{default:A(()=>[e.modelValue?(i(),k("div",{key:0,style:j({zIndex:String(e.zIndex)}),class:b(te.value),onClick:le},null,6)):m("",!0)]),_:1}),S(P,{"enter-active-class":D.value.enterActive,"leave-active-class":D.value.leaveActive,"enter-from-class":D.value.hidden,"leave-to-class":D.value.hidden},{default:A(()=>[e.modelValue?(i(),k("div",{key:0,style:j({zIndex:String(e.zIndex+1)}),role:"dialog","aria-modal":"true","aria-labelledby":e.name?E:void 0,class:b(re.value),onClick:o[1]||(o[1]=ke(()=>{},["stop"]))},[a.$slots.header||e.name||e.showClose?(i(),k("header",{key:0,class:b(oe.value)},[h(a.$slots,"header",{},()=>[e.name?(i(),k("h2",{key:0,id:E,class:"dk:text-lg dk:font-semibold dk:truncate"},me(e.name),1)):m("",!0)]),e.showClose?(i(),k("button",{key:0,type:"button",class:"dk:ml-auto dk:inline-flex dk:h-8 dk:w-8 dk:shrink-0 dk:items-center dk:justify-center dk:rounded dk:text-current dk:opacity-70 dk:transition-opacity dk:hover:opacity-100 dk:focus-visible:opacity-100 dk:outline-none dk:ring-2 dk:ring-current/30","aria-label":"Cerrar panel",onClick:o[0]||(o[0]=l=>B("button"))},[...o[2]||(o[2]=[_("span",{"aria-hidden":"true"},"×",-1)])])):m("",!0)],2)):m("",!0),_("section",{class:b(ye)},[h(a.$slots,"default")]),a.$slots.actions?(i(),k("footer",{key:1,class:b(fe(de))},[h(a.$slots,"actions")],2)):m("",!0)],14,be)):m("",!0)]),_:3},8,["enter-active-class","leave-active-class","enter-from-class","leave-to-class"])]))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"DuiDrawer",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"top"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'solid'"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"showClose",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnBackdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"blurBackdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"zIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"50"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"open"},{name:"close",type:{names:["union"],elements:[{name:'"button"'},{name:'"backdrop"'},{name:'"escape"'}]}},{name:"backdrop"},{name:"escape"}],slots:[{name:"header"},{name:"default"},{name:"actions"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiDrawer.vue"]});const{expect:c,userEvent:p,waitFor:C,within:f}=__STORYBOOK_MODULE_TEST__,he={title:"Elements/Drawer",component:u,tags:["autodocs"],argTypes:{modelValue:{control:{type:"boolean"},defaultValue:!1},name:{control:{type:"text"},defaultValue:"Detalle del pedido"},position:{control:{type:"select"},options:["left","right","top","bottom"],defaultValue:"right"},size:{control:{type:"select"},options:["sm","md","lg","xl"],defaultValue:"md"},variant:{control:{type:"select"},options:["solid","outline","ghost"],defaultValue:"solid"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],defaultValue:"neutral"},showClose:{control:{type:"boolean"},defaultValue:!0},closeOnBackdrop:{control:{type:"boolean"},defaultValue:!0},closeOnEsc:{control:{type:"boolean"},defaultValue:!0},persistent:{control:{type:"boolean"},defaultValue:!1},blurBackdrop:{control:{type:"boolean"},defaultValue:!0},zIndex:{control:{type:"number"},defaultValue:50}}},z=n=>({components:{DuiDrawer:u,DuiButton:O},setup(){const t=d(!!n.modelValue),e=y(()=>{const{modelValue:r,...V}=n;return V});return ee(()=>n.modelValue,r=>{t.value=!!r}),{args:n,isOpen:t,drawerProps:e}},template:`
    <div class="dk:min-h-[16rem] dk:flex dk:items-center dk:justify-center">
      <DuiButton color="primary" @click="isOpen = true">Abrir panel</DuiButton>

      <DuiDrawer
        v-model="isOpen"
        v-bind="drawerProps">
        <p class="dk:leading-relaxed">
          Este panel lateral es ideal para detalles, filtros o formularios cortos
          que no requieren abandonar el contexto de la pantalla actual.
        </p>

        <template #actions>
          <DuiButton variant="ghost" color="neutral" @click="isOpen = false">Cancelar</DuiButton>
          <DuiButton color="primary" @click="isOpen = false">Guardar</DuiButton>
        </template>
      </DuiDrawer>
    </div>
  `}),s={args:{modelValue:!1,name:"Detalle del pedido",position:"right",size:"md",variant:"solid",color:"neutral",showClose:!0,closeOnBackdrop:!0,closeOnEsc:!0,persistent:!1,blurBackdrop:!0,zIndex:50},render:z,play:async({canvasElement:n})=>{const t=f(n),e=f(document.body);await p.click(t.getByRole("button",{name:"Abrir panel"})),await c(e.getByRole("dialog")).toBeInTheDocument(),await p.click(e.getByRole("button",{name:"Cancelar"})),await C(()=>{c(e.queryByRole("dialog")).not.toBeInTheDocument()})}},g={args:{...s.args},render:()=>({components:{DuiDrawer:u,DuiButton:O},setup(){const n=d(!1),t=d(!1),e=d(!1),r=d(!1);return{leftOpen:n,rightOpen:t,topOpen:e,bottomOpen:r}},template:`
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="leftOpen = true">Izquierda</DuiButton>
        <DuiButton @click="rightOpen = true">Derecha</DuiButton>
        <DuiButton @click="topOpen = true">Arriba</DuiButton>
        <DuiButton @click="bottomOpen = true">Abajo</DuiButton>

        <DuiDrawer v-model="leftOpen" position="left" name="Panel izquierdo">
          <p>Contenido del panel que entra desde la izquierda.</p>
        </DuiDrawer>

        <DuiDrawer v-model="rightOpen" position="right" name="Panel derecho">
          <p>Contenido del panel que entra desde la derecha.</p>
        </DuiDrawer>

        <DuiDrawer v-model="topOpen" position="top" name="Panel superior">
          <p>Contenido del panel que entra desde arriba.</p>
        </DuiDrawer>

        <DuiDrawer v-model="bottomOpen" position="bottom" name="Panel inferior">
          <p>Contenido del panel que entra desde abajo.</p>
        </DuiDrawer>
      </div>
    `})},w={args:{...s.args},render:()=>({components:{DuiDrawer:u,DuiButton:O},setup(){const n=d(!1),t=d(!1),e=d(!1),r=d(!1);return{smOpen:n,mdOpen:t,lgOpen:e,xlOpen:r}},template:`
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="smOpen = true">sm (iconos)</DuiButton>
        <DuiButton @click="mdOpen = true">md (tercio)</DuiButton>
        <DuiButton @click="lgOpen = true">lg (mitad)</DuiButton>
        <DuiButton @click="xlOpen = true">xl (mayor parte)</DuiButton>

        <DuiDrawer v-model="smOpen" size="sm" :show-close="false">
          <p>🏠</p>
          <p>⚙️</p>
        </DuiDrawer>

        <DuiDrawer v-model="mdOpen" size="md" name="Tamaño md">
          <p>Cubre un tercio de la pantalla en escritorio.</p>
        </DuiDrawer>

        <DuiDrawer v-model="lgOpen" size="lg" name="Tamaño lg">
          <p>Cubre la mitad de la pantalla en escritorio.</p>
        </DuiDrawer>

        <DuiDrawer v-model="xlOpen" size="xl" name="Tamaño xl">
          <p>Cubre la mayor parte de la pantalla en escritorio.</p>
        </DuiDrawer>
      </div>
    `})},v={args:{...s.args,name:"Proceso en curso",persistent:!0},render:z,play:async({canvasElement:n})=>{const t=f(n),e=f(document.body);await p.click(t.getByRole("button",{name:"Abrir panel"}));const r=e.getByRole("dialog");await c(r).toBeInTheDocument(),await p.keyboard("{Escape}"),await c(e.getByRole("dialog")).toBeInTheDocument(),await p.click(e.getByRole("button",{name:"Guardar"})),await C(()=>{c(e.queryByRole("dialog")).not.toBeInTheDocument()})}},x={args:{...s.args,persistent:!1,closeOnEsc:!0},render:z,play:async({canvasElement:n})=>{const t=f(n),e=f(document.body);await p.click(t.getByRole("button",{name:"Abrir panel"})),await c(e.getByRole("dialog")).toBeInTheDocument(),await p.keyboard("{Escape}"),await C(()=>{c(e.queryByRole("dialog")).not.toBeInTheDocument()})}};var N,$,F;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    name: 'Detalle del pedido',
    position: 'right',
    size: 'md',
    variant: 'solid',
    color: 'neutral',
    showClose: true,
    closeOnBackdrop: true,
    closeOnEsc: true,
    persistent: false,
    blurBackdrop: true,
    zIndex: 50
  },
  render: drawerRender,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Abrir panel'
    }));
    await expect(body.getByRole('dialog')).toBeInTheDocument();
    await userEvent.click(body.getByRole('button', {
      name: 'Cancelar'
    }));
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  }
}`,...(F=($=s.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var M,G,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => ({
    components: {
      DuiDrawer,
      DuiButton
    },
    setup() {
      const leftOpen = ref(false);
      const rightOpen = ref(false);
      const topOpen = ref(false);
      const bottomOpen = ref(false);
      return {
        leftOpen,
        rightOpen,
        topOpen,
        bottomOpen
      };
    },
    template: \`
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="leftOpen = true">Izquierda</DuiButton>
        <DuiButton @click="rightOpen = true">Derecha</DuiButton>
        <DuiButton @click="topOpen = true">Arriba</DuiButton>
        <DuiButton @click="bottomOpen = true">Abajo</DuiButton>

        <DuiDrawer v-model="leftOpen" position="left" name="Panel izquierdo">
          <p>Contenido del panel que entra desde la izquierda.</p>
        </DuiDrawer>

        <DuiDrawer v-model="rightOpen" position="right" name="Panel derecho">
          <p>Contenido del panel que entra desde la derecha.</p>
        </DuiDrawer>

        <DuiDrawer v-model="topOpen" position="top" name="Panel superior">
          <p>Contenido del panel que entra desde arriba.</p>
        </DuiDrawer>

        <DuiDrawer v-model="bottomOpen" position="bottom" name="Panel inferior">
          <p>Contenido del panel que entra desde abajo.</p>
        </DuiDrawer>
      </div>
    \`
  })
}`,...(L=(G=g.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var K,U,Y;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: () => ({
    components: {
      DuiDrawer,
      DuiButton
    },
    setup() {
      const smOpen = ref(false);
      const mdOpen = ref(false);
      const lgOpen = ref(false);
      const xlOpen = ref(false);
      return {
        smOpen,
        mdOpen,
        lgOpen,
        xlOpen
      };
    },
    template: \`
      <div class="dk:flex dk:flex-wrap dk:gap-3">
        <DuiButton @click="smOpen = true">sm (iconos)</DuiButton>
        <DuiButton @click="mdOpen = true">md (tercio)</DuiButton>
        <DuiButton @click="lgOpen = true">lg (mitad)</DuiButton>
        <DuiButton @click="xlOpen = true">xl (mayor parte)</DuiButton>

        <DuiDrawer v-model="smOpen" size="sm" :show-close="false">
          <p>🏠</p>
          <p>⚙️</p>
        </DuiDrawer>

        <DuiDrawer v-model="mdOpen" size="md" name="Tamaño md">
          <p>Cubre un tercio de la pantalla en escritorio.</p>
        </DuiDrawer>

        <DuiDrawer v-model="lgOpen" size="lg" name="Tamaño lg">
          <p>Cubre la mitad de la pantalla en escritorio.</p>
        </DuiDrawer>

        <DuiDrawer v-model="xlOpen" size="xl" name="Tamaño xl">
          <p>Cubre la mayor parte de la pantalla en escritorio.</p>
        </DuiDrawer>
      </div>
    \`
  })
}`,...(Y=(U=w.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var H,J,Q;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    name: 'Proceso en curso',
    persistent: true
  },
  render: drawerRender,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Abrir panel'
    }));
    const dialog = body.getByRole('dialog');
    await expect(dialog).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(body.getByRole('dialog')).toBeInTheDocument();
    await userEvent.click(body.getByRole('button', {
      name: 'Guardar'
    }));
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  }
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var W,X,Z;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    persistent: false,
    closeOnEsc: true
  },
  render: drawerRender,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Abrir panel'
    }));
    await expect(body.getByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(body.queryByRole('dialog')).not.toBeInTheDocument();
    });
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Oe=["Default","Positions","Sizes","Persistent","EscapeClose"];export{s as Default,x as EscapeClose,v as Persistent,g as Positions,w as Sizes,Oe as __namedExportsOrder,he as default};
