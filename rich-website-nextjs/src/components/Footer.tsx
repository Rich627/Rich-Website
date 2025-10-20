export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "rich.liu627@gmail.com",
      href: "mailto:rich.liu627@gmail.com",
    },
    {
      icon: "fas fa-phone",
      label: "Phone (US)",
      value: "+1 (602) 410-1202",
      href: "tel:+16024101202",
    },
    {
      icon: "fas fa-phone",
      label: "Phone (TW)",
      value: "+886 936 488 138",
      href: "tel:+886936488138",
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Arizona, US / Taipei, TW",
      href: null,
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rich-liu/",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      href: "https://github.com/Rich627",
      icon: "fab fa-github",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      href: "https://www.kaggle.com/rich627",
      icon: "fab fa-kaggle",
      label: "Kaggle",
      color: "hover:text-cyan-400"
    },
    {
      href: "https://medium.com/@Rich627",
      icon: "fab fa-medium",
      label: "Medium",
      color: "hover:text-green-400"
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#certificates", label: "Certifications" },
    { href: "#skill-set", label: "Skills" },
    { href: "#resume", label: "Experience" },
    { href: "#portfolio", label: "Projects" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-400">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Richie</h3>
                  <p className="text-sm text-neutral-500">AI/ML Engineer & Cloud Solutions Architect</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
                ASU Data Science graduate student specializing in generative AI, cloud infrastructure, and full-stack ML solutions. Passionate about building impactful AI applications.
              </p>
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 ${link.color} transition-all duration-300 hover:scale-110 hover:bg-neutral-700`}
                    aria-label={link.label}
                  >
                    <i className={`${link.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-sky-400 transition-colors duration-300 inline-flex items-center group"
                    >
                      <i className="fas fa-chevron-right text-xs mr-2 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                {contactInfo.map((item) => (
                  <li key={item.label} className="flex items-center space-x-3">
                    <i className={`${item.icon} text-sky-400 w-5`}></i>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-neutral-300 hover:text-sky-400 transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-300">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} <span className="text-neutral-400 font-medium">Richie Liu</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <p className="text-neutral-500">
                Built with{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-sky-400 transition-colors duration-300"
                >
                  Next.js
                </a>
                {" & "}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-sky-400 transition-colors duration-300"
                >
                  Tailwind
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 