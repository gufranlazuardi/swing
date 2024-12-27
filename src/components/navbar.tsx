import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="container flex items-center justify-between max-w-screen-xl mx-auto py-6 px-[1rem] md:px-[1rem] lg:px-[1rem] xl:px-[1rem]">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-yellow-400 rounded-full" />
        <span className="text-xl font-bold">Swing</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm">
          Home
        </Link>
        <Link href="/about" className="text-sm">
          About Us
        </Link>
        <Link href="/team" className="text-sm">
          Our Team
        </Link>
        <Link href="/pricing" className="text-sm">
          Pricing
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost">Login</Button>
        <Button className="bg-blue-100 text-black hover:bg-blue-200">
          Register
        </Button>
      </div>
    </nav>
  )
}

