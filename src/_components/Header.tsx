"use client"

import Image from "next/image"
import Link from "next/link"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import LOGO_IMG from "../../public/white-ag-logo.webp"
import { GITHUB_URL, LINKEDIN_URL } from "../constants"

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-[1100px] p-4 mx-auto sticky top-0 bg-background text-white opacity-95 z-50">
      <Image
        src={LOGO_IMG.src}
        alt="Logo"
        width={800}
        height={600}
        onClick={() => scrollToTop()}
        className="h-8 w-auto object-contain cursor-pointer"
      />
      <nav className="flex gap-5 list-none">
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github profile"
          className="custom-link flex items-center justify-center group relative  w-12 h-12 text-center align-middle bg-background rounded-full text-3xl text-gray-500 transition duration-500 ease-in-out"
        >
          <FiGithub className="cursor-pointer text-white" size={26} />
        </Link>
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="custom-link group relative flex items-center justify-center w-12 h-12 text-center align-middle bg-background rounded-full text-3xl text-gray-500 transition duration-500 ease-in-out"
        >
          <FiLinkedin className="cursor-pointer text-white" size={26} />
        </Link>
      </nav>
    </header>
  )
}

export default Header
