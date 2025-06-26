import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Settings, FileText, Users, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-white/90">Comprehensive fire safety solutions for homes and businesses</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Overview */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Complete Fire Safety Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of fire safety services to protect your property and ensure compliance with
            safety regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fire Extinguisher Supply</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              We provide a wide range of fire extinguishers suitable for different types of fires and environments, from
              homes to industrial facilities.
            </p>
            <Link href="/products">
              <Button variant="outline" className="w-full group">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Settings className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Installation Services</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Our trained technicians ensure proper installation of all fire safety equipment, following industry best
              practices and safety standards.
            </p>
            <Button variant="outline" className="w-full group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Maintenance & Servicing</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Regular maintenance and servicing of fire extinguishers and safety equipment to ensure they function
              properly when needed.
            </p>
            <Button variant="outline" className="w-full group">
              Service Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fire Safety Audits</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Comprehensive assessment of your premises to identify potential fire hazards and recommend appropriate
              safety measures.
            </p>
            <Button variant="outline" className="w-full group">
              Request Audit
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Training Programs</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Fire safety training for employees, including proper use of extinguishers, evacuation procedures, and
              emergency response.
            </p>
            <Button variant="outline" className="w-full group">
              Training Options
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col">
            <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fire Safety Consultancy</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Expert advice on fire safety regulations, compliance requirements, and best practices for your specific
              industry.
            </p>
            <Button variant="outline" className="w-full group">
              Consult Experts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure you receive the best fire safety solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-muted-foreground text-sm">
                We assess your premises and specific requirements to understand your fire safety needs.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Recommendation</h3>
              <p className="text-muted-foreground text-sm">
                We provide tailored recommendations for fire safety equipment and services.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground text-sm">
                We supply and install the recommended fire safety equipment at your premises.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground text-sm">
                We provide regular maintenance, training, and support to ensure continued safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Service Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the package that best suits your fire safety needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold">Basic Package</h3>
              <div className="mt-4 text-3xl font-bold">₹15,000</div>
              <p className="text-sm text-muted-foreground">One-time setup</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>5 ABC Type Fire Extinguishers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Basic Installation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Annual Maintenance (1 year)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Basic Staff Training</span>
              </li>
            </ul>

            <Button className="w-full">Get Started</Button>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border-2 border-red-600 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-xl">
              Popular
            </div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold">Business Package</h3>
              <div className="mt-4 text-3xl font-bold">₹45,000</div>
              <p className="text-sm text-muted-foreground">One-time setup</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>15 Fire Extinguishers (Mixed Types)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Professional Installation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Biannual Maintenance (2 years)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Comprehensive Staff Training</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Fire Safety Audit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Emergency Response Plan</span>
              </li>
            </ul>

            <Button className="w-full bg-red-600 hover:bg-red-700">Get Started</Button>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-sm border border-border flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold">Enterprise Package</h3>
              <div className="mt-4 text-3xl font-bold">Custom</div>
              <p className="text-sm text-muted-foreground">Tailored solution</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Custom Fire Safety Solution</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Premium Installation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Quarterly Maintenance (3 years)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Advanced Training Programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Comprehensive Fire Safety Audit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>24/7 Emergency Support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Dedicated Account Manager</span>
              </li>
            </ul>

            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide specialized fire safety solutions for various industries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Commercial Buildings</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive fire safety solutions for offices, shopping malls, hotels, and other commercial
                establishments.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multi-class fire extinguishers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fire alarm systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Evacuation planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Industrial Facilities</h3>
              <p className="text-muted-foreground mb-4">
                Specialized fire protection for factories, warehouses, and manufacturing plants with unique fire
                hazards.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Heavy-duty fire extinguishers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automatic suppression systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Hazardous material protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Educational Institutions</h3>
              <p className="text-muted-foreground mb-4">
                Fire safety solutions for schools, colleges, and universities with focus on student and staff safety.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Standard fire extinguishers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fire safety education</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Emergency drills</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Healthcare Facilities</h3>
              <p className="text-muted-foreground mb-4">
                Specialized fire protection for hospitals, clinics, and nursing homes with patient safety as priority.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Clean agent extinguishers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Evacuation assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Staff emergency response training</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Residential Buildings</h3>
              <p className="text-muted-foreground mb-4">
                Fire safety solutions for apartments, housing societies, and individual homes for family protection.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Home fire extinguishers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Smoke detectors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Family emergency planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Hospitality Industry</h3>
              <p className="text-muted-foreground mb-4">
                Fire safety solutions for hotels, restaurants, and entertainment venues with guest safety in mind.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Kitchen fire suppression</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Guest evacuation systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Staff emergency training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Fire Safety?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your fire safety requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-600 hover:bg-white/90">
                Contact Us Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

