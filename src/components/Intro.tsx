'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 pt-16 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-10">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl font-black leading-tight animate-slide-up">
                <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                  Jui-Chi(Richie) Liu
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-lg text-neutral-300 font-medium animate-slide-up delay-100">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                  <span>M.S. Data Science, ASU</span>
                </div>
                <span className="text-neutral-600">|</span>
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-sky-400"></i>
                  <span>Arizona, US / Taipei, TW</span>
                </div>
              </div>

              {/* AWS Community Builder Badge */}
              <a
                href="https://builder.aws.com/community/@richliu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/40 hover:border-orange-500/60 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 animate-slide-up delay-150 group"
              >
                <i className="fab fa-aws text-orange-400 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-orange-300 font-semibold text-base">AWS AI Community Builder</span>
                <i className="fas fa-external-link-alt text-orange-400/60 text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"></i>
              </a>
            </div>

            {/* Description */}
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl animate-slide-up delay-200 pl-6">
              Experienced professional specializing in <span className="text-sky-400 font-semibold">Generative AI</span> and
              <span className="text-blue-400 font-semibold"> Machine Learning</span> solutions, with expertise in
              <span className="text-cyan-400 font-semibold"> Cloud Architecture</span> and
              <span className="text-purple-400 font-semibold"> Data Engineering</span> across AWS, GCP, and Azure platforms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 animate-slide-up delay-300">
              <div className="group relative p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl border border-neutral-700/50 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                <div className="text-5xl font-black bg-gradient-to-br from-sky-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <div className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                  Years Experience
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-blue-500/0 group-hover:from-sky-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
              </div>
              <div className="group relative p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="text-5xl font-black bg-gradient-to-br from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                  Projects Completed
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300"></div>
              </div>
              <div className="group relative p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl border border-neutral-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="text-5xl font-black bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  9+
                </div>
                <div className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                  Certifications
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
              </div>
              <div className="group relative p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-2xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="text-5xl font-black bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-neutral-400 text-xs font-medium uppercase tracking-wider">
                  Technical Skills
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>

          </div>

          {/* Image Section */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end animate-slide-left">
            <div className="relative w-full max-w-md aspect-square group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-neutral-700/50 group-hover:border-sky-500/50 transition-all duration-500 shadow-2xl">
                <Image
                  src="/img/logo/intro.png"
                  alt="Richie"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-150 {
          animation-delay: 0.15s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}
