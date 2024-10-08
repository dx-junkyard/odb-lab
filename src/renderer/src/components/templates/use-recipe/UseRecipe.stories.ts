import type { Meta, StoryObj } from '@storybook/react';
import { UseRecipe } from '@renderer/components/templates/use-recipe/UseRecipe';

const meta = {
  title: 'OpendataBridge/Templates/UseRecipe',
  component: UseRecipe,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UseRecipe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      id: 'test',
      title: 'test',
      description: 'test',
      tags: ['tag1', 'tag2', 'tag3'],
      thumbnails: ['/dummy.png', '/dummy.png'],
      recipes: [],
      resources: [],
      formattedFiles: [],
    },
  },
};
