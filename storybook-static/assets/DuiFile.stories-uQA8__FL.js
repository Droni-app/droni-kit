import{f as P,y as T,h,p as r,n as p,x as q,t as G,j as y,s as w,w as F,r as c,i as d,o as f}from"./iframe-BX9sGRHr.js";import{_ as V}from"./DuiButton-oFhP9YFC.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-D0JCgCrd.js";const J=["accept"],u=P({inheritAttrs:!1,__name:"DuiFile",props:{modelValue:{type:String,default:null},accept:{type:String,default:"*"},size:{type:String,default:"md"},block:{type:Boolean,default:!0},rounded:{type:String,default:"all"},uploadBtn:{type:Boolean,default:!0},browserBtn:{type:Boolean,default:!0}},emits:["update:modelValue","open-browser","upload-file","open-file"],setup(i,{emit:n}){const e=i,o=n,s=c(null),l=c(""),g={sm:"dk:gap-1 dk:px-2 dk:py-1",md:"dk:gap-2 dk:px-3 dk:py-2",lg:"dk:gap-3 dk:px-4 dk:py-3"},x={all:"dk:rounded-xl",top:"dk:rounded-t-xl",bottom:"dk:rounded-b-xl",left:"dk:rounded-l-xl",right:"dk:rounded-r-xl",none:"dk:rounded-none"},_=d(()=>e.block?"dk:w-full":"dk:inline-flex dk:max-w-full"),j=d(()=>{const a=g[e.size]||g.md,t=x[e.rounded]||x.all;return["dk:flex dk:w-full dk:flex-col dk:items-stretch dk:justify-between dk:border-b dk:border-zinc-300 dk:bg-zinc-50 dk:text-zinc-800 dk:shadow-sm dk:transition-colors","dk:dark:border-zinc-600 dk:dark:bg-zinc-800 dk:dark:text-zinc-100","dk:sm:flex-row dk:sm:items-center",a,t].join(" ")}),O=d(()=>"dk:min-w-0 dk:flex-1"),N=d(()=>["dk:flex dk:flex-col dk:gap-2 dk:w-full","dk:sm:w-auto dk:sm:flex-row dk:sm:items-center dk:sm:justify-end"].join(" ")),$=d(()=>["dk:mt-1 dk:max-w-full dk:overflow-hidden dk:text-ellipsis dk:whitespace-nowrap dk:text-sm",e.modelValue||l.value?"dk:text-zinc-900 dk:dark:text-zinc-100":"dk:text-zinc-500 dk:dark:text-zinc-400"].join(" ")),E=d(()=>l.value?l.value:e.modelValue?A(e.modelValue):"No hay archivo seleccionado");T(()=>e.modelValue,a=>{a&&(l.value="")});function A(a){const t=a.split("/");return t[t.length-1]}function I(){o("open-browser")}function M(){var a;(a=s.value)==null||a.click()}function H(a){var b;const t=a.target,m=(b=t.files)==null?void 0:b[0];m&&(l.value=m.name,o("upload-file",m),R(t))}function R(a){a.value=""}return(a,t)=>(f(),h("div",{class:p(_.value)},[r("div",{class:p(j.value)},[r("div",{class:p(O.value)},[e.modelValue??l.value?(f(),h("p",{key:0,class:p($.value)},[r("a",{href:"#",onClick:t[0]||(t[0]=q(m=>o("open-file",e.modelValue??l.value),["prevent"])),class:"dk:ml-2 dk:text-pink-500 dk:underline dk:transition-colors dk:hover:text-pink-800 dk:dark:text-pink-400 dk:dark:hover:text-pink-300"},G(E.value),1)],2)):y("",!0)],2),r("div",{class:p(N.value)},[e.browserBtn?(f(),w(V,{key:0,color:"primary",variant:"outline",size:"sm",block:!1,title:"Abrir navegador de archivos",onClick:I},{default:F(()=>[...t[1]||(t[1]=[r("i",{class:"mdi mdi-folder-search-outline","aria-hidden":"true"},null,-1)])]),_:1})):y("",!0),e.uploadBtn?(f(),w(V,{key:1,color:"neutral",variant:"solid",size:"sm",block:!1,title:"Subir nuevo archivo",onClick:M},{default:F(()=>[...t[2]||(t[2]=[r("i",{class:"mdi mdi-upload","aria-hidden":"true"},null,-1)])]),_:1})):y("",!0)],2)],2),r("input",{ref_key:"fileInputRef",ref:s,type:"file",class:"dk:hidden",accept:e.accept,onChange:H},null,40,J)],2))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"DuiFile",description:"",tags:{},props:[{name:"modelValue",type:{name:"String as () => string | null"},defaultValue:{func:!1,value:"null"}},{name:"accept",type:{name:"string"},defaultValue:{func:!1,value:"'*'"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}},{name:"uploadBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"browserBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"open-browser"},{name:"upload-file",type:{names:["File"]}},{name:"open-file",type:{names:["string"]}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiFile.vue"]});const Y={title:"Forms/File",component:u,tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"}},accept:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","md","lg"]},block:{control:{type:"boolean"}},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"]},uploadBtn:{control:{type:"boolean"}},browserBtn:{control:{type:"boolean"}}}},k={args:{modelValue:"https://cdn.droni.co/files/Manual-de-identidad.pdf",accept:".pdf,.png,.jpg,.jpeg",size:"md",block:!0,rounded:"all"},render:i=>({components:{DuiFile:u},setup(){const n=c(i.modelValue),e=c("Haz clic en un botón para ver los eventos emitidos.");function o(){e.value="Evento open-browser emitido"}function s(l){e.value=`Evento upload-file emitido con ${l.name}`,n.value=`https://cdn.droni.co/files/${l.name}`}return{args:i,currentFileUrl:n,activity:e,handleOpenBrowser:o,handleUploadFile:s}},template:`
      <div class="p-4 space-y-3">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Adjuntar archivo
        </label>
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
          @open-browser="handleOpenBrowser"
          @upload-file="handleUploadFile"
        />
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ activity }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Valor actual del modelo: {{ currentFileUrl || 'Sin archivo' }}
        </p>
      </div>
    `})},v={args:{modelValue:"",accept:"image/*",size:"sm",block:!0,rounded:"all"},render:i=>({components:{DuiFile:u},setup(){const n=c(""),e=c("Esperando interacción.");function o(){e.value="open-browser emitido"}function s(l){e.value=`upload-file emitido con ${l.name}`,n.value=`https://cdn.droni.co/files/${l.name}`}return{args:i,currentFileUrl:n,activity:e,handleOpenBrowser:o,handleUploadFile:s}},template:`
      <div class="max-w-xl p-4 space-y-3">
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
          @open-browser="handleOpenBrowser"
          @upload-file="handleUploadFile"
        />
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ activity }}
        </p>
      </div>
    `})};var B,z,U;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: 'https://cdn.droni.co/files/Manual-de-identidad.pdf',
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
      const activity = ref('Haz clic en un botón para ver los eventos emitidos.');
      function handleOpenBrowser() {
        activity.value = 'Evento open-browser emitido';
      }
      function handleUploadFile(file: File) {
        activity.value = \`Evento upload-file emitido con \${file.name}\`;
        currentFileUrl.value = \`https://cdn.droni.co/files/\${file.name}\`;
      }
      return {
        args,
        currentFileUrl,
        activity,
        handleOpenBrowser,
        handleUploadFile
      };
    },
    template: \`
      <div class="p-4 space-y-3">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Adjuntar archivo
        </label>
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
          @open-browser="handleOpenBrowser"
          @upload-file="handleUploadFile"
        />
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ activity }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Valor actual del modelo: {{ currentFileUrl || 'Sin archivo' }}
        </p>
      </div>
    \`
  })
}`,...(U=(z=k.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var C,D,S;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: '',
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
      const activity = ref('Esperando interacción.');
      function handleOpenBrowser() {
        activity.value = 'open-browser emitido';
      }
      function handleUploadFile(file: File) {
        activity.value = \`upload-file emitido con \${file.name}\`;
        currentFileUrl.value = \`https://cdn.droni.co/files/\${file.name}\`;
      }
      return {
        args,
        currentFileUrl,
        activity,
        handleOpenBrowser,
        handleUploadFile
      };
    },
    template: \`
      <div class="max-w-xl p-4 space-y-3">
        <DuiFile
          v-bind="args"
          v-model="currentFileUrl"
          @open-browser="handleOpenBrowser"
          @upload-file="handleUploadFile"
        />
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ activity }}
        </p>
      </div>
    \`
  })
}`,...(S=(D=v.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const Z=["Default","Compact"];export{v as Compact,k as Default,Z as __namedExportsOrder,Y as default};
