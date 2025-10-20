"use client";

const githubStats = [
  {
    src: "http://github-profile-summary-cards.vercel.app/api/cards/stats?username=Rich627&theme=transparent&hide_border=true&text_color=ededed&icon_color=38bdf8&title_color=38bdf8&bg_color=0a0a0a",
    alt: "Rich GitHub Stats"
  },
  {
    src: "http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Rich627&theme=transparent&hide_border=true&text_color=ededed&icon_color=38bdf8&title_color=38bdf8&bg_color=0a0a0a&utcOffset=8",
    alt: "Rich GitHub Productive Time"
  },
  {
    src: "https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Rich627&theme=transparent&hide_border=true&text_color=ededed&icon_color=38bdf8&title_color=38bdf8&bg_color=0a0a0a",
    alt: "Rich GitHub Most Committed Language"
  },
  {
    src: "http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Rich627&theme=transparent&hide_border=true&text_color=ededed&icon_color=38bdf8&title_color=38bdf8&bg_color=0a0a0a",
    alt: "Rich GitHub Repos Per Language"
  }
];

const highlights = [
  {
    icon: "fas fa-trophy",
    title: "2nd Place Winner",
    description: "Taiwan GenAI Hackathon 2024",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: "fas fa-users",
    title: "200+ Trained",
    description: "Workshop participants & students",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: "fas fa-star",
    title: "5.0/5.0 Rating",
    description: "AWS Community Day workshop",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: "fas fa-cloud",
    title: "Multi-Cloud Expert",
    description: "AWS, GCP, Azure certified",
    color: "from-green-400 to-emerald-500"
  }
];

export default function SkillLevels() {
  return (
    <section id="skill-levels" className="py-16 sm:py-24 bg-neutral-950 text-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">Career Highlights & Stats</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Key achievements and contributions to the AI/ML community
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-sky-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${highlight.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{highlight.title}</h3>
                  <p className="text-neutral-400">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Stats Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-200 mb-8 sm:mb-10 text-center">
            <i className="fab fa-github text-sky-400 mr-3"></i>
            GitHub Activity
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {githubStats.map((stat, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-4 rounded-xl shadow-xl hover:shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] flex justify-center items-center border border-neutral-800 hover:border-sky-500/50 min-h-[200px]"
              >
                <img
                  className="max-w-full max-h-full object-contain rounded-md"
                  src={stat.src}
                  alt={stat.alt}
                />
              </div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="text-center mt-10">
            <a
              href="https://github.com/Rich627"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg border border-neutral-700 hover:border-sky-500 transition-all duration-300 group"
            >
              <i className="fab fa-github text-xl"></i>
              <span className="font-medium">View Full GitHub Profile</span>
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 