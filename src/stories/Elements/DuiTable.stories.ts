import type { Meta, StoryObj } from '@storybook/vue3-vite';

import DuiTable from './DuiTable.vue';
import '../../style.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/Table',
  component: DuiTable,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    //👇 The argTypes for the component
    columns: {
      control: {
        type: 'object',
      },
      description: 'columns of the table',
      defaultValue: [
        { label: 'Name', name: 'name' },
        { label: 'Age', name: 'age' },
        { label: 'Country', name: 'country' }
      ],
    },
    rows: {
      control: {
        type: 'object',
      },
      description: 'Data of the table',
      defaultValue: [
        { name: 'John Doe', age: 30, country: 'USA' },
        { name: 'Jane Smith', age: 25, country: 'Canada' }
      ],
    },
    loading: {
      control: {
        type: 'boolean',
      },
      description: 'Shows an animated loading bar with gradient below the table header when active',
      defaultValue: false,
    },
    pagination: {
      control: {
        type: 'object',
      },
      description: 'Pagination configuration object with { page: number, perPage: number, total: number }. When provided, displays a footer with pagination controls',
      defaultValue: undefined,
    },
  },
} satisfies Meta<typeof DuiTable>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    columns: [{ label: 'Name', name: 'name' }, { label: 'Age', name: 'age' }, { label: 'Country', name: 'country' }],
    rows: [
    { name: 'John Doe', age: 30, country: 'USA' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Alice Johnson', age: 28, country: 'UK' },
    { name: 'Bob Brown', age: 35, country: 'Australia' },
    { name: 'Charlie Black', age: 22, country: 'Germany' },
    { name: 'Diana White', age: 27, country: 'France' },
    { name: 'Ethan Green', age: 31, country: 'Italy' },
    ],
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    columns: [{ label: 'Name', name: 'name' }, { label: 'Age', name: 'age' }, { label: 'Country', name: 'country' }],
    rows: [
    { name: 'John Doe', age: 30, country: 'USA' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Alice Johnson', age: 28, country: 'UK' },
    { name: 'Bob Brown', age: 35, country: 'Australia' },
    { name: 'Charlie Black', age: 22, country: 'Germany' },
    { name: 'Diana White', age: 27, country: 'France' },
    { name: 'Ethan Green', age: 31, country: 'Italy' },
    ],
    loading: true,
  },
};

export const WithPagination: Story = {
  args: {
    columns: [{ label: 'Name', name: 'name' }, { label: 'Age', name: 'age' }, { label: 'Country', name: 'country' }],
    rows: [
    { name: 'John Doe', age: 30, country: 'USA' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Alice Johnson', age: 28, country: 'UK' },
    { name: 'Bob Brown', age: 35, country: 'Australia' },
    { name: 'Charlie Black', age: 22, country: 'Germany' },
    { name: 'Diana White', age: 27, country: 'France' },
    { name: 'Ethan Green', age: 31, country: 'Italy' },
    ],
    pagination: {
      page: 1,
      perPage: 10,
      total: 150,
    },
  },
};

export const LoadingWithPagination: Story = {
  args: {
    columns: [{ label: 'Name', name: 'name' }, { label: 'Age', name: 'age' }, { label: 'Country', name: 'country' }],
    rows: [
    { name: 'John Doe', age: 30, country: 'USA' },
    { name: 'Jane Smith', age: 25, country: 'Canada' },
    { name: 'Alice Johnson', age: 28, country: 'UK' },
    { name: 'Bob Brown', age: 35, country: 'Australia' },
    { name: 'Charlie Black', age: 22, country: 'Germany' },
    { name: 'Diana White', age: 27, country: 'France' },
    { name: 'Ethan Green', age: 31, country: 'Italy' },
    ],
    loading: true,
    pagination: {
      page: 1,
      perPage: 10,
      total: 150,
    },
  },
};