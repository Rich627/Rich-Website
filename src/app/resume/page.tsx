import Link from "next/link";

export const metadata = {
  title: "Resume - Richie's Profile",
  description: "Jui Chi (Richie) Liu's Resume - AI/ML Engineer & Cloud Architect",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Link
            href="/"
            className="text-white text-decoration-none d-flex align-items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Portfolio</span>
          </Link>
          <a
            href="/resume.pdf"
            download="Jui Chi Liu Resume.pdf"
            className="btn btn-outline-light d-flex align-items-center gap-2"
          >
            <i className="fas fa-download"></i>
            <span>Download PDF</span>
          </a>
        </div>
        <div
          className="rounded-3 overflow-hidden"
          style={{ height: "calc(100vh - 120px)" }}
        >
          <iframe
            src="/resume.pdf"
            className="w-100 h-100 border-0"
            title="Jui Chi Liu Resume"
          />
        </div>
      </div>
    </div>
  );
}
