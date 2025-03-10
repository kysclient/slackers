'use client'
import { useTheme } from 'next-themes'
import AppLogo from './app-logo'
import { Menu, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
const Header = () => {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <header className="w-full fixed top-0 left-0 border-b border-border h-[80px] z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-full">
        <div className="w-full flex justify-between items-center px-[20px]">
          <div className="flex flex-row items-center">
            <div className="mr-2 sm:mr-10 flex flex-row gap-2 items-center">
              <div className="flex sm:hidden">
                <Sheet>
                  <SheetTrigger>
                    <Menu className="text-muted-foreground" />
                  </SheetTrigger>
                  <SheetContent side={'bottom'} className="min-h-[400px] rounded-t-lg">
                    <SheetTitle className="mb-8">
                      <div className="w-full flex justify-center items-center">
                        <div className="w-[70px] h-2 bg-secondary rounded-full"></div>
                      </div>
                    </SheetTitle>
                    <ul className="flex flex-col gap-4 text-md xl:gap-6">
                      {navLinks.map((nav, idx) => (
                        <li key={nav.href}>
                          <Link className={cn('transition-colors hover:text-foreground/80 text-muted-foreground', pathname === nav.href && 'text-foreground')} href={nav.href}>
                            {nav.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </SheetContent>
                </Sheet>
              </div>
              <AppLogo />
            </div>
            <nav className="hidden sm:flex">
              <ul className="flex flex-row items-center gap-4 text-sm xl:gap-6">
                {navLinks.map((nav, idx) => (
                  <li key={nav.href}>
                    <Link className={cn('transition-colors hover:text-foreground/80 text-muted-foreground', pathname === nav.href && 'text-foreground')} href={nav.href}>
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-row items-center gap-2">
            <button onClick={toggleTheme}>{theme === 'dark' ? <Sun /> : <Moon />}</button>
          </div>
        </div>
      </div>
    </header>
  )
}

const navLinks = [
  {
    title: 'Sementle',
    href: '/'
  },
  {
    title: '오늘의 운세',
    href: '/fortune'
  },
  {
    title: '메뉴추천',
    href: '/recommend-food'
  },

]
export default Header
