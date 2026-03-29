import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Linkedin, Mail } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Asser Abdelaziz',
    role: 'Principal Product Manager',
    initials: 'AA',
    color: 'from-cyan to-blue-500',
  },
  {
    name: 'Omar Ehab',
    role: 'Principal Software Architect',
    initials: 'OE',
    color: 'from-green to-emerald-500',
  },
  {
    name: 'Abdelrahman Zain',
    role: 'Principal Mobile Engineer',
    initials: 'AZ',
    color: 'from-purple to-pink-500',
  },
  {
    name: 'Alaa Saad',
    role: 'Principal Quality Assurance Engineer',
    initials: 'AS',
    color: 'from-orange to-red-500',
  },
  {
    name: 'Rowan Salem',
    role: 'Senior Full-Stack Engineer',
    initials: 'RS',
    color: 'from-yellow to-orange-500',
  },
  {
    name: 'Ahmed Abbas',
    role: 'Front-End Engineer',
    initials: 'AA',
    color: 'from-pink to-rose-500',
  },
  {
    name: 'Yomna Elnoory',
    role: 'Mobile Application Engineer',
    initials: 'YE',
    color: 'from-teal to-cyan-500',
  },
  {
    name: 'Esraa Ismael',
    role: 'Quality Assurance Engineer',
    initials: 'EI',
    color: 'from-indigo to-purple-500',
  },
  {
    name: 'Mustafa Helal',
    role: 'Quality Assurance Engineer',
    initials: 'MH',
    color: 'from-rose to-pink-500',
  },
];

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan/10 via-transparent to-transparent opacity-30" />
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <span className="section-label">Our Team</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-4 mb-6">
              Meet Our <span className="gradient-text">Creative Team</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We're a passionate team of engineers, designers, and product managers 
              dedicated to building exceptional software solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group glass-card text-center transition-all duration-500 hover:-translate-y-2 hover:border-cyan/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Avatar */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-extrabold text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {member.initials}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-extrabold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan text-sm mb-4">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-cyan hover:bg-white/10 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:contact@weeflare.com"
                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-cyan hover:bg-white/10 transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
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
                Want to Join Our <span className="gradient-text">Team?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about 
                building exceptional software solutions.
              </p>
              <Link to="/#contact" className="btn-primary inline-flex items-center gap-2">
                Get in Touch
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
