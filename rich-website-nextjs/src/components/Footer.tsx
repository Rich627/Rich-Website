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
      value: "+886 936-488-138",
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
    <footer id="footer" className="relative bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center mb-3">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Richie Liu</h3>
              <p className="text-xs text-neutral-400">AI/ML Engineer & Cloud Architect</p>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              ASU Data Science graduate specializing in generative AI, machine learning, and cloud infrastructure.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-sky-500 text-neutral-400 hover:text-white transition-all duration-300"
                  aria-label={link.label}
                >
                  <i className={`${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-sky-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <i className={`${item.icon} text-sky-400 mt-1`}></i>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-500 uppercase">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-neutral-300 hover:text-sky-400 transition-colors duration-300 break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-neutral-300">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>
              &copy; {currentYear} <span className="text-neutral-300 font-semibold">Richie Liu</span>. All rights reserved.
            </p>
            <p>
              Built with{" "}
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
                Next.js
              </a>
              {" & "}
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 