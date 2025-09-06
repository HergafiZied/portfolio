import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Download } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Creative
                  <span className="text-amber-500 block">Design Solutions</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  Bringing brands to life through thoughtful design, innovative 3D visualizations,
                  and compelling visual storytelling.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/designs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View Portfolio
                  <ArrowRight className="ml-2" size={20} />
                </Link>

                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-200"
                >
                  Download CV
                  <Download className="ml-2" size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://drive.google.com/thumbnail?id=1IMUV-kNZTlHI-oAoHjRvDn-Gd9G1m7RZ&sz=w2000"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-200 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors">
                <Award className="text-amber-600" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">20+</h3>
              <p className="text-slate-600">Projects Completed</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors">
                <Users className="text-amber-600" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">10+</h3>
              <p className="text-slate-600">Clients</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors">
                <Clock className="text-amber-600" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">3+</h3>
              <p className="text-slate-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
                About Me
              </h2>
              <p className="text-lg text-slate-800 leading-relaxed">
                I'm a passionate graphic designer with over 3 years of experience creating
                compelling visual and innovative design solutions. My work spans
                from traditional 2D design to modern 3D visualizations.
              </p>
              <p className="text-lg text-slate-800 leading-relaxed">
                I believe great design should not only look beautiful but also solve problems
                and communicate effectively. Every project is an opportunity to create something
                meaningful and impactful.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Logo Design', 'Social Media Poster', '3D Modeling', 'Print Design', '3D Animations'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white text-slate-700 rounded-full border border-slate-200 hover:border-amber-300 hover:text-amber-600 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://drive.google.com/thumbnail?id=1oh6rTD80rDa5f4qpcmUaKh9Iz_8MT0ft&sz=w2000"
                alt="Designer workspace"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Let's collaborate on your next project and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start a Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;