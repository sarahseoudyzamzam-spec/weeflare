import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Layers, CheckCircle, Cpu, Database, Cloud, Monitor, ArrowRight } from 'lucide-react';
import { getCaseStudyById, caseStudies } from '../data/caseStudies';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const study = id ? getCaseStudyById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!study) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Case Study Not Found
          </h1>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedStudies = caseStudies
    .filter((s) => s.id !== study.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan/10 via-transparent to-transparent opacity-30" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/60 hover:text-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </button>

          <div className="max-w-4xl">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-sm font-bold bg-gradient-brand/10 text-cyan rounded-full border border-cyan/20">
                Case Study
              </span>
              <span className="flex items-center gap-1 text-sm text-white/50">
                <Calendar className="w-4 h-4" />
                {study.timeline}
              </span>
              <span className="flex items-center gap-1 text-sm text-white/50">
                <Layers className="w-4 h-4" />
                {study.services.length} Services
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-white/70 mb-8">
              {study.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-4">
                  The Challenge
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-4">
                  Our Approach
                </h2>
                <ul className="space-y-3">
                  {study.approach.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-4">
                  The Solution
                </h2>
                <ul className="space-y-3">
                  {study.solution.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-dark text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Complexity & Why It Mattered */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-card">
                  <h3 className="text-lg font-extrabold text-white mb-2">
                    Technical Complexity
                  </h3>
                  <p className="text-white/60 text-sm">{study.technicalComplexity}</p>
                </div>
                <div className="glass-card">
                  <h3 className="text-lg font-extrabold text-white mb-2">
                    Why It Mattered
                  </h3>
                  <p className="text-white/60 text-sm">{study.whyItMattered}</p>
                </div>
              </div>

              {/* Results */}
              <div className="glass-card border-cyan/20">
                <h2 className="text-2xl font-extrabold text-white mb-4">
                  Results
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {study.results}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="glass-card">
                <h3 className="text-lg font-extrabold text-white mb-4">
                  Tech Stack
                </h3>
                <div className="space-y-4">
                  {study.techStack.frontend && (
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5 text-cyan" />
                      <div>
                        <div className="text-xs text-white/50">Frontend</div>
                        <div className="text-white text-sm">{study.techStack.frontend}</div>
                      </div>
                    </div>
                  )}
                  {study.techStack.backend && (
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-green" />
                      <div>
                        <div className="text-xs text-white/50">Backend</div>
                        <div className="text-white text-sm">{study.techStack.backend}</div>
                      </div>
                    </div>
                  )}
                  {study.techStack.database && (
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-cyan" />
                      <div>
                        <div className="text-xs text-white/50">Database</div>
                        <div className="text-white text-sm">{study.techStack.database}</div>
                      </div>
                    </div>
                  )}
                  {study.techStack.cloud && (
                    <div className="flex items-center gap-3">
                      <Cloud className="w-5 h-5 text-green" />
                      <div>
                        <div className="text-xs text-white/50">Cloud</div>
                        <div className="text-white text-sm">{study.techStack.cloud}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Services */}
              <div className="glass-card">
                <h3 className="text-lg font-extrabold text-white mb-4">
                  Services Provided
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-xs bg-white/5 text-white/70 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/#contact"
                className="btn-primary w-full text-center block"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="relative max-w-4xl mx-auto text-center glass-card py-16 px-8 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-brand rounded-full opacity-10 blur-3xl pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Build Something <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Let's create a solution that transforms your vision into reality.
              </p>
              <Link to="/#contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="relative py-20 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <h2 className="text-2xl font-extrabold text-white mb-8">
            More Case Studies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedStudies.map((related) => (
              <Link
                key={related.id}
                to={`/case-study/${related.id}`}
                className="group glass-card hover:border-cyan/30 transition-all duration-300"
              >
                <img
                  src={related.image}
                  alt={related.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-extrabold text-white group-hover:text-cyan transition-colors line-clamp-2">
                  {related.title}
                </h3>
                <p className="text-sm text-white/60 mt-2 line-clamp-2">
                  {related.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
