import{f as ge,h as n,s as w,w as z,m as B,v as S,j as l,p as j,n as i,t as T,l as P,i as s,o as d,q as fe}from"./iframe-sEkeUlo0.js";import{g as q,a as be}from"./router-detection-C7RuyEyl.js";import{_ as o}from"./DuiButton-CUoUMhpe.js";/* empty css              */import"./preload-helper-Dp1pzeXC.js";const he={key:0,class:"dk:relative dk:overflow-hidden dk:rounded-t-lg"},ve=["src","alt"],a=ge({__name:"DuiCard",props:{size:{default:"m"},image:{default:void 0},title:{default:void 0},subtitle:{default:void 0},to:{default:void 0}},setup(e){const r=e,C=()=>r.to?q(r.to):"div",de=()=>r.to?q(r.to):"h3",D=()=>{const t=C();return be(r.to,t)},u={s:{padding:"dk:p-3",spacing:"dk:space-y-2",titleSize:"dk:text-base",subtitleSize:"dk:text-sm",contentSize:"dk:text-sm"},m:{padding:"dk:p-4",spacing:"dk:space-y-3",titleSize:"dk:text-lg",subtitleSize:"dk:text-base",contentSize:"dk:text-base"},l:{padding:"dk:p-6",spacing:"dk:space-y-4",titleSize:"dk:text-xl",subtitleSize:"dk:text-lg",contentSize:"dk:text-lg"}},ie=s(()=>["dk:relative dk:bg-gradient-to-br dk:from-white/80 dk:via-white/70 dk:to-gray-50/80","dk:dark:from-gray-700/60 dk:dark:via-gray-800/60 dk:dark:to-gray-900/60","dk:backdrop-blur-md dk:backdrop-brightness-110","dk:rounded-xl dk:border dk:border-white/40 dk:dark:border-white/10","dk:shadow-xl dk:shadow-black/10 dk:dark:shadow-black/30","dk:transition-all dk:duration-300","dk:hover:shadow-2xl dk:hover:shadow-black/15 dk:dark:hover:shadow-black/40","dk:hover:border-white/50 dk:dark:hover:border-white/20","dk:hover:backdrop-brightness-125 dk:dark:hover:backdrop-brightness-110","dk:overflow-hidden","dk:before:absolute dk:before:top-0 dk:before:left-0 dk:before:right-0 dk:before:h-0.5","dk:before:bg-gradient-to-r dk:before:from-white/60 dk:before:via-white/40 dk:before:to-transparent","dk:dark:before:from-white/20 dk:dark:before:via-white/10 dk:dark:before:to-transparent"].join(" ")),oe=s(()=>["dk:w-full dk:h-48 dk:object-cover","dk:relative dk:z-10"].join(" ")),ne=s(()=>{const t=u[r.size];return[t.padding,t.spacing,"dk:relative dk:z-10"].join(" ")}),le=s(()=>[u[r.size].spacing].join(" ")),ue=s(()=>{const y=[u[r.size].titleSize,"dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100","dk:line-clamp-2"];return r.to&&y.push("dk:no-underline dk:hover:underline dk:transition-colors","dk:hover:text-blue-600 dk:dark:hover:text-blue-400"),y.join(" ")}),ce=s(()=>{const t=["dk:block","dk:transition-transform dk:duration-300","dk:hover:scale-105","dk:relative dk:z-10"];return r.to&&t.push("dk:no-underline"),t.join(" ")}),me=s(()=>[u[r.size].subtitleSize,"dk:text-gray-600 dk:dark:text-gray-400","dk:line-clamp-3"].join(" ")),pe=s(()=>[u[r.size].contentSize,"dk:text-gray-700 dk:dark:text-gray-300"].join(" ")),ke=s(()=>["dk:border-t dk:border-gray-300/40 dk:dark:border-white/10","dk:pt-3 dk:mt-3","dk:relative dk:z-10"].join(" "));return(t,y)=>(d(),n("div",{class:i(ie.value)},[e.image?(d(),n("div",he,[(d(),w(S(C()),B(D(),{class:ce.value}),{default:z(()=>[j("img",{src:e.image,alt:e.title||"Card image",class:i(oe.value)},null,10,ve)]),_:1},16,["class"]))])):l("",!0),j("div",{class:i(ne.value)},[e.title||e.subtitle?(d(),n("div",{key:0,class:i(le.value)},[e.title?(d(),w(S(de()),B({key:0},D(),{class:ue.value}),{default:z(()=>[fe(T(e.title),1)]),_:1},16,["class"])):l("",!0),e.subtitle?(d(),n("p",{key:1,class:i(me.value)},T(e.subtitle),3)):l("",!0)],2)):l("",!0),t.$slots.default?(d(),n("div",{key:1,class:i(pe.value)},[P(t.$slots,"default")],2)):l("",!0),t.$slots.footer?(d(),n("div",{key:2,class:i(ke.value)},[P(t.$slots,"footer")],2)):l("",!0)],2)],2))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"DuiCard",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"s"'},{name:'"m"'},{name:'"l"'}]},defaultValue:{func:!1,value:"'m'"}},{name:"image",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"subtitle",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/gustavob/www/droni-kit/src/stories/Elements/DuiCard.vue"]});const x="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop&q=80",ze={title:"Elements/Card",component:a,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["s","m","l"],description:"Size of the card"},image:{control:{type:"text"},description:"Image URL for the card header"},title:{control:{type:"text"},description:"Card title (also used as image alt text)"},subtitle:{control:{type:"text"},description:"Card subtitle"},to:{control:{type:"text"},description:"Navigation target (makes image and title clickable)"}},parameters:{docs:{description:{component:"A flexible card component with support for images, titles, content, and footer. Features dark mode support and responsive sizing."}}}},c={args:{image:x,title:"Amazing Product",subtitle:"The perfect solution for your needs",size:"m"},render:e=>({components:{DuiCard:a,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            This is the main content area of the card. You can add any content here using the default slot.
            Perfect for descriptions, features, or any other information.
          </p>
          <template #footer>
            <div class="dk:flex dk:justify-between dk:items-center">
              <span class="dk:text-lg dk:font-bold dk:text-gray-900 dk:dark:text-gray-100">$99.99</span>
              <DuiButton size="sm" color="primary">Add to Cart</DuiButton>
            </div>
          </template>
        </DuiCard>
      </div>
    `})},m={args:{image:x,title:"Small Card",subtitle:"Compact version",size:"s"},render:e=>({components:{DuiCard:a,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:max-w-xs dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            Smaller card perfect for compact layouts and minimal information display.
          </p>
          <template #footer>
            <DuiButton size="sm" variant="outline" block>View</DuiButton>
          </template>
        </DuiCard>
      </div>
    `})},p={args:{image:x,title:"Large Featured Card",subtitle:"Extended version with more space",size:"l"},render:e=>({components:{DuiCard:a,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:max-w-lg dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            Large cards provide more space for detailed content and complex layouts. 
            Ideal for featured items, detailed product descriptions, or important announcements.
          </p>
          <ul class="dk:list-disc dk:list-inside dk:text-gray-600 dk:dark:text-gray-400 dk:space-y-1">
            <li>Enhanced spacing and typography</li>
            <li>Perfect for detailed content</li>
            <li>Premium presentation</li>
          </ul>
          <template #footer>
            <div class="dk:flex dk:gap-3">
              <DuiButton variant="outline" color="neutral">Learn More</DuiButton>
              <DuiButton color="primary">Get Started</DuiButton>
            </div>
          </template>
        </DuiCard>
      </div>
    `})},k={args:{title:"Text-Only Card",subtitle:"Clean and simple design",size:"m"},render:e=>({components:{DuiCard:a,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            Sometimes you don't need an image. This card focuses on the textual content 
            and maintains a clean, professional appearance.
          </p>
          <template #footer>
            <div class="dk:flex dk:justify-end">
              <DuiButton size="sm" variant="ghost">Read More</DuiButton>
            </div>
          </template>
        </DuiCard>
      </div>
    `})},g={args:{size:"m"},render:e=>({components:{DuiCard:a},setup(){return{args:e}},template:`
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <div class="dk:text-center dk:py-8">
            <div class="dk:w-16 dk:h-16 dk:bg-blue-100 dk:dark:bg-blue-900/20 dk:rounded-full dk:flex dk:items-center dk:justify-center dk:mx-auto dk:mb-4">
              <svg class="dk:w-8 dk:h-8 dk:text-blue-600 dk:dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-2">
              Quick Action
            </h3>
            <p class="dk:text-gray-600 dk:dark:text-gray-400">
              Minimal card with just content. No title, subtitle, or footer.
            </p>
          </div>
        </DuiCard>
      </div>
    `})},f={args:{title:"Simple Title Card",size:"m"},render:e=>({components:{DuiCard:a},setup(){return{args:e}},template:`
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This card has only a title and content. Perfect for simple information cards
            or when you want to keep things minimal but structured.
          </p>
        </DuiCard>
      </div>
    `})},b={args:{image:x,title:"Dark Mode Card",subtitle:"Beautifully styled for dark themes",size:"m"},parameters:{backgrounds:{default:"dark"}},render:e=>({components:{DuiCard:a,DuiButton:o},setup(){return{args:e}},template:`
      <div class="dark dk:min-h-screen dk:bg-gray-900 dk:p-8">
        <div class="dk:max-w-sm dk:mx-auto">
          <DuiCard v-bind="args">
            <p class="dk:text-gray-400 dk:mb-4">
              Cards automatically adapt to dark mode with appropriate colors and contrast.
              All text, borders, and backgrounds adjust seamlessly.
            </p>
            <template #footer>
              <div class="dk:flex dk:justify-between dk:items-center">
                <span class="dk:text-emerald-400 dk:font-semibold">Available</span>
                <DuiButton size="sm" color="primary">Select</DuiButton>
              </div>
            </template>
          </DuiCard>
        </div>
      </div>
    `})},h={render:()=>({components:{DuiCard:a,DuiButton:o},setup(){return{cards:[{image:"https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop&q=80",title:"Premium Plan",subtitle:"Best for professionals",price:"$29/month"},{image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80",title:"Business Plan",subtitle:"Perfect for teams",price:"$59/month"},{image:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&q=80",title:"Enterprise",subtitle:"For large organizations",price:"Custom"}]}},template:`
      <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-2 dk:lg:grid-cols-3 dk:gap-6 dk:p-6">
        <DuiCard
          v-for="card in cards"
          :key="card.title"
          :image="card.image"
          :title="card.title"
          :subtitle="card.subtitle"
          size="m"
        >
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
          <template #footer>
            <div class="dk:flex dk:justify-between dk:items-center">
              <span class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100">{{ card.price }}</span>
              <DuiButton size="sm" color="primary">Choose Plan</DuiButton>
            </div>
          </template>
        </DuiCard>
      </div>
    `})},v={render:()=>({components:{DuiCard:a,DuiButton:o},setup(){return{products:[{image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=200&fit=crop&q=80",title:"Running Shoes",subtitle:"Comfortable and durable",to:"/products/running-shoes",price:"$129.99"},{image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=200&fit=crop&q=80",title:"Sunglasses",subtitle:"UV protection included",to:"/products/sunglasses",price:"$89.99"},{image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=200&fit=crop&q=80",title:"Smart Watch",subtitle:"Track your fitness goals",to:"/products/smart-watch",price:"$299.99"}]}},template:`
      <div>
        <div class="dk:mb-6 dk:p-4 dk:bg-blue-50 dk:dark:bg-blue-900/20 dk:rounded-lg dk:border dk:border-blue-200 dk:dark:border-blue-800">
          <p class="dk:text-sm dk:text-blue-800 dk:dark:text-blue-200">
            💡 <strong>Tip:</strong> Click on the images or titles to navigate. The cards support Vue Router and Nuxt Router.
          </p>
        </div>
        <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-2 dk:lg:grid-cols-3 dk:gap-6">
          <DuiCard
            v-for="product in products"
            :key="product.title"
            :image="product.image"
            :title="product.title"
            :subtitle="product.subtitle"
            :to="product.to"
            size="m"
          >
            <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
              Click the image or title to navigate to the product page. The entire card becomes interactive when a 'to' prop is provided.
            </p>
            <template #footer>
              <div class="dk:flex dk:justify-between dk:items-center">
                <span class="dk:text-lg dk:font-bold dk:text-gray-900 dk:dark:text-gray-100">{{ product.price }}</span>
                <DuiButton size="sm" color="primary" @click.stop>Add to Cart</DuiButton>
              </div>
            </template>
          </DuiCard>
        </div>
      </div>
    `})};var $,V,L;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    image: sampleImage,
    title: 'Amazing Product',
    subtitle: 'The perfect solution for your needs',
    size: 'm'
  },
  render: args => ({
    components: {
      DuiCard,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            This is the main content area of the card. You can add any content here using the default slot.
            Perfect for descriptions, features, or any other information.
          </p>
          <template #footer>
            <div class="dk:flex dk:justify-between dk:items-center">
              <span class="dk:text-lg dk:font-bold dk:text-gray-900 dk:dark:text-gray-100">$99.99</span>
              <DuiButton size="sm" color="primary">Add to Cart</DuiButton>
            </div>
          </template>
        </DuiCard>
      </div>
    \`
  })
}`,...(L=(V=c.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var M,A,I;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    image: sampleImage,
    title: 'Small Card',
    subtitle: 'Compact version',
    size: 's'
  },
  render: args => ({
    components: {
      DuiCard,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:max-w-xs dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            Smaller card perfect for compact layouts and minimal information display.
          </p>
          <template #footer>
            <DuiButton size="sm" variant="outline" block>View</DuiButton>
          </template>
        </DuiCard>
      </div>
    \`
  })
}`,...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,R,E;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    image: sampleImage,
    title: 'Large Featured Card',
    subtitle: 'Extended version with more space',
    size: 'l'
  },
  render: args => ({
    components: {
      DuiCard,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:max-w-lg dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            Large cards provide more space for detailed content and complex layouts. 
            Ideal for featured items, detailed product descriptions, or important announcements.
          </p>
          <ul class="dk:list-disc dk:list-inside dk:text-gray-600 dk:dark:text-gray-400 dk:space-y-1">
            <li>Enhanced spacing and typography</li>
            <li>Perfect for detailed content</li>
            <li>Premium presentation</li>
          </ul>
          <template #footer>
            <div class="dk:flex dk:gap-3">
              <DuiButton variant="outline" color="neutral">Learn More</DuiButton>
              <DuiButton color="primary">Get Started</DuiButton>
            </div>
          </template>
        </DuiCard>
      </div>
    \`
  })
}`,...(E=(R=p.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var F,O,W;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Text-Only Card',
    subtitle: 'Clean and simple design',
    size: 'm'
  },
  render: args => ({
    components: {
      DuiCard,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            Sometimes you don't need an image. This card focuses on the textual content 
            and maintains a clean, professional appearance.
          </p>
          <template #footer>
            <div class="dk:flex dk:justify-end">
              <DuiButton size="sm" variant="ghost">Read More</DuiButton>
            </div>
          </template>
        </DuiCard>
      </div>
    \`
  })
}`,...(W=(O=k.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var G,U,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'm'
  },
  render: args => ({
    components: {
      DuiCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <div class="dk:text-center dk:py-8">
            <div class="dk:w-16 dk:h-16 dk:bg-blue-100 dk:dark:bg-blue-900/20 dk:rounded-full dk:flex dk:items-center dk:justify-center dk:mx-auto dk:mb-4">
              <svg class="dk:w-8 dk:h-8 dk:text-blue-600 dk:dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="dk:text-lg dk:font-semibold dk:text-gray-900 dk:dark:text-gray-100 dk:mb-2">
              Quick Action
            </h3>
            <p class="dk:text-gray-600 dk:dark:text-gray-400">
              Minimal card with just content. No title, subtitle, or footer.
            </p>
          </div>
        </DuiCard>
      </div>
    \`
  })
}`,...(Q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var Y,H,J;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Simple Title Card',
    size: 'm'
  },
  render: args => ({
    components: {
      DuiCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This card has only a title and content. Perfect for simple information cards
            or when you want to keep things minimal but structured.
          </p>
        </DuiCard>
      </div>
    \`
  })
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,X,Z;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    image: sampleImage,
    title: 'Dark Mode Card',
    subtitle: 'Beautifully styled for dark themes',
    size: 'm'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: args => ({
    components: {
      DuiCard,
      DuiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="dark dk:min-h-screen dk:bg-gray-900 dk:p-8">
        <div class="dk:max-w-sm dk:mx-auto">
          <DuiCard v-bind="args">
            <p class="dk:text-gray-400 dk:mb-4">
              Cards automatically adapt to dark mode with appropriate colors and contrast.
              All text, borders, and backgrounds adjust seamlessly.
            </p>
            <template #footer>
              <div class="dk:flex dk:justify-between dk:items-center">
                <span class="dk:text-emerald-400 dk:font-semibold">Available</span>
                <DuiButton size="sm" color="primary">Select</DuiButton>
              </div>
            </template>
          </DuiCard>
        </div>
      </div>
    \`
  })
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var _,ee,te;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiCard,
      DuiButton
    },
    setup() {
      const cards = [{
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop&q=80',
        title: 'Premium Plan',
        subtitle: 'Best for professionals',
        price: '$29/month'
      }, {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80',
        title: 'Business Plan',
        subtitle: 'Perfect for teams',
        price: '$59/month'
      }, {
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&q=80',
        title: 'Enterprise',
        subtitle: 'For large organizations',
        price: 'Custom'
      }];
      return {
        cards
      };
    },
    template: \`
      <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-2 dk:lg:grid-cols-3 dk:gap-6 dk:p-6">
        <DuiCard
          v-for="card in cards"
          :key="card.title"
          :image="card.image"
          :title="card.title"
          :subtitle="card.subtitle"
          size="m"
        >
          <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
          <template #footer>
            <div class="dk:flex dk:justify-between dk:items-center">
              <span class="dk:text-xl dk:font-bold dk:text-gray-900 dk:dark:text-gray-100">{{ card.price }}</span>
              <DuiButton size="sm" color="primary">Choose Plan</DuiButton>
            </div>
          </template>
        </DuiCard>
      </div>
    \`
  })
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,se;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DuiCard,
      DuiButton
    },
    setup() {
      const products = [{
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=200&fit=crop&q=80',
        title: 'Running Shoes',
        subtitle: 'Comfortable and durable',
        to: '/products/running-shoes',
        price: '$129.99'
      }, {
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=200&fit=crop&q=80',
        title: 'Sunglasses',
        subtitle: 'UV protection included',
        to: '/products/sunglasses',
        price: '$89.99'
      }, {
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=200&fit=crop&q=80',
        title: 'Smart Watch',
        subtitle: 'Track your fitness goals',
        to: '/products/smart-watch',
        price: '$299.99'
      }];
      return {
        products
      };
    },
    template: \`
      <div>
        <div class="dk:mb-6 dk:p-4 dk:bg-blue-50 dk:dark:bg-blue-900/20 dk:rounded-lg dk:border dk:border-blue-200 dk:dark:border-blue-800">
          <p class="dk:text-sm dk:text-blue-800 dk:dark:text-blue-200">
            💡 <strong>Tip:</strong> Click on the images or titles to navigate. The cards support Vue Router and Nuxt Router.
          </p>
        </div>
        <div class="dk:grid dk:grid-cols-1 dk:md:grid-cols-2 dk:lg:grid-cols-3 dk:gap-6">
          <DuiCard
            v-for="product in products"
            :key="product.title"
            :image="product.image"
            :title="product.title"
            :subtitle="product.subtitle"
            :to="product.to"
            size="m"
          >
            <p class="dk:text-gray-600 dk:dark:text-gray-400 dk:mb-4">
              Click the image or title to navigate to the product page. The entire card becomes interactive when a 'to' prop is provided.
            </p>
            <template #footer>
              <div class="dk:flex dk:justify-between dk:items-center">
                <span class="dk:text-lg dk:font-bold dk:text-gray-900 dk:dark:text-gray-100">{{ product.price }}</span>
                <DuiButton size="sm" color="primary" @click.stop>Add to Cart</DuiButton>
              </div>
            </template>
          </DuiCard>
        </div>
      </div>
    \`
  })
}`,...(se=(re=v.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Be=["Default","SmallSize","LargeSize","WithoutImage","MinimalCard","TitleOnly","DarkMode","CardGrid","ClickableCards"];export{h as CardGrid,v as ClickableCards,b as DarkMode,c as Default,p as LargeSize,g as MinimalCard,m as SmallSize,f as TitleOnly,k as WithoutImage,Be as __namedExportsOrder,ze as default};
