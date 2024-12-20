import React from 'react';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-600">
              Ready to be part of something meaningful? Reach out to us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-rose-500" />
                  <a href="mailto:vaghelaashish111@gmail.com" className="text-gray-600 hover:text-rose-500">
                    vaghelaashish111@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-6 w-6 text-rose-500" />
                  <a href="https://linkedin.com/in/ashish-vaghela" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500">
                    Ashish Vaghela
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <SocialLink href="https://instagram.com/ThatSocialExperiment" icon={Instagram} />
                <SocialLink href="https://twitter.com/thatsocialexp" icon={Twitter} />
                <SocialLink href="https://linkedin.com/company/thatsocialexperiment" icon={Linkedin} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-rose-100 p-3 rounded-full hover:bg-rose-200 transition-colors"
    >
      <Icon className="h-6 w-6 text-rose-500" />
    </a>
  );
}