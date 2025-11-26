import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Get In Touch</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Let's Discuss Your Project</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Whether you need a complex backend system or a quick consultation, feel free to reach out.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-lg text-red-500 border border-slate-800">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Email</h4>
                  <a href="mailto:info.abdullah.manager@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors">
                    info.abdullah.manager@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-lg text-red-500 border border-slate-800">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Phone</h4>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-lg text-red-500 border border-slate-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Location</h4>
                  <p className="text-slate-400">Remote / Available Worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-red-500 text-slate-200 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-red-500 text-slate-200 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-red-500 text-slate-200 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-600 transition-all shadow-lg shadow-red-600/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;