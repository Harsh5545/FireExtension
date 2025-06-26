import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Award, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-950/90 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Fire safety background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="text-red-500">Fire Safety</span> Solutions for Every Need
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Protecting lives and property with high-quality fire extinguishers and safety equipment. Trust India's
              leading fire safety provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-20 z-10" />
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Fire Extinguishers?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide the highest quality fire safety equipment with certified products that meet all safety standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center transition-all hover:shadow-md">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Maximum Protection</h3>
            <p className="text-muted-foreground">
              Our fire extinguishers provide reliable protection against various types of fires, ensuring your safety.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center transition-all hover:shadow-md">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
            <p className="text-muted-foreground">
              All our products are certified and comply with Indian and international safety standards.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center transition-all hover:shadow-md">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <ThumbsUp className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-muted-foreground">
              Our extinguishers are designed for ease of use, allowing quick response during emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Fire Extinguishers</h2>
              <p className="text-muted-foreground max-w-2xl">
                Browse our selection of high-quality fire extinguishers for various applications.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="/products">
                <Button variant="outline" className="group">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Fire Safety?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contact our team of experts today to find the perfect fire safety solution for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
              Contact Us Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-red-600">RK</span>
              </div>
              <div>
                <h4 className="font-semibold">Rajesh Kumar</h4>
                <p className="text-sm text-muted-foreground">Hotel Owner, Mumbai</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "The fire extinguishers we purchased are of excellent quality. The team provided great guidance on which
              types would be best for our hotel. Highly recommended!"
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-red-600">SP</span>
              </div>
              <div>
                <h4 className="font-semibold">Sunita Patel</h4>
                <p className="text-sm text-muted-foreground">Office Manager, Delhi</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "We equipped our entire office building with their fire safety products. The installation service was
              professional and the products are top-notch."
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-red-600">AM</span>
              </div>
              <div>
                <h4 className="font-semibold">Amit Mehta</h4>
                <p className="text-sm text-muted-foreground">Factory Owner, Pune</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              "Their industrial fire extinguishers have been a great investment for our factory. The quality is
              excellent and the after-sales service is outstanding."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

