import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone (Egypt)',
    values: ['+20 106 269 0945'],
    href: 'tel:+201062690945',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone (UAE)',
    values: ['+971 585 156 906'],
    href: 'tel:+971585156906',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    values: ['contact@weeflare.com'],
    href: 'mailto:contact@weeflare.com',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Locations',
    values: ['Alexandria, Egypt', 'Marina Square, Reem Island', 'Abu Dhabi, UAE'],
    href: 'https://share.google/vPrl9N8m9JGLWSC3x',
    isExternal: true,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    if (!section || !header || !form || !info) return;

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

      // Info cards animation
      gsap.fromTo(
        info.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: info,
            start: 'top 75%',
          },
        }
      );

      // Form fields animation
      gsap.fromTo(
        form.querySelectorAll('.form-field'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 75%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      fullName: '',
      company: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-green/5 via-transparent to-transparent opacity-30" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="section-label">Contact Us</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-4">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to take your business to the next level? Let's create the perfect solution together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-4 p-4 rounded-xl bg-dark-100 border border-white/5 hover:border-cyan/30 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gradient-brand/10 text-cyan group-hover:bg-gradient-brand group-hover:text-dark transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white/50 mb-1 flex items-center gap-1">
                    {item.label}
                    {item.isExternal && <ExternalLink className="w-3 h-3" />}
                  </div>
                  {item.values.map((value) => (
                    <div key={value} className="text-white group-hover:text-cyan transition-colors">
                      {value}
                    </div>
                  ))}
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <div className="text-sm text-white/50 mb-3">Follow Us</div>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/weeflare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-dark-100 border border-white/5 text-white/60 hover:text-cyan hover:border-cyan/30 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="form-field">
                <label className="block text-sm text-white/70 mb-2">
                  Full Name <span className="text-cyan">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-field">
                <label className="block text-sm text-white/70 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="form-field">
                <label className="block text-sm text-white/70 mb-2">
                  Phone <span className="text-cyan">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all"
                  placeholder="+20 106 269 0945"
                />
              </div>
              <div className="form-field">
                <label className="block text-sm text-white/70 mb-2">
                  Email <span className="text-cyan">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label className="block text-sm text-white/70 mb-2">
                Subject <span className="text-cyan">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div className="form-field">
              <label className="block text-sm text-white/70 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan/50 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="form-field">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Submit Now
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4">
            <span className="text-white/70">Prefer to schedule a call?</span>
            <a 
              href="tel:+201062690945" 
              className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
            >
              Call Us Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
