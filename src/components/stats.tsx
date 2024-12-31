
export function Stats() {
  return (
    <section className="bg-[#1E4435] py-20">
      <div className="max-w-screen-xl mx-auto px-[1rem] md:px-[4rem] lg:px-[4rem]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Get direct orders from your customers
            </h2>
            <p className="text-white/80 mb-8">
              Create custom landing pages with their blocks that convert more visitors into real users. With lots of unique blocks, you can easily build a page without any design or custom coding skills.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold text-white">9.3K+</p>
                <p className="text-white/80">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">8M+</p>
                <p className="text-white/80">Total Downloads</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="h-12 w-12 rounded-full bg-gray-200" />
                  <div className="space-y-1">
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                    <div className="h-3 w-24 bg-gray-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

