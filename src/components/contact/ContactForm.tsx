import { useState, ChangeEvent, FormEvent } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL?.replace(/['"]/g, '');
    
    if (!formspreeUrl) {
      console.error('Formspree URL not configured');
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputStyles = "p-2 rounded bg-neutral text-secondary placeholder-gray-400 focus:outline-none border border-neutralTwo focus:border-primary transition-colors";
  const buttonStyles = "w-full bg-primary hover:bg-accent text-neutral font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors disabled:bg-base-300 disabled:cursor-not-allowed";

  return (
    <section className="p-6 bg-[#212529] mb-6 rounded-lg shadow-lg text-center">
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputStyles}
            required
            autoComplete="new-password"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className={inputStyles}
            required
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={4}
            className={`${inputStyles} resize-none`}
            required
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={buttonStyles}
        >
          <Send size={18} />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-success">Message sent successfully!</p>
        )}
        
        {status === 'error' && (
          <p className="text-error">Failed to send message. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;