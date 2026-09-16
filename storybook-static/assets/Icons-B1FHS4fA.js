import{u as s,j as e,M as l}from"./blocks-lKoXf1AQ.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-sEkeUlo0.js";function c(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Icons"}),`
`,e.jsx(i.h1,{id:"iconos-mdi-material-design-icons",children:"Iconos MDI (Material Design Icons)"}),`
`,e.jsxs(i.p,{children:["Droni-kit utiliza la librería ",e.jsx(i.strong,{children:"Material Design Icons (MDI)"})," para los iconos. El CDN se carga automáticamente en la aplicación."]}),`
`,e.jsx(i.h2,{id:"instalación",children:"Instalación"}),`
`,e.jsxs(i.p,{children:["Agrega el CDN de MDI en el ",e.jsx(i.code,{children:"<head>"})," de tu archivo ",e.jsx(i.code,{children:"index.html"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css"
/>
`})}),`
`,e.jsx(i.h2,{id:"uso-básico",children:"Uso básico"}),`
`,e.jsxs(i.p,{children:["Los iconos se utilizan como clases CSS con el prefijo ",e.jsx(i.code,{children:"mdi"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="mdi mdi-home"></i>
<i class="mdi mdi-account"></i>
<i class="mdi mdi-email"></i>
`})}),`
`,e.jsx(i.h2,{id:"tamaños",children:"Tamaños"}),`
`,e.jsx(i.p,{children:"Puedes controlar el tamaño de los iconos con clases de tamaño de fuente:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="mdi mdi-home mdi-18px"></i>
<i class="mdi mdi-home mdi-24px"></i>
<i class="mdi mdi-home mdi-36px"></i>
<i class="mdi mdi-home mdi-48px"></i>
`})}),`
`,e.jsx(i.p,{children:"O con clases de Tailwind CSS:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<i class="mdi mdi-home text-sm"></i>
<i class="mdi mdi-home text-base"></i>
<i class="mdi mdi-home text-xl"></i>
<i class="mdi mdi-home text-4xl"></i>
`})}),`
`,e.jsx(i.h2,{id:"uso-en-componentes-droni-kit",children:"Uso en componentes Droni-kit"}),`
`,e.jsxs(i.p,{children:["Los componentes como ",e.jsx(i.code,{children:"DuiLabel"})," y ",e.jsx(i.code,{children:"DuiNavbar"})," aceptan la prop ",e.jsx(i.code,{children:"icon"})," con el nombre de clase MDI:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-vue",children:`<DuiLabel title="Email" icon="mdi mdi-email" />
`})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-vue",children:`<DuiNavbar :items="[{ label: 'Inicio', to: '/', icon: 'mdi mdi-home' }]" />
`})}),`
`,e.jsx(i.h2,{id:"ejemplos-de-iconos-comunes",children:"Ejemplos de iconos comunes"}),`
`,e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"16px",padding:"16px"},children:[{icon:"mdi-home",name:"home"},{icon:"mdi-account",name:"account"},{icon:"mdi-email",name:"email"},{icon:"mdi-phone",name:"phone"},{icon:"mdi-lock",name:"lock"},{icon:"mdi-magnify",name:"magnify"},{icon:"mdi-bell",name:"bell"},{icon:"mdi-cog",name:"cog"},{icon:"mdi-heart",name:"heart"},{icon:"mdi-star",name:"star"},{icon:"mdi-check",name:"check"},{icon:"mdi-close",name:"close"},{icon:"mdi-plus",name:"plus"},{icon:"mdi-minus",name:"minus"},{icon:"mdi-pencil",name:"pencil"},{icon:"mdi-delete",name:"delete"},{icon:"mdi-download",name:"download"},{icon:"mdi-upload",name:"upload"},{icon:"mdi-share",name:"share"},{icon:"mdi-menu",name:"menu"},{icon:"mdi-arrow-left",name:"arrow-left"},{icon:"mdi-arrow-right",name:"arrow-right"},{icon:"mdi-chevron-down",name:"chevron-down"},{icon:"mdi-calendar",name:"calendar"}].map(({icon:a,name:o})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"12px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e.jsx("i",{className:`mdi ${a}`,style:{fontSize:"24px"}}),e.jsx("span",{style:{fontSize:"11px",color:"#6b7280",textAlign:"center"},children:o})]},o))}),`
`,e.jsx(i.h2,{id:"catálogo-completo",children:"Catálogo completo"}),`
`,e.jsx(i.p,{children:"Puedes explorar el catálogo completo de más de 7,000 iconos disponibles en:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://pictogrammers.com/library/mdi/",rel:"nofollow",children:"pictogrammers.com/library/mdi"})}),`
`]})]})}function t(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(c,{...n})}):c(n)}export{t as default};
