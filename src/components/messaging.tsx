import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'

interface Chat {
  id : number | string
  image : string
  sender : string
  platform : string
  platform_image : string
}

const chats: Chat[] = [
  {
    id : 1,
    image: "/discord.png",
    sender: "Alex",
    platform: "Discord",
    platform_image: "/discrod",
  },
  {
    id: 2,
    image: "/slack.png",
    sender: "Emma",
    platform: "Slack",
    platform_image: "/slack.png",
  },
  {
    id: 3,
    image: "/vscode.png",
    sender: "John",
    platform: "VSCode",
    platform_image: "/vscode.png",
  },
]

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
              {chats.map((chat) => (
                <div key={chat.id} className="flex items-center gap-4 bg-white p-4 rounded-lg">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src={chat.image} alt={chat.sender} className="object-cover w-full h-full" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold">{chat.sender}</div>
                    <div className="text-xs text-gray-500">{chat.platform}</div>
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

