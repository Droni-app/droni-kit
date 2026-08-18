import{f as M,h as o,p as t,F as u,k as g,j as C,n as _,t as i,B as v,w as B,i as D,o as r,l as $,q as w,m as O}from"./iframe-BX9sGRHr.js";import{_ as J}from"./DuiButton-oFhP9YFC.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";import"./router-detection-D0JCgCrd.js";const H={class:"dk:relative dk:overflow-x-auto dk:shadow-md dk:sm:rounded-lg"},Q={class:"dk:w-full dk:text-sm dk:text-left dk:text-gray-700 dk:dark:text-gray-300"},R={class:"dk:text-xs dk:uppercase dk:bg-gray-100 dk:dark:bg-gray-700 dk:dark:text-gray-200 dk:relative"},X={key:0},Y=["colspan"],Z={key:0,class:"dk:bg-gray-50 dk:dark:bg-gray-700 dk:border-t dk:border-gray-200 dk:dark:border-gray-600"},nn=["colspan"],an={class:"pagination-container"},en={class:"pagination-info"},tn={class:"pagination-buttons"},on={class:"page-numbers"},rn=["onClick"],h=M({__name:"DuiTable",props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},loading:{type:Boolean,default:!1},pagination:{type:Object,default:void 0}},emits:["paginate"],setup(K,{emit:T}){const n=K,q=T,m=D(()=>n.pagination?Math.ceil(n.pagination.total/n.pagination.perPage):0),L=D(()=>{if(!n.pagination)return[];const l=[],a=5,{page:e}=n.pagination,c=m.value;let s=Math.max(1,e-Math.floor(a/2)),f=Math.min(c,s+a-1);f-s<a-1&&(s=Math.max(1,f-a+1));for(let A=s;A<=f;A++)l.push(A);return l}),k=l=>{n.pagination&&l>=1&&l<=m.value&&q("paginate",l)};return(l,a)=>(r(),o("div",H,[t("table",Q,[t("thead",R,[t("tr",null,[(r(!0),o(u,null,g(n.columns,e=>(r(),o("th",{key:e.name,class:_(["dk:px-6 dk:py-3",e.classes])},i(e.label),3))),128))]),n.loading?(r(),o("tr",X,[t("td",{colspan:n.columns.length,class:"dk:p-0"},[...a[2]||(a[2]=[t("div",{class:"loading-bar"},null,-1)])],8,Y)])):C("",!0)]),t("tbody",{class:_({"is-loading":n.loading})},[(r(!0),o(u,null,g(n.rows,(e,c)=>(r(),o("tr",{key:c,class:"dk:bg-white dk:border-b dk:border-gray-200 dk:dark:bg-gray-800 dk:dark:border-gray-700 dk:hover:bg-gray-50 dk:dark:hover:bg-gray-600 dk:transition-colors"},[(r(!0),o(u,null,g(n.columns,s=>(r(),o("td",{key:s.name,class:"dk:px-6 dk:py-4 dk:text-gray-900 dk:dark:text-gray-100"},[$(l.$slots,s.name,O({ref_for:!0},e),()=>[w(i(e[s.name]),1)],!0)]))),128))]))),128))],2),n.pagination?(r(),o("tfoot",Z,[t("tr",null,[t("td",{colspan:n.columns.length,class:"dk:px-6 dk:py-4"},[t("div",an,[t("div",en," Página "+i(n.pagination.page)+" de "+i(m.value)+" | "+i(n.pagination.total)+" registros ",1),t("div",tn,[v(J,{variant:"outline",color:"neutral",size:"sm",onClick:a[0]||(a[0]=e=>k(n.pagination.page-1)),disabled:n.pagination.page===1},{default:B(()=>[...a[3]||(a[3]=[w(" ← Anterior ",-1)])]),_:1},8,["disabled"]),t("div",on,[(r(!0),o(u,null,g(L.value,e=>(r(),o("button",{key:e,onClick:c=>k(e),class:_(["page-number",{active:e===n.pagination.page}])},i(e),11,rn))),128))]),v(J,{variant:"outline",color:"neutral",size:"sm",onClick:a[1]||(a[1]=e=>k(n.pagination.page+1)),disabled:n.pagination.page===m.value},{default:B(()=>[...a[4]||(a[4]=[w(" Siguiente → ",-1)])]),_:1},8,["disabled"])])])],8,nn)])])):C("",!0)])]))}}),ln=z(h,[["__scopeId","data-v-60002528"]]);h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:"default",displayName:"DuiTable",description:"",tags:{},props:[{name:"columns",type:{name:"Array<TableColumn>"},required:!0},{name:"rows",type:{name:"Array<any>"},required:!0},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pagination",type:{name:"Object as () => PaginationData | undefined"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"paginate",type:{names:["number"]}}],slots:[{name:"column.name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiTable.vue"]});const yn={title:"Elements/Table",component:ln,tags:["autodocs"],argTypes:{columns:{control:{type:"object"},description:"columns of the table",defaultValue:[{label:"Name",name:"name"},{label:"Age",name:"age"},{label:"Country",name:"country"}]},rows:{control:{type:"object"},description:"Data of the table",defaultValue:[{name:"John Doe",age:30,country:"USA"},{name:"Jane Smith",age:25,country:"Canada"}]},loading:{control:{type:"boolean"},description:"Shows an animated loading bar with gradient below the table header when active",defaultValue:!1},pagination:{control:{type:"object"},description:"Pagination configuration object with { page: number, perPage: number, total: number }. When provided, displays a footer with pagination controls",defaultValue:void 0}}},d={args:{columns:[{label:"Name",name:"name"},{label:"Age",name:"age"},{label:"Country",name:"country"}],rows:[{name:"John Doe",age:30,country:"USA"},{name:"Jane Smith",age:25,country:"Canada"},{name:"Alice Johnson",age:28,country:"UK"},{name:"Bob Brown",age:35,country:"Australia"},{name:"Charlie Black",age:22,country:"Germany"},{name:"Diana White",age:27,country:"France"},{name:"Ethan Green",age:31,country:"Italy"}],loading:!1}},y={args:{columns:[{label:"Name",name:"name"},{label:"Age",name:"age"},{label:"Country",name:"country"}],rows:[{name:"John Doe",age:30,country:"USA"},{name:"Jane Smith",age:25,country:"Canada"},{name:"Alice Johnson",age:28,country:"UK"},{name:"Bob Brown",age:35,country:"Australia"},{name:"Charlie Black",age:22,country:"Germany"},{name:"Diana White",age:27,country:"France"},{name:"Ethan Green",age:31,country:"Italy"}],loading:!0}},p={args:{columns:[{label:"Name",name:"name"},{label:"Age",name:"age"},{label:"Country",name:"country"}],rows:[{name:"John Doe",age:30,country:"USA"},{name:"Jane Smith",age:25,country:"Canada"},{name:"Alice Johnson",age:28,country:"UK"},{name:"Bob Brown",age:35,country:"Australia"},{name:"Charlie Black",age:22,country:"Germany"},{name:"Diana White",age:27,country:"France"},{name:"Ethan Green",age:31,country:"Italy"}],pagination:{page:1,perPage:10,total:150}}},b={args:{columns:[{label:"Name",name:"name"},{label:"Age",name:"age"},{label:"Country",name:"country"}],rows:[{name:"John Doe",age:30,country:"USA"},{name:"Jane Smith",age:25,country:"Canada"},{name:"Alice Johnson",age:28,country:"UK"},{name:"Bob Brown",age:35,country:"Australia"},{name:"Charlie Black",age:22,country:"Germany"},{name:"Diana White",age:27,country:"France"},{name:"Ethan Green",age:31,country:"Italy"}],loading:!0,pagination:{page:1,perPage:10,total:150}}};var S,x,U;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: 'Name',
      name: 'name'
    }, {
      label: 'Age',
      name: 'age'
    }, {
      label: 'Country',
      name: 'country'
    }],
    rows: [{
      name: 'John Doe',
      age: 30,
      country: 'USA'
    }, {
      name: 'Jane Smith',
      age: 25,
      country: 'Canada'
    }, {
      name: 'Alice Johnson',
      age: 28,
      country: 'UK'
    }, {
      name: 'Bob Brown',
      age: 35,
      country: 'Australia'
    }, {
      name: 'Charlie Black',
      age: 22,
      country: 'Germany'
    }, {
      name: 'Diana White',
      age: 27,
      country: 'France'
    }, {
      name: 'Ethan Green',
      age: 31,
      country: 'Italy'
    }],
    loading: false
  }
}`,...(U=(x=d.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};var G,P,N;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: 'Name',
      name: 'name'
    }, {
      label: 'Age',
      name: 'age'
    }, {
      label: 'Country',
      name: 'country'
    }],
    rows: [{
      name: 'John Doe',
      age: 30,
      country: 'USA'
    }, {
      name: 'Jane Smith',
      age: 25,
      country: 'Canada'
    }, {
      name: 'Alice Johnson',
      age: 28,
      country: 'UK'
    }, {
      name: 'Bob Brown',
      age: 35,
      country: 'Australia'
    }, {
      name: 'Charlie Black',
      age: 22,
      country: 'Germany'
    }, {
      name: 'Diana White',
      age: 27,
      country: 'France'
    }, {
      name: 'Ethan Green',
      age: 31,
      country: 'Italy'
    }],
    loading: true
  }
}`,...(N=(P=y.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var W,E,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: 'Name',
      name: 'name'
    }, {
      label: 'Age',
      name: 'age'
    }, {
      label: 'Country',
      name: 'country'
    }],
    rows: [{
      name: 'John Doe',
      age: 30,
      country: 'USA'
    }, {
      name: 'Jane Smith',
      age: 25,
      country: 'Canada'
    }, {
      name: 'Alice Johnson',
      age: 28,
      country: 'UK'
    }, {
      name: 'Bob Brown',
      age: 35,
      country: 'Australia'
    }, {
      name: 'Charlie Black',
      age: 22,
      country: 'Germany'
    }, {
      name: 'Diana White',
      age: 27,
      country: 'France'
    }, {
      name: 'Ethan Green',
      age: 31,
      country: 'Italy'
    }],
    pagination: {
      page: 1,
      perPage: 10,
      total: 150
    }
  }
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,I,j;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    columns: [{
      label: 'Name',
      name: 'name'
    }, {
      label: 'Age',
      name: 'age'
    }, {
      label: 'Country',
      name: 'country'
    }],
    rows: [{
      name: 'John Doe',
      age: 30,
      country: 'USA'
    }, {
      name: 'Jane Smith',
      age: 25,
      country: 'Canada'
    }, {
      name: 'Alice Johnson',
      age: 28,
      country: 'UK'
    }, {
      name: 'Bob Brown',
      age: 35,
      country: 'Australia'
    }, {
      name: 'Charlie Black',
      age: 22,
      country: 'Germany'
    }, {
      name: 'Diana White',
      age: 27,
      country: 'France'
    }, {
      name: 'Ethan Green',
      age: 31,
      country: 'Italy'
    }],
    loading: true,
    pagination: {
      page: 1,
      perPage: 10,
      total: 150
    }
  }
}`,...(j=(I=b.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const pn=["Default","Loading","WithPagination","LoadingWithPagination"];export{d as Default,y as Loading,b as LoadingWithPagination,p as WithPagination,pn as __namedExportsOrder,yn as default};
