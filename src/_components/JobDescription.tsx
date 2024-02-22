interface JobDescriptionProps {
  jobTitle: string
  company: string
  period: string
  techs: string[]
}

const JobDescription = ({
  jobTitle,
  company,
  period,
  techs,
}: JobDescriptionProps) => {
  return (
    <div className="flex">
      <div className="spinner relative w-8 h-8 mr-4"></div>
      <div>
        <h3 className="text-xl font-bold">{jobTitle}</h3>
        <p className="text-lg leading-7 text-lightText">{company}</p>
        <p className="text-sm text-lightText mb-2">{period}</p>
        <ul className="custom-list-style ml-6">
          {techs.map((tech, index) => {
            return (
              <li key={`${tech} ${index}`} className="leading-5">
                {tech}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default JobDescription
