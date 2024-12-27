import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-[#1E4435] py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-[1rem] md:px-[4rem] lg:-px[4rem] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#2A513F] px-4 py-2 rounded-full text-white/80 mb-8">
            <span>Chat software</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Provide real-time support through chat for your customers
          </h1>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Great software that allows you to chat from any place at any time without any interruption
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-600">
              Getting Now
            </Button>
            <Button className="text-white bg-purple-400 hover:bg-purple-600 border-white/20">
              Learn More
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+62 87877 63636 0</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-green-400 rounded-full" />
              <span>ACROSS 29MIN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
        <div className="h-16 w-16 bg-red-400 rounded-full opacity-80" />
      </div>
      <div className="absolute top-1/4 right-24">
        <div className="h-12 w-12 bg-purple-400 rounded-full opacity-80" />
      </div>
      <div className="absolute bottom-1/4 right-48">
        <div className="h-10 w-10 bg-yellow-400 rounded-full opacity-80" />
      </div>
    </section>
  )
}

