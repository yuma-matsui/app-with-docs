'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Links() {
  const pathname = usePathname()

  return (
    <nav className='mb-8'>
      <ul className='flex gap-2'>
        <li>
          <Link className={`link ${pathname === '/' ? 'text-blue-700' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/dashboard' ? 'text-blue-700' : ''}`}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/dashboard/settings' ? 'text-blue-700' : ''}`}
            href="/dashboard/settings"
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  )
}
