'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/lrnable-logo-white.jpg"
              alt="LRNABLE Logo"
              width={200}
              height={200}
              className="h-12 w-auto object-contain py-1"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem asChild>
                  <Link href="/courses" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Browse Courses
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem asChild>
                  <Link href="/become-a-mentor" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Become a Mentor
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem asChild>
                  <Link href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Blog
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem asChild>
                  <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem asChild>
                  <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu - Only render on client to avoid Radix ID hydration mismatch */}
            {mounted ? (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" suppressHydrationWarning>
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="mt-8 flex flex-col space-y-4">
                    <Link
                      href="/courses"
                      className="text-foreground hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Browse Courses
                    </Link>
                    <Link
                      href="/become-a-mentor"
                      className="text-foreground hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Become a Mentor
                    </Link>
                    <Link
                      href="/blog"
                      className="text-foreground hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/about"
                      className="text-foreground hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="text-foreground hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                    <div className="border-t border-border pt-4 space-y-2">
                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button className="w-full" asChild>
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
