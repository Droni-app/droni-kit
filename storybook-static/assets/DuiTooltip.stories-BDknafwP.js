import{f as Pe,r as f,y as M,z as qe,A as Ie,h as L,p as J,l as $,s as Ee,B as _e,w as Me,T as We,C as Fe,F as je,i as k,o as P,t as Q,D as Se,n as X,q as Oe,j as Z,G as q}from"./iframe-sEkeUlo0.js";import{_ as W}from"./DuiButton-CUoUMhpe.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-C7RuyEyl.js";const Ae=["aria-describedby"],Le={class:"dk:inline-flex dk:items-center"},v=Pe({__name:"DuiTooltip",props:{modelValue:{type:Boolean,default:void 0},text:{default:""},fallbackTriggerText:{default:"Tooltip"},trigger:{default:"hover"},placement:{default:"top"},variant:{default:"solid"},color:{default:"neutral"},size:{default:"md"},rounded:{default:"all"},disabled:{type:Boolean,default:!1},interactive:{type:Boolean,default:!0},arrow:{type:Boolean,default:!0},showDelay:{default:120},hideDelay:{default:90},offset:{default:10},zIndex:{default:60},flip:{type:Boolean,default:!0},viewportPadding:{default:8},maxWidth:{default:"md"},teleportTo:{default:"body"}},emits:["update:modelValue","open","close"],setup(n,{emit:r}){const e=n,d=r,s=f(null),y=f(null),N=f(!1),F=k(()=>e.modelValue!==void 0),b=k(()=>F.value?!!e.modelValue:N.value),K=f(e.placement),j=f({top:0,left:0}),S=f(!1);let D=null,V=null;const H=`dui-tooltip-${Math.random().toString(36).slice(2,10)}`,pe={all:"dk:rounded-md",top:"dk:rounded-t-md",bottom:"dk:rounded-b-md",left:"dk:rounded-l-md",right:"dk:rounded-r-md",none:"dk:rounded-none"},me={sm:"dk:px-2 dk:py-1 dk:text-xs",md:"dk:px-2.5 dk:py-1.5 dk:text-sm",lg:"dk:px-3 dk:py-2 dk:text-base"},R={xs:"dk:max-w-40",sm:"dk:max-w-56",md:"dk:max-w-72",lg:"dk:max-w-96",full:"dk:max-w-[min(92vw,42rem)]"};function U(o){return typeof o=="string"&&o in R}const O={solid:{base:"dk:border dk:shadow-lg",neutral:"dk:bg-zinc-900 dk:text-zinc-100 dk:border-zinc-700 dk:dark:bg-zinc-200 dk:dark:text-zinc-900 dk:dark:border-zinc-300",primary:"dk:bg-slate-900 dk:text-slate-100 dk:border-slate-700 dk:dark:bg-slate-200 dk:dark:text-slate-900 dk:dark:border-slate-300",secondary:"dk:bg-pink-900 dk:text-pink-100 dk:border-pink-700 dk:dark:bg-pink-200 dk:dark:text-pink-900 dk:dark:border-pink-300",success:"dk:bg-emerald-900 dk:text-emerald-100 dk:border-emerald-700 dk:dark:bg-emerald-200 dk:dark:text-emerald-900 dk:dark:border-emerald-300",warning:"dk:bg-amber-900 dk:text-amber-100 dk:border-amber-700 dk:dark:bg-amber-200 dk:dark:text-amber-900 dk:dark:border-amber-300",danger:"dk:bg-rose-900 dk:text-rose-100 dk:border-rose-700 dk:dark:bg-rose-200 dk:dark:text-rose-900 dk:dark:border-rose-300"},outline:{base:"dk:border dk:shadow-md dk:bg-white/95 dk:dark:bg-zinc-900/95",neutral:"dk:text-zinc-900 dk:border-zinc-300 dk:dark:text-zinc-100 dk:dark:border-zinc-600",primary:"dk:text-slate-900 dk:border-slate-400 dk:dark:text-slate-100 dk:dark:border-slate-500",secondary:"dk:text-pink-900 dk:border-pink-400 dk:dark:text-pink-100 dk:dark:border-pink-500",success:"dk:text-emerald-900 dk:border-emerald-400 dk:dark:text-emerald-100 dk:dark:border-emerald-500",warning:"dk:text-amber-900 dk:border-amber-400 dk:dark:text-amber-100 dk:dark:border-amber-500",danger:"dk:text-rose-900 dk:border-rose-400 dk:dark:text-rose-100 dk:dark:border-rose-500"}},fe=k(()=>{const o=pe[e.rounded],t=me[e.size],a=O[e.variant].base,i=O[e.variant][e.color],l=U(e.maxWidth)?R[e.maxWidth]:"";return["dk:fixed dk:pointer-events-auto dk:leading-tight dk:select-text dk:cursor-default","dk:break-words dk:whitespace-normal",o,t,a,i,l].join(" ")}),ke=k(()=>{const o={top:`${j.value.top}px`,left:`${j.value.left}px`,zIndex:String(e.zIndex)};return typeof e.maxWidth=="number"?o.maxWidth=`${e.maxWidth}px`:typeof e.maxWidth=="string"&&!U(e.maxWidth)&&(o.maxWidth=e.maxWidth),o}),ge=k(()=>{const o=O[e.variant][e.color],t=K.value,a={top:"dk:-bottom-1.5 dk:left-1/2 dk:-translate-x-1/2 dk:rotate-45","top-start":"dk:-bottom-1.5 dk:left-3 dk:rotate-45","top-end":"dk:-bottom-1.5 dk:right-3 dk:rotate-45",bottom:"dk:-top-1.5 dk:left-1/2 dk:-translate-x-1/2 dk:rotate-45","bottom-start":"dk:-top-1.5 dk:left-3 dk:rotate-45","bottom-end":"dk:-top-1.5 dk:right-3 dk:rotate-45",left:"dk:-right-1.5 dk:top-1/2 dk:-translate-y-1/2 dk:rotate-45","left-start":"dk:-right-1.5 dk:top-3 dk:rotate-45","left-end":"dk:-right-1.5 dk:bottom-3 dk:rotate-45",right:"dk:-left-1.5 dk:top-1/2 dk:-translate-y-1/2 dk:rotate-45","right-start":"dk:-left-1.5 dk:top-3 dk:rotate-45","right-end":"dk:-left-1.5 dk:bottom-3 dk:rotate-45"};return["dk:absolute dk:block dk:h-3 dk:w-3",o,a[t]||a.top].join(" ")});function C(){D&&(clearTimeout(D),D=null),V&&(clearTimeout(V),V=null)}function G(o,t){e.disabled||(F.value?d("update:modelValue",o):N.value=o,o?(d("open",t),q(()=>{g()})):d("close",t))}function A(o){C(),D=setTimeout(()=>{G(!0,o)},Math.max(0,e.showDelay))}function B(o){C(),V=setTimeout(()=>{o==="hover"&&e.interactive&&S.value||G(!1,o)},Math.max(0,e.hideDelay))}function ve(o){return{top:"bottom","top-start":"bottom-start","top-end":"bottom-end",bottom:"top","bottom-start":"top-start","bottom-end":"top-end",left:"right","left-start":"right-start","left-end":"right-end",right:"left","right-start":"left-start","right-end":"left-end"}[o]}function ye(o,t,a){const[i,l]=o.split("-"),m=e.offset;let u=0,c=0;i==="top"&&(u=t.top-a.height-m,l==="start"?c=t.left:l==="end"?c=t.right-a.width:c=t.left+t.width/2-a.width/2),i==="bottom"&&(u=t.bottom+m,l==="start"?c=t.left:l==="end"?c=t.right-a.width:c=t.left+t.width/2-a.width/2),i==="left"&&(c=t.left-a.width-m,l==="start"?u=t.top:l==="end"?u=t.bottom-a.height:u=t.top+t.height/2-a.height/2),i==="right"&&(c=t.right+m,l==="start"?u=t.top:l==="end"?u=t.bottom-a.height:u=t.top+t.height/2-a.height/2);const z=e.viewportPadding,Ce=window.innerWidth,ze=window.innerHeight;return u=Math.min(Math.max(z,u),ze-a.height-z),c=Math.min(Math.max(z,c),Ce-a.width-z),{top:u,left:c}}function he(o,t,a){if(!e.flip)return!1;const[i]=o.split("-"),l=e.offset,m=e.viewportPadding;return i==="top"?t.top-a.height-l<m:i==="bottom"?t.bottom+a.height+l>window.innerHeight-m:i==="left"?t.left-a.width-l<m:t.right+a.width+l>window.innerWidth-m}function g(){if(!s.value||!y.value)return;const o=s.value.getBoundingClientRect(),t=y.value.getBoundingClientRect();let a=e.placement;he(a,o,t)&&(a=ve(a)),K.value=a,j.value=ye(a,o,t)}function be(){e.trigger==="hover"&&A("hover")}function xe(o){var t;if(e.trigger==="hover"){if(e.interactive){const a=o.relatedTarget;if(a&&((t=y.value)!=null&&t.contains(a)))return}B("hover")}}function we(){e.trigger!=="focus"&&e.trigger!=="hover"||A("focus")}function Te(){e.trigger!=="focus"&&e.trigger!=="hover"||B("focus")}function Be(o){e.trigger==="click"&&(o.stopPropagation(),b.value?B("click"):A("click"))}function De(){e.interactive&&(S.value=!0,C())}function Ve(o){var a;if(!e.interactive)return;const t=o.relatedTarget;t&&((a=s.value)!=null&&a.contains(t))||(S.value=!1,B("hover"))}function Y(o){var a,i;if(e.trigger!=="click"||!b.value)return;const t=o.target;(a=s.value)!=null&&a.contains(t)||(i=y.value)!=null&&i.contains(t)||B("outside")}return M(()=>e.modelValue,o=>{F.value&&o&&q(g)}),M(()=>e.placement,()=>{b.value&&q(g)}),M(b,o=>{o&&q(g)}),qe(()=>{typeof window>"u"||(window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),window.addEventListener("click",Y))}),Ie(()=>{C(),!(typeof window>"u")&&(window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0),window.removeEventListener("click",Y))}),(o,t)=>(P(),L(je,null,[J("span",{ref_key:"triggerRef",ref:s,class:"dk:relative dk:inline-flex dk:max-w-full","aria-describedby":b.value?H:void 0,onMouseenter:be,onMouseleave:xe,onFocusin:we,onFocusout:Te,onClick:Be},[$(o.$slots,"trigger",{},()=>[$(o.$slots,"default",{},()=>[J("span",Le,Q(e.fallbackTriggerText),1)])])],40,Ae),(P(),Ee(Fe,{to:e.teleportTo},[_e(We,{"enter-active-class":"dk:transition-opacity dk:duration-150","leave-active-class":"dk:transition-opacity dk:duration-100","enter-from-class":"dk:opacity-0","leave-to-class":"dk:opacity-0"},{default:Me(()=>[b.value&&!e.disabled?(P(),L("div",{key:0,ref_key:"tooltipRef",ref:y,id:H,role:"tooltip",class:X(fe.value),style:Se(ke.value),onMouseenter:De,onMouseleave:Ve},[$(o.$slots,"content",{},()=>[Oe(Q(e.text),1)]),e.arrow?(P(),L("span",{key:0,"aria-hidden":"true",class:X(ge.value)},null,2)):Z("",!0)],38)):Z("",!0)]),_:3})],8,["to"]))],64))}});v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"DuiTooltip",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"fallbackTriggerText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Tooltip'"}},{name:"trigger",required:!1,type:{name:"TooltipTrigger"},defaultValue:{func:!1,value:"'hover'"}},{name:"placement",required:!1,type:{name:"TooltipPlacement"},defaultValue:{func:!1,value:"'top'"}},{name:"variant",required:!1,type:{name:"TooltipVariant"},defaultValue:{func:!1,value:"'solid'"}},{name:"color",required:!1,type:{name:"TooltipColor"},defaultValue:{func:!1,value:"'neutral'"}},{name:"size",required:!1,type:{name:"TooltipSize"},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"TooltipRounded"},defaultValue:{func:!1,value:"'all'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"interactive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"arrow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showDelay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"120"}},{name:"hideDelay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"90"}},{name:"offset",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"zIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"60"}},{name:"flip",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"viewportPadding",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"maxWidth",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"full"'},{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"'md'"}},{name:"teleportTo",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'body'"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"open",type:{names:["union"],elements:[{name:'"hover"'},{name:'"focus"'},{name:'"click"'},{name:'"manual"'}]}},{name:"close",type:{names:["union"],elements:[{name:'"hover"'},{name:'"focus"'},{name:'"click"'},{name:'"manual"'},{name:'"outside"'}]}}],slots:[{name:"trigger"},{name:"default"},{name:"content"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiTooltip.vue"]});const{expect:p,userEvent:x,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,Ge={title:"Elements/Tooltip",component:v,tags:["autodocs"],argTypes:{text:{control:{type:"text"},defaultValue:"Tooltip de ayuda contextual"},trigger:{control:{type:"select"},options:["hover","click","focus","manual"],defaultValue:"hover"},placement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end","left-start","left-end","right-start","right-end"],defaultValue:"top"},variant:{control:{type:"select"},options:["solid","outline"],defaultValue:"solid"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],defaultValue:"neutral"},size:{control:{type:"select"},options:["sm","md","lg"],defaultValue:"md"},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"],defaultValue:"all"},showDelay:{control:{type:"number"},defaultValue:120},hideDelay:{control:{type:"number"},defaultValue:90},offset:{control:{type:"number"},defaultValue:10},maxWidth:{control:{type:"select"},options:["xs","sm","md","lg","full"],defaultValue:"md"},interactive:{control:{type:"boolean"},defaultValue:!0},arrow:{control:{type:"boolean"},defaultValue:!0},disabled:{control:{type:"boolean"},defaultValue:!1},flip:{control:{type:"boolean"},defaultValue:!0},zIndex:{control:{type:"number"},defaultValue:60}}},$e=n=>({components:{DuiTooltip:v,DuiButton:W},setup(){const r=f(!!n.modelValue);M(()=>n.modelValue,d=>{r.value=!!d});const e=k(()=>{const{modelValue:d,...s}=n;return s});return{args:n,open:r,tooltipProps:e}},template:`
    <div class="dk:flex dk:min-h-[14rem] dk:items-center dk:justify-center dk:p-6">
      <DuiTooltip v-model="open" v-bind="tooltipProps">
        <DuiButton color="primary" variant="outline">Pasa el mouse</DuiButton>
      </DuiTooltip>
    </div>
  `}),h={args:{modelValue:!1,text:"Tooltip de ayuda contextual",trigger:"hover",placement:"top",variant:"solid",color:"neutral",size:"md",rounded:"all",showDelay:120,hideDelay:90,offset:10,maxWidth:"md",interactive:!0,arrow:!0,disabled:!1,flip:!0,zIndex:60},render:$e,play:async({canvasElement:n})=>{const r=T(n),e=T(document.body),d=r.getByRole("button",{name:"Pasa el mouse"});await p(e.queryByRole("tooltip")).not.toBeInTheDocument(),await x.hover(d),await w(()=>{p(e.getByRole("tooltip")).toBeInTheDocument()}),await p(e.getByText("Tooltip de ayuda contextual")).toBeInTheDocument(),await x.unhover(d),await w(()=>{p(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},I={args:{...h.args,trigger:"click",placement:"right",variant:"outline",color:"primary",maxWidth:"lg",interactive:!0},render:n=>({components:{DuiTooltip:v,DuiButton:W},setup(){const r=f(!1),e=k(()=>{const{modelValue:d,...s}=n;return s});return{open:r,tooltipProps:e}},template:`
      <div class="dk:flex dk:min-h-[16rem] dk:items-center dk:justify-center dk:p-6">
        <DuiTooltip v-model="open" v-bind="tooltipProps">
          <template #trigger>
            <DuiButton color="secondary">Tooltip con contenido</DuiButton>
          </template>

          <template #content>
            <div class="dk:space-y-2">
              <p class="dk:font-semibold">Atajo disponible</p>
              <p>Presiona <kbd class="dk:rounded dk:bg-black/15 dk:px-1.5 dk:py-0.5">Ctrl</kbd> + <kbd class="dk:rounded dk:bg-black/15 dk:px-1.5 dk:py-0.5">K</kbd> para abrir la busqueda.</p>
            </div>
          </template>
        </DuiTooltip>
      </div>
    `}),play:async({canvasElement:n})=>{const r=T(n),e=T(document.body),d=r.getByRole("button",{name:"Tooltip con contenido"});await x.click(d),await w(()=>{p(e.getByRole("tooltip")).toBeInTheDocument()}),await p(e.getByText("Atajo disponible")).toBeInTheDocument(),await x.click(document.body),await w(()=>{p(e.queryByRole("tooltip")).not.toBeInTheDocument()})}},E={args:{...h.args,trigger:"hover",text:"Ejemplo de posicion"},render:n=>({components:{DuiTooltip:v,DuiButton:W},setup(){const r=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],e=k(()=>{const{placement:d,modelValue:s,...y}=n;return y});return{placements:r,args:n,tooltipProps:e}},template:`
      <div class="dk:grid dk:grid-cols-1 dk:gap-4 dk:p-6 dk:sm:grid-cols-2 dk:lg:grid-cols-3">
        <DuiTooltip
          v-for="placement in placements"
          :key="placement"
          v-bind="tooltipProps"
          :placement="placement"
          :text="'Placement: ' + placement">
          <DuiButton variant="outline" color="neutral" class="dk:w-full">{{ placement }}</DuiButton>
        </DuiTooltip>
      </div>
    `})},_={args:{...h.args,trigger:"manual",placement:"bottom",text:"Controlado externamente con v-model",interactive:!0},render:n=>({components:{DuiTooltip:v,DuiButton:W},setup(){const r=f(!1),e=k(()=>{const{modelValue:d,...s}=n;return s});return{open:r,tooltipProps:e}},template:`
      <div class="dk:flex dk:min-h-[16rem] dk:flex-col dk:items-center dk:justify-center dk:gap-4 dk:p-6">
        <div class="dk:flex dk:gap-2">
          <DuiButton size="sm" color="success" @click="open = true">Abrir</DuiButton>
          <DuiButton size="sm" color="danger" variant="outline" @click="open = false">Cerrar</DuiButton>
        </div>

        <DuiTooltip v-model="open" v-bind="tooltipProps">
          <DuiButton color="primary" variant="ghost">Trigger manual</DuiButton>
        </DuiTooltip>
      </div>
    `}),play:async({canvasElement:n})=>{const r=T(n),e=T(document.body);await p(e.queryByRole("tooltip")).not.toBeInTheDocument(),await x.click(r.getByRole("button",{name:"Abrir"})),await w(()=>{p(e.getByRole("tooltip")).toBeInTheDocument()}),await p(e.getByText("Controlado externamente con v-model")).toBeInTheDocument(),await x.click(r.getByRole("button",{name:"Cerrar"})),await w(()=>{p(e.queryByRole("tooltip")).not.toBeInTheDocument()})}};var ee,te,oe;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    text: 'Tooltip de ayuda contextual',
    trigger: 'hover',
    placement: 'top',
    variant: 'solid',
    color: 'neutral',
    size: 'md',
    rounded: 'all',
    showDelay: 120,
    hideDelay: 90,
    offset: 10,
    maxWidth: 'md',
    interactive: true,
    arrow: true,
    disabled: false,
    flip: true,
    zIndex: 60
  },
  render: tooltipRender,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: 'Pasa el mouse'
    });
    await expect(body.queryByRole('tooltip')).not.toBeInTheDocument();
    await userEvent.hover(trigger);
    await waitFor(() => {
      expect(body.getByRole('tooltip')).toBeInTheDocument();
    });
    await expect(body.getByText('Tooltip de ayuda contextual')).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await waitFor(() => {
      expect(body.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  }
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,ne,re;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    trigger: 'click',
    placement: 'right',
    variant: 'outline',
    color: 'primary',
    maxWidth: 'lg',
    interactive: true
  },
  render: (args: any) => ({
    components: {
      DuiTooltip,
      DuiButton
    },
    setup() {
      const open = ref(false);
      const tooltipProps = computed(() => {
        const {
          modelValue,
          ...rest
        } = args;
        return rest;
      });
      return {
        open,
        tooltipProps
      };
    },
    template: \`
      <div class="dk:flex dk:min-h-[16rem] dk:items-center dk:justify-center dk:p-6">
        <DuiTooltip v-model="open" v-bind="tooltipProps">
          <template #trigger>
            <DuiButton color="secondary">Tooltip con contenido</DuiButton>
          </template>

          <template #content>
            <div class="dk:space-y-2">
              <p class="dk:font-semibold">Atajo disponible</p>
              <p>Presiona <kbd class="dk:rounded dk:bg-black/15 dk:px-1.5 dk:py-0.5">Ctrl</kbd> + <kbd class="dk:rounded dk:bg-black/15 dk:px-1.5 dk:py-0.5">K</kbd> para abrir la busqueda.</p>
            </div>
          </template>
        </DuiTooltip>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole('button', {
      name: 'Tooltip con contenido'
    });
    await userEvent.click(trigger);
    await waitFor(() => {
      expect(body.getByRole('tooltip')).toBeInTheDocument();
    });
    await expect(body.getByText('Atajo disponible')).toBeInTheDocument();
    await userEvent.click(document.body);
    await waitFor(() => {
      expect(body.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  }
}`,...(re=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,de,ie;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    trigger: 'hover',
    text: 'Ejemplo de posicion'
  },
  render: (args: any) => ({
    components: {
      DuiTooltip,
      DuiButton
    },
    setup() {
      const placements = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];
      const tooltipProps = computed(() => {
        const {
          placement,
          modelValue,
          ...rest
        } = args;
        return rest;
      });
      return {
        placements,
        args,
        tooltipProps
      };
    },
    template: \`
      <div class="dk:grid dk:grid-cols-1 dk:gap-4 dk:p-6 dk:sm:grid-cols-2 dk:lg:grid-cols-3">
        <DuiTooltip
          v-for="placement in placements"
          :key="placement"
          v-bind="tooltipProps"
          :placement="placement"
          :text="'Placement: ' + placement">
          <DuiButton variant="outline" color="neutral" class="dk:w-full">{{ placement }}</DuiButton>
        </DuiTooltip>
      </div>
    \`
  })
}`,...(ie=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var se,ue,ce;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    trigger: 'manual',
    placement: 'bottom',
    text: 'Controlado externamente con v-model',
    interactive: true
  },
  render: (args: any) => ({
    components: {
      DuiTooltip,
      DuiButton
    },
    setup() {
      const open = ref(false);
      const tooltipProps = computed(() => {
        const {
          modelValue,
          ...rest
        } = args;
        return rest;
      });
      return {
        open,
        tooltipProps
      };
    },
    template: \`
      <div class="dk:flex dk:min-h-[16rem] dk:flex-col dk:items-center dk:justify-center dk:gap-4 dk:p-6">
        <div class="dk:flex dk:gap-2">
          <DuiButton size="sm" color="success" @click="open = true">Abrir</DuiButton>
          <DuiButton size="sm" color="danger" variant="outline" @click="open = false">Cerrar</DuiButton>
        </div>

        <DuiTooltip v-model="open" v-bind="tooltipProps">
          <DuiButton color="primary" variant="ghost">Trigger manual</DuiButton>
        </DuiTooltip>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await expect(body.queryByRole('tooltip')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Abrir'
    }));
    await waitFor(() => {
      expect(body.getByRole('tooltip')).toBeInTheDocument();
    });
    await expect(body.getByText('Controlado externamente con v-model')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Cerrar'
    }));
    await waitFor(() => {
      expect(body.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  }
}`,...(ce=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const Ye=["Default","RichContent","Placements","ManualControl"];export{h as Default,_ as ManualControl,E as Placements,I as RichContent,Ye as __namedExportsOrder,Ge as default};
