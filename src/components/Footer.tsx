'use client';

import { Truck, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Truck className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">NZ Moving</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Your trusted local moving company in Christchurch. We provide affordable, 
              professional moving services for homes, offices, and specialty items across New Zealand.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="tel:0800466838" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Get Quote', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === 'Home' ? '/' : `#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['House Moving', 'Piano Moving', 'Office Relocation', 'Single Items', 'Packing Service'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-orange-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-slate-400">Call Us</p>
                <a href="tel:0800466838" className="font-semibold hover:text-orange-400 transition-colors">0800 466 838</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-slate-400">Email Us</p>
                <a href="mailto:info@nzmovingservices.co.nz" className="font-semibold hover:text-orange-400 transition-colors">info@nzmovingservices.co.nz</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <span className="font-semibold">Christchurch, NZ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} NZ Moving Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}