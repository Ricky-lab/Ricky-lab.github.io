import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-home mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-mono">~/dev/blog</span>
          <span className="text-primary">$</span>
          <span>echo "Thanks for visiting!"</span>
        </div>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
