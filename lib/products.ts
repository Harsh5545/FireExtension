export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  size: string
  image: string
  isNew?: boolean
  isFeatured?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "ABC Dry Powder Fire Extinguisher - 4KG",
    description:
      "Multipurpose fire extinguisher suitable for Class A, B, and C fires. Ideal for homes, offices, and commercial spaces.",
    price: 1499,
    category: "abc",
    size: "4kg",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "CO2 Fire Extinguisher - 2KG",
    description:
      "Carbon dioxide extinguisher perfect for electrical fires and sensitive equipment. Leaves no residue after use.",
    price: 2299,
    category: "co2",
    size: "2kg",
    image: "/placeholder.svg?height=400&width=400",
    isFeatured: true,
  },
  {
    id: "3",
    name: "Foam Fire Extinguisher - 6KG",
    description:
      "AFFF foam extinguisher effective against Class A and B fires. Creates a film that prevents re-ignition.",
    price: 1899,
    category: "foam",
    size: "6kg",
    image: "/placeholder.svg?height=400&width=400",
    isFeatured: true,
  },
  {
    id: "4",
    name: "Water Fire Extinguisher - 9KG",
    description:
      "Water-based extinguisher for Class A fires. Economical and environmentally friendly option for ordinary combustibles.",
    price: 1299,
    category: "water",
    size: "9kg",
    image: "/placeholder.svg?height=400&width=400",
    isFeatured: true,
  },
  {
    id: "5",
    name: "ABC Dry Powder Fire Extinguisher - 6KG",
    description:
      "Larger capacity multipurpose extinguisher for areas with higher fire risk. Effective on multiple fire types.",
    price: 1899,
    category: "abc",
    size: "6kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "6",
    name: "CO2 Fire Extinguisher - 4.5KG",
    description: "Heavy-duty carbon dioxide extinguisher for larger electrical fires and industrial applications.",
    price: 3499,
    category: "co2",
    size: "4kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "7",
    name: "Kitchen Fire Extinguisher - 2KG",
    description:
      "Specialized extinguisher for kitchen fires, effective against cooking oils and fats. Compact design for easy storage.",
    price: 1699,
    category: "foam",
    size: "2kg",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "8",
    name: "ABC Dry Powder Fire Extinguisher - 1KG",
    description:
      "Compact multipurpose extinguisher for cars, small offices, and home use. Lightweight and easy to handle.",
    price: 899,
    category: "abc",
    size: "1kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "9",
    name: "Automatic Fire Extinguisher - 5KG",
    description:
      "Self-activating extinguisher that deploys automatically when it detects fire. Ideal for unmanned areas.",
    price: 4999,
    category: "automatic",
    size: "5kg",
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "10",
    name: "Water Mist Fire Extinguisher - 3L",
    description:
      "Advanced water mist technology that creates a fine mist to fight fires efficiently while minimizing water damage.",
    price: 2799,
    category: "water",
    size: "3kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "11",
    name: "Powder Fire Extinguisher for Metal Fires - 6KG",
    description:
      "Specialized powder extinguisher for Class D fires involving metals. Essential for workshops and metal processing facilities.",
    price: 3999,
    category: "powder",
    size: "6kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "12",
    name: "Clean Agent Fire Extinguisher - 4KG",
    description:
      "Environmentally friendly clean agent extinguisher that leaves no residue. Ideal for server rooms and sensitive equipment.",
    price: 5499,
    category: "clean",
    size: "4kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "13",
    name: "Wheeled CO2 Fire Extinguisher - 22.5KG",
    description: "Large capacity wheeled extinguisher for industrial applications and areas with high fire risk.",
    price: 12999,
    category: "co2",
    size: "22kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "14",
    name: "ABC Dry Powder Fire Extinguisher - 9KG",
    description: "High capacity multipurpose extinguisher for warehouses, factories, and large commercial spaces.",
    price: 2499,
    category: "abc",
    size: "9kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "15",
    name: "Foam Spray Fire Extinguisher - 1L",
    description: "Compact foam spray extinguisher for small fires. Easy to use with no maintenance required.",
    price: 699,
    category: "foam",
    size: "1kg",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "16",
    name: "Fire Extinguisher Cabinet - Single",
    description:
      "Wall-mounted cabinet for storing a single fire extinguisher. Protects the extinguisher from damage and tampering.",
    price: 1299,
    category: "accessories",
    size: "standard",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "17",
    name: "Fire Blanket - 1.2m x 1.2m",
    description:
      "Fire-resistant blanket for smothering small fires or wrapping around a person whose clothes are on fire.",
    price: 599,
    category: "accessories",
    size: "standard",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "18",
    name: "Fire Extinguisher Stand - Double",
    description: "Floor stand for holding two fire extinguishers. Ideal for areas where wall mounting is not possible.",
    price: 1899,
    category: "accessories",
    size: "standard",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "19",
    name: "Fire Extinguisher Inspection Tags - Pack of 100",
    description: "Tags for recording fire extinguisher inspection dates and maintenance history.",
    price: 499,
    category: "accessories",
    size: "standard",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "20",
    name: "Vehicle Fire Extinguisher Kit",
    description:
      "Complete fire safety kit for vehicles including a 1KG ABC extinguisher, mounting bracket, and safety sign.",
    price: 1299,
    category: "abc",
    size: "1kg",
    image: "/placeholder.svg?height=400&width=400",
  },
]

