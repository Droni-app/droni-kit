import{e as M,v as L,f as b,u as o,p as m,t as T,i as y,k as w,w as F,r as p,h as c,o as f}from"./iframe-DjC63Ylc.js";import{_ as U}from"./DuiButton-DYWnHoxz.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-CynBHpJD.js";const q=["href"],G=["accept"],u=M({inheritAttrs:!1,__name:"DuiFile",props:{modelValue:{type:String,default:""},accept:{type:String,default:"*"},size:{type:String,default:"md"},block:{type:Boolean,default:!0},rounded:{type:String,default:"all"},uploadBtn:{type:Boolean,default:!0},browserBtn:{type:Boolean,default:!0}},emits:["update:modelValue","open-browser","upload-file"],setup(r,{emit:n}){const e=r,i=n,d=p(null),l=p(""),g={sm:"dk:gap-1 dk:px-2 dk:py-1",md:"dk:gap-2 dk:px-3 dk:py-2",lg:"dk:gap-3 dk:px-4 dk:py-3"},x={all:"dk:rounded-xl",top:"dk:rounded-t-xl",bottom:"dk:rounded-b-xl",left:"dk:rounded-l-xl",right:"dk:rounded-r-xl",none:"dk:rounded-none"},O=c(()=>e.block?"dk:w-full":"dk:inline-flex dk:max-w-full"),S=c(()=>{const t=g[e.size]||g.md,a=x[e.rounded]||x.all;return["dk:flex dk:w-full dk:flex-col dk:items-stretch dk:justify-between dk:border-b dk:border-zinc-300 dk:bg-zinc-50 dk:text-zinc-800 dk:shadow-sm dk:transition-colors","dk:dark:border-zinc-600 dk:dark:bg-zinc-800 dk:dark:text-zinc-100","dk:sm:flex-row dk:sm:items-center",t,a].join(" ")}),j=c(()=>"dk:min-w-0 dk:flex-1"),N=c(()=>["dk:flex dk:flex-col dk:gap-2 dk:w-full","dk:sm:w-auto dk:sm:flex-row dk:sm:items-center dk:sm:justify-end"].join(" ")),$=c(()=>["dk:mt-1 dk:max-w-full dk:overflow-hidden dk:text-ellipsis dk:whitespace-nowrap dk:text-sm",e.modelValue||l.value?"dk:text-zinc-900 dk:dark:text-zinc-100":"dk:text-zinc-500 dk:dark:text-zinc-400"].join(" ")),E=c(()=>l.value?l.value:e.modelValue?I(e.modelValue):"No hay archivo seleccionado");L(()=>e.modelValue,t=>{t&&(l.value="")});function I(t){try{const s=new URL(t,typeof window<"u"?window.location.origin:"http://localhost").pathname.split("/").filter(Boolean);return decodeURIComponent(s[s.length-1]||t)}catch{const a=t.split("?")[0].split("#")[0].split("/").filter(Boolean);return decodeURIComponent(a[a.length-1]||t)}}function R(){i("open-browser")}function A(){var t;(t=d.value)==null||t.click()}function P(t){var h;const a=t.target,s=(h=a.files)==null?void 0:h[0];s&&(l.value=s.name,i("upload-file",s),H(a))}function H(t){t.value=""}return(t,a)=>(f(),b("div",{class:m(O.value)},[o("div",{class:m(S.value)},[o("div",{class:m(j.value)},[e.modelValue??l.value?(f(),b("p",{key:0,class:m($.value)},[o("a",{href:e.modelValue,target:"_blank",class:"dk:ml-2 dk:text-pink-500 dk:underline dk:transition-colors dk:hover:text-pink-800 dk:dark:text-pink-400 dk:dark:hover:text-pink-300"},T(E.value),9,q)],2)):y("",!0)],2),o("div",{class:m(N.value)},[e.browserBtn?(f(),w(U,{key:0,color:"primary",variant:"outline",size:"sm",block:!1,title:"Abrir navegador de archivos",onClick:R},{default:F(()=>[...a[0]||(a[0]=[o("i",{class:"mdi mdi-folder-search-outline","aria-hidden":"true"},null,-1)])]),_:1})):y("",!0),e.uploadBtn?(f(),w(U,{key:1,color:"neutral",variant:"solid",size:"sm",block:!1,title:"Subir nuevo archivo",onClick:A},{default:F(()=>[...a[1]||(a[1]=[o("i",{class:"mdi mdi-upload","aria-hidden":"true"},null,-1)])]),_:1})):y("",!0)],2)],2),o("input",{ref_key:"fileInputRef",ref:d,type:"file",class:"dk:hidden",accept:e.accept,onChange:P},null,40,G)],2))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"DuiFile",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"accept",type:{name:"string"},defaultValue:{func:!1,value:"'*'"}},{name:"size",type:{name:"String as () => 'sm' | 'md' | 'lg'"},defaultValue:{func:!1,value:"'md'"}},{name:"block",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"rounded",type:{name:"String as () => 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'"},defaultValue:{func:!1,value:"'all'"}},{name:"uploadBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"browserBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"open-browser"},{name:"upload-file",type:{names:["File"]}}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiFile.vue"]});const Y={title:"Forms/File",component:u,tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"}},accept:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","md","lg"]},block:{control:{type:"boolean"}},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"]},uploadBtn:{control:{type:"boolean"}},browserBtn:{control:{type:"boolean"}}}},k={args:{modelValue:"https://cdn.droni.co/files/Manual-de-identidad.pdf",accept:".pdf,.png,.jpg,.jpeg",size:"md",block:!0,rounded:"all"},render:r=>({components:{DuiFile:u},setup(){const n=p(r.modelValue),e=p("Haz clic en un botón para ver los eventos emitidos.");function i(){e.value="Evento open-browser emitido"}function d(l){e.value=`Evento upload-file emitido con ${l.name}`,n.value=`https://cdn.droni.co/files/${l.name}`}return{args:r,currentFileUrl:n,activity:e,handleOpenBrowser:i,handleUploadFile:d}},template:`
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
    `})},v={args:{modelValue:"",accept:"image/*",size:"sm",block:!0,rounded:"all"},render:r=>({components:{DuiFile:u},setup(){const n=p(""),e=p("Esperando interacción.");function i(){e.value="open-browser emitido"}function d(l){e.value=`upload-file emitido con ${l.name}`,n.value=`https://cdn.droni.co/files/${l.name}`}return{args:r,currentFileUrl:n,activity:e,handleOpenBrowser:i,handleUploadFile:d}},template:`
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
    `})};var V,B,z;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(B=k.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var C,_,D;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(_=v.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Z=["Default","Compact"];export{v as Compact,k as Default,Z as __namedExportsOrder,Y as default};
