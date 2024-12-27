import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'

export function VideoChat() {
  return (
    <section className="max-w-screen-xl mx-auto px-[1rem] md:px-[4rem] lg:px-[4rem] py-20">
      <h2 className="text-3xl font-bold mb-4">
        Craft a communication strategy using live video chat
      </h2>
      <p className="text-gray-600 mb-8">
        Video conferencing service productivity and connectivity features make it a simple tool for achieving these goals.
      </p>
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Video chat demonstration"
          className="w-full h-[400px] object-cover"
        />
        <Button
          size="icon"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/90 hover:bg-white"
        >
          <Play className="h-6 w-6 text-black" />
        </Button>
      </div>
    </section>
  )
}

