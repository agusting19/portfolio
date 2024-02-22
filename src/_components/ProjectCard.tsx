import Image from "next/image"

interface ProjectCardProps {
  title: string
  techs: string[]
  imageUrl: string
  description: string
  inverted?: boolean
}

const ProjectCard = ({
  title,
  techs,
  imageUrl,
  description,
  inverted,
}: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col md:items-center ${
        inverted ? "md:flex-row-reverse" : "md:flex-row"
      } w-full text-slate-300 mx-auto gap-4`}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={1080}
        height={720}
        className="object-cover w-full aspect-video md:w-96 rounded-md"
      />
      <div className="flex flex-col gap-2 mb-2">
        <h3 className="title text-2xl">{title}</h3>
        <ul className="flex gap-4 list-none text-base font-medium text-blue-300">
          {techs.map((tech, index) => {
            return <li key={`${tech} ${index}`}>{tech}</li>
          })}
        </ul>
        <p className="leading-6">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
