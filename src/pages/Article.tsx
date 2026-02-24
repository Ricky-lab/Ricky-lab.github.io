import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Calendar, Clock, ArrowLeft, Hash, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { getArticleBySlug } from '../lib/blog-data';
import { useEffect, useState } from 'react';

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState(getArticleBySlug(slug || ''));
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setArticle(getArticleBySlug(slug || ''));
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: article.title,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus('Link copied!');
      setTimeout(() => setCopyStatus(null), 2000);
    }
  };

  return (
    <article className="pt-24 pb-16 px-4">
      <div className="max-w-article mx-auto">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(new Date(article.date), 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?tag=${tag}`}
                className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors"
              >
                <Hash className="w-3.5 h-3.5" />
                {tag}
              </Link>
            ))}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-secondary/10 text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-colors ml-auto"
            >
              <Share2 className="w-3.5 h-3.4" />
              {copyStatus || 'Share'}
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-foreground
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-code:text-primary prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#1E293B] prose-pre:border prose-pre:border-border
          prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
          prose-ul:text-muted-foreground prose-ol:text-muted-foreground
          prose-li:marker:text-primary
          prose-strong:text-foreground
        ">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                const codeString = String(children).replace(/\n$/, '');

                if (!inline && match) {
                  return (
                    <div className="rounded-lg overflow-hidden border border-border my-6">
                      <div className="flex items-center justify-between px-4 py-2 bg-secondary/10 border-b border-border">
                        <span className="text-xs text-muted-foreground uppercase">
                          {match[1]}
                        </span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(codeString);
                            setCopyStatus('Copied!');
                            setTimeout(() => setCopyStatus(null), 2000);
                          }}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {copyStatus || 'Copy'}
                        </button>
                      </div>
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          background: '#1E293B',
                          fontSize: '0.875rem',
                        }}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  );
                }

                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
