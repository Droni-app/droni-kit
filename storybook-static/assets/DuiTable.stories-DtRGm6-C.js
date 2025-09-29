import{d as b,e,g as r,F as l,j as d,o as a,n as h,t as m,f,k as x,m as _}from"./vue.esm-bundler-WcfFEWmJ.js";/* empty css              */const w={class:"dk:relative dk:overflow-x-auto dk:shadow-md dk:sm:rounded-lg"},A={class:"dk:w-full dk:text-sm dk:text-left dk:text-gray-700 dk:dark:text-gray-300"},D={class:"dk:text-xs dk:uppercase dk:bg-gray-100 dk:dark:bg-gray-700 dk:dark:text-gray-200"},g=b({__name:"DuiTable",props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0}},setup(i){const o=i;return(k,C)=>(a(),e("div",w,[r("table",A,[r("thead",D,[r("tr",null,[(a(!0),e(l,null,d(o.columns,n=>(a(),e("th",{key:n.name,class:h(["dk:px-6 dk:py-3",n.classes])},m(n.label),3))),128))])]),r("tbody",null,[(a(!0),e(l,null,d(o.rows,(n,p)=>(a(),e("tr",{key:p,class:"dk:bg-white dk:border-b dk:border-gray-200 dk:dark:bg-gray-800 dk:dark:border-gray-700 dk:hover:bg-gray-50 dk:dark:hover:bg-gray-600 dk:transition-colors"},[(a(!0),e(l,null,d(o.columns,s=>(a(),e("td",{key:s.name,class:"dk:px-6 dk:py-4 dk:text-gray-900 dk:dark:text-gray-100"},[f(k.$slots,s.name,_({ref_for:!0},n),()=>[x(m(n[s.name]),1)])]))),128))]))),128))])])]))}});g.__docgenInfo={exportName:"default",displayName:"DuiTable",description:"",tags:{},props:[{name:"columns",type:{name:"Array<TableColumn>"},required:!0},{name:"rows",type:{name:"Array<any>"},required:!0}],slots:[{name:"column.name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/gustavo/www/DroniApps/droni-kit/src/stories/Elements/DuiTable.vue"]};const J={title:"Elements/Table",component:g,tags:["autodocs"],argTypes:{columns:{control:{type:"object"},description:"columns of the table",defaultValue:[{label:"Name",name:"name"},{label:"Age",name:"age"},{label:"Country",name:"country"}]},rows:{control:{type:"object"},description:"Data of the table",defaultValue:[{name:"John Doe",age:30,country:"USA"},{name:"Jane Smith",age:25,country:"Canada"}]}}},t={args:{columns:[{label:"Name",name:"name"},{label:"Age",name:"age"},{label:"Country",name:"country"}],rows:[{name:"John Doe",age:30,country:"USA"},{name:"Jane Smith",age:25,country:"Canada"},{name:"Alice Johnson",age:28,country:"UK"},{name:"Bob Brown",age:35,country:"Australia"},{name:"Charlie Black",age:22,country:"Germany"},{name:"Diana White",age:27,country:"France"},{name:"Ethan Green",age:31,country:"Italy"}]}};var u,c,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    }]
  }
}`,...(y=(c=t.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,J as default};
