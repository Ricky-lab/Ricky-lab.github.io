import { Github, Linkedin, Twitter, Mail, MapPin, Calendar } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-article mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none
          prose-headings:font-bold prose-headings:text-foreground
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
        ">
          <p className="text-lg">
            Hi, I'm Alex Chen - a full-stack developer based in San Francisco,
            California. I'm passionate about building elegant solutions to complex
            problems and sharing knowledge with the developer community.
          </p>

          <h2>My Background</h2>
          <p>
            With over 5 years of experience in software development, I've worked
            with startups and established companies to build scalable applications.
            My journey started with a curiosity about how things work, and it
            evolved into a career dedicated to creating impactful software.
          </p>

          <h2>What I Do</h2>
          <p>
            I specialize in building web applications using modern technologies
            like React, Node.js, and TypeScript. I have experience with cloud
            platforms (AWS, GCP) and containerization (Docker, Kubernetes). I'm
            also passionate about code quality, testing, and documentation.
          </p>

          <h2>Open Source</h2>
          <p>
            I believe in giving back to the community. I've contributed to various
            open-source projects and maintain several of my own. I also write
            technical articles to help other developers learn and grow.
          </p>

          <h2>Let's Connect</h2>
          <p>
            I'm always interested in hearing about new opportunities and projects.
            Feel free to reach out if you'd like to collaborate or just say hi!
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Contact Card */}
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@alexchen.dev"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                hello@alexchen.dev
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
                github.com/alexchen
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                linkedin.com/in/alexchen
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary" />
                @alexchen
              </a>
            </div>
          </div>

          {/* Info Card */}
          <div className="p-6 rounded-xl border border-border bg-card/50">
            <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                5+ years experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
