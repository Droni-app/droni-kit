import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiCard from './DuiCard.vue';
import DuiButton from '../Forms/DuiButton.vue';
import '../../style.css';

// Mock data
const sampleImage = 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop&q=80';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/Card',
  component: DuiCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Size of the card'
    },
    image: {
      control: { type: 'text' },
      description: 'Image URL for the card header'
    },
    title: {
      control: { type: 'text' },
      description: 'Card title (also used as image alt text)'
    },
    subtitle: {
      control: { type: 'text' },
      description: 'Card subtitle'
    },
    to: {
      control: { type: 'text' },
      description: 'Navigation target (makes image and title clickable)'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A flexible card component with support for images, titles, content, and footer. Features dark mode support and responsive sizing.'
      }
    }
  }
} satisfies Meta<typeof DuiCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default card with all features
export const Default: Story = {
  args: {
    image: sampleImage,
    title: 'Amazing Product',
    subtitle: 'The perfect solution for your needs',
    size: 'm'
  },
  render: (args) => ({
    components: { DuiCard, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Small size card
export const SmallSize: Story = {
  args: {
    image: sampleImage,
    title: 'Small Card',
    subtitle: 'Compact version',
    size: 's'
  },
  render: (args) => ({
    components: { DuiCard, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Large size card
export const LargeSize: Story = {
  args: {
    image: sampleImage,
    title: 'Large Featured Card',
    subtitle: 'Extended version with more space',
    size: 'l'
  },
  render: (args) => ({
    components: { DuiCard, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Card without image
export const WithoutImage: Story = {
  args: {
    title: 'Text-Only Card',
    subtitle: 'Clean and simple design',
    size: 'm'
  },
  render: (args) => ({
    components: { DuiCard, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Minimal card (only content)
export const MinimalCard: Story = {
  args: {
    size: 'm'
  },
  render: (args) => ({
    components: { DuiCard },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Card with only title
export const TitleOnly: Story = {
  args: {
    title: 'Simple Title Card',
    size: 'm'
  },
  render: (args) => ({
    components: { DuiCard },
    setup() {
      return { args };
    },
    template: `
      <div class="dk:max-w-sm dk:mx-auto">
        <DuiCard v-bind="args">
          <p class="dk:text-gray-600 dk:dark:text-gray-400">
            This card has only a title and content. Perfect for simple information cards
            or when you want to keep things minimal but structured.
          </p>
        </DuiCard>
      </div>
    `
  })
};

// Dark mode demonstration
export const DarkMode: Story = {
  args: {
    image: sampleImage,
    title: 'Dark Mode Card',
    subtitle: 'Beautifully styled for dark themes',
    size: 'm'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: (args) => ({
    components: { DuiCard, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Grid layout with multiple cards
export const CardGrid: Story = {
  render: () => ({
    components: { DuiCard, DuiButton },
    setup() {
      const cards = [
        {
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop&q=80',
          title: 'Premium Plan',
          subtitle: 'Best for professionals',
          price: '$29/month'
        },
        {
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&q=80',
          title: 'Business Plan',
          subtitle: 'Perfect for teams',
          price: '$59/month'
        },
        {
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&q=80',
          title: 'Enterprise',
          subtitle: 'For large organizations',
          price: 'Custom'
        }
      ];
      return { cards };
    },
    template: `
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
    `
  })
};

// Clickable cards with navigation
export const ClickableCards: Story = {
  render: () => ({
    components: { DuiCard, DuiButton },
    setup() {
      const products = [
        {
          image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=200&fit=crop&q=80',
          title: 'Running Shoes',
          subtitle: 'Comfortable and durable',
          to: '/products/running-shoes',
          price: '$129.99'
        },
        {
          image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=200&fit=crop&q=80',
          title: 'Sunglasses',
          subtitle: 'UV protection included',
          to: '/products/sunglasses',
          price: '$89.99'
        },
        {
          image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=200&fit=crop&q=80',
          title: 'Smart Watch',
          subtitle: 'Track your fitness goals',
          to: '/products/smart-watch',
          price: '$299.99'
        }
      ];
      return { products };
    },
    template: `
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
    `
  })
};