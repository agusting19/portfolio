interface ProjectCardProps {
  title: string
  techs: string[]
  imageUrl: string
  pageUrl: string
  repoUrl: string
  description: string
}

const ProjectCard = ({
  title,
  techs,
  imageUrl,
  pageUrl,
  repoUrl,
  description,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center w-full text-slate-300 mx-auto gap-4">
      <img
        src={imageUrl}
        alt={title}
        className="object-contain w-full aspect-video"
      />
      <div className="flex flex-col gap-2 mb-2">
        <h3 className="title text-2xl">{title}</h3>
        <ul className="flex gap-4 list-none text-base font-medium text-blue-300">
          {techs.map((tech, index) => {
            return <li key={index}>{tech}</li>
          })}
        </ul>
        <p className="leading-6">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
