// components/WhyChooseUs.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Clock, Users, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete peace of mind with comprehensive insurance coverage on every move.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description: 'We respect your schedule. Punctual pickups and deliveries guaranteed.',
  },
  {
    icon: Users,
    title: 'Local Experts',
    description: 'Christchurch owned and operated. We know the city inside and out.',
  },
  {
    icon: Award,
    title: 'Best Value',
    description: 'Competitive pricing without compromising on quality or care.',
  },
  {
    icon: Heart,
    title: 'Care & Respect',
    description: 'Your belongings treated with the same care as if they were our own.',
  },
  {
    icon: CheckCircle2,
    title: 'No Hidden Fees',
    description: 'Transparent pricing. What we quote is what you pay.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              The NZ Moving Difference
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We're not just another moving company. We're your neighbors, committed to making every move 
              in Christchurch and beyond a positive experience. With years of experience and a passion for 
              customer service, we've built our reputation one successful move at a time.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: 'Years Experience', value: '10+' },
                { label: 'Happy Customers', value: '5000+' },
                { label: 'Moves Completed', value: '10000+' },
                { label: 'Team Members', value: '25+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 p-4 rounded-xl"
                >
                  <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}