import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Clock, Briefcase, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

const stats: StatProps[] = [
  { value: '98', suffix: '%', label: 'Customer Satisfaction', icon: <Users className="w-6 h-6" /> },
  { value: '6', suffix: ' Mins', label: 'Average Answer Time', icon: <Clock className="w-6 h-6" /> },
  { value: '15', suffix: '+', label: 'Projects Delivered', icon: <Briefcase className="w-6 h-6" /> },
  { value: '24', suffix: '/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> },
];

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const numericValue = parseInt(value);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(
          { val: 0 },
          {
            val: numericValue,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function () {
              setCount(Math.floor(this.targets()[0].val));
            },
          }
        );
      },
      once: true,
    });

    return () => trigger.kill();
  }, [numericValue]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const statsGrid = statsRef.current;
    if (!section || !content || !statsGrid) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        content.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );

      // Stats cards animation with 3D flip
      gsap.fromTo(
        statsGrid.children,
        { rotateY: -90, opacity: 0 },
        {
          rotateY: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsGrid,
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
      id="about"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-green/5 via-transparent to-transparent opacity-30" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-4">
                Next-Generation{' '}
                <span className="gradient-text">B2B Software</span> Solutions
              </h2>
            </div>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                WeeFlare is a next-generation B2B software solutions company specializing in 
                custom-built solutions that drive efficiency, innovation, and growth.
              </p>
              <p>
                We don't just develop software—we engineer flawless digital experiences that 
                help businesses scale and outperform the competition.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/#contact"
                className="btn-primary flex items-center gap-2 group"
              >
                Work With Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-6"
            style={{ perspective: '1000px' }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`glass-card group hover:border-cyan/30 transition-all duration-500 ${
                  index % 2 === 1 ? 'lg:translate-y-8' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-brand/10 text-cyan group-hover:bg-gradient-brand group-hover:text-dark transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
