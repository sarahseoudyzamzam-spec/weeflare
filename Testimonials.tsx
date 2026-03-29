import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "WeeFlare transformed our vision into reality. Their team's technical expertise and dedication to quality resulted in a platform that exceeded our expectations. From 1,500 users to over 80,000 in less than a year.",
    author: "RivalN Team",
    role: "Founders",
    company: "RivalN Esports Platform",
    rating: 5,
  },
  {
    quote: "The level of professionalism and attention to detail from WeeFlare is unmatched. They delivered a robust, scalable solution that has become the backbone of our operations.",
    author: "Client Testimonial",
    role: "CTO",
    company: "Enterprise Client",
    rating: 5,
  },
  {
    quote: "Working with WeeFlare was a game-changer for our business. Their custom solutions helped us streamline operations and achieve remarkable growth in record time.",
    author: "Satisfied Client",
    role: "Product Manager",
    company: "Tech Startup",
    rating: 5,
  },
];

export default function Testimonials() {
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

      // Cards animation
      gsap.fromTo(
        cards.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
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
      id="testimonials"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent opacity-30" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glass-card transition-all duration-500 hover:-translate-y-2 hover:border-cyan/30"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center">
                <Quote className="w-5 h-5 text-dark" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-sm text-white/50">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
