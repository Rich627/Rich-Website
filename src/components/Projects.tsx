import Image from 'next/image'; // Using Next/Image for optimized project images

const projectsData = [
  {
    imageSrc: "/img/project/ai-psy-test.jpg",
    title: "AI Psychology Test Platform",
    description: "Enterprise-grade AI platform for AWS Community Day Taiwan serving 7,500+ users. Architected scalable infrastructure with CloudFront CDN, WAF security, and Lambda/DynamoDB rate-limiting. Implemented SageMaker fine-tuning (QLoRA) for personalized AI responses.",
    impact: "5.0/5.0 workshop satisfaction • 7,500+ completions • Zero downtime",
    tags: ["AWS", "SageMaker", "CloudFront", "Lambda", "QLoRA"],
    githubUrl: null,
    liveDemoUrl: "https://psy.aws-educate.tw/",
    featured: true
  },
  {
    imageSrc: "/img/project/aws-educate-tpet.jpg",
    title: "AWS Education Platform & Automation",
    description: "Production serverless platform for AWS education programs (TPET & AWS Educate Taiwan). Built microservices-based email automation system using Lambda and SES, enabling hands-on workshops for 200+ participants.",
    impact: "80% workload reduction • $1.94/month operational cost • 200+ trained",
    tags: ["AWS Lambda", "SES", "DynamoDB", "Serverless", "Microservices"],
    githubUrl: null,
    liveDemoUrl: "https://tpet.aws-educate.tw/",
    featured: true
  },
  {
    imageSrc: "/img/project/gogoro-ai.jpg",
    title: "Gogoro Gen AI Customer Service Chatbot",
    description: "AI-powered customer service chatbot developed for Gogoro's Gen AI Hackathon. Implemented LLM-based conversational AI to handle customer inquiries about electric scooters, battery swapping, and services with natural language understanding.",
    impact: "Hackathon winner • Real-time response generation • Multi-turn conversations",
    tags: ["LLM", "OpenAI", "LangChain", "Python", "RAG"],
    githubUrl: "https://github.com/Rich627/gogoro-gen-ai-hackton",
    liveDemoUrl: null,
    featured: true
  },
  {
    imageSrc: "/img/project/taylor-swift-workshop.jpg",
    title: "AWS Educate Taylor Swift Data Analytics Workshop",
    description: "Interactive data analysis workshop using AWS analytics services to explore Taylor Swift's music data. Guided 200+ participants through hands-on exercises with S3, Athena, QuickSight, and Glue for ETL pipelines and data visualization.",
    impact: "200+ participants trained • 4.8/5 satisfaction • Open-source curriculum",
    tags: ["AWS Athena", "QuickSight", "S3", "Glue", "Data Analytics"],
    githubUrl: "https://github.com/Rich627/aws_educate_taylor_swift_workshop",
    liveDemoUrl: null,
    featured: true
  },
  {
    imageSrc: "/img/project/advantech-rd.jpg",
    title: "Multi-Agent R&D Automation System",
    description: "Enterprise AI solution for Advantech's R&D department using LangGraph multi-agent architecture. Deployed on Azure with Docker containerization. Includes automated video translation with open-source LLMs for multilingual support.",
    impact: "40% faster issue resolution • Multi-language support • Production deployment",
    tags: ["LangGraph", "Azure", "Docker", "Multi-Agent", "LLM"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: true
  },
  {
    imageSrc: "/img/project/viewsonic-caf.jpg",
    title: "ViewSonic Cloud AI Framework",
    description: "Contributed to ViewSonic's production Cloud AI Framework (CAF) enabling scalable ML model deployment for edge devices. Implemented cloud-edge integration and model optimization for IoT applications.",
    impact: "Production system • Edge device optimization • Scalable architecture",
    tags: ["Cloud Computing", "AI/ML", "Edge Computing", "Python", "Docker"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: true
  }
];

export default function Projects() {
  return (
    <>
      {/* Optional: New style SVG divider can be added here if desired later */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="bg-neutral-900">
        <path fill="#0a0a0a" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,106.7C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg> */}
      <section id="portfolio" className="py-16 sm:py-24 bg-neutral-950 text-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">Featured Projects</h1>
            <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
            <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
              Production-grade AI/ML and cloud infrastructure projects delivering measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700 hover:border-sky-500/50 overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative w-full h-64 overflow-hidden bg-neutral-900 flex-shrink-0">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-sky-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-300 leading-relaxed mb-4 text-sm flex-1">
                    {project.description}
                  </p>

                  {/* Impact Highlight */}
                  {project.impact && (
                    <div className="mb-4 p-4 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border-l-4 border-emerald-500 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                          <i className="fas fa-chart-line text-emerald-400"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Impact</p>
                          <p className="text-sm text-neutral-200 font-semibold">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-medium rounded-lg hover:bg-sky-500/20 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-700/50">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/50 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <i className="fas fa-external-link-alt"></i>
                          View Live
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-3 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white font-bold rounded-xl border border-neutral-600 hover:border-sky-500 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <i className="fab fa-github"></i>
                        GitHub
                      </a>
                    )}
                    {!project.githubUrl && !project.liveDemoUrl && (
                      <div className="flex-1 px-4 py-3 bg-neutral-800/50 text-neutral-400 rounded-xl border border-neutral-700/50 flex items-center justify-center gap-2">
                        <i className="fas fa-lock text-sm"></i>
                        <span className="text-sm font-medium">Proprietary Project - Under NDA</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/0 via-blue-500/0 to-sky-500/0 group-hover:from-sky-500/10 group-hover:via-blue-500/10 group-hover:to-sky-500/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Rich627"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg border border-neutral-700 hover:border-sky-500 transition-all duration-300 group font-medium"
            >
              <i className="fab fa-github text-xl"></i>
              <span>View More Projects on GitHub</span>
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 