export default function SkillSet() {
  return (
    <>
      {/* SKILL SET SVG Divider - Adjusted for a cleaner look */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100" // Adjusted viewBox and height
          className="absolute bottom-0 left-0 w-full h-auto" // Make SVG responsive and positioned
          preserveAspectRatio="none" // Ensure SVG scales correctly
        >
          <path
            fill="#0a0a0a" // Dark background color
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,90.7C672,107,768,117,864,106.7C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>
      <section id="skill-set" className="py-20 md:py-32 bg-neutral-950 text-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sky-400 mb-6">
              Technical Skills
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto">
              Specialized in AI/ML, Cloud Infrastructure, and Data Engineering with hands-on experience across AWS, GCP, and Azure platforms.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technical Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Languages & Programming */}
            <div className="bg-neutral-900 p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-shadow duration-300 border border-neutral-800 hover:border-sky-500/50">
              <h3 className="flex items-center text-2xl font-bold text-sky-400 mb-6">
                <i className="fas fa-code mr-3 text-2xl"></i>
                Languages & Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C', 'C++', 'R', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-sky-500/20 text-sky-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-sky-500/30 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ML & Data Science */}
            <div className="bg-neutral-900 p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-shadow duration-300 border border-neutral-800 hover:border-sky-500/50">
              <h3 className="flex items-center text-2xl font-bold text-sky-400 mb-6">
                <i className="fas fa-brain mr-3 text-2xl"></i>
                ML & Data Science
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'Scikit-learn', 'Data Pipeline', 'Data Lake', 'Data Visualization', 'Data Analytics'].map((skill) => (
                  <span key={skill} className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-emerald-500/30 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Generative AI & LLM */}
            <div className="bg-neutral-900 p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-shadow duration-300 border border-neutral-800 hover:border-sky-500/50">
              <h3 className="flex items-center text-2xl font-bold text-sky-400 mb-6">
                <i className="fas fa-robot mr-3 text-2xl"></i>
                Generative AI & LLM
              </h3>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'LangGraph', 'QLoRA', 'RAG', 'Fine-tuning', 'Multi Agent'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-purple-500/30 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Deployment */}
            <div className="bg-neutral-900 p-6 sm:p-8 rounded-xl shadow-2xl hover:shadow-sky-500/30 transition-shadow duration-300 border border-neutral-800 hover:border-sky-500/50">
              <h3 className="flex items-center text-2xl font-bold text-sky-400 mb-6">
                <i className="fas fa-server mr-3 text-2xl"></i>
                DevOps & Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git', 'Linux', 'CI/CD', 'Terraform', 'Jira', 'Github Action'].map((skill) => (
                  <span key={skill} className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg font-medium text-sm hover:bg-orange-500/30 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 