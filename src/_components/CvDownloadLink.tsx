import Link from "next/link"
import { Locale } from "~/i18n/i18n-config"

interface CvDownloadLinkProps {
  buttonText: string
  lang: Locale
}

const CvDownloadLink = ({ buttonText, lang }: CvDownloadLinkProps) => {
  const CV_PATH =
    lang === "es" ? "/CV-Agustin-Gomez.pdf" : "/CV-Gomez-Agustin.pdf"

  return (
    <Link
      href={CV_PATH}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold py-4 px-8 block w-40 bg-transparent border-2 border-purple-600 transition-all duration-250 text-white text-sm cursor-pointer hover:shadow-[inset_0_0_0_2em_#a855f7]"
    >
      {buttonText}
    </Link>
  )
}

export default CvDownloadLink
