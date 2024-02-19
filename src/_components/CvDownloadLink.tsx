import Link from "next/link"

const CvDownloadLink = () => {
  return (
    <Link
      href="/Gomez-Agustin.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold py-4 px-8 bg-transparent border-2 border-purple-600 transition-all duration-250 text-white cursor-pointer hover:shadow-[inset_0_0_0_2em_#a855f7]"
    >
      <button>Download CV</button>
    </Link>
  )
}

export default CvDownloadLink
