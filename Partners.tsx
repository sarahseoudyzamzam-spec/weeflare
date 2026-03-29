import { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '1.5K → 80K+', label: 'Users Growth', icon: <Users className="w-5 h-5" /> },
  { value: '< 1 Year', label: 'Timeline', icon: <TrendingUp className="w-5 h-5" /> },
  { value: '#1', label: 'Esports Platform', icon: <Trophy className="w-5 h-5" /> },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const content = contentRef.current;
    if (!section || !header || !content) return;

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

      // Content animation
      gsap.fromTo(
        content.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 70%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent opacity-30" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="section-label">Our Partners</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4">
            Transforming Businesses Through{' '}
            <span className="gradient-text">Partnership</span>
          </h2>
        </div>

        {/* Partner Card */}
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <div className="relative group">
            <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-dark-100 border border-white/5">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src="/case-study-rivaln-partnership.jpg"
                  alt="RivalN Gaming Partnership"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
                
                {/* Partner Logo Badge */}
                <div className="absolute top-6 left-6">
                  <div className="glass-card py-2 px-4 flex items-center gap-3">
                    <img 
                      src="/rivaln-logo.png" 
                      alt="RivalN" 
                      className="h-8 w-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                    WeeFlare × RivalN Partnership
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    From 1.5K to 80K+ users in under a year — WeeFlare helped transform 
                    RivalN into a Saudi esports powerhouse with custom features, creative 
                    design, and continuous scalability in mind.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="flex justify-center mb-2 text-cyan">
                        {stat.icon}
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/partnership"
                    className="btn-primary flex items-center gap-2 text-sm py-3 px-6"
                  >
                    View Partnership
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/case-study/rivaln-platform"
                    className="btn-secondary flex items-center gap-2 text-sm py-3 px-6"
                  >
                    Explore Case Studies
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-brand rounded-full opacity-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
