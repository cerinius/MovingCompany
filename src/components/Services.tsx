// components/Services.tsx
'use client';

import { motion } from 'framer-motion';
import { Home, Music, Building2, Package, Truck, Boxes } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'House Moving',
    description: 'Complete home relocation services. From packing to unpacking, we handle everything with care.',
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Music,
    title: 'Piano Moving',
    description: 'Specialized piano movers with the right equipment and expertise for your precious instrument.',
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Building2,
    title: 'Office Relocation',
    description: 'Minimize downtime with our efficient office moving services. We work around your schedule.',
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Package,
    title: 'Single Items',
    description: 'Trade Me purchases, furniture delivery, or single large items. No job too small.',
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Boxes,
    title: 'Packing Service',
    description: 'Professional packing with quality materials. We ensure everything arrives safely.',
    color: 'bg-pink-500',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
  },
  {
    icon: Truck,
    title: 'Long Distance',
    description: 'Moving anywhere in NZ? We offer affordable inter-city and long-distance moving solutions.',
    color: 'bg-teal-500',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Everything You Need to Move
          </h2>
          <p className="text-slate-600 text-lg">
            From single items to entire households, we provide comprehensive moving solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 ${service.color} p-3 rounded-xl shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <a
                  href="#quote"
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                >
                  Get Quote
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}