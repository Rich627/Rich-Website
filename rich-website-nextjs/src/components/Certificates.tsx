import Image from 'next/image';

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
  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-sky-400 tracking-tight mb-6">
            Certifications
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Professional Cloud & AI/ML Certifications across AWS, GCP, and Azure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificatesData.map((cert, index) => (
            <a
              key={index}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900 hover:bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-lg hover:shadow-cyan-500/30 transition duration-300"
            >
              <div className="aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={cert.imgSrc}
                  alt={cert.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center text-base font-medium text-slate-100 group-hover:text-cyan-300">
                {cert.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
