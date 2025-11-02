const certificatesData = [
  {
    href: "https://www.credly.com/badges/84e8e000-b8a2-438e-b59a-97bf38bc6f8c/public_url",
    imgSrc: "/img/certifiacate/GCP-Certified-Cloud-Architect-Professional.png",
    alt: "GCP Cloud Architect Professional",
    title: "GCP Cloud Architect Professional",
  },
  {
    href: "https://www.credly.com/badges/9c57cd7c-314a-478f-8b95-78e0f0863915/public_url",
    imgSrc: "/img/certifiacate/GCP-Certified-Data-Engineer-Professional.png",
    alt: "GCP Data Engineer Professional",
    title: "GCP Data Engineer Professional",
  },
  {
    href: "https://www.credly.com/badges/",
    imgSrc: "/img/certifiacate/GCP-Certified-Machine-Learning-Professional.png",
    alt: "GCP Machine Learning Engineer Professional",
    title: "GCP Machine Learning Engineer Professional",
  },
  {
    href: "https://www.credly.com/badges/a2fe3119-46f3-4645-ba43-9cf45ca0e0af/public_url",
    imgSrc: "/img/certifiacate/AWS-Certified-Developer-Associate.png",
    alt: "AWS Developer - Associate",
    title: "AWS Developer - Associate",
  },
  {
    href: "https://www.credly.com/badges/975cbab0-458e-4aa8-899a-2b04c3613ca5/public_url",
    imgSrc: "/img/certifiacate/GCP-Certified-Data-Practitioner-Associate.png",
    alt: "GCP Data Practitioner Associate",
    title: "GCP Data Practitioner Associate",
  },
  {
    href: "https://www.credly.com/badges/be301b84-05ac-46cb-a919-d09de14bd5d7/public_url",
    imgSrc: "/img/certifiacate/AWS-Certified-Machine-Learning-Specialty_badge.png",
    alt: "AWS Certified Machine Learning - Specialty",
    title: "AWS Certified Machine Learning - Specialty",
  },
  {
    href: "https://www.credly.com/badges/8e4d14a6-a40e-4f35-8799-8261df8ede31/public_url",
    imgSrc: "/img/certifiacate/AWS-Certified-Solutions-Architect-Associate.png",
    alt: "AWS Certified Solution Architect - Associate",
    title: "AWS Certified Solution Architect - Associate",
  },
  {
    href: "https://learn.microsoft.com/api/credentials/share/zh-tw/79608093/64D636BAB8B01771?sharingId=CE859A14DF8570D2",
    imgSrc: "/img/certifiacate/Azure-Data-Scientist-Associate.png",
    alt: "Azure Data Scientist - Associate",
    title: "Azure Data Scientist - Associate",
  },
  {
    href: "https://www.credly.com/badges/913255b9-2fd4-4276-98fa-3d519aec45c3/public_url",
    imgSrc: "/img/certifiacate/Azure-AI-Fundamentals.png",
    alt: "Azure AI Fundamentals",
    title: "Azure AI Fundamentals",
  },
];

export default function Certificates() {
  // Group certifications by provider
  const gcpCerts = certificatesData.filter(cert => cert.title.includes('GCP'));
  const awsCerts = certificatesData.filter(cert => cert.title.includes('AWS'));
  const azureCerts = certificatesData.filter(cert => cert.title.includes('Azure'));

  return (
    <section id="certificates" className="py-16 sm:py-24 bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-4">
            Professional Certifications
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto"></div>
          <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
            Multi-cloud expertise validated by industry-recognized certifications
          </p>
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/10 to-sky-500/10 border border-blue-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-blue-400 mb-2">{gcpCerts.length}</div>
            <div className="text-sm text-neutral-300 font-medium">Google Cloud Platform</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-orange-400 mb-2">{awsCerts.length}</div>
            <div className="text-sm text-neutral-300 font-medium">Amazon Web Services</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-cyan-400 mb-2">{azureCerts.length}</div>
            <div className="text-sm text-neutral-300 font-medium">Microsoft Azure</div>
          </div>
        </div>

        {/* View on Credly Button */}
        <div className="text-center">
          <a
            href="https://www.credly.com/users/rich-liu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-neutral-800 hover:bg-sky-500 text-neutral-300 hover:text-white rounded-lg border border-neutral-700 hover:border-sky-500 transition-all duration-300 group font-medium"
          >
            <i className="fas fa-award text-xl"></i>
            <span>View All Certifications on Credly</span>
            <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
