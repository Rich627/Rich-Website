"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#resume", label: "Experience" },
    { href: "#portfolio", label: "Projects" },
    { href: "#skill-set", label: "Skills" },
    { href: "#certificates", label: "Certifications" },
    { href: "#blog", label: "Blog" },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg'
          : 'bg-neutral-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center -ml-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/img/logo/rich-low-resolution-logo-white-on-transparent-background.png"
              alt="Richie"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </a>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center space-x-6 ml-auto mr-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links - Bigger icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/rich-liu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-sky-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/rich627"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-sky-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900/98 backdrop-blur-lg border-t border-neutral-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-center space-x-6 pt-4 mt-4 border-t border-neutral-800">
              <a
                href="https://www.linkedin.com/in/rich-liu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-sky-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://github.com/rich627"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-sky-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 