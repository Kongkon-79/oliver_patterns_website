'use client'

import { Heart, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import LogoutDialog from './logoutDialog'

const sidebarItems = [
  {
    icon: <Heart size={20} />,
    text: 'WishList',
    href: '/dashboard/wishlist',
  },
  {
    icon: <Settings size={20} />,
    text: 'Settings',
    href: '/dashboard/settings',
  },
]

function SidebarItem({
  icon,
  text,
  href,
  active,
}: {
  icon: React.ReactNode
  text: string
  href: string
  active?: boolean
}) {
  return (
    <Link href={href}>
      <div
        className={`
          flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition-all mb-4
          ${
            active
              ? 'bg-[#D6E6F7] text-[#0C2661] shadow-sm'
              : 'text-[#4A5568] hover:bg-[#E8F1FC] hover:text-[#0C2661]'
          }
        `}
      >
        <span>{icon}</span>
        <span className="text-base font-medium text-left">{text}</span>
      </div>
    </Link>
  )
}

export default function AdminSidebar() {
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (pathname === href) return true

    const pathSegments = pathname.split('/').filter(Boolean)
    const hrefSegments = href.split('/').filter(Boolean)

    return (
      pathSegments[0] === hrefSegments[0] && pathSegments[1] === hrefSegments[1]
    )
  }

  return (
    <aside className="w-[300px] bg-sky-100/70 border-r border-gray-200 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="flex justify-center pt-6 mb-4">
        <Link href="/">
          <Image
            src="/auth-logo2.png"
            alt="admin logo"
            width={230}
            height={100}
            sizes="140px"
            style={{
              width: '141px',
              height: '60px',
              objectFit: 'contain',
            }}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="px-4 pt-4">
        <div className="space-y-3">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.text}
              {...item}
              active={isActiveLink(item.href)}
            />
          ))}
        </div>
      </nav>

      {/* Logout button bottom */}
      <div className="mt-auto pb-4 px-4">
        <LogoutDialog />
      </div>
    </aside>
  )
}
