'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { BookOpen, Settings, LayoutDashboard, LogOut } from 'lucide-react'

export function DashboardNav({ role = 'learner' }: { role?: 'learner' | 'mentor' | 'admin' }) {
  const pathname = usePathname()

  const getNavItems = () => {
    switch (role) {
      case 'mentor':
        return [
          { href: '/mentor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { href: '/mentor/course/1', label: 'My Courses', icon: BookOpen },
          { href: '/mentor/settings', label: 'Settings', icon: Settings },
        ]
      case 'admin':
        return [
          { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { href: '/admin/users', label: 'Users', icon: BookOpen },
          { href: '/admin/settings', label: 'Settings', icon: Settings },
        ]
      case 'learner':
      default:
        return [
          { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { href: '/mentorship/1', label: 'My Mentorships', icon: BookOpen },
          { href: '/dashboard/profile', label: 'Profile', icon: Settings },
        ]
    }
  }

  const navItems = getNavItems()

  return (
    <nav className="border-b border-border bg-background sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/logout">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
