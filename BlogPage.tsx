import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { getBlogById, blogs } from '../data/blogs';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

export default function BlogPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = id ? getBlogById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Blog Post Not Found
          </h1>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id)
    .slice(0, 2);

  // Parse markdown-like content
  const contentParts = blog.content.split('\n\n');

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
            Back to Blog
          </button>

          <div className="max-w-4xl">
            {/* Category */}
            <span className="inline-block px-3 py-1 text-sm font-bold bg-gradient-brand text-dark rounded-full mb-6">
              {blog.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pb-12">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[300px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              {contentParts.map((part, index) => {
                const lines = part.split('\n');
                const firstLine = lines[0];

                // Heading
                if (firstLine.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl sm:text-3xl font-extrabold text-white mt-12 mb-6"
                    >
                      {firstLine.replace('## ', '')}
                    </h2>
                  );
                }

                // Subheading
                if (firstLine.startsWith('### ')) {
                  return (
                    <h3
                      key={index}
                      className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4"
                    >
                      {firstLine.replace('### ', '')}
                    </h3>
                  );
                }

                // List
                if (firstLine.startsWith('- ') || firstLine.startsWith('* ')) {
                  return (
                    <ul key={index} className="space-y-2 mb-6">
                      {lines.map((line, i) => {
                        if (line.startsWith('- ') || line.startsWith('* ')) {
                          const content = line.replace(/^[-*] /, '');
                          const boldMatch = content.match(/\*\*(.+?)\*\*/);
                          if (boldMatch) {
                            const parts = content.split(boldMatch[0]);
                            return (
                              <li key={i} className="flex items-start gap-3 text-white/70">
                                <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                                <span>
                                  <strong className="text-white">{boldMatch[1]}</strong>
                                  {parts[1]}
                                </span>
                              </li>
                            );
                          }
                          return (
                            <li key={i} className="flex items-start gap-3 text-white/70">
                              <span className="w-2 h-2 rounded-full bg-cyan mt-2 flex-shrink-0" />
                              {content}
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  );
                }

                // Paragraph
                if (firstLine.trim()) {
                  return (
                    <p key={index} className="text-white/70 leading-relaxed mb-6">
                      {firstLine}
                    </p>
                  );
                }

                return null;
              })}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-cyan" />
                <span className="text-white/50 text-sm">Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 text-sm bg-white/5 text-white/70 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                  {blog.category}
                </span>
                <span className="px-4 py-2 text-sm bg-white/5 text-white/70 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                  Technology
                </span>
                <span className="px-4 py-2 text-sm bg-white/5 text-white/70 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                  Innovation
                </span>
              </div>
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
                Want to Implement <span className="gradient-text">These Solutions?</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Our team can help you build cutting-edge technology solutions tailored to your business needs.
              </p>
              <Link to="/#contact" className="btn-primary inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative py-20 border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <h2 className="text-2xl font-extrabold text-white mb-8">
            More Articles
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {relatedBlogs.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="group glass-card hover:border-cyan/30 transition-all duration-300"
              >
                <img
                  src={related.image}
                  alt={related.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <span className="text-xs text-cyan mb-2 block">{related.category}</span>
                <h3 className="text-lg font-extrabold text-white group-hover:text-cyan transition-colors line-clamp-2">
                  {related.title}
                </h3>
                <p className="text-sm text-white/60 mt-2 line-clamp-2">
                  {related.excerpt}
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
