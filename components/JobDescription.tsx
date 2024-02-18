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
        <h3>{jobTitle}</h3>
        <p className="text-xl">{company}</p>
        <p className="text-sm text-lightBlue mb-2">{period}</p>
        <ul className="custom-list-style ml-6">
          {techs.map((tech, index) => {
            return (
              <li key={index} className="leading-5">
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
