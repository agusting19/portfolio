"use client"

import Link from "next/link"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { GITHUB_URL, LINKEDIN_URL } from "../constants"

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl px-4 mx-auto sticky top-0 bg-slate-800 text-white opacity-95 z-50">
      <img
        src="/white-ag-logo.webp"
        alt="Logo"
        onClick={() => scrollToTop()}
        className="h-8 w-auto object-contain cursor-pointer"
      />
      <nav className="flex gap-5 list-none">
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github profile"
          className="custom-link group relative block w-12 h-12 text-center align-middle bg-gray-800 rounded-full text-3xl text-gray-500 transition duration-500 ease-in-out"
        >
          <FiGithub className="cursor-pointer text-white" size={26} />
        </Link>
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="custom-link group relative block w-12 h-12 text-center align-middle bg-gray-800 rounded-full text-3xl text-gray-500 transition duration-500 ease-in-out"
        >
          <FiLinkedin className="cursor-pointer text-white" size={26} />
        </Link>
      </nav>
    </header>
  )
}

export default Header
