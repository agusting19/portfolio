import EducationDescription from "./EducationDescription"
import JobDescription from "./JobDescription"

const Experience = () => {
  const aikoTechs = ["TypeScript", "Node.js", "Express.js", "MongoDB", "MySQL"]
  const freeTechs = [
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "Sass",
  ]

  return (
    <section className="flex flex-col justify-between gap-16 py-16 px-8 bg-background max-w-[1100px] my-24 mx-auto text-lightGray md:flex-row md:justify-between md:py-20 md:px-16">
      <article className="md:w-2/5">
        <h2 className="text-4xl font-bold mb-8 tracking-tighter md:text-5xl">
          Experience
        </h2>
        <JobDescription
          jobTitle={"Backend Developer"}
          company={"AikoDev"}
          period={"May 2023 - Present"}
          techs={aikoTechs}
        />
        <JobDescription
          jobTitle={"Frontend Developer"}
          company={"Freelance"}
          period={"Aug 2022 - May 2023"}
          techs={freeTechs}
        />
      </article>
      <article className="flex flex-col gap-8 md:w-2/5">
        <div>
          <h2 className="text-4xl font-bold mb-8 tracking-tighter md:text-5xl">
            Education
          </h2>
          <EducationDescription
            title={"Electronic Engineering"}
            institution={"Universidad Nacional de Rosario"}
            period={"Mar 2018 - Present"}
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-8 tracking-tighter md:text-5xl">
            Certifications
          </h2>
          <EducationDescription
            title={"Become a Software Developer"}
            institution={"Radium Rocket"}
            period={"Mar 2022 - Jul 2022"}
          />
        </div>
      </article>
    </section>
  )
}

export default Experience
