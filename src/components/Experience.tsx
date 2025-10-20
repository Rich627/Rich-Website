// Data arrays for experience
const workExperienceData = [
  {
    icon: "fas fa-briefcase",
    time: "Oct 2024 - Present",
    title: "Studio Associate, AI Guild - Next Lab",
    company: "Arizona State University",
    location: "Arizona, US",
    responsibilities: [
      "Collaborate on cutting-edge AI research projects with ASU's Next Lab",
      "Develop and deploy generative AI applications for academic and industry partners",
      "Contribute to AI/ML workshops and educational initiatives"
    ],
    achievements: [
      "Led development of AI-powered educational tools serving 200+ students"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Aug 2024 - Present",
    title: "Solutions Engineer (Contractor), Cloud",
    company: "iKala Interactive Media Inc.",
    location: "Taipei, Taiwan",
    responsibilities: [
      "Provide technical consulting for cloud architecture design on GCP",
      "Support clients in AI/ML solution implementation and optimization",
      "Deliver technical workshops and training sessions"
    ],
    achievements: [
      "Maintained 100% client satisfaction across all delivered projects"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Oct 2024 - Jul 2024",
    title: "Solutions Architect, Cloud",
    company: "iKala Interactive Media Inc.",
    location: "Taipei, Taiwan",
    responsibilities: [
      "Designed and implemented cloud architectures for enterprise clients on GCP",
      "Led technical pre-sales discussions and proof-of-concept development",
      "Optimized cloud infrastructure costs and performance"
    ],
    achievements: [
      "Delivered 10+ successful cloud migration and optimization projects",
      "Achieved 30% average cost reduction for client cloud infrastructure"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Jul 2024 - Sep 2024",
    title: "Data Scientist Intern, IT-AI",
    company: "Advantech Co., Ltd.",
    location: "Taipei, Taiwan",
    responsibilities: [
      "Developed multi-agent systems using LangGraph for R&D automation",
      "Built supply chain forecasting models using Amazon Forecast",
      "Implemented video translation platform with LLMs"
    ],
    achievements: [
      "Achieved 90% accuracy in part demand forecasting",
      "Reduced R&D issue resolution time by 40% with multi-agent system"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Mar 2024 - Jun 2024",
    title: "Backend Engineer & Tech Support Team Lead",
    company: "AWS Educate Cloud Ambassador Program",
    location: "Taipei, Taiwan",
    responsibilities: [
      "Led technical support team for AWS Educate Taiwan program",
      "Developed serverless microservices for workshop automation",
      "Managed cloud infrastructure and CI/CD pipelines"
    ],
    achievements: [
      "Built email delivery system reducing operational workload by 80%",
      "Maintained system costs at $1.94/month while serving 200+ users"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Feb 2024 - May 2024",
    title: "Cloud Developer Intern, AI&Data",
    company: "eCloudvalley Digital Technology Co., Ltd.",
    location: "New Taipei, Taiwan",
    responsibilities: [
      "Developed cloud-based AI/ML solutions for clients",
      "Implemented data pipelines and ETL processes on AWS",
      "Participated in technical consulting and client presentations"
    ],
    achievements: [
      "Successfully delivered 3 client projects on time and within budget"
    ]
  },
  {
    icon: "fas fa-briefcase",
    time: "Aug 2023 - Jan 2024",
    title: "QA-AI Intern",
    company: "CyberLink Corp.",
    location: "New Taipei, Taiwan",
    responsibilities: [
      "Performed quality assurance testing for AI-powered video editing features",
      "Developed automated testing scripts for ML model validation",
      "Collaborated with ML engineers to improve model performance"
    ],
    achievements: [
      "Identified and documented 50+ critical bugs, improving product quality"
    ]
  }
];


export default function Experience() {
  return (
    <section id="resume" className="py-16 sm:py-24 bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            Professional journey in AI/ML, Cloud, and Data Science
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {workExperienceData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-700 hover:border-sky-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/5 to-transparent rounded-full blur-2xl group-hover:from-sky-500/10 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative">
                {/* Header with Time */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-sky-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base text-sky-400 font-semibold mb-2">{item.company}</p>
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <i className="fas fa-map-marker-alt text-sky-400 text-xs"></i>
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30 rounded-xl h-fit">
                    <i className={`${item.icon} text-sky-400 text-sm`}></i>
                    <span className="text-sm text-sky-400 font-bold whitespace-nowrap">{item.time}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-tasks text-sky-400 text-sm"></i>
                      <h4 className="text-sm font-bold text-neutral-300">Key Responsibilities</h4>
                    </div>
                    <ul className="space-y-2 pl-6">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-neutral-300 leading-relaxed list-disc">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <i className="fas fa-trophy text-yellow-400 text-sm"></i>
                      <h4 className="text-sm font-bold text-neutral-300">Key Achievements</h4>
                    </div>
                    <div className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-emerald-500/5 to-transparent rounded-lg border border-emerald-500/10"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <i className="fas fa-check text-emerald-400 text-xs"></i>
                          </div>
                          <span className="text-sm text-neutral-200 leading-relaxed flex-1">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/0 via-blue-500/0 to-sky-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-sky-500/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 