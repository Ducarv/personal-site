import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-400 mb-12">
            Interested in working together? Let's discuss your project.
          </p>
          <div className="bg-gray-800 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-left text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 outline-none h-32"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}