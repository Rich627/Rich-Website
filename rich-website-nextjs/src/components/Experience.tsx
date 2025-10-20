// Data arrays for experience
const workExperienceData = [
  {
    icon: "fas fa-briefcase",
    time: "Oct 2025 - Present",
    title: "Studio Associate, AI Guild - Next Lab",
    company: "Arizona State University",
    location: "Arizona, US",
  },
  {
    icon: "fas fa-briefcase",
    time: "Aug 2025 - Present",
    title: "Solutions Engineer (Contractor), Cloud",
    company: "iKala Interactive Media Inc.",
    location: "Taipei, Taiwan",
  },
  {
    icon: "fas fa-briefcase",
    time: "Oct 2024 - June 2025",
    title: "Solutions Architect, Cloud",
    company: "iKala Interactive Media Inc.",
    location: "Taipei, Taiwan",
  },
  {
    icon: "fas fa-briefcase",
    time: "July 2024 - Sep 2024",
    title: "Data Scientist Intern, IT-AI",
    company: "Advantech Co., Ltd.",
    location: "Taipei, Taiwan",
  },
  {
    icon: "fas fa-briefcase",
    time: "Mar 2024 - June 2025",
    title: "Backend Engineer & Tech Support Team Lead",
    company: "AWS Educate Cloud Ambassador Program",
    location: "Taipei, Taiwan",
  },
  {
    icon: "fas fa-briefcase",
    time: "Feb 2024 - May 2024",
    title: "Cloud Developer Intern, AI&Data",
    company: "eCloudvalley Digital Technology Co., Ltd.",
    location: "New Taipei, Taiwan",
  },
  {
    icon: "fas fa-briefcase",
    time: "Aug 2023 - Jan 2024",
    title: "QA-AI Intern",
    company: "CyberLink Corp.",
    location: "New Taipei, Taiwan",
  }
];


export default function Experience() {
  return (
    <section id="resume" className="py-16 sm:py-24 bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mb-4"></div>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-6">
            Professional journey in AI/ML, Cloud, and Data Science
          </p>
          <a
            href="RESUME_URL_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/50 text-sky-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <i className="fas fa-file-pdf"></i>
            View Full Resume
            <i className="fas fa-external-link-alt text-xs"></i>
          </a>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-sky-600 to-transparent hidden sm:block"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {workExperienceData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-4 h-4 bg-sky-500 rounded-full border-4 border-neutral-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-700 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
                      {/* Header */}
                      <div>
                        <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} items-center gap-2 mb-3`}>
                          <div className="flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full">
                            <i className={`${item.icon} text-sky-400 text-sm`}></i>
                            <span className="text-xs text-sky-400 font-medium">{item.time}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-base text-sky-300/80 font-medium mb-2">{item.company}</p>
                        <p className={`text-sm text-neutral-400 flex items-center gap-1 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <i className="fas fa-map-marker-alt text-xs"></i>
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 