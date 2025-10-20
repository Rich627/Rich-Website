import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-neutral-950 text-neutral-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Main Heading */}
            <div>
              <p className="text-lg text-neutral-500 mb-3">Hi, I&apos;m</p>
              <h1 className="text-7xl font-bold text-white mb-6 leading-tight">Richie</h1>
              <h2 className="text-4xl text-sky-400 font-semibold mb-4 leading-snug">
                AI/ML Engineer & Cloud Architect
              </h2>
              <p className="text-xl text-neutral-400 font-light">
                M.S. Data Science @ Arizona State University
              </p>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              Specializing in generative AI, cloud infrastructure, and full-stack ML solutions across AWS, GCP, and Azure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-2">
              <div>
                <div className="text-5xl font-bold text-white mb-2">9+</div>
                <div className="text-neutral-400 text-sm">Certifications</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">200+</div>
                <div className="text-neutral-400 text-sm">Students Trained</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">5.0</div>
                <div className="text-neutral-400 text-sm">Workshop Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#portfolio"
                className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-sky-500/20"
              >
                View Projects
              </Link>
              <a
                href="https://www.linkedin.com/in/rich-liu/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg border border-neutral-700 transition-all"
              >
                LinkedIn
              </a>
              <a
                href="mailto:rich.liu627@gmail.com"
                className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg border border-neutral-700 transition-all"
              >
                Email
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square relative">
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
