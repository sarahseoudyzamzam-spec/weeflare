import { useEffect, useRef } from 'react';
import { ArrowRight, Code2, Smartphone, Palette, Plug, LineChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Enterprise Software Development',
    description: 'Custom-built platforms that streamline operations and drive efficiency.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Web & Mobile App Development',
    description: 'High-performance applications designed for seamless user experiences.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design & Consulting',
    description: 'Intuitive, visually stunning interfaces that engage and convert.',
  },
  {
    icon: <Plug className="w-8 h-8" />,
    title: 'System Integration & API Development',
    description: 'Seamless connectivity between software, services, and third-party tools.',
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Systems Business Analysis',
    description: 'In-depth analysis of business processes to identify the best software solutions.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Software Project Management',
    description: 'Expert guidance and project management to ensure smooth execution.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;
    if (!section || !header || !cards) return;

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

      // Cards stagger animation
      gsap.fromTo(
        cards.children,
        { y: 60, opacity: 0, rotateZ: -2 },
        {
          y: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 75%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="section-label">Our Services</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4">
            Tailor-Made <span className="gradient-text">Solutions</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative gradient-border p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-brand/10 text-cyan group-hover:bg-gradient-brand group-hover:text-dark transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-extrabold text-white mb-3 group-hover:text-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/team" className="btn-secondary inline-flex items-center gap-2">
            Meet The Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
