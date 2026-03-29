import { useEffect, useRef } from 'react';
import { Check, Zap, Shield, Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Custom-Built Technology',
    description: 'We design solutions tailored to your unique business challenges.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Flawless Performance',
    description: 'Speed, security, and reliability in every project.',
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: 'End-to-End Support',
    description: 'From strategy to execution, we\'ve got you covered.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Scalable & Future-Ready',
    description: 'Software that grows with your business.',
  },
];

export default function WhyWeeFlare() {
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

      // Cards arc-to-position animation
      const cardElements = cards.children;
      const rotations = [-15, -5, 5, 15];
      const offsets = [-50, -20, 20, 50];

      gsap.fromTo(
        cardElements,
        (i: number) => ({
          rotateZ: rotations[i] || 0,
          x: offsets[i] || 0,
          opacity: 0,
        }),
        {
          rotateZ: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
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
      id="why-weeflare"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="section-label">How We Do It</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4">
            Why <span className="gradient-text">WeeFlare</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative glass-card text-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan/30"
            >
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6 flex justify-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-brand/10 text-cyan group-hover:bg-gradient-brand group-hover:text-dark transition-all duration-500 animate-pulse-glow">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-extrabold text-white mb-3 group-hover:text-cyan transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Checkmark */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                <div className="w-6 h-6 rounded-full bg-gradient-brand flex items-center justify-center">
                  <Check className="w-3 h-3 text-dark" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
