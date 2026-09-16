import{f as Z,s as _,w as ee,m as ae,v as de,i as n,o as l,h as g,n as p,l as v,j as D,q as re,t as te,x as ne,r as le}from"./iframe-sEkeUlo0.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const se=["aria-label"],a=Z({inheritAttrs:!1,__name:"DuiBadge",props:{label:{default:void 0},color:{default:"neutral"},variant:{default:"soft"},size:{default:"sm"},rounded:{default:"full"},dot:{type:Boolean,default:!1},dismissible:{type:Boolean,default:!1},href:{default:void 0}},emits:["dismiss"],setup(e,{emit:b}){const d=e,L=b,R={xs:"dk:text-[10px] dk:leading-none dk:px-1.5 dk:py-0.5 dk:gap-1",sm:"dk:text-xs dk:leading-none dk:px-2 dk:py-1 dk:gap-1",md:"dk:text-sm dk:px-2.5 dk:py-1 dk:gap-1.5",lg:"dk:text-base dk:px-3 dk:py-1.5 dk:gap-2"},G={full:"dk:rounded-full",md:"dk:rounded-md",none:"dk:rounded-none"},Q={soft:{neutral:"dk:bg-zinc-100 dk:text-zinc-700 dk:dark:bg-zinc-800 dk:dark:text-zinc-300",primary:"dk:bg-slate-100 dk:text-slate-700 dk:dark:bg-slate-800 dk:dark:text-slate-300",secondary:"dk:bg-pink-100 dk:text-pink-700 dk:dark:bg-pink-900/50 dk:dark:text-pink-300",success:"dk:bg-emerald-100 dk:text-emerald-700 dk:dark:bg-emerald-900/50 dk:dark:text-emerald-300",warning:"dk:bg-amber-100 dk:text-amber-700 dk:dark:bg-amber-900/50 dk:dark:text-amber-300",danger:"dk:bg-rose-100 dk:text-rose-700 dk:dark:bg-rose-900/50 dk:dark:text-rose-300"},solid:{neutral:"dk:bg-zinc-600 dk:text-white dk:dark:bg-zinc-500",primary:"dk:bg-slate-600 dk:text-white dk:dark:bg-slate-500",secondary:"dk:bg-pink-600 dk:text-white dk:dark:bg-pink-500",success:"dk:bg-emerald-600 dk:text-white dk:dark:bg-emerald-500",warning:"dk:bg-amber-500 dk:text-white dk:dark:bg-amber-400",danger:"dk:bg-rose-600 dk:text-white dk:dark:bg-rose-500"},outline:{neutral:"dk:border dk:border-zinc-400 dk:text-zinc-700 dk:dark:border-zinc-500 dk:dark:text-zinc-300",primary:"dk:border dk:border-slate-400 dk:text-slate-700 dk:dark:border-slate-500 dk:dark:text-slate-300",secondary:"dk:border dk:border-pink-400 dk:text-pink-700 dk:dark:border-pink-500 dk:dark:text-pink-300",success:"dk:border dk:border-emerald-400 dk:text-emerald-700 dk:dark:border-emerald-500 dk:dark:text-emerald-300",warning:"dk:border dk:border-amber-400 dk:text-amber-700 dk:dark:border-amber-500 dk:dark:text-amber-300",danger:"dk:border dk:border-rose-400 dk:text-rose-700 dk:dark:border-rose-500 dk:dark:text-rose-300"}},X={neutral:"dk:bg-zinc-500 dk:dark:bg-zinc-400",primary:"dk:bg-slate-500 dk:dark:bg-slate-400",secondary:"dk:bg-pink-500 dk:dark:bg-pink-400",success:"dk:bg-emerald-500 dk:dark:bg-emerald-400",warning:"dk:bg-amber-500 dk:dark:bg-amber-400",danger:"dk:bg-rose-500 dk:dark:bg-rose-400"},F=n(()=>{const r="dk:inline-flex dk:items-center dk:font-medium dk:whitespace-nowrap dk:select-none",t=R[d.size],f=G[d.rounded],H=Q[d.variant][d.color],J=d.href?"dk:cursor-pointer dk:hover:opacity-80 dk:transition-opacity":"";return[r,t,f,H,J].join(" ")}),K=n(()=>["dk:rounded-full dk:flex-shrink-0",{xs:"dk:w-1.5 dk:h-1.5",sm:"dk:w-2 dk:h-2",md:"dk:w-2 dk:h-2",lg:"dk:w-2.5 dk:h-2.5"}[d.size],X[d.color]].join(" ")),U=n(()=>"dk:flex-shrink-0 dk:flex dk:items-center"),Y=n(()=>["dk:-mr-0.5 dk:flex-shrink-0 dk:inline-flex dk:items-center dk:justify-center","dk:rounded-full dk:w-3.5 dk:h-3.5 dk:text-sm dk:leading-none","dk:opacity-60 dk:hover:opacity-100 dk:transition-opacity dk:outline-none","dk:hover:bg-black/10 dk:dark:hover:bg-white/10"].join(" "));return(r,t)=>(l(),_(de(e.href?"a":"span"),ae({href:e.href,class:F.value},r.$attrs),{default:ee(()=>[r.$slots.icon||e.dot?(l(),g("span",{key:0,"aria-hidden":"true",class:p(U.value)},[e.dot?(l(),g("span",{key:0,class:p(K.value)},null,2)):v(r.$slots,"icon",{},void 0,void 0,1)],2)):D("",!0),v(r.$slots,"default",{},()=>[re(te(e.label),1)]),e.dismissible?(l(),g("button",{key:1,type:"button",class:p(Y.value),"aria-label":e.label?`Quitar ${e.label}`:"Quitar",onClick:t[0]||(t[0]=ne(f=>L("dismiss"),["prevent"]))}," × ",10,se)):D("",!0)]),_:3},16,["href","class"]))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"DuiBadge",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"soft"'},{name:'"outline"'}]},defaultValue:{func:!1,value:"'soft'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'sm'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"full"'},{name:'"md"'},{name:'"none"'}]},defaultValue:{func:!1,value:"'full'"}},{name:"dot",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"href",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"dismiss"}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiBadge.vue"]});const{expect:oe,within:ie}=__STORYBOOK_MODULE_TEST__,me={title:"Elements/Badge",component:a,tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"Texto del badge"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color del badge"},variant:{control:{type:"select"},options:["soft","solid","outline"],description:"Estilo visual"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Tamano del badge"},rounded:{control:{type:"select"},options:["full","md","none"],description:"Estilo de bordes"},dot:{control:{type:"boolean"},description:"Muestra un punto de color antes del texto"},dismissible:{control:{type:"boolean"},description:"Agrega un boton para quitar el badge"}},parameters:{docs:{description:{component:"Badge/Tag versatil con variantes solid, soft y outline, soporte de dot indicator y dismiss."}}}},s={args:{label:"Nuevo",color:"primary",variant:"soft",size:"sm",rounded:"full",dot:!1,dismissible:!1},render:e=>({components:{DuiBadge:a},setup(){return{args:e}},template:'<div class="dk:p-4"><DuiBadge v-bind="args" /></div>'}),play:async({canvasElement:e})=>{const d=ie(e).getByText("Nuevo");await oe(d).toBeInTheDocument()}},o={render:()=>({components:{DuiBadge:a},template:`
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Neutral" color="neutral" />
        <DuiBadge label="Primary" color="primary" />
        <DuiBadge label="Secondary" color="secondary" />
        <DuiBadge label="Success" color="success" />
        <DuiBadge label="Warning" color="warning" />
        <DuiBadge label="Danger" color="danger" />
      </div>
    `})},i={render:()=>({components:{DuiBadge:a},template:`
      <div class="dk:p-4 dk:space-y-3">
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Soft Neutral" color="neutral" variant="soft" />
          <DuiBadge label="Soft Primary" color="primary" variant="soft" />
          <DuiBadge label="Soft Success" color="success" variant="soft" />
          <DuiBadge label="Soft Danger" color="danger" variant="soft" />
        </div>
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Solid Neutral" color="neutral" variant="solid" />
          <DuiBadge label="Solid Primary" color="primary" variant="solid" />
          <DuiBadge label="Solid Success" color="success" variant="solid" />
          <DuiBadge label="Solid Danger" color="danger" variant="solid" />
        </div>
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Outline Neutral" color="neutral" variant="outline" />
          <DuiBadge label="Outline Primary" color="primary" variant="outline" />
          <DuiBadge label="Outline Success" color="success" variant="outline" />
          <DuiBadge label="Outline Danger" color="danger" variant="outline" />
        </div>
      </div>
    `})},c={render:()=>({components:{DuiBadge:a},template:`
      <div class="dk:p-4 dk:flex dk:items-center dk:gap-3">
        <DuiBadge label="XS" color="primary" size="xs" />
        <DuiBadge label="SM" color="primary" size="sm" />
        <DuiBadge label="MD" color="primary" size="md" />
        <DuiBadge label="LG" color="primary" size="lg" />
      </div>
    `})},u={render:()=>({components:{DuiBadge:a},template:`
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Activo" color="success" dot />
        <DuiBadge label="En revision" color="warning" dot />
        <DuiBadge label="Rechazado" color="danger" dot />
        <DuiBadge label="Pendiente" color="neutral" dot />
      </div>
    `})},k={render:()=>({components:{DuiBadge:a},setup(){return{tags:le(["Vue 3","TypeScript","Tailwind CSS","Storybook","Vite"])}},template:`
      <div class="dk:p-4">
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge
            v-for="tag in tags"
            :key="tag"
            :label="tag"
            color="primary"
            dismissible
            @dismiss="tags = tags.filter(t => t !== tag)"
          />
        </div>
        <p v-if="tags.length === 0" class="dk:mt-2 dk:text-sm dk:text-zinc-400">Sin etiquetas</p>
      </div>
    `})},m={render:()=>({components:{DuiBadge:a},template:`
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Verificado" color="success">
          <template #icon>✓</template>
        </DuiBadge>
        <DuiBadge label="Admin" color="primary" variant="solid">
          <template #icon>⭐</template>
        </DuiBadge>
        <DuiBadge label="Beta" color="secondary" variant="outline">
          <template #icon>β</template>
        </DuiBadge>
      </div>
    `})};var y,B,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Nuevo',
    color: 'primary',
    variant: 'soft',
    size: 'sm',
    rounded: 'full',
    dot: false,
    dismissible: false
  },
  render: args => ({
    components: {
      DuiBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="dk:p-4"><DuiBadge v-bind="args" /></div>\`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('Nuevo');
    await expect(badge).toBeInTheDocument();
  }
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var S,w,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiBadge
    },
    template: \`
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Neutral" color="neutral" />
        <DuiBadge label="Primary" color="primary" />
        <DuiBadge label="Secondary" color="secondary" />
        <DuiBadge label="Success" color="success" />
        <DuiBadge label="Warning" color="warning" />
        <DuiBadge label="Danger" color="danger" />
      </div>
    \`
  })
}`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var z,V,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiBadge
    },
    template: \`
      <div class="dk:p-4 dk:space-y-3">
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Soft Neutral" color="neutral" variant="soft" />
          <DuiBadge label="Soft Primary" color="primary" variant="soft" />
          <DuiBadge label="Soft Success" color="success" variant="soft" />
          <DuiBadge label="Soft Danger" color="danger" variant="soft" />
        </div>
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Solid Neutral" color="neutral" variant="solid" />
          <DuiBadge label="Solid Primary" color="primary" variant="solid" />
          <DuiBadge label="Solid Success" color="success" variant="solid" />
          <DuiBadge label="Solid Danger" color="danger" variant="solid" />
        </div>
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge label="Outline Neutral" color="neutral" variant="outline" />
          <DuiBadge label="Outline Primary" color="primary" variant="outline" />
          <DuiBadge label="Outline Success" color="success" variant="outline" />
          <DuiBadge label="Outline Danger" color="danger" variant="outline" />
        </div>
      </div>
    \`
  })
}`,...(C=(V=i.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var N,T,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiBadge
    },
    template: \`
      <div class="dk:p-4 dk:flex dk:items-center dk:gap-3">
        <DuiBadge label="XS" color="primary" size="xs" />
        <DuiBadge label="SM" color="primary" size="sm" />
        <DuiBadge label="MD" color="primary" size="md" />
        <DuiBadge label="LG" color="primary" size="lg" />
      </div>
    \`
  })
}`,...(O=(T=c.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var q,E,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiBadge
    },
    template: \`
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Activo" color="success" dot />
        <DuiBadge label="En revision" color="warning" dot />
        <DuiBadge label="Rechazado" color="danger" dot />
        <DuiBadge label="Pendiente" color="neutral" dot />
      </div>
    \`
  })
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var M,j,A;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiBadge
    },
    setup() {
      const tags = ref(['Vue 3', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vite']);
      return {
        tags
      };
    },
    template: \`
      <div class="dk:p-4">
        <div class="dk:flex dk:flex-wrap dk:gap-2">
          <DuiBadge
            v-for="tag in tags"
            :key="tag"
            :label="tag"
            color="primary"
            dismissible
            @dismiss="tags = tags.filter(t => t !== tag)"
          />
        </div>
        <p v-if="tags.length === 0" class="dk:mt-2 dk:text-sm dk:text-zinc-400">Sin etiquetas</p>
      </div>
    \`
  })
}`,...(A=(j=k.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var W,$,I;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiBadge
    },
    template: \`
      <div class="dk:p-4 dk:flex dk:flex-wrap dk:gap-2">
        <DuiBadge label="Verificado" color="success">
          <template #icon>✓</template>
        </DuiBadge>
        <DuiBadge label="Admin" color="primary" variant="solid">
          <template #icon>⭐</template>
        </DuiBadge>
        <DuiBadge label="Beta" color="secondary" variant="outline">
          <template #icon>β</template>
        </DuiBadge>
      </div>
    \`
  })
}`,...(I=($=m.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};const ge=["Default","Colors","Variants","Sizes","WithDot","Dismissible","WithIcon"];export{o as Colors,s as Default,k as Dismissible,c as Sizes,i as Variants,u as WithDot,m as WithIcon,ge as __namedExportsOrder,me as default};
