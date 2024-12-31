import React from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin, Globe } from 'lucide-react';

export function ContactForm() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Let's Work Together
                </h2>
                <p className="text-gray-400 text-lg">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
              </div>
              
              <div className="space-y-6">
                <ContactInfo icon={<Mail />} text="eduardo@example.com" />
                <ContactInfo icon={<Phone />} text="+1 (555) 123-4567" />
                <ContactInfo icon={<MapPin />} text="San Francisco, CA" />
                <ContactInfo icon={<Globe />} text="www.eduardocarvalho.dev" />
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Available For</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Freelance', 'Full-time', 'Consulting', 'Partnership'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput icon={<Mail />} type="text" placeholder="Your Name" />
                  <FormInput icon={<Mail />} type="email" placeholder="Your Email" />
                </div>
                <FormInput icon={<MessageSquare />} type="text" placeholder="Subject" />
                <div>
                  <textarea
                    className="w-full px-4 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 
                             outline-none placeholder-gray-500 h-32"
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold 
                           py-3 px-6 rounded-lg flex items-center justify-center gap-2 
                           hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 text-gray-300">
      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}

function FormInput({ icon, type, placeholder }: { icon: React.ReactNode; type: string; placeholder: string }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        className="w-full px-10 py-3 bg-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 
                   outline-none placeholder-gray-500"
        placeholder={placeholder}
      />
    </div>
  );
}