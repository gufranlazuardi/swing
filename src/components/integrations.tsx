"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const integrations = [
  'vscode', 'spotify', 'discord', 'slack', 'notion', 'google', 'figma', 'github'
]

interface IntegrationsProps {
  speed?: number; // Speed in pixels per second
}

export function Integrations({ speed = 50 }: IntegrationsProps) {
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current && marqueeRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const marqueeFullWidth = marqueeRef.current.scrollWidth
        const repeats = Math.ceil(containerWidth / marqueeFullWidth) + 1
        setMarqueeWidth(marqueeFullWidth * repeats)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const duration = marqueeWidth / speed // Duration in seconds

  return (
    <section className="py-20 max-w-screen-xl mx-auto">
      <h2 className="text-2xl text-center mb-12">
        Effortless integration with your preferred tools
      </h2>
      <div ref={containerRef} className="overflow-hidden">
        <div 
          className="marquee flex whitespace-nowrap"
          style={{
            width: `${marqueeWidth}px`,
            '--marquee-duration': `${duration}s`,
          } as React.CSSProperties}
        >
          {[...Array(Math.ceil(marqueeWidth / (marqueeRef.current?.scrollWidth || 1)) + 1)].map((_, repeatIndex) => (
            <div
              key={`repeat-${repeatIndex}`}
              ref={repeatIndex === 0 ? marqueeRef : null}
              className="flex"
            >
              {integrations.map((integration, index) => (
                <div key={`${integration}-${repeatIndex}-${index}`} className="h-12 w-12 mx-8 flex-shrink-0">
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
          ))}
        </div>
      </div>
    </section>
  )
}

