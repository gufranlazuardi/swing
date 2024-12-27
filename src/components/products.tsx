import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

const products = [
  {
    name: 'Caretaker Robot',
    price: 245.00,
    image: '/placeholder.svg'
  },
  {
    name: 'Chef Robot',
    price: 2500.00,
    image: '/placeholder.svg'
  },
  {
    name: 'Repairer Robot',
    price: 3700.00,
    image: '/placeholder.svg'
  },
  {
    name: 'Garbage Sorter Robot',
    price: 1200.00,
    image: '/placeholder.svg'
  }
]

export function Products() {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Our best sellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.name} className="bg-[#0B1129] border-none">
            <CardContent className="p-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 text-gray-400 hover:text-white"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4">
              <div>
                <h3 className="text-white font-medium">{product.name}</h3>
                <p className="text-purple-400">${product.price.toFixed(2)}</p>
              </div>
              <Button size="icon" className="rounded-full bg-[#1A2139] hover:bg-[#232B4A]">
                <span className="sr-only">Add to cart</span>
                +
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="link" className="text-purple-400 hover:text-purple-300">
          VIEW ALL PRODUCTS →
        </Button>
      </div>
    </section>
  )
}

