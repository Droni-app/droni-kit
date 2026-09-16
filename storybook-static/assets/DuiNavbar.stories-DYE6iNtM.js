import{f as kt,h as n,l as E,j as m,p as i,n as k,F as p,k as A,H as X,r as mt,i as b,o as r,s as f,w as D,q as v,t as x,m as N,v as w,I as Y,J as ut}from"./iframe-sEkeUlo0.js";import{g as ct,a as gt}from"./router-detection-C7RuyEyl.js";import{_ as o}from"./DuiButton-CUoUMhpe.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const pt={key:0,class:"dk:flex dk:items-center dk:gap-4 dk:flex-shrink-0"},bt={class:"dk:hidden dk:md:flex dk:items-center dk:flex-1"},vt={key:0,class:"dk:relative dk:group"},xt={class:"dk:absolute dk:left-0 dk:top-full dk:min-w-56 dk:py-2 dk:mt-1 dk:bg-gradient-to-b dk:from-white/95 dk:to-gray-50/95 dk:dark:bg-none dk:dark:bg-zinc-900 dk:backdrop-blur-md dk:shadow-lg dk:border dk:border-white/40 dk:dark:border-zinc-800 dk:opacity-0 dk:invisible dk:group-hover:opacity-100 dk:group-hover:visible dk:transition-all dk:duration-200 dk:z-50"},yt={key:1,class:"dk:hidden dk:md:flex dk:items-center dk:gap-2 dk:flex-shrink-0"},ht={class:"dk:w-6 dk:h-6 dk:stroke-gray-900 dk:dark:stroke-white",fill:"none",viewBox:"0 0 24 24"},ft=["d"],Dt={class:"dk:md:hidden dk:absolute dk:top-full dk:left-0 dk:w-full dk:bg-gradient-to-b dk:from-white/95 dk:to-gray-50/95 dk:dark:bg-none dk:dark:bg-zinc-900 dk:backdrop-blur-md dk:border-t dk:border-white/40 dk:dark:border-zinc-800 dk:shadow-lg dk:dark:shadow-black/30 dk:z-40"},Nt={class:"dk:px-4 dk:py-3 dk:space-y-2"},wt={key:0},Bt=["onClick"],zt={class:"dk:flex dk:items-center"},Ct={class:"dk:ml-4 dk:mt-2 dk:space-y-1"},At={key:0,class:"dk:pt-3 dk:border-t dk:border-white/20 dk:dark:border-white/10"},d=kt({__name:"DuiNavbar",props:{items:{default:()=>[]},size:{default:"m"},itemsAlignment:{default:"left"},underlineColor:{default:"primary"}},setup(e){const z=e,y=mt(!1),c=ut({}),g=a=>ct(a.to),h=a=>{const u=g(a);return gt(a.to,u)},Qe=()=>{y.value=!y.value},F=()=>{y.value=!1,Object.keys(c).forEach(a=>{c[a]=!1})},Xe=a=>{c[a]=!c[a]},J={s:{height:"dk:h-12",padding:"dk:px-3",text:"dk:text-sm",itemPadding:"dk:px-2 dk:py-1.5"},m:{height:"dk:h-16",padding:"dk:px-4",text:"dk:text-base",itemPadding:"dk:px-3 dk:py-2"},l:{height:"dk:h-20",padding:"dk:px-6",text:"dk:text-lg",itemPadding:"dk:px-4 dk:py-3"}},Ye=b(()=>{const a=J[z.size];return["dk:relative","dk:bg-gradient-to-b dk:from-white/80 dk:via-white/70 dk:to-gray-50/80","dk:dark:bg-none dk:dark:bg-zinc-900","dk:backdrop-blur-md dk:backdrop-brightness-110 dk:dark:backdrop-filter-none","dk:border-b dk:border-white/40 dk:dark:border-zinc-800","dk:shadow-lg dk:shadow-black/10 dk:dark:shadow-black/30","dk:before:absolute dk:before:top-0 dk:before:left-0 dk:before:right-0 dk:before:h-0.5","dk:before:bg-gradient-to-r dk:before:from-white/60 dk:before:via-white/40 dk:before:to-transparent","dk:dark:before:hidden","dk:flex dk:items-center dk:w-full dk:gap-4",a.height,a.padding,a.text].join(" ")}),Ze=b(()=>["dk:flex dk:items-center dk:space-x-1 dk:flex-1",{left:"dk:justify-start",center:"dk:justify-center",right:"dk:justify-end"}[z.itemsAlignment]].join(" ")),et=()=>{const a={neutral:"dk:before:from-zinc-500 dk:before:to-zinc-600 dk:dark:before:from-zinc-400 dk:dark:before:to-zinc-500",primary:"dk:before:from-slate-600 dk:before:to-slate-700 dk:dark:before:from-slate-400 dk:dark:before:to-slate-500",secondary:"dk:before:from-pink-500 dk:before:to-pink-600 dk:dark:before:from-pink-400 dk:dark:before:to-pink-500",success:"dk:before:from-emerald-500 dk:before:to-emerald-600 dk:dark:before:from-emerald-400 dk:dark:before:to-emerald-500",danger:"dk:before:from-rose-500 dk:before:to-rose-600 dk:dark:before:from-rose-400 dk:dark:before:to-rose-500",warning:"dk:before:from-amber-500 dk:before:to-amber-600 dk:dark:before:from-amber-400 dk:dark:before:to-amber-500"};return a[z.underlineColor]||a.primary},G=b(()=>{const a=J[z.size],u=et();return(t,s=!0)=>{const rt=t.active??!1,dt=s?"dk:pl-3":"dk:pl-2",nt="dk:pr-3",st=s?"dk:pl-2":"dk:pl-1",ot="dk:pr-2",it=s?"dk:pl-4":"dk:pl-3",lt="dk:pr-4";let C="";return a.itemPadding.includes("px-2")?C=`${st} ${ot} dk:py-1.5`:a.itemPadding.includes("px-4")?C=`${it} ${lt} dk:py-3`:C=`${dt} ${nt} dk:py-2`,["dk:flex dk:items-center dk:relative dk:transition-all dk:duration-300","dk:text-gray-700 dk:hover:text-gray-900 dk:dark:text-gray-300 dk:dark:hover:text-gray-100","dk:focus:outline-none dk:focus:ring-2 dk:focus:ring-blue-400 dk:focus:ring-opacity-50 dk:dark:focus:ring-blue-300","dk:no-underline","dk:before:absolute dk:before:bottom-0 dk:before:left-0 dk:before:h-0.5","dk:before:bg-gradient-to-r",u,"dk:before:transition-all dk:before:duration-300",rt?"dk:before:w-full dk:text-gray-900 dk:dark:text-gray-100":"dk:before:w-0 dk:hover:before:w-full",C].join(" ")}}),tt=b(()=>["dk:block dk:w-full dk:text-left dk:px-4 dk:py-2 dk:text-sm dk:whitespace-nowrap","dk:text-gray-700 dk:hover:text-gray-900 dk:hover:bg-white/50 dk:dark:hover:bg-white/10","dk:dark:text-gray-300 dk:dark:hover:text-gray-100","dk:transition-all dk:duration-200 dk:no-underline","dk:border-l-2 dk:border-transparent dk:hover:border-blue-500"].join(" ")),Q=b(()=>["dk:flex dk:items-center dk:justify-start dk:w-full dk:text-left dk:px-3 dk:py-2","dk:text-gray-700 dk:hover:text-gray-900 dk:rounded-lg","dk:bg-white/10 dk:hover:bg-white/25 dk:dark:bg-white/5 dk:dark:hover:bg-white/15","dk:dark:text-gray-300 dk:dark:hover:text-gray-100","dk:border dk:border-white/20 dk:dark:border-white/10 dk:hover:border-white/40 dk:dark:hover:border-white/20","dk:transition-all dk:duration-200 dk:no-underline"].join(" ")),at=b(()=>["dk:block dk:w-full dk:text-left dk:px-3 dk:py-2 dk:text-sm dk:rounded-lg","dk:text-gray-600 dk:hover:text-gray-800 dk:hover:bg-white/30 dk:dark:hover:bg-white/10","dk:dark:text-gray-400 dk:dark:hover:text-gray-200","dk:border-l-2 dk:border-transparent dk:hover:border-blue-500","dk:transition-all dk:duration-200 dk:no-underline"].join(" "));return(a,u)=>(r(),n("nav",{class:k(Ye.value)},[a.$slots.brand?(r(),n("div",pt,[E(a.$slots,"brand")])):m("",!0),i("div",bt,[i("div",{class:k(Ze.value)},[(r(!0),n(p,null,A(e.items,t=>(r(),n(p,{key:t.label},[t.children&&t.children.length>0?(r(),n("div",vt,[(r(),f(w(g(t)),N({ref_for:!0},h(t),{class:G.value(t,!0)}),{default:D(()=>[t.icon?(r(),n("i",{key:0,class:k([t.icon,"dk:mr-2"])},null,2)):m("",!0),v(" "+x(t.label)+" ",1),u[0]||(u[0]=i("svg",{class:"dk:w-4 dk:h-4 dk:ml-1 dk:transform dk:group-hover:rotate-180 dk:transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),_:2},1040,["class"])),i("div",xt,[(r(!0),n(p,null,A(t.children,s=>(r(),f(w(g(s)),N({key:s.label},{ref_for:!0},h(s),{class:tt.value}),{default:D(()=>[s.icon?(r(),n("i",{key:0,class:k([s.icon,"dk:mr-2"])},null,2)):m("",!0),v(" "+x(s.label),1)]),_:2},1040,["class"]))),128))])])):(r(),f(w(g(t)),N({key:1,ref_for:!0},h(t),{class:G.value(t,!1)}),{default:D(()=>[t.icon?(r(),n("i",{key:0,class:k([t.icon,"dk:mr-2"])},null,2)):m("",!0),v(" "+x(t.label),1)]),_:2},1040,["class"]))],64))),128))],2)]),a.$slots.actions?(r(),n("div",yt,[E(a.$slots,"actions")])):m("",!0),i("button",{type:"button",onClick:Qe,class:"dk:md:hidden dk:ml-auto dk:flex-shrink-0 dk:p-2 dk:rounded-md dk:hover:bg-gray-100 dk:dark:hover:bg-gray-700 dk:transition-colors"},[(r(),n("svg",ht,[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:y.value?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"},null,8,ft)]))]),X(i("div",Dt,[i("div",Nt,[(r(!0),n(p,null,A(e.items,t=>(r(),n(p,{key:t.label},[t.children&&t.children.length>0?(r(),n("div",wt,[i("button",{type:"button",onClick:s=>Xe(t.label),class:k([Q.value,"dk:justify-between"])},[i("div",zt,[t.icon?(r(),n("i",{key:0,class:k([t.icon,"dk:mr-2"])},null,2)):m("",!0),v(" "+x(t.label),1)]),(r(),n("svg",{class:k(["dk:w-4 dk:h-4 dk:transform dk:transition-transform dk:flex-shrink-0",c[t.label]?"dk:rotate-180":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...u[1]||(u[1]=[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))],10,Bt),X(i("div",Ct,[(r(!0),n(p,null,A(t.children,s=>(r(),f(w(g(s)),N({key:s.label},{ref_for:!0},h(s),{class:at.value,onClick:F}),{default:D(()=>[s.icon?(r(),n("i",{key:0,class:k([s.icon,"dk:mr-2"])},null,2)):m("",!0),v(" "+x(s.label),1)]),_:2},1040,["class"]))),128))],512),[[Y,c[t.label]]])])):(r(),f(w(g(t)),N({key:1,ref_for:!0},h(t),{class:Q.value,onClick:F}),{default:D(()=>[t.icon?(r(),n("i",{key:0,class:k([t.icon,"dk:mr-2"])},null,2)):m("",!0),v(" "+x(t.label),1)]),_:2},1040,["class"]))],64))),128)),a.$slots.actions?(r(),n("div",At,[E(a.$slots,"actions")])):m("",!0)])],512),[[Y,y.value]])],2))}});d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"DuiNavbar",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"NavbarItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"s"'},{name:'"m"'},{name:'"l"'}]},defaultValue:{func:!1,value:"'m'"}},{name:"itemsAlignment",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'left'"}},{name:"underlineColor",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"success"'},{name:'"danger"'},{name:'"warning"'}]},defaultValue:{func:!1,value:"'primary'"}}],slots:[{name:"brand"},{name:"actions"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Widgets/DuiNavbar.vue"]});const B=[{label:"Home",to:"/",icon:"mdi mdi-home"},{label:"Products",to:"/products",icon:"mdi mdi-package-variant",children:[{label:"All Products",to:"/products/all",icon:"mdi mdi-view-grid"},{label:"Categories",to:"/products/categories",icon:"mdi mdi-tag-multiple"},{label:"New Arrivals",to:"/products/new",icon:"mdi mdi-new-box"},{label:"Sale",to:"/products/sale",icon:"mdi mdi-sale"}]},{label:"Services",to:"/services",icon:"mdi mdi-cog",children:[{label:"Consulting",to:"/services/consulting",icon:"mdi mdi-account-tie"},{label:"Support",to:"/services/support",icon:"mdi mdi-help-circle"},{label:"Training",to:"/services/training",icon:"mdi mdi-school"}]},{label:"About",to:"/about",icon:"mdi mdi-information"},{label:"Contact",to:"/contact",icon:"mdi mdi-phone"}],l=[{label:"Home",to:"/",icon:"mdi mdi-home"},{label:"About",to:"/about",icon:"mdi mdi-information"},{label:"Contact",to:"/contact",icon:"mdi mdi-phone"}],Pt={title:"Widgets/Navbar",component:d,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["s","m","l"],description:"Size of the navbar"},items:{control:{type:"object"},description:"Array of navigation items"},itemsAlignment:{control:{type:"select"},options:["left","center","right"],description:"Alignment of the menu items"},underlineColor:{control:{type:"select"},options:["neutral","primary","secondary","success","danger","warning"],description:"Color of the underline on menu items"}},parameters:{docs:{description:{component:"A responsive navbar component with dropdown support, dark mode, mobile menu, and icon support. Supports Vue Router and Nuxt Router navigation."}}}},S={args:{items:B,size:"m"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <div class="dk:flex dk:items-center dk:gap-2">
              <div class="dk:w-8 dk:h-8 dk:bg-blue-600 dk:rounded-lg dk:flex dk:items-center dk:justify-center">
                <span class="dk:text-white dk:text-sm dk:font-bold">DK</span>
              </div>
              <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
                DroniKit
              </span>
            </div>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline" color="primary">Login</DuiButton>
            <DuiButton size="sm">Sign Up</DuiButton>
          </template>
        </DuiNavbar>
      </div>
    `})},T={args:{items:l,size:"s"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-sm dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Small Navbar
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="ghost">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Small Size Navbar
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This navbar uses the small size variant with reduced padding and font sizes.
          </p>
        </div>
      </div>
    `})},_={args:{items:B,size:"l"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <div class="dk:flex dk:items-center dk:gap-3">
              <div class="dk:w-10 dk:h-10 dk:bg-purple-600 dk:rounded-xl dk:flex dk:items-center dk:justify-center">
                <span class="dk:text-white dk:text-lg dk:font-bold">L</span>
              </div>
              <span class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100">
                Large Brand
              </span>
            </div>
          </template>
          <template #actions>
            <DuiButton size="md" variant="outline" color="secondary">Profile</DuiButton>
            <DuiButton size="md" color="success">Dashboard</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-3xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Large Size Navbar
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This navbar uses the large size variant with increased padding and font sizes.
          </p>
        </div>
      </div>
    `})},I={args:{items:l,size:"m"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Simple Nav
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="ghost" color="neutral">
              <i class="mdi mdi-theme-light-dark dk:mr-1"></i>
              Theme
            </DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Simple Navigation
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            A simple navbar without dropdown menus, perfect for basic navigation needs.
          </p>
        </div>
      </div>
    `})},M={args:{items:B,size:"m"},parameters:{backgrounds:{default:"dark"}},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dark dk:min-h-screen dk:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <div class="dk:flex dk:items-center dk:gap-2">
              <div class="dk:w-8 dk:h-8 dk:bg-indigo-600 dk:rounded-lg dk:flex dk:items-center dk:justify-center">
                <span class="dk:text-white dk:text-sm dk:font-bold">🌙</span>
              </div>
              <span class="dk:text-lg dk:font-semibold dk:text-gray-100">
                Dark Mode
              </span>
            </div>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline" color="neutral">Login</DuiButton>
            <DuiButton size="sm" color="primary">Sign Up</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-100 dk:mb-4">
            Dark Mode Navigation
          </h1>
          <p class="dk:text-gray-400">
            The navbar automatically adapts to dark mode using Tailwind's dark mode classes.
            All hover states and dropdown menus work seamlessly in dark mode.
          </p>
        </div>
      </div>
    `})},P={args:{items:B,size:"m"},parameters:{viewport:{defaultViewport:"mobile1"}},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Mobile
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-4">
          <h1 class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Mobile Navigation
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            On mobile devices, the navbar shows a hamburger menu button. Click it to see the mobile menu with collapsible submenus.
          </p>
          <div class="dk:bg-blue-50 dk:dark:bg-blue-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-blue-200 dk:dark:border-blue-800">
            <p class="dk:text-sm dk:text-blue-800 dk:dark:text-blue-200">
              💡 <strong>Tip:</strong> Try clicking the menu button in the top-left to see the mobile navigation in action.
            </p>
          </div>
        </div>
      </div>
    `})},U={args:{items:[{label:"Home",to:"/"},{label:"Products",to:"/products",children:[{label:"All Products",to:"/products/all"},{label:"Categories",to:"/products/categories"},{label:"New Arrivals",to:"/products/new"}]},{label:"About",to:"/about"},{label:"Contact",to:"/contact"}],size:"m"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Text Only
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="ghost">Settings</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Text-Only Navigation
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This navbar doesn't use icons, showing a cleaner text-only approach to navigation.
          </p>
        </div>
      </div>
    `})},j={args:{items:B,size:"m"},render:e=>({components:{DuiNavbar:d},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args" />
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Minimal Navigation
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            This is the most minimal version of the navbar - only navigation items without brand or action slots.
            Perfect for simple applications or when you want maximum focus on the navigation links.
          </p>
          <div class="dk:bg-green-50 dk:dark:bg-green-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-green-200 dk:dark:border-green-800">
            <p class="dk:text-sm dk:text-green-800 dk:dark:text-green-200">
              ✨ <strong>Clean & Simple:</strong> No brand logo, no action buttons - just pure navigation.
            </p>
          </div>
        </div>
      </div>
    `})},L={args:{items:l,size:"m",itemsAlignment:"left"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Left Aligned
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Left Aligned Items
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            The navigation items are aligned to the left side of the navbar, next to the brand.
          </p>
          <div class="dk:bg-blue-50 dk:dark:bg-blue-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-blue-200 dk:dark:border-blue-800">
            <p class="dk:text-sm dk:text-blue-800 dk:dark:text-blue-200">
              💡 <strong>Default:</strong> itemsAlignment="left"
            </p>
          </div>
        </div>
      </div>
    `})},R={args:{items:l,size:"m",itemsAlignment:"center"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Center Aligned
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Center Aligned Items
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            The navigation items are centered in the available space on the navbar.
          </p>
          <div class="dk:bg-purple-50 dk:dark:bg-purple-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-purple-200 dk:dark:border-purple-800">
            <p class="dk:text-sm dk:text-purple-800 dk:dark:text-purple-200">
              💡 <strong>Centered:</strong> itemsAlignment="center"
            </p>
          </div>
        </div>
      </div>
    `})},$={args:{items:l,size:"m",itemsAlignment:"right"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Right Aligned
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Right Aligned Items
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            The navigation items are aligned to the right side of the navbar, before the actions.
          </p>
          <div class="dk:bg-orange-50 dk:dark:bg-orange-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-orange-200 dk:dark:border-orange-800">
            <p class="dk:text-sm dk:text-orange-800 dk:dark:text-orange-200">
              💡 <strong>Right Aligned:</strong> itemsAlignment="right"
            </p>
          </div>
        </div>
      </div>
    `})},V={args:{items:l,size:"m",underlineColor:"primary"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Primary Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Primary Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a primary slate color for the underline effect.
          </p>
        </div>
      </div>
    `})},O={args:{items:l,size:"m",underlineColor:"neutral"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Neutral Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Neutral Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a neutral zinc color for the underline effect.
          </p>
        </div>
      </div>
    `})},W={args:{items:l,size:"m",underlineColor:"success"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Success Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Success Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a green/success color for the underline effect.
          </p>
        </div>
      </div>
    `})},q={args:{items:l,size:"m",underlineColor:"danger"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Danger Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Danger Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a red/danger color for the underline effect.
          </p>
        </div>
      </div>
    `})},H={args:{items:l,size:"m",underlineColor:"warning"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Warning Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Warning Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use an amber/warning color for the underline effect.
          </p>
        </div>
      </div>
    `})},K={args:{items:l,size:"m",underlineColor:"secondary"},render:e=>({components:{DuiNavbar:d,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Secondary Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Secondary Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a pink/secondary color for the underline effect.
          </p>
        </div>
      </div>
    `})};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    size: 'm'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <div class="dk:flex dk:items-center dk:gap-2">
              <div class="dk:w-8 dk:h-8 dk:bg-blue-600 dk:rounded-lg dk:flex dk:items-center dk:justify-center">
                <span class="dk:text-white dk:text-sm dk:font-bold">DK</span>
              </div>
              <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
                DroniKit
              </span>
            </div>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline" color="primary">Login</DuiButton>
            <DuiButton size="sm">Sign Up</DuiButton>
          </template>
        </DuiNavbar>
      </div>
    \`
  })
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,de;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 's'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-sm dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Small Navbar
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="ghost">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Small Size Navbar
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This navbar uses the small size variant with reduced padding and font sizes.
          </p>
        </div>
      </div>
    \`
  })
}`,...(de=(re=T.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ne,se,oe;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    size: 'l'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <div class="dk:flex dk:items-center dk:gap-3">
              <div class="dk:w-10 dk:h-10 dk:bg-purple-600 dk:rounded-xl dk:flex dk:items-center dk:justify-center">
                <span class="dk:text-white dk:text-lg dk:font-bold">L</span>
              </div>
              <span class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100">
                Large Brand
              </span>
            </div>
          </template>
          <template #actions>
            <DuiButton size="md" variant="outline" color="secondary">Profile</DuiButton>
            <DuiButton size="md" color="success">Dashboard</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-3xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Large Size Navbar
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This navbar uses the large size variant with increased padding and font sizes.
          </p>
        </div>
      </div>
    \`
  })
}`,...(oe=(se=_.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,ke;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Simple Nav
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="ghost" color="neutral">
              <i class="mdi mdi-theme-light-dark dk:mr-1"></i>
              Theme
            </DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Simple Navigation
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            A simple navbar without dropdown menus, perfect for basic navigation needs.
          </p>
        </div>
      </div>
    \`
  })
}`,...(ke=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ke.source}}};var me,ue,ce;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    size: 'm'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dark dk:min-h-screen dk:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <div class="dk:flex dk:items-center dk:gap-2">
              <div class="dk:w-8 dk:h-8 dk:bg-indigo-600 dk:rounded-lg dk:flex dk:items-center dk:justify-center">
                <span class="dk:text-white dk:text-sm dk:font-bold">🌙</span>
              </div>
              <span class="dk:text-lg dk:font-semibold dk:text-gray-100">
                Dark Mode
              </span>
            </div>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline" color="neutral">Login</DuiButton>
            <DuiButton size="sm" color="primary">Sign Up</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-100 dk:mb-4">
            Dark Mode Navigation
          </h1>
          <p class="dk:text-gray-400">
            The navbar automatically adapts to dark mode using Tailwind's dark mode classes.
            All hover states and dropdown menus work seamlessly in dark mode.
          </p>
        </div>
      </div>
    \`
  })
}`,...(ce=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ge,pe,be;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    size: 'm'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Mobile
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-4">
          <h1 class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Mobile Navigation
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            On mobile devices, the navbar shows a hamburger menu button. Click it to see the mobile menu with collapsible submenus.
          </p>
          <div class="dk:bg-blue-50 dk:dark:bg-blue-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-blue-200 dk:dark:border-blue-800">
            <p class="dk:text-sm dk:text-blue-800 dk:dark:text-blue-200">
              💡 <strong>Tip:</strong> Try clicking the menu button in the top-left to see the mobile navigation in action.
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...(be=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ve,xe,ye;U.parameters={...U.parameters,docs:{...(ve=U.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      to: '/'
    }, {
      label: 'Products',
      to: '/products',
      children: [{
        label: 'All Products',
        to: '/products/all'
      }, {
        label: 'Categories',
        to: '/products/categories'
      }, {
        label: 'New Arrivals',
        to: '/products/new'
      }]
    }, {
      label: 'About',
      to: '/about'
    }, {
      label: 'Contact',
      to: '/contact'
    }],
    size: 'm'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Text Only
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="ghost">Settings</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Text-Only Navigation
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This navbar doesn't use icons, showing a cleaner text-only approach to navigation.
          </p>
        </div>
      </div>
    \`
  })
}`,...(ye=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var he,fe,De;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    size: 'm'
  },
  render: args => ({
    components: {
      DuiNavbar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args" />
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Minimal Navigation
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            This is the most minimal version of the navbar - only navigation items without brand or action slots.
            Perfect for simple applications or when you want maximum focus on the navigation links.
          </p>
          <div class="dk:bg-green-50 dk:dark:bg-green-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-green-200 dk:dark:border-green-800">
            <p class="dk:text-sm dk:text-green-800 dk:dark:text-green-200">
              ✨ <strong>Clean & Simple:</strong> No brand logo, no action buttons - just pure navigation.
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...(De=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:De.source}}};var Ne,we,Be;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    itemsAlignment: 'left'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Left Aligned
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Left Aligned Items
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            The navigation items are aligned to the left side of the navbar, next to the brand.
          </p>
          <div class="dk:bg-blue-50 dk:dark:bg-blue-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-blue-200 dk:dark:border-blue-800">
            <p class="dk:text-sm dk:text-blue-800 dk:dark:text-blue-200">
              💡 <strong>Default:</strong> itemsAlignment="left"
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...(Be=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var ze,Ce,Ae;R.parameters={...R.parameters,docs:{...(ze=R.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    itemsAlignment: 'center'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Center Aligned
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Center Aligned Items
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            The navigation items are centered in the available space on the navbar.
          </p>
          <div class="dk:bg-purple-50 dk:dark:bg-purple-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-purple-200 dk:dark:border-purple-800">
            <p class="dk:text-sm dk:text-purple-800 dk:dark:text-purple-200">
              💡 <strong>Centered:</strong> itemsAlignment="center"
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...(Ae=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var Se,Te,_e;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    itemsAlignment: 'right'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Right Aligned
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Right Aligned Items
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            The navigation items are aligned to the right side of the navbar, before the actions.
          </p>
          <div class="dk:bg-orange-50 dk:dark:bg-orange-900/20 dk:p-4 dk:rounded-lg dk:border dk:border-orange-200 dk:dark:border-orange-800">
            <p class="dk:text-sm dk:text-orange-800 dk:dark:text-orange-200">
              💡 <strong>Right Aligned:</strong> itemsAlignment="right"
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...(_e=(Te=$.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};var Ie,Me,Pe;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    underlineColor: 'primary'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Primary Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Primary Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a primary slate color for the underline effect.
          </p>
        </div>
      </div>
    \`
  })
}`,...(Pe=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var Ue,je,Le;O.parameters={...O.parameters,docs:{...(Ue=O.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    underlineColor: 'neutral'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Neutral Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Neutral Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a neutral zinc color for the underline effect.
          </p>
        </div>
      </div>
    \`
  })
}`,...(Le=(je=O.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Re,$e,Ve;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    underlineColor: 'success'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Success Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Success Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a green/success color for the underline effect.
          </p>
        </div>
      </div>
    \`
  })
}`,...(Ve=($e=W.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source}}};var Oe,We,qe;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    underlineColor: 'danger'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Danger Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Danger Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a red/danger color for the underline effect.
          </p>
        </div>
      </div>
    \`
  })
}`,...(qe=(We=q.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var He,Ke,Ee;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    underlineColor: 'warning'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Warning Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Warning Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use an amber/warning color for the underline effect.
          </p>
        </div>
      </div>
    \`
  })
}`,...(Ee=(Ke=H.parameters)==null?void 0:Ke.docs)==null?void 0:Ee.source}}};var Fe,Je,Ge;K.parameters={...K.parameters,docs:{...(Fe=K.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    size: 'm',
    underlineColor: 'secondary'
  },
  render: args => ({
    components: {
      DuiNavbar,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:min-h-screen dk:bg-gray-50 dk:dark:bg-gray-900">
        <DuiNavbar v-bind="args">
          <template #brand>
            <span class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100">
              Secondary Color
            </span>
          </template>
          <template #actions>
            <DuiButton size="sm" variant="outline">Action</DuiButton>
          </template>
        </DuiNavbar>
        <div class="dk:p-6">
          <h1 class="dk:text-2xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-4">
            Secondary Underline Color
          </h1>
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            The menu items use a pink/secondary color for the underline effect.
          </p>
        </div>
      </div>
    \`
  })
}`,...(Ge=(Je=K.parameters)==null?void 0:Je.docs)==null?void 0:Ge.source}}};const Ut=["Default","SmallSize","LargeSize","SimpleNavbar","DarkMode","MobileView","WithoutIcons","MinimalNavbar","ItemsAlignedLeft","ItemsAlignedCenter","ItemsAlignedRight","UnderlineColorPrimary","UnderlineColorNeutral","UnderlineColorSuccess","UnderlineColorDanger","UnderlineColorWarning","UnderlineColorSecondary"];export{M as DarkMode,S as Default,R as ItemsAlignedCenter,L as ItemsAlignedLeft,$ as ItemsAlignedRight,_ as LargeSize,j as MinimalNavbar,P as MobileView,I as SimpleNavbar,T as SmallSize,q as UnderlineColorDanger,O as UnderlineColorNeutral,V as UnderlineColorPrimary,K as UnderlineColorSecondary,W as UnderlineColorSuccess,H as UnderlineColorWarning,U as WithoutIcons,Ut as __namedExportsOrder,Pt as default};
