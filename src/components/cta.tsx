import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="container py-20 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        GET UP TO <span className="text-purple-400">25% OFF</span> YOUR<br />
        PERFECT HOME ASSISTANT<br />
        TODAY!
      </h2>
      <Button className="mt-8 rounded-full bg-white text-black hover:bg-gray-200">
        Claim Your Discount
      </Button>
    </section>
  )
}

