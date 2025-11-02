import Image from 'next/image';

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

  return (
    <footer id="footer" className="relative bg-neutral-900 text-neutral-400 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-8">
          {/* Brand Section */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/img/logo/rich-low-resolution-logo-white-on-transparent-background.png"
                  alt="Richie Liu"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Richie Liu</h3>
                  <p className="text-xs text-sky-400 font-medium">AI/ML Engineer & Cloud Architect</p>
                </div>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                ASU Data Science graduate student specializing in generative AI, machine learning, and cloud infrastructure.
                AWS AI Community Builder passionate about building scalable AI solutions.
              </p>
            </div>
            {/* Social Links */}
            <div>
              <p className="text-xs text-neutral-500 uppercase font-semibold mb-3">Connect With Me</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-sky-500 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={link.label}
                  >
                    <i className={`${link.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info - Simple List */}
          <div>
            <h4 className="text-white font-bold text-base mb-6 flex items-center gap-2">
              <i className="fas fa-paper-plane text-sky-400"></i>
              Get In Touch
            </h4>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <i className={`${item.icon} text-sky-400 mt-1 text-lg`}></i>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-neutral-500 uppercase font-semibold mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-neutral-300 hover:text-sky-400 transition-colors duration-300 break-all block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-neutral-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6">
          <div className="text-center text-sm text-neutral-500">
            <p>
              &copy; {currentYear} <span className="text-neutral-300 font-semibold">Richie Liu</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 