'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Get In Touch
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Have questions about your move? We're here to help. Reach out to our friendly team 
              for expert advice and personalized service.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '0800 466 838',
                  subContent: 'Available 7 days a week',
                  href: 'tel:0800466838',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'info@nzmovingservices.co.nz',
                  subContent: "We'll respond within 24 hours",
                  href: 'mailto:info@nzmovingservices.co.nz',
                },
                {
                  icon: MapPin,
                  title: 'Location',
                  content: 'Christchurch, New Zealand',
                  subContent: 'Serving all of Canterbury & NZ wide',
                  href: '#',
                },
                {
                  icon: Clock,
                  title: 'Hours',
                  content: 'Mon - Sun: 7:00 AM - 7:00 PM',
                  subContent: 'Flexible hours for your convenience',
                  href: '#',
                },
              ].map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <item.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-orange-600 font-semibold">{item.content}</p>
                    <p className="text-slate-500 text-sm">{item.subContent}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 lg:h-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.176120775005!2d172.6362!3d-43.5321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318b1e0c7c5c5d%3A0x5e5c5c5c5c5c5c5c!2sChristchurch%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
              <p className="font-bold text-slate-900">Christchurch Based</p>
              <p className="text-sm text-slate-600">Serving all of New Zealand</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}