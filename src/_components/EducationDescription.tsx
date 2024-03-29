import StudentHatIcon from "./Icons/StudentHatIcon"

interface EducationDescriptionProps {
  title: string
  institution: string
  period: string
}

const EducationDescription = ({
  title,
  institution,
  period,
}: EducationDescriptionProps) => {
  return (
    <div className="flex items-start gap-4">
      <StudentHatIcon size={72} className="mt-1" />
      <div className="text-xl leading-7">
        <h3 className="font-bold tracking-tighter">{title}</h3>
        <p className="text-lightText font-light">{institution}</p>
        <p className="text-lightText font-light">{period}</p>
      </div>
    </div>
  )
}

export default EducationDescription
