import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const titles = [
  'Full Stack Developer',
  'Software Engineer',
  'Tech Enthusiast',
  'Open Source Contributor',
];

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-float" style={{ animationDelay: '1.5s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Greeting */}
        <div className="space-y-2">
          <p className="text-sm md:text-base text-primary font-mono">
            Hello, World!
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            I'm <span className="text-gradient">Alex Chen</span>
          </h1>
        </div>

        {/* Typewriter Effect */}
        <div className="h-8 md:h-10 flex items-center justify-center">
          <span className="text-lg md:text-xl text-muted-foreground">
            {displayText}
          </span>
          <span className="cursor" />
        </div>

        {/* Description */}
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          A passionate developer based in San Francisco, building elegant solutions
          to complex problems. Currently focused on distributed systems and
          cloud-native technologies.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/10 text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/10 text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/10 text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-all duration-200 hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/blog"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Read My Blog
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary/10 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
