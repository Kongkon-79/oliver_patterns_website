'use client'

import { usePathname } from 'next/navigation'

export default function UserHeader() {
  const pathname = usePathname()

  // Map routes to title + description
  const getPageContent = () => {
    if (
      pathname === '/admin-dashboard' ||
      pathname === '/admin-dashboard/dashboard'
    )
      return [
        'Dashboard Overview',
        "Welcome back! Here's what’s happening with your app today.",
      ]
    if (pathname.includes('/admin-dashboard/grant-management'))
      return ['Grants Management', 'Manage all grants in the system']

    if (pathname.includes('/admin-dashboard/user-management'))
      return [
        'User Management',
        'Manage all users and their subscription details',
      ]

    if (pathname.includes('/admin-dashboard/calendar'))
      return [
        'Grant Calendar',
        'Keep track of your saved grants and important deadlines at a glance.',
      ]
    if (pathname.includes('/admin-dashboard/subscription/recent-transactions'))
      return [
        'Transactions Management',
        'Manage transactions and view transaction history.',
      ]

    if (pathname.includes('/admin-dashboard/subscription'))
      return [
        'Subscription Management',
        'Manage subscription plans and view transaction history.',
      ]

    if (pathname.includes('/admin-dashboard/subscription-management'))
      return [
        'Subscription Management',
        'Manage subscription plans and view transaction history',
      ]

    if (pathname.includes('/admin-dashboard/contact-management'))
      return ['Contact Management', 'Manage your contact messages ']

    if (pathname.includes('/admin-dashboard/settings'))
      return [
        'Settings',
        'Personalize your experience and adjust your settings to create a space that supports your clarity and focus.',
      ]

    return ['Dashboard', 'Manage your system efficiently.']
  }

  const [title, description] = getPageContent()

  return (
    <header className="bg-sky-100/60 border-b border-gray-200 px-8 py-[13px] flex flex-col space-y-2 justify-center">
      <h1 className="text-[22px] font-semibold text-[#0C2661]">{title}</h1>
      <p className="text-sm text-gray-600">{description}</p>
    </header>
  )
}
