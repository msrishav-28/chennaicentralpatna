'use client';

import SidebarNavigation from '@/components/sections/sidebar-navigation';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Multiple outlets across Bangalore, Karnataka'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 80 XXXX XXXX'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@therameshwaramcafe.org'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '6:30am - 11:30am\n4pm - 1am'
    }
  ];

  return (
    <div className="flex min-h-screen">
      <SidebarNavigation />
      
      <main className="w-full lg:ml-[300px]">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] lg:h-[60vh] overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide1-10.jpg?"
            alt="Contact The Rameshwaram Cafe"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="font-display text-5xl md:text-[72px] font-bold uppercase tracking-[2px] text-white animate-fade-in-down">
              CONTACT US
            </h1>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-background-light py-16 md:py-24">
          <div className="container">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="font-display text-[2rem] md:text-[3rem] font-bold uppercase tracking-[1px] text-text-secondary text-center mb-16 animate-fade-in-up">
                GET IN TOUCH
              </h2>

              <div 
                ref={cardsRef}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              >
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={info.title}
                      className={`text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                        cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-primary/10 rounded-full mb-4 transition-transform duration-300 hover:scale-110">
                        <Icon className="w-8 h-8 text-accent-primary" />
                      </div>
                      <h3 className="font-body text-[1.25rem] font-semibold text-text-heading-accent mb-3">
                        {info.title}
                      </h3>
                      <p className="text-text-tertiary text-[1rem] leading-[1.8] whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Contact Form */}
              <div 
                ref={formRef}
                className={`max-w-[700px] mx-auto transition-all duration-1000 ${
                  formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h3 className="font-display text-[2rem] font-bold uppercase tracking-[1px] text-text-heading-accent text-center mb-8">
                  Send Us A Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-subtle rounded-[4px] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-text-secondary font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-subtle rounded-[4px] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-text-secondary font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-subtle rounded-[4px] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-text-secondary font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border-subtle rounded-[4px] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-block rounded-[4px] bg-accent-primary hover:bg-accent-tertiary text-primary-foreground px-12 py-4 text-[15px] font-semibold uppercase tracking-[1px] transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_4px_12px_rgba(200,117,51,0.3)] hover:shadow-[0_6px_16px_rgba(200,117,51,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}