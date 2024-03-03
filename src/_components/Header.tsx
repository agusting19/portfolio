"use client"

import Image from "next/image"
import Link from "next/link"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { Locale } from "~/i18n/i18n-config"
import { GITHUB_URL, LINKEDIN_URL } from "../constants"

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}

const socialLinks = [
  { href: GITHUB_URL, label: "Github profile", Icon: FiGithub },
  { href: LINKEDIN_URL, label: "LinkedIn profile", Icon: FiLinkedin },
]

interface HeaderProps {
  lang: Locale
}

const Header = ({ lang }: HeaderProps) => {
  const switchToLocale = lang === "en" ? "/es" : "/en"

  return (
    <header className="flex items-center justify-between max-w-[1100px] p-4 mx-auto sticky top-0 bg-background text-white opacity-95 z-50">
      <Image
        src="https://res.cloudinary.com/dy1cn8nnv/image/upload/v1709491409/white-ag-logo_gvcnhq.webp"
        alt="Logo"
        width={800}
        height={600}
        onClick={scrollToTop}
        className="h-8 w-auto object-contain cursor-pointer"
      />
      <nav className="flex gap-5 list-none">
        <Link
          href={switchToLocale}
          className="custom-link flex items-center justify-center group relative w-12 h-12 text-center font-medium align-middle bg-background rounded-full text-xl transition duration-500 ease-in-out"
        >
          {lang === "es" ? "En" : "Es"}
        </Link>
        {socialLinks.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="custom-link flex items-center justify-center group relative w-12 h-12 text-center align-middle bg-background rounded-full text-3xl transition duration-500 ease-in-out"
          >
            <Icon className="cursor-pointer text-white" size={26} />
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
