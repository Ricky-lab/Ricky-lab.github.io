import { Hero } from '../components/Hero';
import { ArticleCard } from '../components/ArticleCard';
import { TechStack } from '../components/TechStack';
import { articles } from '../lib/blog-data';

export function Home() {
  const recentArticles = articles.slice(0, 3);

  return (
    <div>
      <Hero />

      {/* Recent Articles Section */}
      <section className="py-20 px-4">
        <div className="max-w-home mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Recent <span className="text-gradient">Articles</span>
            </h2>
            <a
              href="/blog"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              View all
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                tags={article.tags}
                slug={article.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-home mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card/50 p-8 md:p-12 text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@alexchen.dev"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary/10 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
