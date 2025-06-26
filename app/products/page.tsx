"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sizeFilter, setSizeFilter] = useState("all")

  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Category filter
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

    // Size filter
    const matchesSize = sizeFilter === "all" || product.size === sizeFilter

    return matchesSearch && matchesCategory && matchesSize
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-white/90">Browse our comprehensive range of fire safety equipment</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="abc">ABC Type</SelectItem>
                    <SelectItem value="co2">CO2 Type</SelectItem>
                    <SelectItem value="foam">Foam Type</SelectItem>
                    <SelectItem value="water">Water Type</SelectItem>
                    <SelectItem value="powder">Powder Type</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sizeFilter} onValueChange={setSizeFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="1kg">1 KG</SelectItem>
                    <SelectItem value="2kg">2 KG</SelectItem>
                    <SelectItem value="4kg">4 KG</SelectItem>
                    <SelectItem value="6kg">6 KG</SelectItem>
                    <SelectItem value="9kg">9 KG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setCategoryFilter("all")
                  setSizeFilter("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Fire Extinguisher Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">ABC Dry Powder Extinguishers</h3>
              <p className="text-muted-foreground mb-4">
                Versatile extinguishers suitable for Class A, B, and C fires. Effective against fires involving ordinary
                combustibles, flammable liquids, and electrical equipment.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setCategoryFilter("abc")}>
                View ABC Extinguishers
              </Button>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">CO2 Extinguishers</h3>
              <p className="text-muted-foreground mb-4">
                Ideal for Class B and electrical fires. These extinguishers leave no residue, making them perfect for
                sensitive equipment and electronics.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setCategoryFilter("co2")}>
                View CO2 Extinguishers
              </Button>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Foam Extinguishers</h3>
              <p className="text-muted-foreground mb-4">
                Effective for Class A and B fires. The foam blankets the fire and seals the vapors, preventing
                re-ignition of flammable liquids.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setCategoryFilter("foam")}>
                View Foam Extinguishers
              </Button>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Water Extinguishers</h3>
              <p className="text-muted-foreground mb-4">
                Best for Class A fires involving ordinary combustibles like wood, paper, and cloth. Not suitable for
                electrical or flammable liquid fires.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setCategoryFilter("water")}>
                View Water Extinguishers
              </Button>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Powder Extinguishers</h3>
              <p className="text-muted-foreground mb-4">
                Specialized extinguishers for specific applications, including metal fires (Class D). Highly effective
                but may cause significant cleanup.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setCategoryFilter("powder")}>
                View Powder Extinguishers
              </Button>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Automatic Extinguishers</h3>
              <p className="text-muted-foreground mb-4">
                Self-activating extinguishers that deploy automatically when they detect fire. Ideal for unmanned areas
                or critical equipment.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setCategoryFilter("automatic")}>
                View Automatic Systems
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

