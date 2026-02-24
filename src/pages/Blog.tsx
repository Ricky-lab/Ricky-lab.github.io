import { ArticleCard } from '../components/ArticleCard';
import { articles } from '../lib/blog-data';

export function Blog() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-home mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Thoughts on software development, technology, and everything in between.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
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
    </div>
  );
}
