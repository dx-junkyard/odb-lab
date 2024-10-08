'use client';
import React from 'react';
import { Project } from '@renderer/types/project';
import { DevelopChatUI } from '@renderer/components/organizms/chat/DevelopChatUI';

interface DevelopRecipeProps {
  project: Project;
}

export const DevelopRecipe = ({ project }: DevelopRecipeProps) => {
  return (
    <article className="w-full flex flex-col justify-center items-center">
      <DevelopChatUI project={project} />
    </article>
  );
};
