import Experience from "~/_components/Experience"
import Presentation from "~/_components/Presentation"
import ProjectsList from "~/_components/ProjectsList"
import { getDictionary } from "~/i18n/getDictionary"
import { Locale } from "~/i18n/i18n-config"

interface HomeProps {
  params: {
    lang: Locale
  }
}

const Home = async ({ params: { lang } }: HomeProps) => {
  const { component } = await getDictionary(lang)

  return (
    <>
      <Presentation translations={component.presentation} />
      <Experience translations={component.experience} />
      <ProjectsList tranlations={component.projects} />
    </>
  )
}

export default Home
