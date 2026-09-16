import{f as ae,h as l,p as g,t as D,j as S,n as b,F as q,k as ne,i as v,o as c,r as u}from"./iframe-sEkeUlo0.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const te=["aria-label"],oe=["disabled","aria-label"],re={key:0,class:"dk:hidden dk:sm:inline"},se=["aria-label","aria-current","onClick"],ie=["disabled","aria-label"],de={key:0,class:"dk:hidden dk:sm:inline"},s=ae({__name:"DuiPagination",props:{modelValue:{},total:{},perPage:{default:10},siblingCount:{default:1},showBoundary:{type:Boolean,default:!0},color:{default:"primary"},variant:{default:"solid"},size:{default:"md"},rounded:{default:"md"},showLabels:{type:Boolean,default:!1},prevLabel:{default:"Anterior"},nextLabel:{default:"Siguiente"},ariaLabel:{default:"Paginacion"}},emits:["update:modelValue","change"],setup(e,{emit:m}){const a=e,y=m,i=v(()=>Math.max(1,Math.ceil(a.total/a.perPage)));function p(n){n<1||n>i.value||n===a.modelValue||(y("update:modelValue",n),y("change",n))}const J=v(()=>{const n=i.value,t=a.modelValue,o=a.siblingCount,d=a.showBoundary?1:0;if(n<=2*o+2*d+3)return Array.from({length:n},(r,ee)=>ee+1);const k=[];for(let r=1;r<=d;r++)k.push(r);const B=Math.max(d+1,t-o),L=Math.min(n-d,t+o);B>d+1&&k.push("...");for(let r=B;r<=L;r++)k.push(r);L<n-d&&k.push("...");for(let r=n-d+1;r<=n;r++)k.push(r);return k}),V={sm:"dk:w-7 dk:h-7 dk:text-xs",md:"dk:w-9 dk:h-9 dk:text-sm",lg:"dk:w-11 dk:h-11 dk:text-base"},Q={full:"dk:rounded-full",md:"dk:rounded-lg",none:"dk:rounded-none"},W={solid:{neutral:"dk:bg-zinc-700 dk:text-white dk:dark:bg-zinc-500",primary:"dk:bg-slate-600 dk:text-white dk:dark:bg-slate-500",secondary:"dk:bg-pink-600 dk:text-white dk:dark:bg-pink-500",success:"dk:bg-emerald-600 dk:text-white dk:dark:bg-emerald-500",warning:"dk:bg-amber-500 dk:text-white dk:dark:bg-amber-400",danger:"dk:bg-rose-600 dk:text-white dk:dark:bg-rose-500"},outline:{neutral:"dk:border-2 dk:border-zinc-600 dk:text-zinc-700 dk:dark:border-zinc-400 dk:dark:text-zinc-200",primary:"dk:border-2 dk:border-slate-600 dk:text-slate-700 dk:dark:border-slate-400 dk:dark:text-slate-200",secondary:"dk:border-2 dk:border-pink-600 dk:text-pink-700 dk:dark:border-pink-400 dk:dark:text-pink-200",success:"dk:border-2 dk:border-emerald-600 dk:text-emerald-700 dk:dark:border-emerald-400 dk:dark:text-emerald-200",warning:"dk:border-2 dk:border-amber-500 dk:text-amber-700 dk:dark:border-amber-400 dk:dark:text-amber-200",danger:"dk:border-2 dk:border-rose-600 dk:text-rose-700 dk:dark:border-rose-400 dk:dark:text-rose-200"},ghost:{neutral:"dk:bg-zinc-100 dk:text-zinc-800 dk:dark:bg-zinc-700 dk:dark:text-zinc-100",primary:"dk:bg-slate-100 dk:text-slate-800 dk:dark:bg-slate-700 dk:dark:text-slate-100",secondary:"dk:bg-pink-100 dk:text-pink-800 dk:dark:bg-pink-800 dk:dark:text-pink-100",success:"dk:bg-emerald-100 dk:text-emerald-800 dk:dark:bg-emerald-800 dk:dark:text-emerald-100",warning:"dk:bg-amber-100 dk:text-amber-800 dk:dark:bg-amber-700 dk:dark:text-amber-100",danger:"dk:bg-rose-100 dk:text-rose-800 dk:dark:bg-rose-800 dk:dark:text-rose-100"}},X=v(()=>"dk:flex dk:items-center dk:gap-1 dk:flex-wrap"),w=v(()=>{const n=V[a.size],t=Q[a.rounded];return["dk:inline-flex dk:items-center dk:justify-center dk:font-medium dk:transition-colors dk:duration-150 dk:outline-none dk:select-none dk:cursor-pointer dk:disabled:cursor-not-allowed dk:disabled:pointer-events-none",n,t,"dk:focus-visible:ring-2 dk:focus-visible:ring-offset-1 dk:focus-visible:ring-slate-400"].join(" ")}),C=v(()=>[w.value,"dk:text-zinc-600 dk:dark:text-zinc-400","dk:hover:bg-zinc-100 dk:dark:hover:bg-zinc-700","dk:hover:text-zinc-900 dk:dark:hover:text-zinc-100"].join(" "));function Z(n){return n===a.modelValue?[w.value,W[a.variant][a.color]].join(" "):[w.value,"dk:text-zinc-600 dk:dark:text-zinc-400 dk:hover:bg-zinc-100 dk:dark:hover:bg-zinc-700 dk:hover:text-zinc-900 dk:dark:hover:text-zinc-100"].join(" ")}const _=v(()=>["dk:inline-flex dk:items-center dk:justify-center dk:text-zinc-400 dk:select-none",V[a.size]].join(" "));return(n,t)=>(c(),l("nav",{"aria-label":e.ariaLabel,class:b(X.value)},[g("button",{type:"button",disabled:e.modelValue<=1,"aria-label":e.prevLabel,class:b([C.value,e.modelValue<=1?"dk:opacity-40 dk:cursor-not-allowed":""]),onClick:t[0]||(t[0]=o=>p(e.modelValue-1))},[t[2]||(t[2]=g("svg",{class:"dk:w-4 dk:h-4",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[g("polyline",{points:"10 4 6 8 10 12"})],-1)),e.showLabels?(c(),l("span",re,D(e.prevLabel),1)):S("",!0)],10,oe),(c(!0),l(q,null,ne(J.value,o=>(c(),l(q,{key:o},[o==="..."?(c(),l("span",{key:0,class:b(_.value),"aria-hidden":"true"},"…",2)):(c(),l("button",{key:1,type:"button","aria-label":`Pagina ${o}`,"aria-current":e.modelValue===o?"page":void 0,class:b(Z(o)),onClick:d=>p(o)},D(o),11,se))],64))),128)),g("button",{type:"button",disabled:e.modelValue>=i.value,"aria-label":e.nextLabel,class:b([C.value,e.modelValue>=i.value?"dk:opacity-40 dk:cursor-not-allowed":""]),onClick:t[1]||(t[1]=o=>p(e.modelValue+1))},[e.showLabels?(c(),l("span",de,D(e.nextLabel),1)):S("",!0),t[3]||(t[3]=g("svg",{class:"dk:w-4 dk:h-4",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[g("polyline",{points:"6 4 10 8 6 12"})],-1))],10,ie)],10,te))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"DuiPagination",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"number"}},{name:"total",required:!0,type:{name:"number"}},{name:"perPage",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"siblingCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"showBoundary",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"warning"'},{name:'"danger"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"solid"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'solid'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"union",elements:[{name:'"full"'},{name:'"md"'},{name:'"none"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"showLabels",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"prevLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Anterior'"}},{name:"nextLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Siguiente'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Paginacion'"}}],events:[{name:"update:modelValue",type:{names:["number"]}},{name:"change",type:{names:["number"]}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiPagination.vue"]});const{expect:j,userEvent:le,within:ce}=__STORYBOOK_MODULE_TEST__,ke={title:"Elements/Pagination",component:s,tags:["autodocs"],argTypes:{modelValue:{control:{type:"number"},description:"Pagina actual (v-model)"},total:{control:{type:"number"},description:"Total de registros"},perPage:{control:{type:"number"},description:"Registros por pagina"},siblingCount:{control:{type:"number"},description:"Paginas hermanas visibles a cada lado"},color:{control:{type:"select"},options:["neutral","primary","secondary","success","warning","danger"],description:"Color de la pagina activa"},variant:{control:{type:"select"},options:["solid","outline","ghost"],description:"Estilo visual del boton activo"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamano de los botones"},rounded:{control:{type:"select"},options:["full","md","none"],description:"Bordes de los botones"},showLabels:{control:{type:"boolean"},description:'Muestra "Anterior" y "Siguiente" junto a los iconos'}},parameters:{docs:{description:{component:"Paginacion accesible con truncado inteligente, colores, variantes y navegacion por teclado."}}}},f={args:{modelValue:1,total:100,perPage:10,color:"primary",variant:"solid",size:"md",rounded:"md",siblingCount:1,showLabels:!1},render:e=>({components:{DuiPagination:s},setup(){const m=u(e.modelValue);return{args:e,page:m}},template:`
      <div class="dk:p-4 dk:space-y-2">
        <DuiPagination v-bind="args" v-model="page" />
        <p class="dk:text-xs dk:text-zinc-500">Pagina {{ page }} de {{ Math.ceil(args.total / args.perPage) }}</p>
      </div>
    `}),play:async({canvasElement:e})=>{var p;const a=ce(e).getAllByRole("button");await j(a.length).toBeGreaterThan(2);const y=a[a.length-1];await le.click(y);const i=e.querySelector('[aria-current="page"]');await j((p=i==null?void 0:i.textContent)==null?void 0:p.trim()).toBe("2")}},x={args:{modelValue:3,total:100},render:()=>({components:{DuiPagination:s},setup(){const e=u(3),m=u(3),a=u(3);return{p1:e,p2:m,p3:a}},template:`
      <div class="dk:p-4 dk:space-y-5">
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Solid</p>
          <DuiPagination v-model="p1" :total="100" variant="solid" color="primary" />
        </div>
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Outline</p>
          <DuiPagination v-model="p2" :total="100" variant="outline" color="primary" />
        </div>
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Ghost</p>
          <DuiPagination v-model="p3" :total="100" variant="ghost" color="primary" />
        </div>
      </div>
    `})},h={args:{modelValue:2,total:50},render:()=>({components:{DuiPagination:s},setup(){return{pages:u({neutral:2,primary:2,secondary:2,success:2,warning:2,danger:2})}},template:`
      <div class="dk:p-4 dk:space-y-3">
        <DuiPagination v-model="pages.neutral" :total="50" color="neutral" size="sm" />
        <DuiPagination v-model="pages.primary" :total="50" color="primary" size="sm" />
        <DuiPagination v-model="pages.secondary" :total="50" color="secondary" size="sm" />
        <DuiPagination v-model="pages.success" :total="50" color="success" size="sm" />
        <DuiPagination v-model="pages.warning" :total="50" color="warning" size="sm" />
        <DuiPagination v-model="pages.danger" :total="50" color="danger" size="sm" />
      </div>
    `})},z={args:{modelValue:15,total:500},render:()=>({components:{DuiPagination:s},setup(){return{page:u(15)}},template:`
      <div class="dk:p-4 dk:space-y-2">
        <DuiPagination v-model="page" :total="500" :per-page="10" :sibling-count="2" color="primary" show-labels />
        <p class="dk:text-xs dk:text-zinc-500">Pagina {{ page }} de 50</p>
      </div>
    `})},P={args:{modelValue:3,total:50},render:()=>({components:{DuiPagination:s},setup(){return{p:u(3)}},template:`
      <div class="dk:p-4 dk:space-y-4">
        <DuiPagination v-model="p" :total="50" size="sm" color="primary" />
        <DuiPagination v-model="p" :total="50" size="md" color="primary" />
        <DuiPagination v-model="p" :total="50" size="lg" color="primary" />
      </div>
    `})};var E,M,A;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelValue: 1,
    total: 100,
    perPage: 10,
    color: 'primary',
    variant: 'solid',
    size: 'md',
    rounded: 'md',
    siblingCount: 1,
    showLabels: false
  },
  render: args => ({
    components: {
      DuiPagination
    },
    setup() {
      const page = ref(args.modelValue);
      return {
        args,
        page
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-2">
        <DuiPagination v-bind="args" v-model="page" />
        <p class="dk:text-xs dk:text-zinc-500">Pagina {{ page }} de {{ Math.ceil(args.total / args.perPage) }}</p>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons.length).toBeGreaterThan(2);
    const nextBtn = buttons[buttons.length - 1];
    await userEvent.click(nextBtn);
    const currentPage = canvasElement.querySelector('[aria-current="page"]');
    await expect(currentPage?.textContent?.trim()).toBe('2');
  }
}`,...(A=(M=f.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var O,T,N;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    modelValue: 3,
    total: 100
  },
  render: () => ({
    components: {
      DuiPagination
    },
    setup() {
      const p1 = ref(3),
        p2 = ref(3),
        p3 = ref(3);
      return {
        p1,
        p2,
        p3
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-5">
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Solid</p>
          <DuiPagination v-model="p1" :total="100" variant="solid" color="primary" />
        </div>
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Outline</p>
          <DuiPagination v-model="p2" :total="100" variant="outline" color="primary" />
        </div>
        <div class="dk:space-y-1">
          <p class="dk:text-xs dk:text-zinc-400">Ghost</p>
          <DuiPagination v-model="p3" :total="100" variant="ghost" color="primary" />
        </div>
      </div>
    \`
  })
}`,...(N=(T=x.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var G,R,$;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    modelValue: 2,
    total: 50
  },
  render: () => ({
    components: {
      DuiPagination
    },
    setup() {
      const pages = ref({
        neutral: 2,
        primary: 2,
        secondary: 2,
        success: 2,
        warning: 2,
        danger: 2
      });
      return {
        pages
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-3">
        <DuiPagination v-model="pages.neutral" :total="50" color="neutral" size="sm" />
        <DuiPagination v-model="pages.primary" :total="50" color="primary" size="sm" />
        <DuiPagination v-model="pages.secondary" :total="50" color="secondary" size="sm" />
        <DuiPagination v-model="pages.success" :total="50" color="success" size="sm" />
        <DuiPagination v-model="pages.warning" :total="50" color="warning" size="sm" />
        <DuiPagination v-model="pages.danger" :total="50" color="danger" size="sm" />
      </div>
    \`
  })
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var F,I,K;z.parameters={...z.parameters,docs:{...(F=z.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    modelValue: 15,
    total: 500
  },
  render: () => ({
    components: {
      DuiPagination
    },
    setup() {
      const page = ref(15);
      return {
        page
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-2">
        <DuiPagination v-model="page" :total="500" :per-page="10" :sibling-count="2" color="primary" show-labels />
        <p class="dk:text-xs dk:text-zinc-500">Pagina {{ page }} de 50</p>
      </div>
    \`
  })
}`,...(K=(I=z.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var U,Y,H;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    modelValue: 3,
    total: 50
  },
  render: () => ({
    components: {
      DuiPagination
    },
    setup() {
      const p = ref(3);
      return {
        p
      };
    },
    template: \`
      <div class="dk:p-4 dk:space-y-4">
        <DuiPagination v-model="p" :total="50" size="sm" color="primary" />
        <DuiPagination v-model="p" :total="50" size="md" color="primary" />
        <DuiPagination v-model="p" :total="50" size="lg" color="primary" />
      </div>
    \`
  })
}`,...(H=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};const ge=["Default","Variants","Colors","LargePagination","Sizes"];export{h as Colors,f as Default,z as LargePagination,P as Sizes,x as Variants,ge as __namedExportsOrder,ke as default};
