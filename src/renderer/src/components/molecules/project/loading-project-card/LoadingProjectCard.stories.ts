import type { Meta, StoryObj } from '@storybook/react';
import { LoadingProjectCard } from '@renderer/components/molecules/project/loading-project-card/LoadingProjectCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'OpendataBridge/Molecules/LoadingProjectCard',
  component: LoadingProjectCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'center',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
