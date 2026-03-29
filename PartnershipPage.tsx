import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Trophy, Zap, Shield, Clock } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { caseStudies } from '../data/caseStudies';

const partnershipStats = [
  { icon: <Users className="w-6 h-6" />, value: '1.5K → 80K+', label: 'User Growth' },
  { icon: <TrendingUp className="w-6 h-6" />, value: '5,233%', label: 'Growth Rate' },
  { icon: <Clock className="w-6 h-6" />, value: '< 1 Year', label: 'Timeline' },
  { icon: <Trophy className="w-6 h-6" />, value: '#1', label: 'Esports Platform KSA' },
];

const partnershipHighlights = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Rapid Scaling',
    description: 'Built a scalable architecture that supported exponential user growth without performance degradation.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Reliable Infrastructure',
    description: 'Implemented robust systems with 99.9% uptime, ensuring seamless tournament experiences.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community Building',
    description: 'Created social features that fostered engagement and built a thriving gaming community.',
  },
];

export default function PartnershipPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get all RivalN case studies
  const rivalnCaseStudies = caseStudies.slice(0, 6);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan/10 via-transparent to-transparent opacity-30" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Partnership Badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <img 
                  src="/weeflare-logo.png" 
                  alt="WeeFlare" 
                  className="h-12 w-auto"
                />
                <span className="text-white/40 text-2xl">×</span>
                <img 
                  src="/rivaln-logo.png" 
                  alt="RivalN" 
                  className="h-10 w-auto"
                />
              </div>
              <span className="px-4 py-2 text-sm font-bold bg-white/5 text-white/70 rounded-full border border-white/10">
                Strategic Partnership
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                  WeeFlare <span className="gradient-text">×</span> RivalN
                </h1>
                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                  From 1.5K to 80K+ users in under a year — WeeFlare helped transform 
                  RivalN into a Saudi esports powerhouse with custom features, creative 
                  design, and continuous scalability in mind.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/case-study/rivaln-platform" className="btn-primary flex items-center gap-2">
                    Explore Case Studies
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/#contact" className="btn-secondary">
                    Start Your Partnership
                  </Link>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="/case-study-rivaln-partnership.jpg"
                    alt="WeeFlare RivalN Partnership"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-brand rounded-full opacity-20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 border-y border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partnershipStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand/10 text-cyan mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Partnership */}
      <section className="relative py-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="section-label">About The Partnership</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6">
              Building Saudi Arabia's <span className="gradient-text">#1 Esports Platform</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              RivalN approached WeeFlare with a vision: to create the premier competitive gaming 
              platform in Saudi Arabia. What started as a small project with 1,500 users grew into 
              a comprehensive ecosystem serving over 80,000 gamers, hosting tournaments, and building 
              a vibrant community.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnershipHighlights.map((highlight) => (
              <div key={highlight.title} className="glass-card text-center group hover:border-cyan/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-brand/10 text-cyan mb-4 group-hover:bg-gradient-brand group-hover:text-dark transition-all duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-20 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="text-center mb-12">
            <span className="section-label">Our Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4">
              Projects We Built <span className="gradient-text">Together</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rivalnCaseStudies.map((study) => (
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
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-cyan transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-white/60 line-clamp-2 mb-4">
                    {study.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="relative max-w-4xl mx-auto text-center glass-card py-16 px-8 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-brand rounded-full opacity-10 blur-3xl pointer-events-none" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Ready to Build Something <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Let's create a partnership that transforms your vision into reality. 
                Just like we did with RivalN.
              </p>
              <Link to="/#contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
