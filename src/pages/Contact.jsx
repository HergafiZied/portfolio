import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState < 'idle' | 'success' | 'error' > ('idle');


  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwpnngyl";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      if (!res.ok) {
        // Formspree returns non-2xx for errors
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // reset success/error UI after a short delay
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'd love to hear about your vision
            and discuss how we can bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Whether you need a complete brand identity, stunning 3D visualizations,
                or any design work in between, I'm here to help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="text-amber-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">hergafi.zied.official@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="text-amber-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <p className="text-slate-600">+216 27 661 583</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-amber-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Location</h3>
                  <p className="text-slate-600">Tunis, Sfax</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Response Time</h3>
              <p className="text-slate-600">
                I typically respond to new inquiries within 24 hours. For urgent projects,
                please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form id="ContactForm" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a project type</option>
                  <option value="logo">Logo Design</option>
                  <option value="logo">Social media posters Design</option>
                  <option value="print">Print Design</option>
                  <option value="3d">3D Visualization</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 ${isSubmitting
                  ? 'bg-slate-400 text-white cursor-not-allowed'
                  : submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-amber-500 text-white hover:bg-amber-600 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
              >
                {isSubmitting
                  ? 'Sending...'
                  : submitStatus === 'success'
                    ? 'Message Sent Successfully!'
                    : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-green-600 font-medium">
                  Thank you for your message! I'll get back to you within 24 hours.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-center text-red-600 font-medium">
                  Something went wrong. Please try again or email alex.morgan@example.com directly.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What's your typical project timeline?</h3>
              <p className="text-slate-600">
                Most projects take 2-6 weeks depending on complexity. Logo designs typically take 1-2 weeks,
                while complete brand identities may take 4-6 weeks.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Do you offer revisions?</h3>
              <p className="text-slate-600">
                Yes! I include 3 rounds of revisions in all my packages to ensure you're completely
                satisfied with the final result.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">What file formats do you provide?</h3>
              <p className="text-slate-600">
                I deliver all final files in multiple formats including AI, PDF, PNG, SVG(if needed) and JPG
                to ensure compatibility across all platforms.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Can you work with tight deadlines?</h3>
              <p className="text-slate-600">
                Rush projects are possible with advance notice. Please mention your deadline
                in your message and I'll let you know if it's feasible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
