import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { caseStudies } from '../data/caseStudies';

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
          },
        }
      );

      // Grid cards animation
      gsap.fromTo(
        grid.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 75%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Display first 6 case studies on homepage
  const displayedCaseStudies = caseStudies.slice(0, 6);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-green/5 via-transparent to-transparent opacity-30" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="section-label">Case Studies</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4">
              Our Latest <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md mt-4 lg:mt-0">
            Explore how we've helped businesses transform their digital presence 
            and achieve remarkable growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedCaseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className="group relative rounded-2xl overflow-hidden bg-dark-100 border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-cyan/30"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-dark-100/50 to-transparent" />
                
                {/* Tech Stack Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {study.techStack.frontend && (
                    <span className="px-2 py-1 text-xs font-bold bg-dark/80 backdrop-blur-sm text-cyan rounded-full border border-cyan/20">
                      {study.techStack.frontend.split(',')[0]}
                    </span>
                  )}
                  {study.techStack.backend && (
                    <span className="px-2 py-1 text-xs font-bold bg-dark/80 backdrop-blur-sm text-green rounded-full border border-green/20">
                      {study.techStack.backend.split(' ')[0]}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {study.timeline}
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    {study.services.length} Services
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-cyan transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-sm text-white/60 line-clamp-2 mb-4">
                  {study.subtitle}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/case-study/rivaln-platform"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
