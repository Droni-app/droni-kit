import{f as ee,w as te,o as re,h as le,n as U,s as o,p as k,v as oe,i as ae,k as F,x as ne,j as S,r as u,c as n,m as y}from"./iframe-BtNMLuc9.js";import{_ as E}from"./DuiButton-DzILEqsQ.js";import{_ as se}from"./DuiModal-8vYVDBgN.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-CqHtvVnY.js";const de=["accept"],ie={class:"dk:min-h-[60vh] dk:overflow-hidden dk:rounded-lg dk:border dk:border-zinc-200 dk:bg-white dk:dark:border-zinc-700 dk:dark:bg-zinc-950"},ce=["src"],ue={key:1,class:"dk:flex dk:h-[60vh] dk:items-center dk:justify-center dk:px-6 dk:text-center dk:text-sm dk:text-zinc-500 dk:dark:text-zinc-400"},p=ee({inheritAttrs:!1,__name:"DuiFile",props:{modelValue:{type:String,default:""},explorerUrl:{type:String,default:""},uploadUrl:{type:String,default:""},accept:{type:String,default:"*"},size:{type:String,default:"md"},block:{type:Boolean,default:!0},rounded:{type:String,default:"all"}},emits:["update:modelValue","select","upload-start","upload-success","upload-error","browse"],setup(s,{emit:m}){const r=s,a=m,V=u(null),f=u(!1),g=u(!1),d=u(""),z={sm:"dk:gap-3 dk:px-3 dk:py-3",md:"dk:gap-4 dk:px-4 dk:py-4",lg:"dk:gap-5 dk:px-5 dk:py-5"},_={all:"dk:rounded-xl",top:"dk:rounded-t-xl",bottom:"dk:rounded-b-xl",left:"dk:rounded-l-xl",right:"dk:rounded-r-xl",none:"dk:rounded-none"},C=n(()=>!!r.explorerUrl),A=n(()=>r.block?"dk:w-full":"dk:inline-flex dk:max-w-full"),P=n(()=>{const e=z[r.size]||z.md,t=_[r.rounded]||_.all;return["dk:flex dk:w-full dk:flex-col dk:items-stretch dk:justify-between dk:border-b dk:border-zinc-300 dk:bg-zinc-50 dk:text-zinc-800 dk:shadow-sm dk:transition-colors","dk:dark:border-zinc-600 dk:dark:bg-zinc-800 dk:dark:text-zinc-100","dk:sm:flex-row dk:sm:items-center",e,t].join(" ")}),T=n(()=>"dk:min-w-0 dk:flex-1"),$=n(()=>["dk:flex dk:flex-col dk:gap-2 dk:w-full","dk:sm:w-auto dk:sm:flex-row dk:sm:items-center dk:sm:justify-end"].join(" ")),K=n(()=>["dk:mt-1 dk:max-w-full dk:overflow-hidden dk:text-ellipsis dk:whitespace-nowrap dk:text-sm",r.modelValue||d.value?"dk:text-zinc-900 dk:dark:text-zinc-100":"dk:text-zinc-500 dk:dark:text-zinc-400"].join(" ")),W=n(()=>d.value?d.value:r.modelValue?q(r.modelValue):"No hay archivo seleccionado");te(()=>r.modelValue,e=>{e&&(d.value="")});function q(e){try{const l=new URL(e,typeof window<"u"?window.location.origin:"http://localhost").pathname.split("/").filter(Boolean);return decodeURIComponent(l[l.length-1]||e)}catch{const t=e.split("?")[0].split("#")[0].split("/").filter(Boolean);return decodeURIComponent(t[t.length-1]||e)}}function G(){C.value&&(f.value=!0,a("browse"))}function H(){var e;(e=V.value)==null||e.click()}async function J(e){var i;const t=e.target,l=(i=t.files)==null?void 0:i[0];if(!l)return;if(d.value=l.name,a("select",l),!r.uploadUrl){j(t);return}const x=new FormData;x.append("file",l),g.value=!0,a("upload-start",l);try{const c=await fetch(r.uploadUrl,{method:"POST",body:x});if(!c.ok)throw new Error(`Error al subir archivo: ${c.status}`);const v=await Q(c),w=X(v);if(!w)throw new Error("La respuesta de carga no contiene una URL de archivo válida");a("update:modelValue",w),a("upload-success",{file:l,response:v,url:w})}catch(c){const v=c instanceof Error?c:new Error("No fue posible subir el archivo");a("upload-error",v)}finally{g.value=!1,j(t)}}async function Q(e){return(e.headers.get("content-type")||"").includes("application/json")?e.json():e.text()}function X(e){if(typeof e=="string")return e;if(!e||typeof e!="object")return"";const t=e,l=["url","fileUrl","location","path","value"];for(const x of l){const i=t[x];if(typeof i=="string"&&i)return i}return""}function j(e){e.value=""}function Y(e){return typeof e=="string"?e:!e||typeof e!="object"||e.type&&e.type!=="dui:file-selected"?"":e.url||e.fileUrl||e.currentUrl||e.value||""}function Z(){if(!r.explorerUrl||typeof window>"u")return"";try{return new URL(r.explorerUrl,window.location.origin).origin}catch{return""}}function D(e){if(!f.value||!r.explorerUrl)return;const t=Z();if(t&&e.origin!==t)return;const l=Y(e.data);l&&(d.value="",a("update:modelValue",l),f.value=!1)}return re(()=>{typeof window<"u"&&window.addEventListener("message",D)}),le(()=>{typeof window<"u"&&window.removeEventListener("message",D)}),(e,t)=>(y(),U("div",{class:k(A.value)},[o("div",{class:k(P.value)},[o("div",{class:k(T.value)},[t[1]||(t[1]=o("p",{class:"dk:text-sm dk:font-medium dk:text-zinc-700 dk:dark:text-zinc-200"}," Archivo actual ",-1)),o("p",{class:k(K.value)},oe(W.value),3)],2),o("div",{class:k($.value)},[C.value?(y(),ae(E,{key:0,color:"primary",variant:"outline",size:"sm",block:!1,onClick:G},{default:F(()=>[...t[2]||(t[2]=[o("i",{class:"mdi mdi-folder-search-outline","aria-hidden":"true"},null,-1)])]),_:1})):ne("",!0),S(E,{color:"neutral",variant:"solid",size:"sm",block:!1,loading:g.value,disabled:g.value,onClick:H},{default:F(()=>[...t[3]||(t[3]=[o("i",{class:"mdi mdi-upload","aria-hidden":"true"},null,-1)])]),_:1},8,["loading","disabled"])],2)],2),o("input",{ref_key:"fileInputRef",ref:V,type:"file",class:"dk:hidden",accept:r.accept,onChange:J},null,40,de),S(se,{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=l=>f.value=l),title:"Explorador de archivos",description:"Selecciona un archivo existente desde el explorador configurado.",size:"xl",color:"neutral",variant:"solid"},{default:F(()=>[o("div",ie,[r.explorerUrl?(y(),U("iframe",{key:0,src:r.explorerUrl,title:"Explorador de archivos",class:"dk:h-[60vh] dk:w-full dk:border-0 dk:bg-transparent"},null,8,ce)):(y(),U("div",ue," No se configuró una URL para el explorador de archivos. "))])]),_:1},8,["modelValue"])],2))}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"DuiFile",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"explorerUrl",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"uploadUrl",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"accept",type:{name:"string"},defaultValue:{func:!1,value:"'*'"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"select",type:{names:["File"]}},{name:"upload-start",type:{names:["File"]}},{name:"upload-success",type:{names:["{ file: File; response: unknown; url: string }"]}},{name:"upload-error",type:{names:["Error"]}},{name:"browse"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiFile.vue"]});const pe=`
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Explorador</title>
    <style>
      :root {
        color-scheme: light dark;
        font-family: ui-sans-serif, system-ui, sans-serif;
      }

      body {
        margin: 0;
        padding: 24px;
        background: #f4f4f5;
        color: #18181b;
      }

      .grid {
        display: grid;
        gap: 12px;
      }

      button {
        border: 1px solid #d4d4d8;
        border-radius: 12px;
        padding: 14px 16px;
        text-align: left;
        cursor: pointer;
        background: white;
        color: inherit;
      }

      button:hover {
        border-color: #94a3b8;
      }

      strong {
        display: block;
        margin-bottom: 4px;
      }

      small {
        color: #52525b;
      }

      @media (prefers-color-scheme: dark) {
        body {
          background: #09090b;
          color: #f4f4f5;
        }

        button {
          background: #18181b;
          border-color: #3f3f46;
        }

        button:hover {
          border-color: #a1a1aa;
        }

        small {
          color: #d4d4d8;
        }
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <button type="button" onclick="parent.postMessage({ type: 'dui:file-selected', url: 'https://cdn.droni.co/files/Manual-de-uso.pdf' }, '*')">
        <strong>Manual-de-uso.pdf</strong>
        <small>Seleccionar archivo PDF existente</small>
      </button>

      <button type="button" onclick="parent.postMessage({ type: 'dui:file-selected', url: 'https://cdn.droni.co/files/Banner-principal.png' }, '*')">
        <strong>Banner-principal.png</strong>
        <small>Seleccionar imagen existente</small>
      </button>
    </div>
  </body>
</html>
`,O=`data:text/html;charset=utf-8,${encodeURIComponent(pe)}`,ye={title:"Forms/File",component:p,tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"}},explorerUrl:{control:{type:"text"}},uploadUrl:{control:{type:"text"}},accept:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","md","lg"]},block:{control:{type:"boolean"}},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"]}}},b={args:{modelValue:"https://cdn.droni.co/files/Manual-de-identidad.pdf",explorerUrl:O,uploadUrl:"",accept:".pdf,.png,.jpg,.jpeg",size:"md",block:!0,rounded:"all"},render:s=>({components:{DuiFile:p},setup(){const m=u(s.modelValue);return{args:s,currentFileUrl:m}},template:`
      <div class="p-4">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
          Adjuntar archivo
        </label>
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
        />
        <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">
          Valor actual del modelo: {{ currentFileUrl || 'Sin archivo' }}
        </p>
      </div>
    `})},h={args:{modelValue:"",explorerUrl:O,uploadUrl:"",accept:"image/*",size:"sm",block:!0,rounded:"all"},render:s=>({components:{DuiFile:p},setup(){const m=u("");return{args:s,currentFileUrl:m}},template:`
      <div class="max-w-xl p-4">
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
        />
      </div>
    `})};var N,B,R;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: 'https://cdn.droni.co/files/Manual-de-identidad.pdf',
    explorerUrl,
    uploadUrl: '',
    accept: '.pdf,.png,.jpg,.jpeg',
    size: 'md',
    block: true,
    rounded: 'all'
  },
  render: args => ({
    components: {
      DuiFile
    },
    setup() {
      const currentFileUrl = ref(args.modelValue);
      return {
        args,
        currentFileUrl
      };
    },
    template: \`
      <div class="p-4">
        <label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
          Adjuntar archivo
        </label>
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
        />
        <p class="mt-3 text-xs text-gray-500 dark:text-gray-400">
          Valor actual del modelo: {{ currentFileUrl || 'Sin archivo' }}
        </p>
      </div>
    \`
  })
}`,...(R=(B=b.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var M,I,L;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    explorerUrl,
    uploadUrl: '',
    accept: 'image/*',
    size: 'sm',
    block: true,
    rounded: 'all'
  },
  render: args => ({
    components: {
      DuiFile
    },
    setup() {
      const currentFileUrl = ref('');
      return {
        args,
        currentFileUrl
      };
    },
    template: \`
      <div class="max-w-xl p-4">
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
        />
      </div>
    \`
  })
}`,...(L=(I=h.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const be=["Default","Compact"];export{h as Compact,b as Default,be as __namedExportsOrder,ye as default};
