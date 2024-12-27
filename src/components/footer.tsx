import Link from 'next/link'
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className='w-full border-t border-gray-800 py-12 mt-20'>
    <div className="max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Assistix</h3>
          <p className="text-sm text-gray-400">© Copyright 2024</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">COMPANY</h4>
          <div className="space-y-2">
            <Link href="/about" className="block text-sm text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/products" className="block text-sm text-gray-400 hover:text-white">
              Products
            </Link>
            <Link href="/features" className="block text-sm text-gray-400 hover:text-white">
              Features
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">INFO</h4>
          <div className="space-y-2">
            <Link href="/blog" className="block text-sm text-gray-400 hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="block text-sm text-gray-400 hover:text-white">
              Contact Us
            </Link>
            <Link href="/faq" className="block text-sm text-gray-400 hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-4">
            Curious about new developments and updates? Sign up for our newsletter!
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </footer>
  )
}

