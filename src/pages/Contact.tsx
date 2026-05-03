import { MapPin, Phone, Mail, Building2, Factory, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="flex flex-col w-full h-full bg-slate-50 min-h-screen">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Amulet Pharmaceuticals Ltd. Find our corporate headquarters and factory contact information."
        canonicalUrl="https://amulet-pharmaceuticals.com/contact"
      />
      <section className="bg-slate-900 py-20 text-center relative overflow-hidden bg-[url('/images/contact-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#0066AE]/80 backdrop-blur-sm mix-blend-multiply"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 font-light">
            We are here to answer any questions you may have about our products or partnerships.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Corporate Location */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-3xl p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 text-[#0066AE] rounded-2xl flex items-center justify-center mb-8">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Corporate Headquarters</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0066AE] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Address</h4>
                    <p className="text-slate-600 mt-1">205/1-A, Gulshan<br />Tejgaon Link Road, Dhaka-1208</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#0066AE] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600 mt-1">+880 1401 555 333</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#0066AE] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 mt-1">chairmanapl2023@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#0066AE] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Office Hours</h4>
                    <p className="text-slate-600 mt-1">Saturday – Thursday<br />9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Factory Location */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bg-white rounded-3xl p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-50 text-[#0066AE] rounded-2xl flex items-center justify-center mb-8">
                <Factory className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Factory & Logistics</h2>
              <p className="text-slate-600 mb-8 italic">For distribution partnership, hospital supply, or bulk inquiries.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0066AE] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Address</h4>
                    <p className="text-slate-600 mt-1">Vill: Singdighi, PO: Mawna<br />PS: Sreepur, Dist: Gazipur</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#0066AE] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600 mt-1">+880 1713 415 021</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#0066AE] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 mt-1">ed.amulet.bd@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
