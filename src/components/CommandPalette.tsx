import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, FileText, Hash, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const articles = [
  {
    title: 'Understanding TypeScript Generics',
    slug: 'understanding-typescript-generics',
    category: 'Article',
    tags: ['typescript', 'generics'],
  },
  {
    title: 'Building Scalable APIs with Node.js',
    slug: 'building-scalable-apis-nodejs',
    category: 'Article',
    tags: ['nodejs', 'api', 'backend'],
  },
  {
    title: 'React Server Components Explained',
    slug: 'react-server-components',
    category: 'Article',
    tags: ['react', 'rsc'],
  },
  {
    title: 'PostgreSQL Performance Optimization',
    slug: 'postgresql-performance',
    category: 'Article',
    tags: ['postgresql', 'database'],
  },
  {
    title: 'Docker Best Practices for Development',
    slug: 'docker-best-practices',
    category: 'Article',
    tags: ['docker', 'devops'],
  },
];

const tags = [
  { name: 'typescript', count: 12 },
  { name: 'react', count: 8 },
  { name: 'nodejs', count: 6 },
  { name: 'postgresql', count: 5 },
  { name: 'docker', count: 4 },
  { name: 'aws', count: 3 },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [open, onOpenChange]);

  const handleSelect = (slug: string) => {
    onOpenChange(false);
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => onOpenChange(false)}
      />

      {/* Dialog */}
      <div
        className={`fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-xl transition-all duration-200 ${
          open
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <Command
          className="bg-popover border border-border rounded-xl shadow-2xl overflow-hidden"
          shouldFilter={true}
        >
          {/* Search Input */}
          <div className="flex items-center px-4 border-b border-border">
            <Search className="w-5 h-5 text-muted-foreground" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search articles, tags..."
              className="flex-1 px-3 py-4 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              autoFocus
            />
          </div>

          {/* Results */}
          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-muted-foreground">
              No results found.
            </Command.Empty>

            {/* Articles Group */}
            <Command.Group
              heading="Articles"
              className="text-xs font-medium text-muted-foreground px-2 py-1.5"
            >
              {articles.map((article) => (
                <Command.Item
                  key={article.slug}
                  value={article.title}
                  onSelect={() => handleSelect(article.slug)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary transition-colors"
                >
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="flex-1">{article.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                </Command.Item>
              ))}
            </Command.Group>

            {/* Tags Group */}
            <Command.Group
              heading="Tags"
              className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2"
            >
              {tags.map((tag) => (
                <Command.Item
                  key={tag.name}
                  value={tag.name}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary transition-colors"
                >
                  <Hash className="w-4 h-4 text-muted-foreground" />
                  <span className="flex-1">{tag.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {tag.count} posts
                  </span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-border text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-secondary/20 rounded">↑↓</kbd>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-secondary/20 rounded">↵</kbd>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 bg-secondary/20 rounded">esc</kbd>
              <span>Close</span>
            </div>
          </div>
        </Command>
      </div>
    </>
  );
}
