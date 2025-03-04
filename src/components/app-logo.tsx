'use client'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const AppLogo = () => {
  const { theme } = useTheme()
  const logoSrc = theme === 'dark' ? '/logo_w.png' : '/logo_b.png'
  return (
    <Link href={'/'} className="flex flex-row items-center gap-1">
      <img src={logoSrc} alt="logo" className="w-[120px]" />
    </Link>
  )
}

export default AppLogo
