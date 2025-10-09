import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiNavbar from './DuiNavbar.vue';
import DuiButton from '../Forms/DuiButton.vue';
import '../../style.css';

// Mock data for navbar items
const mockItems = [
  {
    label: 'Home',
    to: '/',
    icon: 'mdi mdi-home'
  },
  {
    label: 'Products',
    to: '/products',
    icon: 'mdi mdi-package-variant',
    children: [
      {
        label: 'All Products',
        to: '/products/all',
        icon: 'mdi mdi-view-grid'
      },
      {
        label: 'Categories',
        to: '/products/categories',
        icon: 'mdi mdi-tag-multiple'
      },
      {
        label: 'New Arrivals',
        to: '/products/new',
        icon: 'mdi mdi-new-box'
      },
      {
        label: 'Sale',
        to: '/products/sale',
        icon: 'mdi mdi-sale'
      }
    ]
  },
  {
    label: 'Services',
    to: '/services',
    icon: 'mdi mdi-cog',
    children: [
      {
        label: 'Consulting',
        to: '/services/consulting',
        icon: 'mdi mdi-account-tie'
      },
      {
        label: 'Support',
        to: '/services/support',
        icon: 'mdi mdi-help-circle'
      },
      {
        label: 'Training',
        to: '/services/training',
        icon: 'mdi mdi-school'
      }
    ]
  },
  {
    label: 'About',
    to: '/about',
    icon: 'mdi mdi-information'
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'mdi mdi-phone'
  }
];

const simpleItems = [
  {
    label: 'Home',
    to: '/',
    icon: 'mdi mdi-home'
  },
  {
    label: 'About',
    to: '/about',
    icon: 'mdi mdi-information'
  },
  {
    label: 'Contact',
    to: '/contact',
    icon: 'mdi mdi-phone'
  }
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Widgets/Navbar',
  component: DuiNavbar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Size of the navbar'
    },
    items: {
      control: { type: 'object' },
      description: 'Array of navigation items'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A responsive navbar component with dropdown support, dark mode, mobile menu, and icon support. Supports Vue Router and Nuxt Router navigation.'
      }
    }
  }
} satisfies Meta<typeof DuiNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default navbar
export const Default: Story = {
  args: {
    items: mockItems,
    size: 'm'
  },
  render: (args) => ({
    components: { DuiNavbar, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Small size navbar
export const SmallSize: Story = {
  args: {
    items: simpleItems,
    size: 's'
  },
  render: (args) => ({
    components: { DuiNavbar, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Large size navbar
export const LargeSize: Story = {
  args: {
    items: mockItems,
    size: 'l'
  },
  render: (args) => ({
    components: { DuiNavbar, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Navbar without dropdowns
export const SimpleNavbar: Story = {
  args: {
    items: simpleItems,
    size: 'm'
  },
  render: (args) => ({
    components: { DuiNavbar, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Dark mode demonstration
export const DarkMode: Story = {
  args: {
    items: mockItems,
    size: 'm'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  },
  render: (args) => ({
    components: { DuiNavbar, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Mobile responsive demonstration
export const MobileView: Story = {
  args: {
    items: mockItems,
    size: 'm'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: (args) => ({
    components: { DuiNavbar, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Without icons
export const WithoutIcons: Story = {
  args: {
    items: [
      {
        label: 'Home',
        to: '/'
      },
      {
        label: 'Products',
        to: '/products',
        children: [
          {
            label: 'All Products',
            to: '/products/all'
          },
          {
            label: 'Categories',
            to: '/products/categories'
          },
          {
            label: 'New Arrivals',
            to: '/products/new'
          }
        ]
      },
      {
        label: 'About',
        to: '/about'
      },
      {
        label: 'Contact',
        to: '/contact'
      }
    ],
    size: 'm'
  },
  render: (args) => ({
    components: { DuiNavbar, DuiButton },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};

// Minimal navbar without brand and actions
export const MinimalNavbar: Story = {
  args: {
    items: mockItems,
    size: 'm'
  },
  render: (args) => ({
    components: { DuiNavbar },
    setup() {
      return { args };
    },
    template: `
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
    `
  })
};