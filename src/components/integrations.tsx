"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const integrations = [
  'vscode', 'spotify', 'discord', 'slack', 'notion', 'google', 'figma', 'github'
]

export function Integrations() {
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2)
    }
  }, [])

  return (
    <section className="py-20 max-w-screen-xl mx-auto">
        <h2 className="text-2xl text-center mb-12">
          Effortless integration with your preferred tools
        </h2>
      <div className="overflow-hidden">
        <div 
          ref={marqueeRef}
          className="flex whitespace-nowrap"
          style={{
            width: `${marqueeWidth * 2}px`,
            animation: `marquee ${integrations.length * 5}s linear infinite`
          }}
        >
          {[...integrations, ...integrations].map((integration, index) => (
            <div key={`${integration}-${index}`} className="h-12 w-12 mx-8 flex-shrink-0">
              <Image
                src={`/${integration}.png`}
                alt={integration}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

