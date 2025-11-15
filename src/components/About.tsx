import { Lightbulb, Target, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Of the Innovators, By the Innovators,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              For the Innovators.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Spacepoint Tech</span>, a forward-thinking IT firm, was founded with a vision to empower businesses and individuals who dare to innovate. Established in <span className="text-blue-600">2023</span> by <span className="text-blue-600">Mr. Yash Wamane</span>, a dynamic entrepreneur from Pune, Maharashtra, Spacepoint Tech emerged from the realization that many organizations struggle with outdated, inefficient, and overpriced IT solutions.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Traditional service providers often complicate processes, leaving businesses with digital platforms that fail to perform in today's fast-moving world.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Determined to change this, Yash envisioned an IT solutions company built for innovators — delivering websites, applications, and digital ecosystems that are not only beautifully designed but also highly efficient, scalable, and future-ready.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With expertise in Web Design, Full Stack Development, and next-gen IT services, Spacepoint Tech ensures that every solution is tailored to accelerate growth, enhance efficiency, and strengthen digital presence in the market.
            </p>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Innovation First</h3>
                  <p className="text-gray-600">
                    We believe in pushing boundaries and creating solutions that are ahead of their time.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Efficiency & Quality</h3>
                  <p className="text-gray-600">
                    Every solution is crafted to be efficient, scalable, and built to last.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Future-Ready Solutions</h3>
                  <p className="text-gray-600">
                    We build digital ecosystems that grow with your business and adapt to tomorrow's challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl sm:text-3xl mb-4">Founded by Mr. Yash Wamane</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A visionary entrepreneur from Pune, Maharashtra, dedicated to transforming the IT landscape and empowering businesses through innovative digital solutions.
            </p>
            <div className="mt-6 inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-white/90">Est. 2023 • Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
