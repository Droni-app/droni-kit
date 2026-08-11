import{_ as e}from"./DuiTextarea-DE6PYa4E.js";/* empty css              */import"./iframe-BtNMLuc9.js";import"./preload-helper-Dp1pzeXC.js";const S={title:"Forms/Textarea",component:e,tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"}},size:{control:{type:"select"},options:["sm","md","lg"]},block:{control:{type:"boolean"}},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"]},autoheight:{control:{type:"boolean"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"]}}},a={args:{size:"md",block:!0,rounded:"all",modelValue:"",autoheight:!0,resize:"vertical"},render:f=>({components:{DuiTextarea:e},setup(){return{args:f}},template:`
        <div class="p-4 max-w-md">
          <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Descripción <span class="text-red-500">*</span>
          </label>
          <DuiTextarea 
            v-bind="args"
            id="description"
            name="description"
            placeholder="Escribe tu descripción aquí..."
            required
            rows="4"
          />
        </div>
      `})},t={render:()=>({components:{DuiTextarea:e},template:`
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Small
            </label>
            <DuiTextarea 
              size="sm"
              placeholder="Textarea pequeño..."
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Medium (default)
            </label>
            <DuiTextarea 
              size="md"
              placeholder="Textarea mediano..."
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Large
            </label>
            <DuiTextarea 
              size="lg"
              placeholder="Textarea grande..."
              rows="3"
            />
          </div>
        </div>
      `})},r={render:()=>({components:{DuiTextarea:e},template:`
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Sin redimensionar
            </label>
            <DuiTextarea 
              resize="none"
              placeholder="No se puede redimensionar"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar vertical
            </label>
            <DuiTextarea 
              resize="vertical"
              placeholder="Solo se puede redimensionar verticalmente"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar horizontal
            </label>
            <DuiTextarea 
              resize="horizontal"
              placeholder="Solo se puede redimensionar horizontalmente"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar ambos
            </label>
            <DuiTextarea 
              resize="both"
              placeholder="Se puede redimensionar en ambas direcciones"
              rows="3"
            />
          </div>
        </div>
      `})},n={render:()=>({components:{DuiTextarea:e},template:`
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Con auto-height (escribe varias líneas)
            </label>
            <DuiTextarea 
              :autoheight="true"
              placeholder="Este textarea crecerá automáticamente cuando escribas más contenido..."
              rows="2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Sin auto-height (altura fija)
            </label>
            <DuiTextarea 
              :autoheight="false"
              placeholder="Este textarea mantiene altura fija"
              rows="4"
            />
          </div>
        </div>
      `})},s={render:()=>({components:{DuiTextarea:e},template:`
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label for="disabled-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Deshabilitado
            </label>
            <DuiTextarea 
              id="disabled-textarea"
              placeholder="Campo deshabilitado"
              disabled
              rows="3"
            />
          </div>
          <div>
            <label for="readonly-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Solo lectura
            </label>
            <DuiTextarea 
              id="readonly-textarea"
              model-value="Este contenido es de solo lectura"
              readonly
              rows="3"
            />
          </div>
          <div>
            <label for="required-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Requerido <span class="text-red-500">*</span>
            </label>
            <DuiTextarea 
              id="required-textarea"
              placeholder="Este campo es obligatorio"
              required
              name="message"
              rows="4"
            />
          </div>
        </div>
      `})};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'md',
    block: true,
    rounded: 'all',
    modelValue: '',
    autoheight: true,
    resize: 'vertical'
  },
  render: args => ({
    components: {
      DuiTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <div class="p-4 max-w-md">
          <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Descripción <span class="text-red-500">*</span>
          </label>
          <DuiTextarea 
            v-bind="args"
            id="description"
            name="description"
            placeholder="Escribe tu descripción aquí..."
            required
            rows="4"
          />
        </div>
      \`
  })
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiTextarea
    },
    template: \`
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Small
            </label>
            <DuiTextarea 
              size="sm"
              placeholder="Textarea pequeño..."
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Medium (default)
            </label>
            <DuiTextarea 
              size="md"
              placeholder="Textarea mediano..."
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Large
            </label>
            <DuiTextarea 
              size="lg"
              placeholder="Textarea grande..."
              rows="3"
            />
          </div>
        </div>
      \`
  })
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,x,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiTextarea
    },
    template: \`
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Sin redimensionar
            </label>
            <DuiTextarea 
              resize="none"
              placeholder="No se puede redimensionar"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar vertical
            </label>
            <DuiTextarea 
              resize="vertical"
              placeholder="Solo se puede redimensionar verticalmente"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar horizontal
            </label>
            <DuiTextarea 
              resize="horizontal"
              placeholder="Solo se puede redimensionar horizontalmente"
              rows="3"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Redimensionar ambos
            </label>
            <DuiTextarea 
              resize="both"
              placeholder="Se puede redimensionar en ambas direcciones"
              rows="3"
            />
          </div>
        </div>
      \`
  })
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var p,g,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiTextarea
    },
    template: \`
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Con auto-height (escribe varias líneas)
            </label>
            <DuiTextarea 
              :autoheight="true"
              placeholder="Este textarea crecerá automáticamente cuando escribas más contenido..."
              rows="2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Sin auto-height (altura fija)
            </label>
            <DuiTextarea 
              :autoheight="false"
              placeholder="Este textarea mantiene altura fija"
              rows="4"
            />
          </div>
        </div>
      \`
  })
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,h,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiTextarea
    },
    template: \`
        <div class="p-4 space-y-4 max-w-md">
          <div>
            <label for="disabled-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Deshabilitado
            </label>
            <DuiTextarea 
              id="disabled-textarea"
              placeholder="Campo deshabilitado"
              disabled
              rows="3"
            />
          </div>
          <div>
            <label for="readonly-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Solo lectura
            </label>
            <DuiTextarea 
              id="readonly-textarea"
              model-value="Este contenido es de solo lectura"
              readonly
              rows="3"
            />
          </div>
          <div>
            <label for="required-textarea" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Requerido <span class="text-red-500">*</span>
            </label>
            <DuiTextarea 
              id="required-textarea"
              placeholder="Este campo es obligatorio"
              required
              name="message"
              rows="4"
            />
          </div>
        </div>
      \`
  })
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const q=["Default","Sizes","ResizeOptions","AutoHeight","WithNativeAttributes"];export{n as AutoHeight,a as Default,r as ResizeOptions,t as Sizes,s as WithNativeAttributes,q as __namedExportsOrder,S as default};
