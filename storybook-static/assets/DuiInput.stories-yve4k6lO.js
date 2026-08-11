import{r as e}from"./iframe-BtNMLuc9.js";import{_ as a}from"./DuiInput-CGrlza99.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const A={title:"Forms/Input",component:a,tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"},description:"The input value (v-model)"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input"},block:{control:{type:"boolean"},description:"Whether the input takes full width"},rounded:{control:{type:"select"},options:["all","top","bottom","left","right","none"],description:"Border radius style"}},parameters:{docs:{description:{component:"A styled input component that accepts all native HTML input attributes via $attrs. Only includes custom props for styling (size, block, rounded) and v-model support."}}}},r={args:{size:"md",block:!0,rounded:"all"},render:d=>({components:{DuiInput:a},setup(){const t=e("");return{args:d,inputValue:t}},template:`
      <div class="dk:p-4">
        <label for="default-input" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
          Default Input
        </label>
        <DuiInput 
          v-model="inputValue" 
          id="default-input"
          type="text"
          placeholder="Enter text..."
          v-bind="args" 
        />
        <p class="dk:mt-2 dk:text-sm dk:text-gray-600 dk:dark:text-gray-400">
          Value: {{ inputValue }}
        </p>
      </div>
    `})},o={render:()=>({components:{DuiInput:a},setup(){const d=e(""),t=e(""),l=e("");return{smallValue:d,mediumValue:t,largeValue:l}},template:`
      <div class="dk:space-y-6 dk:p-4">
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Small Input
          </label>
          <DuiInput 
            v-model="smallValue"
            size="sm"
            placeholder="Small input..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Medium Input (Default)
          </label>
          <DuiInput 
            v-model="mediumValue"
            size="md"
            placeholder="Medium input..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Large Input
          </label>
          <DuiInput 
            v-model="largeValue"
            size="lg"
            placeholder="Large input..."
          />
        </div>
      </div>
    `})},s={render:()=>({components:{DuiInput:a},setup(){const d=e(""),t=e(""),l=e(""),n=e(""),N=e("");return{textValue:d,emailValue:t,passwordValue:l,numberValue:n,dateValue:N}},template:`
      <div class="dk:space-y-6 dk:p-4">
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Text Input
          </label>
          <DuiInput 
            v-model="textValue"
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Email Input
          </label>
          <DuiInput 
            v-model="emailValue"
            type="email"
            placeholder="user@example.com"
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Password Input
          </label>
          <DuiInput 
            v-model="passwordValue"
            type="password"
            placeholder="Enter password..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Number Input
          </label>
          <DuiInput 
            v-model="numberValue"
            type="number"
            placeholder="Enter number..."
            min="0"
            max="100"
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Date Input
          </label>
          <DuiInput 
            v-model="dateValue"
            type="date"
          />
        </div>
      </div>
    `})},m={render:()=>({components:{DuiInput:a},setup(){const d=e(""),t=e("Disabled input"),l=e("Readonly input"),n=e("");return{normalValue:d,disabledValue:t,readonlyValue:l,requiredValue:n}},template:`
      <div class="dk:space-y-6 dk:p-4">
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Normal Input
          </label>
          <DuiInput 
            v-model="normalValue"
            placeholder="Normal input..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Disabled Input
          </label>
          <DuiInput 
            v-model="disabledValue"
            disabled
            placeholder="This is disabled..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Readonly Input
          </label>
          <DuiInput 
            v-model="readonlyValue"
            readonly
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Required Input <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            v-model="requiredValue"
            required
            placeholder="This field is required..."
          />
        </div>
      </div>
    `})},k={render:()=>({components:{DuiInput:a},setup(){return{values:e({all:"",top:"",bottom:"",left:"",right:"",none:""})}},template:`
      <div class="dk:space-y-6 dk:p-4">
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            All Rounded (Default)
          </label>
          <DuiInput 
            v-model="values.all"
            rounded="all"
            placeholder="All corners rounded..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Top Rounded
          </label>
          <DuiInput 
            v-model="values.top"
            rounded="top"
            placeholder="Top corners rounded..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Bottom Rounded
          </label>
          <DuiInput 
            v-model="values.bottom"
            rounded="bottom"
            placeholder="Bottom corners rounded..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            No Rounded
          </label>
          <DuiInput 
            v-model="values.none"
            rounded="none"
            placeholder="No rounded corners..."
          />
        </div>
      </div>
    `})},u={render:()=>({components:{DuiInput:a},setup(){const d=e({name:"",email:"",phone:"",website:"",password:"",confirmPassword:""});return{formData:d,handleSubmit:()=>{console.log("Form submitted:",d.value),alert("Check the console for form data!")}}},template:`
      <form @submit.prevent="handleSubmit" class="dk:max-w-md dk:mx-auto dk:p-6 dk:space-y-6">
        <h2 class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-6">
          Registration Form
        </h2>
        
        <div>
          <label for="name" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Full Name <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label for="email" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Email Address <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label for="phone" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Phone Number
          </label>
          <DuiInput 
            id="phone"
            v-model="formData.phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div>
          <label for="website" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Website
          </label>
          <DuiInput 
            id="website"
            v-model="formData.website"
            type="url"
            placeholder="https://example.com"
          />
        </div>
        
        <div>
          <label for="password" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Password <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="Enter password"
            minlength="8"
            required
          />
        </div>
        
        <div>
          <label for="confirm-password" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Confirm Password <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            id="confirm-password"
            v-model="formData.confirmPassword"
            type="password"
            placeholder="Confirm password"
            required
          />
        </div>
        
        <button 
          type="submit"
          class="dk:w-full dk:bg-blue-600 dk:text-white dk:py-2 dk:px-4 dk:rounded dk:hover:bg-blue-700 dk:transition-colors"
        >
          Register
        </button>
        
        <div class="dk:mt-4 dk:p-4 dk:bg-gray-100 dk:dark:bg-gray-800 dk:rounded">
          <h3 class="dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">Form Data:</h3>
          <pre class="dk:text-xs dk:text-gray-600 dk:dark:text-gray-400">{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
      </form>
    `})};var i,p,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'md',
    block: true,
    rounded: 'all'
  },
  render: args => ({
    components: {
      DuiInput
    },
    setup() {
      const inputValue = ref('');
      return {
        args,
        inputValue
      };
    },
    template: \`
      <div class="dk:p-4">
        <label for="default-input" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
          Default Input
        </label>
        <DuiInput 
          v-model="inputValue" 
          id="default-input"
          type="text"
          placeholder="Enter text..."
          v-bind="args" 
        />
        <p class="dk:mt-2 dk:text-sm dk:text-gray-600 dk:dark:text-gray-400">
          Value: {{ inputValue }}
        </p>
      </div>
    \`
  })
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,x,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiInput
    },
    setup() {
      const smallValue = ref('');
      const mediumValue = ref('');
      const largeValue = ref('');
      return {
        smallValue,
        mediumValue,
        largeValue
      };
    },
    template: \`
      <div class="dk:space-y-6 dk:p-4">
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Small Input
          </label>
          <DuiInput 
            v-model="smallValue"
            size="sm"
            placeholder="Small input..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Medium Input (Default)
          </label>
          <DuiInput 
            v-model="mediumValue"
            size="md"
            placeholder="Medium input..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Large Input
          </label>
          <DuiInput 
            v-model="largeValue"
            size="lg"
            placeholder="Large input..."
          />
        </div>
      </div>
    \`
  })
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiInput
    },
    setup() {
      const textValue = ref('');
      const emailValue = ref('');
      const passwordValue = ref('');
      const numberValue = ref('');
      const dateValue = ref('');
      return {
        textValue,
        emailValue,
        passwordValue,
        numberValue,
        dateValue
      };
    },
    template: \`
      <div class="dk:space-y-6 dk:p-4">
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Text Input
          </label>
          <DuiInput 
            v-model="textValue"
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Email Input
          </label>
          <DuiInput 
            v-model="emailValue"
            type="email"
            placeholder="user@example.com"
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Password Input
          </label>
          <DuiInput 
            v-model="passwordValue"
            type="password"
            placeholder="Enter password..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Number Input
          </label>
          <DuiInput 
            v-model="numberValue"
            type="number"
            placeholder="Enter number..."
            min="0"
            max="100"
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Date Input
          </label>
          <DuiInput 
            v-model="dateValue"
            type="date"
          />
        </div>
      </div>
    \`
  })
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,D,I;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiInput
    },
    setup() {
      const normalValue = ref('');
      const disabledValue = ref('Disabled input');
      const readonlyValue = ref('Readonly input');
      const requiredValue = ref('');
      return {
        normalValue,
        disabledValue,
        readonlyValue,
        requiredValue
      };
    },
    template: \`
      <div class="dk:space-y-6 dk:p-4">
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Normal Input
          </label>
          <DuiInput 
            v-model="normalValue"
            placeholder="Normal input..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Disabled Input
          </label>
          <DuiInput 
            v-model="disabledValue"
            disabled
            placeholder="This is disabled..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Readonly Input
          </label>
          <DuiInput 
            v-model="readonlyValue"
            readonly
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Required Input <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            v-model="requiredValue"
            required
            placeholder="This field is required..."
          />
        </div>
      </div>
    \`
  })
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,w,S;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiInput
    },
    setup() {
      const values = ref({
        all: '',
        top: '',
        bottom: '',
        left: '',
        right: '',
        none: ''
      });
      return {
        values
      };
    },
    template: \`
      <div class="dk:space-y-6 dk:p-4">
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            All Rounded (Default)
          </label>
          <DuiInput 
            v-model="values.all"
            rounded="all"
            placeholder="All corners rounded..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Top Rounded
          </label>
          <DuiInput 
            v-model="values.top"
            rounded="top"
            placeholder="Top corners rounded..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Bottom Rounded
          </label>
          <DuiInput 
            v-model="values.bottom"
            rounded="bottom"
            placeholder="Bottom corners rounded..."
          />
        </div>
        <div>
          <label class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            No Rounded
          </label>
          <DuiInput 
            v-model="values.none"
            rounded="none"
            placeholder="No rounded corners..."
          />
        </div>
      </div>
    \`
  })
}`,...(S=(w=k.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,q,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiInput
    },
    setup() {
      const formData = ref({
        name: '',
        email: '',
        phone: '',
        website: '',
        password: '',
        confirmPassword: ''
      });
      const handleSubmit = () => {
        console.log('Form submitted:', formData.value);
        alert('Check the console for form data!');
      };
      return {
        formData,
        handleSubmit
      };
    },
    template: \`
      <form @submit.prevent="handleSubmit" class="dk:max-w-md dk:mx-auto dk:p-6 dk:space-y-6">
        <h2 class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-6">
          Registration Form
        </h2>
        
        <div>
          <label for="name" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Full Name <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label for="email" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Email Address <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label for="phone" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Phone Number
          </label>
          <DuiInput 
            id="phone"
            v-model="formData.phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div>
          <label for="website" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Website
          </label>
          <DuiInput 
            id="website"
            v-model="formData.website"
            type="url"
            placeholder="https://example.com"
          />
        </div>
        
        <div>
          <label for="password" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Password <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="Enter password"
            minlength="8"
            required
          />
        </div>
        
        <div>
          <label for="confirm-password" class="dk:block dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">
            Confirm Password <span class="dk:text-red-500">*</span>
          </label>
          <DuiInput 
            id="confirm-password"
            v-model="formData.confirmPassword"
            type="password"
            placeholder="Confirm password"
            required
          />
        </div>
        
        <button 
          type="submit"
          class="dk:w-full dk:bg-blue-600 dk:text-white dk:py-2 dk:px-4 dk:rounded dk:hover:bg-blue-700 dk:transition-colors"
        >
          Register
        </button>
        
        <div class="dk:mt-4 dk:p-4 dk:bg-gray-100 dk:dark:bg-gray-800 dk:rounded">
          <h3 class="dk:text-sm dk:font-medium dk:text-gray-700 dk:dark:text-gray-300 dk:mb-2">Form Data:</h3>
          <pre class="dk:text-xs dk:text-gray-600 dk:dark:text-gray-400">{{ JSON.stringify(formData, null, 2) }}</pre>
        </div>
      </form>
    \`
  })
}`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const C=["Default","Sizes","InputTypes","States","RoundedVariations","FormExample"];export{r as Default,u as FormExample,s as InputTypes,k as RoundedVariations,o as Sizes,m as States,C as __namedExportsOrder,A as default};
