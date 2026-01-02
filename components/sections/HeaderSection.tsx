'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LanguageSelector } from '@/components/blocks/header/LanguageSelector';
import Logo from '@/components/shared/logo';
import { cn } from '@/lib/utils';

export function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items (placeholders for now)
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[height,background-color,box-shadow,padding] duration-500',
          isScrolled ? 'bg-cv-bg-card/80 backdrop-blur-md shadow-sm' : 'bg-transparent py-2'
        )}
        style={{
          height: isScrolled ? 'var(--cv-header-height-scrolled)' : 'var(--cv-header-height)',
        }}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-6 md:px-12 max-w-7xl">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-baseline gap-0 font-semibold tracking-tighter transition-transform active:scale-95"
          >
            <Logo size="md" variant="compact" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-cv-text-primary hover:text-cv-accent transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <LanguageSelector
              language={language}
              onLanguageChange={setLanguage}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-cv-text-primary hover:text-cv-accent transition-colors"
            aria-label="Toggle menu"
          >
            <div className={cn('transition-transform duration-200', isMobileMenuOpen && 'rotate-45')}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </div>
          </button>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
          <div
            className={cn(
              'w-full h-full bg-gradient-to-r from-transparent via-cv-accent/30 to-transparent transition-all duration-800 ease-in-out',
              isScrolled ? 'scale-x-100 opacity-100' : 'scale-x-60 opacity-40'
            )}
          />

          {/* Moving Shine Effect */}
          <div 
            className="absolute inset-0 h-full flex animate-shine"
            style={{ width: '200%' }}
          >
            <div className="w-1/2 h-full bg-[linear-gradient(90deg,transparent_45%,var(--cv-accent)_50%,transparent_55%)] opacity-50" />
            <div className="w-1/2 h-full bg-[linear-gradient(90deg,transparent_45%,var(--cv-accent)_50%,transparent_55%)] opacity-50" />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={cn(
              'absolute top-0 left-0 right-0 bg-cv-bg-card/95 backdrop-blur-lg border-b border-cv-border-muted transition-transform duration-300',
              isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
            )}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            style={{ height: 'var(--cv-header-height)' }}
          >
            <div className="container mx-auto flex h-full items-center justify-between px-6">
              <Logo size="md" variant="compact" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full text-cv-text-primary hover:text-cv-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            className={cn(
              'absolute top-full left-0 right-0 bg-cv-bg-card/95 backdrop-blur-lg transition-all duration-300',
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            )}
            style={{ marginTop: 'var(--cv-header-height)' }}
          >
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-cv-text-primary hover:text-cv-accent transition-colors py-2"
                  >
                    {item.title}
                  </Link>
                ))}
                
                <div className="border-t border-cv-border-muted pt-4 mt-4">
                  <LanguageSelector
                    language={language}
                    onLanguageChange={setLanguage}
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div style={{ height: 'var(--cv-header-height)' }} />
    </>
  );
}