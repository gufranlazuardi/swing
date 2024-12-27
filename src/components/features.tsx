import Image from 'next/image'

const features = [
  {
    title: 'Innovative Design',
    description: 'Modern aesthetics built to seamlessly integrate into any interior.'
  },
  {
    title: 'Versatile Functionality',
    description: 'Smart robot performs multiple tasks to make your life easier.'
  },
  {
    title: 'Durable & Long-lasting',
    description: 'Built with high-quality materials for extended service life.'
  }
]

export function Features() {
  return (
    <section className="container py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/placeholder.svg"
            alt="Feature Robot"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        <div>
          <h3 className="text-purple-400 mb-4">Why choose us?</h3>
          <h2 className="text-3xl font-bold text-white mb-8">
            Key features &<br />benefits
          </h2>
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title}>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

