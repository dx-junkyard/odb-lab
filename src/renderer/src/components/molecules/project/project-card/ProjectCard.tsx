import { Project } from '@renderer/types/project'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const thumbnails = project.thumbnails
    .map((thumbnail, index) => (
      <img key={index} src={thumbnail} alt={project.title} width={216} height={144} />
    ))
    .slice(0, 2)

  return (
    <a
      href={`/project/${project.id}`}
      className="grid border-gray-300 border-b w-full py-[30px] grid-cols-2 bg-white"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-sm font-bold">{project.title}</h1>
        <p className="text-xs">{project.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-3">{thumbnails}</div>
    </a>
  )
}
