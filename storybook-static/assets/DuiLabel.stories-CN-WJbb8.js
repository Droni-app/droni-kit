import{f as ne,n as r,s as o,p as s,x as u,B as y,v as I,G as ie,H as re,u as oe,r as se,c as m,m as l}from"./iframe-BtNMLuc9.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as n}from"./DuiInput-CGrlza99.js";import{_ as Y}from"./DuiSelect-CC6atj43.js";import{_ as de}from"./DuiTextarea-DE6PYa4E.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const ue={key:1,class:"dk:text-rose-500 dk:ml-1"},me={class:"tooltip-container tooltip-above dk:z-50 dk:text-xs dk:rounded dk:py-2 dk:px-3 dk:transition-all dk:duration-200 dk:min-w-[250px] dk:max-w-xs dk:shadow-lg dk:pointer-events-none"},ce="dk:space-y-1",k=ne({__name:"DuiLabel",props:{title:{type:String,default:void 0},icon:{type:String,default:void 0},helpText:{type:String,default:void 0},error:{type:String,default:void 0},size:{type:String,default:"m"},required:{type:Boolean,default:!1}},setup(e){const L=se(!1),d=e,S={s:"dk:text-sm",m:"dk:text-base",l:"dk:text-lg"},z={s:"dk:mt-1",m:"dk:mt-1.5",l:"dk:mt-2"},w={s:"dk:text-xs",m:"dk:text-sm",l:"dk:text-base"},Z=m(()=>[ce].join(" ")),ee=m(()=>{const i=S[d.size]||S.m,a="dk:block dk:font-medium dk:text-zinc-700 dk:dark:text-zinc-200 dk:flex dk:items-center",g=d.helpText?"dk:cursor-help":"";return[a,i,g].join(" ")}),ae=m(()=>[z[d.size]||z.m].join(" ")),te=m(()=>["dk:text-rose-600 dk:dark:text-rose-400 dk:flex dk:items-center dk:mt-1",w[d.size]||w.m].join(" "));return(i,a)=>(l(),r("label",{class:s(Z.value)},[e.title?(l(),r("div",{key:0,class:"dk:relative",onMouseenter:a[0]||(a[0]=g=>L.value=!!e.helpText),onMouseleave:a[1]||(a[1]=g=>L.value=!1)},[o("div",{class:s(ee.value)},[e.icon?(l(),r("i",{key:0,class:s([e.icon,"dk:mr-2"])},null,2)):u("",!0),y(" "+I(e.title)+" ",1),e.required?(l(),r("span",ue,"*")):u("",!0)],2),ie(o("div",me,[y(I(e.helpText)+" ",1),a[2]||(a[2]=o("div",{class:"tooltip-arrow tooltip-arrow-down"},null,-1))],512),[[re,L.value&&e.helpText]])],32)):u("",!0),o("div",{class:s(ae.value)},[oe(i.$slots,"default",{},void 0,!0)],2),e.error?(l(),r("div",{key:1,class:s(te.value)},[a[3]||(a[3]=o("span",{class:"dk:inline-flex dk:items-center dk:justify-center dk:w-4 dk:h-4 dk:text-xs dk:bg-rose-500 dk:text-white dk:rounded-full dk:mr-2 dk:flex-shrink-0"}," ! ",-1)),y(" "+I(e.error),1)],2)):u("",!0)],2))}}),t=le(k,[["__scopeId","data-v-aa6b6cdc"]]);k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:"default",displayName:"DuiLabel",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"helpText",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"error",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",type:{name:"String as () => 's' | 'm' | 'l'"},defaultValue:{func:!1,value:"'m'"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Forms/DuiLabel.vue"]});const ke={title:"Forms/Label",component:t,tags:["autodocs"],argTypes:{title:{control:{type:"text"}},icon:{control:{type:"text"}},helpText:{control:{type:"text"}},error:{control:{type:"text"}},size:{control:{type:"select"},options:["s","m","l"]},required:{control:{type:"boolean"}}}},c={args:{title:"Nombre de usuario",icon:"mdi mdi-account",helpText:"Introduce tu nombre de usuario único",size:"m",required:!0},render:e=>({components:{DuiLabel:t,DuiInput:n},setup(){return{args:e}},template:`
      <div class="p-4 max-w-md">
        <DuiLabel v-bind="args">
          <DuiInput 
            placeholder="Ej. juan_perez"
            name="username"
            id="username"
          />
        </DuiLabel>
      </div>
    `})},p={render:()=>({components:{DuiLabel:t,DuiInput:n},template:`
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Email"
          icon="mdi mdi-email"
          error="El formato del email no es válido"
          required
        >
          <DuiInput 
            type="email"
            placeholder="ejemplo@correo.com"
            name="email"
            id="email"
            class="border-red-500"
          />
        </DuiLabel>
      </div>
    `})},b={render:()=>({components:{DuiLabel:t,DuiInput:n},template:`
      <div class="p-4 space-y-6 max-w-md">
        <DuiLabel 
          title="Campo pequeño"
          size="s"
          icon="mdi mdi-text"
          help-text="Este es un campo pequeño"
        >
          <DuiInput 
            size="sm"
            placeholder="Texto pequeño"
          />
        </DuiLabel>

        <DuiLabel 
          title="Campo mediano"
          size="m"
          icon="mdi mdi-text"
          help-text="Este es un campo mediano (por defecto)"
        >
          <DuiInput 
            size="md"
            placeholder="Texto mediano"
          />
        </DuiLabel>

        <DuiLabel 
          title="Campo grande"
          size="l"
          icon="mdi mdi-text"
          help-text="Este es un campo grande"
        >
          <DuiInput 
            size="lg"
            placeholder="Texto grande"
          />
        </DuiLabel>
      </div>
    `})},D={render:()=>({components:{DuiLabel:t,DuiSelect:Y},setup(){return{countries:[{id:1,name:"Colombia"},{id:2,name:"México"},{id:3,name:"España"},{id:4,name:"Argentina"}]}},template:`
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="País de residencia"
          icon="mdi mdi-earth"
          help-text="Selecciona el país donde resides actualmente"
          required
        >
          <DuiSelect 
            :options="countries"
            placeholder="Selecciona un país"
            item-label="name"
            item-value="id"
            name="country"
            id="country"
          />
        </DuiLabel>
      </div>
    `})},x={render:()=>({components:{DuiLabel:t,DuiTextarea:de},template:`
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Descripción"
          icon="mdi mdi-text-box"
          help-text="Proporciona una descripción detallada (máximo 500 caracteres)"
        >
          <DuiTextarea 
            placeholder="Escribe tu descripción aquí..."
            rows="4"
            name="description"
            id="description"
          />
        </DuiLabel>
      </div>
    `})},v={render:()=>({components:{DuiLabel:t,DuiInput:n},template:`
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Nombre completo"
          help-text="Introduce tu nombre y apellidos"
          required
        >
          <DuiInput 
            placeholder="Juan Pérez García"
            name="fullname"
            id="fullname"
          />
        </DuiLabel>
      </div>
    `})},f={render:()=>({components:{DuiLabel:t,DuiInput:n},template:`
      <div class="p-4 max-w-md">
        <DuiLabel title="Teléfono">
          <DuiInput 
            type="tel"
            placeholder="+57 300 123 4567"
            name="phone"
            id="phone"
          />
        </DuiLabel>
      </div>
    `})},h={parameters:{backgrounds:{default:"dark"}},render:()=>({components:{DuiLabel:t,DuiInput:n,DuiSelect:Y},setup(){return{roles:[{id:"admin",name:"Administrador"},{id:"user",name:"Usuario"},{id:"guest",name:"Invitado"}]}},template:`
      <div class="dark p-4 space-y-6 max-w-md bg-zinc-900 min-h-screen">
        <DuiLabel 
          title="Usuario"
          icon="mdi mdi-account"
          help-text="Nombre de usuario único en el sistema"
          required
        >
          <DuiInput 
            placeholder="usuario123"
            name="username"
          />
        </DuiLabel>

        <DuiLabel 
          title="Contraseña"
          icon="mdi mdi-lock"
          error="La contraseña debe tener al menos 8 caracteres"
          required
        >
          <DuiInput 
            type="password"
            placeholder="••••••••"
            name="password"
          />
        </DuiLabel>

        <DuiLabel 
          title="Rol"
          icon="mdi mdi-shield-account"
          help-text="Selecciona el rol del usuario"
        >
          <DuiSelect 
            :options="roles"
            placeholder="Selecciona un rol"
            item-label="name"
            item-value="id"
            name="role"
          />
        </DuiLabel>
      </div>
    `})};var C,T,q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Nombre de usuario',
    icon: 'mdi mdi-account',
    helpText: 'Introduce tu nombre de usuario único',
    size: 'm',
    required: true
  },
  render: args => ({
    components: {
      DuiLabel,
      DuiInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="p-4 max-w-md">
        <DuiLabel v-bind="args">
          <DuiInput 
            placeholder="Ej. juan_perez"
            name="username"
            id="username"
          />
        </DuiLabel>
      </div>
    \`
  })
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var E,j,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiLabel,
      DuiInput
    },
    template: \`
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Email"
          icon="mdi mdi-email"
          error="El formato del email no es válido"
          required
        >
          <DuiInput 
            type="email"
            placeholder="ejemplo@correo.com"
            name="email"
            id="email"
            class="border-red-500"
          />
        </DuiLabel>
      </div>
    \`
  })
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var W,V,M;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiLabel,
      DuiInput
    },
    template: \`
      <div class="p-4 space-y-6 max-w-md">
        <DuiLabel 
          title="Campo pequeño"
          size="s"
          icon="mdi mdi-text"
          help-text="Este es un campo pequeño"
        >
          <DuiInput 
            size="sm"
            placeholder="Texto pequeño"
          />
        </DuiLabel>

        <DuiLabel 
          title="Campo mediano"
          size="m"
          icon="mdi mdi-text"
          help-text="Este es un campo mediano (por defecto)"
        >
          <DuiInput 
            size="md"
            placeholder="Texto mediano"
          />
        </DuiLabel>

        <DuiLabel 
          title="Campo grande"
          size="l"
          icon="mdi mdi-text"
          help-text="Este es un campo grande"
        >
          <DuiInput 
            size="lg"
            placeholder="Texto grande"
          />
        </DuiLabel>
      </div>
    \`
  })
}`,...(M=(V=b.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var P,$,B;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiLabel,
      DuiSelect
    },
    setup() {
      const countries = [{
        id: 1,
        name: 'Colombia'
      }, {
        id: 2,
        name: 'México'
      }, {
        id: 3,
        name: 'España'
      }, {
        id: 4,
        name: 'Argentina'
      }];
      return {
        countries
      };
    },
    template: \`
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="País de residencia"
          icon="mdi mdi-earth"
          help-text="Selecciona el país donde resides actualmente"
          required
        >
          <DuiSelect 
            :options="countries"
            placeholder="Selecciona un país"
            item-label="name"
            item-value="id"
            name="country"
            id="country"
          />
        </DuiLabel>
      </div>
    \`
  })
}`,...(B=($=D.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var A,F,U;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiLabel,
      DuiTextarea
    },
    template: \`
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Descripción"
          icon="mdi mdi-text-box"
          help-text="Proporciona una descripción detallada (máximo 500 caracteres)"
        >
          <DuiTextarea 
            placeholder="Escribe tu descripción aquí..."
            rows="4"
            name="description"
            id="description"
          />
        </DuiLabel>
      </div>
    \`
  })
}`,...(U=(F=x.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var G,_,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiLabel,
      DuiInput
    },
    template: \`
      <div class="p-4 max-w-md">
        <DuiLabel 
          title="Nombre completo"
          help-text="Introduce tu nombre y apellidos"
          required
        >
          <DuiInput 
            placeholder="Juan Pérez García"
            name="fullname"
            id="fullname"
          />
        </DuiLabel>
      </div>
    \`
  })
}`,...(J=(_=v.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var O,R,H;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiLabel,
      DuiInput
    },
    template: \`
      <div class="p-4 max-w-md">
        <DuiLabel title="Teléfono">
          <DuiInput 
            type="tel"
            placeholder="+57 300 123 4567"
            name="phone"
            id="phone"
          />
        </DuiLabel>
      </div>
    \`
  })
}`,...(H=(R=f.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => ({
    components: {
      DuiLabel,
      DuiInput,
      DuiSelect
    },
    setup() {
      const roles = [{
        id: 'admin',
        name: 'Administrador'
      }, {
        id: 'user',
        name: 'Usuario'
      }, {
        id: 'guest',
        name: 'Invitado'
      }];
      return {
        roles
      };
    },
    template: \`
      <div class="dark p-4 space-y-6 max-w-md bg-zinc-900 min-h-screen">
        <DuiLabel 
          title="Usuario"
          icon="mdi mdi-account"
          help-text="Nombre de usuario único en el sistema"
          required
        >
          <DuiInput 
            placeholder="usuario123"
            name="username"
          />
        </DuiLabel>

        <DuiLabel 
          title="Contraseña"
          icon="mdi mdi-lock"
          error="La contraseña debe tener al menos 8 caracteres"
          required
        >
          <DuiInput 
            type="password"
            placeholder="••••••••"
            name="password"
          />
        </DuiLabel>

        <DuiLabel 
          title="Rol"
          icon="mdi mdi-shield-account"
          help-text="Selecciona el rol del usuario"
        >
          <DuiSelect 
            :options="roles"
            placeholder="Selecciona un rol"
            item-label="name"
            item-value="id"
            name="role"
          />
        </DuiLabel>
      </div>
    \`
  })
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Le=["Default","WithError","Sizes","WithSelect","WithTextarea","WithoutIcon","MinimalLabel","DarkMode"];export{h as DarkMode,c as Default,f as MinimalLabel,b as Sizes,p as WithError,D as WithSelect,x as WithTextarea,v as WithoutIcon,Le as __namedExportsOrder,ke as default};
