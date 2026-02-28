'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah & James',
    location: 'Halswell, Christchurch',
    text: "Absolutely fantastic service! The team was efficient, careful with our belongings, and made moving day stress-free. Best value movers in Christchurch hands down.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Michael Chen',
    location: 'Riccarton, Christchurch',
    text: "They moved our upright piano with such care and expertise. Professional, on time, and the price was very reasonable. Highly recommend for any piano moves!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Emma Wilson',
    location: 'Merivale, Christchurch',
    text: "From packing to unpacking, everything was handled perfectly. The crew was friendly, hardworking, and nothing was too much trouble. Will definitely use again!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-400 text-lg">
            Don't just take our word for it. Here's what Christchurch residents say about our moving services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <Quote className="w-10 h-10 text-orange-500 mb-4 opacity-50" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/50"
                />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
            <span className="text-yellow-400 font-bold">4.9/5</span>
            <span className="text-slate-300">Average Rating from</span>
            <span className="text-white font-bold">200+ Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}