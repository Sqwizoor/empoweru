import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EmpowerU</h3>
            <p className="mb-4">Fostering sustainable growth and development within communities.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="#programs" className="hover:text-accent transition-colors">Programs</Link></li>
              <li><Link href="#achievements" className="hover:text-accent transition-colors">Achievements</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@empoweru.co.za</p>
            <p>Phone: 0814309791</p>
            <p>Address: Lindelani, EThekwini, South Africa</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 EmpowerU Community Development Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

