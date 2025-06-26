import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <div className="relative aspect-square">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        {product.isNew && <Badge className="absolute top-2 right-2 bg-red-600">New</Badge>}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
          <Badge variant="outline" className="ml-2 flex-shrink-0">
            {product.category}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="font-bold text-lg">₹{product.price.toLocaleString()}</div>
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

