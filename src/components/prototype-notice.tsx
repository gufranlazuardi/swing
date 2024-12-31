"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { X } from 'lucide-react'

export function PrototypeNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <Card className="fixed bottom-4 right-4 w-80 shadow-lg z-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse"></div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="relative">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0 left-0 animate-ping"></div>
              </div>
              <h3 className="font-semibold text-lg">Prototype Notice</h3>
            </div>
            <p className="text-sm text-gray-600">
              Is only prototype, the origin code has been sent to clients
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)} 
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close prototype notice"
          >
            <X size={20} />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

