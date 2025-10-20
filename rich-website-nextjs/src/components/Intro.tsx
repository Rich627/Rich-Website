import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-neutral-950 text-neutral-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <div>
              <p className="text-xl text-neutral-400 mb-2">Hi, I&apos;m</p>
              <h1 className="text-6xl font-bold text-white mb-4">Richie</h1>
              <h2 className="text-3xl text-sky-400 font-medium mb-3">
                AI/ML Engineer & Cloud Architect
              </h2>
              <p className="text-lg text-neutral-400">
                M.S. Data Science @ Arizona State University
              </p>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-lg leading-relaxed max-w-xl">
              Specializing in generative AI, cloud infrastructure, and full-stack ML solutions across AWS, GCP, and Azure.
            </p>

            {/* Stats */}
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-4xl font-bold text-white mb-1">9+</div>
                <div className="text-neutral-400">Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">200+</div>
                <div className="text-neutral-400">Students Trained</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">5.0</div>
                <div className="text-neutral-400">Workshop Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#portfolio"
                className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors"
              >
                View Projects
              </Link>
              <a
                href="https://www.linkedin.com/in/rich-liu/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg border border-neutral-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:rich.liu627@gmail.com"
                className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg border border-neutral-700 transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-96 h-96 relative">
              <Image
                src="/img/logo/intro.png"
                alt="Richie"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
