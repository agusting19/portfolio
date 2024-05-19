import { Experience as ExperienceLang } from "~/types/i18n"
import EducationDescription from "./EducationDescription"
import JobDescription from "./JobDescription"

interface JobExperience {
  translations: ExperienceLang
}

const Experience = ({ translations }: JobExperience) => {
  const jobsList = translations.jobExperiences
  const educationList = translations.educationDetails
  const certificationsList = translations.certificationsDetails

  return (
    <section className="flex flex-col justify-between gap-16 py-16 px-8 bg-backgroundSecondary max-w-[1100px] my-24 mx-auto text-lightGray md:flex-row md:justify-between md:py-20 md:px-16">
      <article className="md:w-2/5">
        <h2 className="text-4xl font-bold mb-8 tracking-tighter md:text-5xl">
          {translations.experience}
        </h2>
        <div className="flex flex-col gap-4">
          {jobsList.map((job) => (
            <JobDescription
              key={job.company}
              jobTitle={job.jobTitle}
              company={job.company}
              period={job.period}
              techs={job.techs}
            />
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-8 md:w-2/5">
        <div>
          <h2 className="text-4xl font-bold mb-8 tracking-tighter md:text-5xl">
            {translations.education}
          </h2>
          {educationList.map((education) => (
            <EducationDescription
              key={education.title}
              title={education.title}
              institution={education.institution}
              period={education.period}
            />
          ))}
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-8 tracking-tighter md:text-5xl">
            {translations.certifications}
          </h2>
          <div className="flex flex-col gap-4">
            {certificationsList.map((certification) => (
              <EducationDescription
                key={certification.title}
                title={certification.title}
                institution={certification.institution}
                period={certification.period}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Experience
