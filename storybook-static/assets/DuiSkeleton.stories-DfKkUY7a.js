import{f as N,n as P,q as R,p as j,c as u,m as I,r as A}from"./iframe-BtNMLuc9.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const k=N({__name:"DuiSkeleton",props:{variant:{default:"text"},width:{default:void 0},height:{default:void 0},animation:{default:"pulse"}},setup(d){const e=d;function c(n){if(n!==void 0)return typeof n=="number"?`${n}px`:n}const V=u(()=>({width:c(e.width),height:c(e.height)})),B={pulse:"dui-skeleton-pulse",wave:"dui-skeleton-wave",none:""},L={text:"dk:block dk:h-4 dk:w-full dk:rounded",circular:"dk:block dk:w-10 dk:h-10 dk:rounded-full",rectangular:"dk:block dk:w-full dk:h-20 dk:rounded-none",rounded:"dk:block dk:w-full dk:h-20 dk:rounded-xl"},M=u(()=>["dk:bg-zinc-200 dk:dark:bg-zinc-700",L[e.variant],B[e.animation]].join(" "));return(n,H)=>(I(),P("span",{class:j(M.value),style:R(V.value),"aria-hidden":"true",role:"presentation"},null,6))}}),t=F(k,[["__scopeId","data-v-8c9c6005"]]);k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:"default",displayName:"DuiSkeleton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"circular"'},{name:'"rectangular"'},{name:'"rounded"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"width",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}},{name:"height",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"undefined"}},{name:"animation",required:!1,type:{name:"union",elements:[{name:'"pulse"'},{name:'"wave"'},{name:'"none"'}]},defaultValue:{func:!1,value:"'pulse'"}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiSkeleton.vue"]});const{expect:p}=__STORYBOOK_MODULE_TEST__,G={title:"Elements/Skeleton",component:t,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["text","circular","rectangular","rounded"],description:"Forma del skeleton"},width:{control:{type:"text"},description:"Ancho (px, %, rem…)"},height:{control:{type:"text"},description:"Alto (px, %, rem…)"},animation:{control:{type:"select"},options:["pulse","wave","none"],description:"Tipo de animacion"}},parameters:{docs:{description:{component:"Skeleton loader para estados de carga. Soporta multiples formas y animaciones."}}}},a={args:{variant:"text",animation:"pulse"},render:d=>({components:{DuiSkeleton:t},setup(){return{args:d}},template:'<div class="dk:p-4 dk:w-64"><DuiSkeleton v-bind="args" /></div>'}),play:async({canvasElement:d})=>{const e=d.querySelector('[aria-hidden="true"]');await p(e).not.toBeNull(),await p(e).toHaveClass("dk:animate-pulse")}},i={render:()=>({components:{DuiSkeleton:t},template:`
      <div class="dk:p-4 dk:space-y-4 dk:max-w-sm">
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Text</p>
          <DuiSkeleton variant="text" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Circular</p>
          <DuiSkeleton variant="circular" width="48" height="48" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Rectangular</p>
          <DuiSkeleton variant="rectangular" height="80" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Rounded</p>
          <DuiSkeleton variant="rounded" height="80" />
        </div>
      </div>
    `})},r={render:()=>({components:{DuiSkeleton:t},template:`
      <div class="dk:p-4 dk:max-w-sm">
        <div class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:p-4 dk:space-y-4">
          <DuiSkeleton variant="rounded" height="160" />
          <div class="dk:flex dk:items-center dk:gap-3">
            <DuiSkeleton variant="circular" width="40" height="40" />
            <div class="dk:flex-1 dk:space-y-2">
              <DuiSkeleton variant="text" width="60%" />
              <DuiSkeleton variant="text" width="40%" />
            </div>
          </div>
          <div class="dk:space-y-2">
            <DuiSkeleton variant="text" />
            <DuiSkeleton variant="text" />
            <DuiSkeleton variant="text" width="75%" />
          </div>
        </div>
      </div>
    `})},o={render:()=>({components:{DuiSkeleton:t},template:`
      <div class="dk:p-4 dk:max-w-sm dk:space-y-3">
        <div v-for="i in 4" :key="i" class="dk:flex dk:items-center dk:gap-3">
          <DuiSkeleton variant="circular" width="40" height="40" />
          <div class="dk:flex-1 dk:space-y-2">
            <DuiSkeleton variant="text" :width="i % 2 === 0 ? '70%' : '55%'" />
            <DuiSkeleton variant="text" width="40%" />
          </div>
        </div>
      </div>
    `})},s={render:()=>({components:{DuiSkeleton:t},template:`
      <div class="dk:p-4 dk:max-w-2xl">
        <div class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:overflow-hidden">
          <div class="dk:grid dk:grid-cols-4 dk:gap-4 dk:p-3 dk:border-b dk:border-zinc-200 dk:dark:border-zinc-700">
            <DuiSkeleton v-for="i in 4" :key="i" variant="text" height="12" />
          </div>
          <div v-for="row in 5" :key="row" class="dk:grid dk:grid-cols-4 dk:gap-4 dk:p-3 dk:border-b dk:border-zinc-100 dk:dark:border-zinc-800 last:border-0">
            <DuiSkeleton v-for="col in 4" :key="col" variant="text" :width="col === 1 ? '80%' : '60%'" />
          </div>
        </div>
      </div>
    `})},l={render:()=>({components:{DuiSkeleton:t},setup(){return{loading:A(!0)}},template:`
      <div class="dk:p-4 dk:max-w-sm dk:space-y-4">
        <button
          class="dk:px-3 dk:py-1.5 dk:text-sm dk:rounded-lg dk:bg-slate-600 dk:text-white dk:hover:bg-slate-700 dk:transition-colors"
          @click="loading = !loading">
          {{ loading ? 'Mostrar contenido' : 'Mostrar skeleton' }}
        </button>

        <div v-if="loading" class="dk:space-y-2">
          <DuiSkeleton variant="rounded" height="120" />
          <DuiSkeleton variant="text" />
          <DuiSkeleton variant="text" width="70%" />
        </div>
        <div v-else class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:p-4 dk:space-y-2">
          <div class="dk:bg-slate-100 dk:dark:bg-slate-800 dk:rounded-lg dk:h-[120px] dk:flex dk:items-center dk:justify-center dk:text-zinc-400">
            Imagen del producto
          </div>
          <p class="dk:text-sm dk:font-semibold dk:text-zinc-900 dk:dark:text-zinc-100">Producto Premium</p>
          <p class="dk:text-xs dk:text-zinc-500">Descripcion breve del producto seleccionado.</p>
        </div>
      </div>
    `})};var v,m,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    animation: 'pulse'
  },
  render: args => ({
    components: {
      DuiSkeleton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="dk:p-4 dk:w-64"><DuiSkeleton v-bind="args" /></div>\`
  }),
  play: async ({
    canvasElement
  }) => {
    const skeleton = canvasElement.querySelector('[aria-hidden="true"]');
    await expect(skeleton).not.toBeNull();
    await expect(skeleton).toHaveClass('dk:animate-pulse');
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,h,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSkeleton
    },
    template: \`
      <div class="dk:p-4 dk:space-y-4 dk:max-w-sm">
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Text</p>
          <DuiSkeleton variant="text" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Circular</p>
          <DuiSkeleton variant="circular" width="48" height="48" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Rectangular</p>
          <DuiSkeleton variant="rectangular" height="80" />
        </div>
        <div>
          <p class="dk:text-xs dk:text-zinc-400 dk:mb-1">Rounded</p>
          <DuiSkeleton variant="rounded" height="80" />
        </div>
      </div>
    \`
  })
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,f,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSkeleton
    },
    template: \`
      <div class="dk:p-4 dk:max-w-sm">
        <div class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:p-4 dk:space-y-4">
          <DuiSkeleton variant="rounded" height="160" />
          <div class="dk:flex dk:items-center dk:gap-3">
            <DuiSkeleton variant="circular" width="40" height="40" />
            <div class="dk:flex-1 dk:space-y-2">
              <DuiSkeleton variant="text" width="60%" />
              <DuiSkeleton variant="text" width="40%" />
            </div>
          </div>
          <div class="dk:space-y-2">
            <DuiSkeleton variant="text" />
            <DuiSkeleton variant="text" />
            <DuiSkeleton variant="text" width="75%" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var D,y,z;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSkeleton
    },
    template: \`
      <div class="dk:p-4 dk:max-w-sm dk:space-y-3">
        <div v-for="i in 4" :key="i" class="dk:flex dk:items-center dk:gap-3">
          <DuiSkeleton variant="circular" width="40" height="40" />
          <div class="dk:flex-1 dk:space-y-2">
            <DuiSkeleton variant="text" :width="i % 2 === 0 ? '70%' : '55%'" />
            <DuiSkeleton variant="text" width="40%" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(z=(y=o.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var _,C,T;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSkeleton
    },
    template: \`
      <div class="dk:p-4 dk:max-w-2xl">
        <div class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:overflow-hidden">
          <div class="dk:grid dk:grid-cols-4 dk:gap-4 dk:p-3 dk:border-b dk:border-zinc-200 dk:dark:border-zinc-700">
            <DuiSkeleton v-for="i in 4" :key="i" variant="text" height="12" />
          </div>
          <div v-for="row in 5" :key="row" class="dk:grid dk:grid-cols-4 dk:gap-4 dk:p-3 dk:border-b dk:border-zinc-100 dk:dark:border-zinc-800 last:border-0">
            <DuiSkeleton v-for="col in 4" :key="col" variant="text" :width="col === 1 ? '80%' : '60%'" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,q,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSkeleton
    },
    setup() {
      const loading = ref(true);
      return {
        loading
      };
    },
    template: \`
      <div class="dk:p-4 dk:max-w-sm dk:space-y-4">
        <button
          class="dk:px-3 dk:py-1.5 dk:text-sm dk:rounded-lg dk:bg-slate-600 dk:text-white dk:hover:bg-slate-700 dk:transition-colors"
          @click="loading = !loading">
          {{ loading ? 'Mostrar contenido' : 'Mostrar skeleton' }}
        </button>

        <div v-if="loading" class="dk:space-y-2">
          <DuiSkeleton variant="rounded" height="120" />
          <DuiSkeleton variant="text" />
          <DuiSkeleton variant="text" width="70%" />
        </div>
        <div v-else class="dk:border dk:border-zinc-200 dk:dark:border-zinc-700 dk:rounded-xl dk:p-4 dk:space-y-2">
          <div class="dk:bg-slate-100 dk:dark:bg-slate-800 dk:rounded-lg dk:h-[120px] dk:flex dk:items-center dk:justify-center dk:text-zinc-400">
            Imagen del producto
          </div>
          <p class="dk:text-sm dk:font-semibold dk:text-zinc-900 dk:dark:text-zinc-100">Producto Premium</p>
          <p class="dk:text-xs dk:text-zinc-500">Descripcion breve del producto seleccionado.</p>
        </div>
      </div>
    \`
  })
}`,...(O=(q=l.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const J=["Default","Variants","CardSkeleton","ListSkeleton","TableSkeleton","LoadingToggle"];export{r as CardSkeleton,a as Default,o as ListSkeleton,l as LoadingToggle,s as TableSkeleton,i as Variants,J as __namedExportsOrder,G as default};
