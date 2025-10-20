import Image from 'next/image'; // Using Next/Image for optimized project images

const projectsData = [
  {
    imageSrc: "/img/project/AI_Music.jpg",
    title: "AI Psychology Test Platform",
    description: "Developed an AI psychology test platform with over 7,500+ completions for AWS Community Day Taiwan. Secured by CloudFront, WAF, and Lambda/DynamoDB rate-limiting. Integrated SageMaker fine-tuning demo (QLoRA) for personalized AI responses, achieving 5.0/5.0 workshop satisfaction.",
    tags: ["AWS", "SageMaker", "CloudFront", "Lambda", "QLoRA"],
    githubUrl: null,
    liveDemoUrl: "https://psy.aws-educate.tw/",
    featured: true
  },
  {
    imageSrc: "/img/project/parking_lot.webp",
    title: "AWS Workshop & Education Platform",
    description: "Built serverless workshop platforms (TPET & AWS Educate) for hands-on training sessions. Includes microservices email delivery system using Lambda and SES, reducing workload by 80% with $1.94/month average cost. Trained 200+ participants across multiple workshops.",
    tags: ["AWS Lambda", "SES", "DynamoDB", "Serverless", "Workshop"],
    githubUrl: null,
    liveDemoUrl: "https://tpet.aws-educate.tw/",
    featured: true
  },
  {
    imageSrc: "/img/project/COVID-19-Xray.jpeg",
    title: "ViewSonic Cloud AI Framework (CAF)",
    description: "Contributed to ViewSonic's Cloud AI Framework, enabling scalable AI model deployment and inference for edge devices. Worked on cloud-edge integration and model optimization for production environments.",
    tags: ["Cloud Computing", "AI/ML", "Edge Computing", "Python", "Docker"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: true
  },
  {
    imageSrc: "/img/project/Math-Problem-Categorization.jpeg",
    title: "Multi-Agent R&D Support System (Advantech)",
    description: "Developed a multi-agent system with LangGraph, deployed via Azure and Docker to accelerate R&D issue resolution. Integrated video translation platform with open-source LLMs and neural networks.",
    tags: ["LangGraph", "Azure", "Docker", "Multi-Agent", "LLM"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: true
  },
  {
    imageSrc: "/img/project/parking_lot.webp",
    title: "Supply Chain Forecasting (Advantech)",
    description: "Achieved 90% accuracy in part demand forecasting using Amazon Forecast, optimizing supply chain efficiency and reducing inventory costs.",
    tags: ["Amazon Forecast", "Time Series", "ML", "Supply Chain"],
    githubUrl: null,
    liveDemoUrl: null,
    featured: true
  },
  {
    imageSrc: "/img/project/AI_Music.jpg",
    title: "AI Music Generation",
    description: "Exploring the generation of novel musical pieces using AI techniques, focusing on recurrent neural networks (RNNs) and transformer models.",
    tags: ["Python", "TensorFlow", "Magenta", "MIDI"],
    githubUrl: "https://github.com/Rich627/AI-music",
    liveDemoUrl: null
  },
  {
    imageSrc: "/img/project/hottest_moto.png",
    title: "2023 Hottest Motorcycle Analysis",
    description: "Web scraping and data analysis project to identify and visualize trends in the most popular motorcycles of 2023 using Python.",
    tags: ["Python", "Web Scraping", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Rich627/2023-Hottest-Motorcycle",
    liveDemoUrl: null
  },
  {
    imageSrc: "/img/project/Math-Problem-Categorization.jpeg",
    title: "Mathematical Problem Classification",
    description: "Utilizing NLP and machine learning techniques to automatically categorize mathematical problems based on their textual content.",
    tags: ["Python", "NLP", "Scikit-learn", "BERT"],
    githubUrl: "https://github.com/Rich627/Math-Problem-Categorization",
    liveDemoUrl: null
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
            <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">Projects</h1>
            <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
            <p className="mt-4 text-lg text-neutral-400">
              Professional projects, hackathon winners, and open-source contributions showcasing AI/ML expertise.
              <a href="https://github.com/Rich627" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline ml-1">
                View more on GitHub.
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projectsData.map((project, index) => (
              <div key={index} className="bg-neutral-800 rounded-xl shadow-2xl overflow-hidden flex flex-col hover:shadow-sky-500/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 relative">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                )}
                <div className="relative w-full h-56 sm:h-64">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-neutral-100 mb-3">{project.title}</h3>
                  <p className="text-neutral-300 leading-relaxed mb-4 text-sm flex-grow">{project.description}</p>
                  <div className="mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-block bg-sky-500/20 text-sky-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project.githubUrl || project.liveDemoUrl) && (
                    <div className="mt-auto pt-4 border-t border-neutral-700 flex items-center gap-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-sky-400 transition-colors duration-300 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          GitHub
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-sky-400 transition-colors duration-300 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 