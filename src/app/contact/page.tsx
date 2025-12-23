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
        content: 'info@chennaicentral.in'
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
              alt="Contact Chennai Central"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-brand-green/60" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <span className="text-brand-gold font-script text-3xl mb-4 animate-fade-in">We'd Love to Hear from You</span>
              <h1 className="font-display text-5xl md:text-[80px] font-bold uppercase tracking-[4px] text-white animate-fade-in-down drop-shadow-2xl">
                CONTACT US
              </h1>
              <div className="h-1.5 w-32 bg-brand-gold mt-6 rounded-full animate-scale-in" />
            </div>
          </section>
  
          {/* Contact Info Section */}
          <section className="bg-brand-cream py-16 md:py-32">
            <div className="container">
              <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-20">
                  <span className="text-brand-gold font-script text-3xl mb-2 block">Connect With Us</span>
                  <h2 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold uppercase tracking-[2px] text-brand-green mb-6">
                    GET IN TOUCH
                  </h2>
                  <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
                </div>
  
                <div 
                  ref={cardsRef}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
                >
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div 
                        key={info.title}
                        className={`text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group ${
                          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-green/5 rounded-2xl mb-6 transition-all duration-500 group-hover:bg-brand-green group-hover:rotate-12">
                          <Icon className="w-10 h-10 text-brand-green group-hover:text-brand-gold transition-colors duration-500" />
                        </div>
                        <h3 className="font-display text-[1.5rem] font-bold text-brand-green mb-4">
                          {info.title}
                        </h3>
                        <p className="text-brand-green/70 text-[1rem] leading-[1.8] whitespace-pre-line font-medium">
                          {info.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
  
                {/* Contact Form */}
                <div 
                  ref={formRef}
                  className={`max-w-[800px] mx-auto transition-all duration-1000 bg-white p-10 md:p-16 rounded-[40px] shadow-2xl ${
                    formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="text-center mb-12">
                    <h3 className="font-display text-[2.5rem] font-bold uppercase tracking-[1px] text-brand-green mb-4">
                      Send Us A Message
                    </h3>
                    <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full" />
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="name" className="block text-brand-green font-bold uppercase text-xs tracking-widest ml-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-6 py-4 bg-brand-cream/30 border border-brand-green/10 rounded-2xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all duration-300 font-medium"
                        />
                      </div>
  
                      <div className="space-y-3">
                        <label htmlFor="email" className="block text-brand-green font-bold uppercase text-xs tracking-widest ml-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-6 py-4 bg-brand-cream/30 border border-brand-green/10 rounded-2xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all duration-300 font-medium"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-3">
                      <label htmlFor="phone" className="block text-brand-green font-bold uppercase text-xs tracking-widest ml-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        className="w-full px-6 py-4 bg-brand-cream/30 border border-brand-green/10 rounded-2xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all duration-300 font-medium"
                      />
                    </div>
  
                    <div className="space-y-3">
                      <label htmlFor="message" className="block text-brand-green font-bold uppercase text-xs tracking-widest ml-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="How can we help you?"
                        className="w-full px-6 py-4 bg-brand-cream/30 border border-brand-green/10 rounded-2xl focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 transition-all duration-300 resize-none font-medium"
                      />
                    </div>
  
                    <div className="text-center pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-block rounded-full bg-brand-green hover:bg-brand-gold text-brand-white hover:text-brand-green px-16 py-5 text-[16px] font-bold uppercase tracking-[2px] transition-all duration-500 ease-in-out hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
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