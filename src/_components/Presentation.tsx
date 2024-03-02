import Image from "next/image"
import CvDownloadLink from "./CvDownloadLink"

const Presentation = () => {
  return (
    <section className="flex flex-col gap-20 w-11/12 max-w-[1100px] my-16 mx-auto md:flex-row md:justify-center md:items-center md:gap-2 md:my-24 md:p-4">
      <div className="md:w-3/4 space-y-4">
        <h1 className="text-5xl font-semibold leading-none mb-4 custom-gradient text-transparent tracking-tighter">
          AGUSTIN GOMEZ
        </h1>
        <p className="text-3xl text-white md:max-w-[40ch] leading-none">
          Full Stack Developer passionate about technology and programming.
        </p>
        <p className="my-4 text-lightGray max-w-sm leading-none">
          Always learning new technologies and looking for new ways to improve
          projects.
        </p>
        <CvDownloadLink />
      </div>
      <Image
        src="/me.webp"
        alt="Foto de frente"
        width={1080}
        height={720}
        className="w-full h-80 mx-auto p-4 bg-[#334155] custom-border-radius md:w-[320px]"
      />
    </section>
  )
}

export default Presentation
