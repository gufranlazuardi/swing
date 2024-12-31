import React from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Integrations } from '@/components/integrations'
import { Messaging } from '@/components/messaging'
import { VideoChat } from '@/components/video-chat'
import { Stats } from '@/components/stats'
import { Footer } from '@/components/footer'
import { PrototypeNotice } from '@/components/prototype-notice'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Integrations />
      <Messaging />
      <VideoChat />
      <Stats />
      <PrototypeNotice/>
    </main>
  )
}

export default Home