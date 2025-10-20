"use client";

import { useState, useEffect } from 'react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  categories: string[];
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Medium articles via RSS feed
    // Note: In production, you might want to use a server-side API route
    // to avoid CORS issues
    const fetchArticles = async () => {
      try {
        // Using rss2json service as an example
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Rich627`
        );
        const data = await response.json();

        if (data.status === 'ok') {
          const formattedArticles = data.items.slice(0, 6).map((item: {
            title: string;
            link: string;
            pubDate: string;
            description?: string;
            thumbnail?: string;
            categories?: string[]
          }) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            thumbnail: item.thumbnail || '/img/project/AI_Music.jpg',
            categories: item.categories || []
          }));
          setArticles(formattedArticles);
        }
      } catch (error) {
        console.error('Error fetching Medium articles:', error);
        // Fallback to placeholder data
        setArticles([
          {
            title: "Building AI Applications with AWS Bedrock",
            link: "https://medium.com/@Rich627",
            pubDate: "2024-10-15",
            description: "Learn how to leverage AWS Bedrock to build powerful generative AI applications with minimal infrastructure overhead...",
            thumbnail: "/img/project/AI_Music.jpg",
            categories: ["AI", "AWS", "Cloud"]
          },
          {
            title: "Multi-Agent Systems with LangGraph",
            link: "https://medium.com/@Rich627",
            pubDate: "2024-09-20",
            description: "Exploring the power of multi-agent systems using LangGraph for complex AI workflows and automation...",
            thumbnail: "/img/project/Math-Problem-Categorization.jpeg",
            categories: ["AI", "LangGraph", "Agents"]
          },
          {
            title: "AWS Certification Journey: ML Specialty",
            link: "https://medium.com/@Rich627",
            pubDate: "2024-08-10",
            description: "My experience preparing for and passing the AWS Machine Learning Specialty certification exam...",
            thumbnail: "/img/project/COVID-19-Xray.jpeg",
            categories: ["AWS", "Certification", "ML"]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-16 sm:py-24 bg-neutral-900 text-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">
            <i className="fab fa-medium mr-3"></i>
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            Insights on AI/ML, cloud architecture, and technical deep dives
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-neutral-800 rounded-xl overflow-hidden animate-pulse">
                <div className="h-48 bg-neutral-700"></div>
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-neutral-700 rounded w-3/4"></div>
                  <div className="h-4 bg-neutral-700 rounded"></div>
                  <div className="h-4 bg-neutral-700 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="group bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 hover:border-sky-500/50 transition-all duration-300 hover:shadow-sky-500/20 hover:-translate-y-1 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-neutral-700">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Date and Categories */}
                    <div className="flex items-center justify-between mb-3">
                      <time className="text-xs text-neutral-500 font-mono">
                        {formatDate(article.pubDate)}
                      </time>
                      {article.categories.length > 0 && (
                        <span className="text-xs px-2 py-1 bg-sky-500/10 text-sky-400 rounded-full">
                          {article.categories[0]}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-sky-400 transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {article.description}
                    </p>

                    {/* Read More Link */}
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 font-medium transition-colors duration-300 group/link"
                    >
                      <span>Read on Medium</span>
                      <i className="fas fa-arrow-right text-sm group-hover/link:translate-x-1 transition-transform duration-300"></i>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Articles Button */}
            <div className="text-center mt-12">
              <a
                href="https://medium.com/@Rich627"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-neutral-800 hover:bg-sky-500 text-neutral-300 hover:text-white rounded-lg border border-neutral-700 hover:border-sky-500 transition-all duration-300 group font-medium"
              >
                <i className="fab fa-medium text-xl"></i>
                <span>View All Articles on Medium</span>
                <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
