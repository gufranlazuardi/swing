import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'

export function Messaging() {
  return (
    <section className=" max-w-screen-xl mx-auto py-20 px-[1rem] md:px-[4rem] lg:px-[4rem]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Access a unified multi-channel messaging solution in one place
          </h2>
          <p className="text-gray-600 mb-8">
            Enable your customers to communicate effectively through Live Chat, making conversations natural and casual while being professional.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-1" />
              <p>Engage in real-time chats with visitors, prospects, and customers</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-1" />
              <p>Easily save personalized conversations without hesitation</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-green-500 mt-1" />
              <p>Participate in combined chat conversations on the go</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-blue-50 rounded-2xl p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-gray-200" />
                  <div className="space-y-1">
                    <div className="h-4 w-32 bg-gray-100 rounded" />
                    <div className="h-3 w-24 bg-gray-50 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Badge className="absolute -top-2 -right-2 bg-red-500">
            89
          </Badge>
        </div>
      </div>
    </section>
  )
}

