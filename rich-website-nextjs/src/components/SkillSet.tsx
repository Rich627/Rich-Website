export default function SkillSet() {
  return (
    <section id="skill-set" className="py-16 sm:py-24 bg-neutral-950 text-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            Specialized in AI/ML, Cloud Infrastructure, and Data Engineering with hands-on experience across AWS, GCP, and Azure platforms.
          </p>
        </div>

        {/* Technical Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Languages & Programming */}
            <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-700 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
              <h3 className="flex items-center text-xl font-bold text-white mb-4">
                <i className="fas fa-code mr-3 text-sky-400"></i>
                Languages & Programming
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C', 'C++', 'R', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-sky-500/10 border border-sky-500/30 text-sky-300 px-3 py-1.5 rounded-lg font-medium text-sm hover:bg-sky-500/20 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ML & Data Science */}
            <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-700 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
              <h3 className="flex items-center text-xl font-bold text-white mb-4">
                <i className="fas fa-brain mr-3 text-sky-400"></i>
                ML & Data Science
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'TensorFlow', 'Scikit-learn', 'Data Pipeline', 'Data Lake', 'Data Visualization', 'Data Analytics'].map((skill) => (
                  <span key={skill} className="bg-sky-500/10 border border-sky-500/30 text-sky-300 px-3 py-1.5 rounded-lg font-medium text-sm hover:bg-sky-500/20 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Generative AI & LLM */}
            <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-700 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
              <h3 className="flex items-center text-xl font-bold text-white mb-4">
                <i className="fas fa-robot mr-3 text-sky-400"></i>
                Generative AI & LLM
              </h3>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'LangGraph', 'QLoRA', 'RAG', 'Fine-tuning', 'Multi Agent'].map((skill) => (
                  <span key={skill} className="bg-sky-500/10 border border-sky-500/30 text-sky-300 px-3 py-1.5 rounded-lg font-medium text-sm hover:bg-sky-500/20 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Deployment */}
            <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-700 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300">
              <h3 className="flex items-center text-xl font-bold text-white mb-4">
                <i className="fas fa-server mr-3 text-sky-400"></i>
                DevOps & Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git', 'Linux', 'CI/CD', 'Terraform', 'Jira', 'Github Action'].map((skill) => (
                  <span key={skill} className="bg-sky-500/10 border border-sky-500/30 text-sky-300 px-3 py-1.5 rounded-lg font-medium text-sm hover:bg-sky-500/20 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
} 