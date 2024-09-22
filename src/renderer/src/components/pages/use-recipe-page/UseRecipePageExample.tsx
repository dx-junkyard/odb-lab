import React, { FC } from 'react';
import { Project } from '@renderer/types/project';
import { Header } from '@renderer/components/organizms/header/Header';
import { Footer } from '@renderer/components/organizms/footer/Footer';
import { UseRecipe } from '@renderer/components/templates/use-recipe/UseRecipe';

// dummyのプロジェクト
const project: Project = {
  id: 'dummy1',
  title: 'dummy1',
  description: 'dummy1',
  tags: ['tag1', 'tag2', 'tag3'],
  thumbnails: ['/dummy.png', '/dummy.png'],
  resources: [],
  recipes: [],
  formattedFiles: [],
};

export const UseRecipePageExample: FC = () => {
  return (
    <>
      <Header user={undefined} />
      <div className="h-[80px]" />
      <UseRecipe project={project} />
      <Footer />
    </>
  );
};
