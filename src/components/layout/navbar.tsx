'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react'

export default function Navbar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const profileImage = session?.user?.image || '/demoUser.png'

  console.log('Session Data:', session)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Find Grants', href: '/find-grants' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/'
    const pathnameSegments = pathname.split('/').filter(Boolean)
    const hrefSegments = href.split('/').filter(Boolean)
    return pathnameSegments[0] === hrefSegments[0]
  }

  return (
    <nav className="bg-white py-2 sticky top-0 w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/navlogo.png"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#5A8DEE]"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[#5A8DEE] font-medium transition-all duration-200 hover:opacity-80 ${
                  isActiveLink(link.href) ? 'after:w-full' : 'after:w-0'
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#5A8DEE] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Desktop Buttons / Profile */}
          <div className="hidden md:flex items-center gap-4">
            {!session?.user ? (
              <>
                <Link href="/signin">
                  <Button
                    variant="bg_border"
                    className="border border-[#0C2661] h-[48px] !bg-white text-[#0C2661] px-[55px] hover:scale-105 transition"
                  >
                    Log in
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button className="border border-[#0C2661] px-8 h-[48px] !bg-grdient text-white hover:scale-105 transition">
                    Sign Up Free
                  </Button>
                </Link>
              </>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => router.push('/dashboard')}
              >
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={50}
                  height={50}
                  quality={100}
                  className="rounded-full border border-gray-300 hover:scale-105 transition"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-md border-t border-[#5A8DEE20] px-4 pb-4 space-y-4 animate-fadeIn">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-[#5A8DEE] font-medium py-2 border-b border-[#5A8DEE20] ${
                isActiveLink(link.href) ? 'underline underline-offset-4' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Buttons OR Profile */}
          {!session?.user ? (
            <div className="pt-2 flex flex-col space-y-3">
              <Link href="/signin">
                <Button
                  variant="bg_border"
                  className="w-full border border-[#0C2661] py-3 px-4 !bg-white text-[#0C2661]"
                >
                  Log in
                </Button>
              </Link>

              <Link href="/signup">
                <Button className="w-full py-3 px-4 bg-gradient !text-white font-semibold rounded-lg shadow-md">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          ) : (
            <div className="pt-3">
              <div
                className="flex items-center gap-3 p-2 bg-white rounded-lg shadow cursor-pointer"
                onClick={() => {
                  setMenuOpen(false)
                  router.push('/dashboard')
                }}
              >
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={45}
                  height={45}
                  className="rounded-full border"
                />
                <span className="font-medium text-[#0C2661]">
                  Go to Dashboard
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
