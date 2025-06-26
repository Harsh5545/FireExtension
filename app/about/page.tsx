import Image from "next/image"
import { CheckCircle, Users, Building, Award, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
            <p className="text-xl text-white/90">Leading the way in fire safety solutions across India since 2005</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Our Story */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2005, our company has grown from a small local supplier to one of India's most trusted fire
              safety equipment providers. Our journey began with a simple mission: to provide high-quality fire safety
              solutions that protect lives and property.
            </p>
            <p className="text-muted-foreground mb-4">
              Over the years, we have expanded our product range and services to meet the diverse needs of our
              customers, from homeowners to large industrial complexes. Our commitment to quality and safety has
              remained unwavering throughout our growth.
            </p>
            <p className="text-muted-foreground">
              Today, we are proud to serve thousands of customers across India, providing them with the best fire safety
              equipment and services. Our team of experts is dedicated to ensuring that every customer receives
              personalized solutions that meet their specific requirements.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Our company history"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our products. Every fire extinguisher undergoes rigorous testing
                to ensure it meets the highest safety standards.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Our customers' safety is our top priority. We work closely with each client to understand their needs
                and provide tailored solutions.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously invest in research and development to improve our products and stay ahead of industry
                standards and technological advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to advancing fire safety in India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=200" alt="CEO" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Vikram Singh</h3>
            <p className="text-muted-foreground">Chief Executive Officer</p>
          </div>

          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=200" alt="CTO" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Priya Sharma</h3>
            <p className="text-muted-foreground">Chief Technical Officer</p>
          </div>

          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Operations Director"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Rahul Patel</h3>
            <p className="text-muted-foreground">Operations Director</p>
          </div>

          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=200" alt="Sales Director" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Anita Desai</h3>
            <p className="text-muted-foreground">Sales Director</p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <p className="text-xl">Customers Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50,000+</div>
              <p className="text-xl">Products Sold</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-xl">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We adhere to the highest industry standards and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
            <p className="text-muted-foreground">
              Certified for our quality management systems that consistently provide products meeting customer and
              regulatory requirements.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">BIS Certification</h3>
            <p className="text-muted-foreground">
              Our products comply with Bureau of Indian Standards specifications, ensuring they meet national safety
              requirements.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">CE Marking</h3>
            <p className="text-muted-foreground">
              Our products conform to European health, safety, and environmental protection standards.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Serving customers across India with strategically located offices and warehouses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold">Mumbai (HQ)</h3>
              </div>
              <p className="text-muted-foreground">
                123 Business Park, Andheri East
                <br />
                Mumbai, Maharashtra 400069
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold">Delhi</h3>
              </div>
              <p className="text-muted-foreground">
                456 Industrial Area, Okhla Phase II
                <br />
                New Delhi, Delhi 110020
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold">Bangalore</h3>
              </div>
              <p className="text-muted-foreground">
                789 Tech Park, Whitefield
                <br />
                Bangalore, Karnataka 560066
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold">Chennai</h3>
              </div>
              <p className="text-muted-foreground">
                321 Industrial Estate, Guindy
                <br />
                Chennai, Tamil Nadu 600032
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

