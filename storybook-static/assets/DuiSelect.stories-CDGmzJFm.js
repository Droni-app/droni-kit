import{_ as i}from"./DuiSelect-CHodsTM1.js";/* empty css              */import"./iframe-sEkeUlo0.js";import"./preload-helper-Dp1pzeXC.js";const g={title:"Forms/Select",component:i,tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","md","lg"]},block:{control:{type:"boolean"}},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"]},itemLabel:{control:{type:"text"}},itemValue:{control:{type:"text"}},placeholder:{control:{type:"text"}},options:{control:{type:"object"}}}},e={args:{size:"md",block:!0,rounded:"all",modelValue:6,itemLabel:"name",itemValue:"id",placeholder:"Selecciona un país",options:[{id:5,name:"Colombia"},{id:6,name:"México"},{id:7,name:"España"},{id:8,name:"Perú"}]},render:l=>({components:{DuiSelect:i},setup(){return{args:l}},template:`
      <div class="p-4">
        <label for="pais" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Selecciona un país <span class="text-red-500">*</span>
        </label>
        <DuiSelect 
          v-bind="args"
          id="pais"
          name="pais"
          required
        />
      </div>
    `})},t={render:()=>({components:{DuiSelect:i},setup(){return{countries:[{id:1,name:"Colombia"},{id:2,name:"México"},{id:3,name:"España"}]}},template:`
      <div class="p-4 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Small
          </label>
          <DuiSelect 
            :options="countries"
            size="sm"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Medium (default)
          </label>
          <DuiSelect 
            :options="countries"
            size="md"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Large
          </label>
          <DuiSelect 
            :options="countries"
            size="lg"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
      </div>
    `})},a={render:()=>({components:{DuiSelect:i},setup(){return{priorities:[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"},{label:"Crítica",value:"critical"}]}},template:`
      <div class="p-4 space-y-4">
        <div>
          <label for="priority-disabled" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Deshabilitado
          </label>
          <DuiSelect 
            id="priority-disabled"
            :options="priorities"
            placeholder="No disponible"
            disabled
          />
        </div>
        <div>
          <label for="priority-required" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Requerido <span class="text-red-500">*</span>
          </label>
          <DuiSelect 
            id="priority-required"
            :options="priorities"
            placeholder="Selecciona prioridad"
            required
            name="priority"
          />
        </div>
      </div>
    `})};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: 'md',
    block: true,
    rounded: 'all',
    modelValue: 6,
    itemLabel: 'name',
    itemValue: 'id',
    placeholder: 'Selecciona un país',
    options: [{
      id: 5,
      name: 'Colombia'
    }, {
      id: 6,
      name: 'México'
    }, {
      id: 7,
      name: 'España'
    }, {
      id: 8,
      name: 'Perú'
    }]
  },
  render: args => ({
    components: {
      DuiSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="p-4">
        <label for="pais" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Selecciona un país <span class="text-red-500">*</span>
        </label>
        <DuiSelect 
          v-bind="args"
          id="pais"
          name="pais"
          required
        />
      </div>
    \`
  })
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
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
      }];
      return {
        countries
      };
    },
    template: \`
      <div class="p-4 space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Small
          </label>
          <DuiSelect 
            :options="countries"
            size="sm"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Medium (default)
          </label>
          <DuiSelect 
            :options="countries"
            size="md"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Large
          </label>
          <DuiSelect 
            :options="countries"
            size="lg"
            placeholder="Selecciona..."
            item-label="name"
            item-value="id"
          />
        </div>
      </div>
    \`
  })
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,p,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiSelect
    },
    setup() {
      const priorities = [{
        label: 'Baja',
        value: 'low'
      }, {
        label: 'Media',
        value: 'medium'
      }, {
        label: 'Alta',
        value: 'high'
      }, {
        label: 'Crítica',
        value: 'critical'
      }];
      return {
        priorities
      };
    },
    template: \`
      <div class="p-4 space-y-4">
        <div>
          <label for="priority-disabled" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Deshabilitado
          </label>
          <DuiSelect 
            id="priority-disabled"
            :options="priorities"
            placeholder="No disponible"
            disabled
          />
        </div>
        <div>
          <label for="priority-required" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Requerido <span class="text-red-500">*</span>
          </label>
          <DuiSelect 
            id="priority-required"
            :options="priorities"
            placeholder="Selecciona prioridad"
            required
            name="priority"
          />
        </div>
      </div>
    \`
  })
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const S=["Default","Sizes","WithNativeAttributes"];export{e as Default,t as Sizes,a as WithNativeAttributes,S as __namedExportsOrder,g as default};
