import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-muted pt-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 text-white p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
                  <path d="M10 10a2 2 0 1 1 4 0" />
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="font-bold text-xl">FireSafe</span>
            </div>
            <p className="text-muted-foreground mb-4">
              India's leading provider of fire safety equipment and services. Protecting lives and property since 2005.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-red-600" />
                <span>+91 1234 567 890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-red-600" />
                <span>info@firesafe.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-red-600 mt-1" />
                <span>
                  123 Business Park, Andheri East
                  <br />
                  Mumbai, Maharashtra 400069
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  ABC Fire Extinguishers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  CO2 Fire Extinguishers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Foam Fire Extinguishers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Water Fire Extinguishers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Powder Fire Extinguishers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Automatic Systems
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  Fire Safety Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates on fire safety products, tips, and regulations.
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Your email address" />
              <Button className="w-full bg-red-600 hover:bg-red-700">Subscribe</Button>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FireSafe. All rights reserved. Developed by{" "}
              <span className="font-medium">Alberow</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-red-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-red-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

