import { Factory, Droplets, Wind, Beaker, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Facilities() {
  return (
    <div className="flex flex-col w-full h-full bg-white min-h-screen">
      <SEO 
        title="Manufacturing Facilities" 
        description="Explore Amulet Pharmaceuticals' state-of-the-art manufacturing facility in Gazipur, designed with modern pharmaceutical engineering standards and Clean Room Technology."
        canonicalUrl="https://amulet-pharmaceuticals.com/facilities"
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1587825027984-c4b4d66ca855?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
         <div className="absolute inset-0 bg-[#0066AE]/80 backdrop-blur-sm mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-slate-900/60 gradient-mask-b-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Factory className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Manufacturing & Excellence</h1>
          <p className="text-xl text-blue-100 font-light">
            State-of-the-art infrastructure designed to deliver uncompromised quality.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#0066AE] font-bold text-sm tracking-widest uppercase mb-3">The Gazipur Plant</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Operational Excellence by Design</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Located at Singdighi, Mawna, Sreepur, Gazipur, our manufacturing facility is built to international standards. It features dedicated, strictly isolated zones for granulation, compression, liquid manufacturing, and packaging to ensure zero cross-contamination.
              </p>
              
              <div className="space-y-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#0066AE]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Fully Automatic Compression</h4>
                    <p className="text-sm text-slate-600">High-speed rotary tablet compression machines equipped with stainless steel turrets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Droplets className="w-6 h-6 text-[#0066AE]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Advanced Liquid & Semi-solid Lines</h4>
                    <p className="text-sm text-slate-600">Automated bottle washing, sterilization, and suspension filling systems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Wind className="w-6 h-6 text-[#0066AE]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Environmental Control</h4>
                    <p className="text-sm text-slate-600">Sophisticated HVAC systems with absolute HEPA filters and dedicated water treatment plants.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0"
            >
              <img src="https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070&auto=format&fit=crop" alt="Production line" className="w-full h-64 object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1614935151651-0bea6508abb0?q=80&w=2070&auto=format&fit=crop" alt="Clean room" className="w-full h-64 object-cover rounded-2xl shadow-md sm:mt-8" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* QC and R&D */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                    <Beaker className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Quality Control & Research</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Our QC laboratory is the heart of our assurance program. Equipped with modern analytical instruments including <strong className="text-slate-900 font-semibold">HPLC, Gas Chromatography, and Automated Dissolution Testers</strong>, every single batch undergoes rigorous testing to guarantee purity, potency, and absolute patient safety.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Simultaneously, our Research & Development team works continuously on bio-equivalence studies, new affordable formulations, and improved drug delivery systems tailored specifically for the demographics of Bangladesh.
                  </p>
                  
                  <ul className="mt-8 space-y-3">
                    <li className="flex items-center gap-3 font-semibold text-slate-800"><CheckCircle2 className="text-indigo-500 w-5 h-5"/> Raw Material Validation</li>
                    <li className="flex items-center gap-3 font-semibold text-slate-800"><CheckCircle2 className="text-indigo-500 w-5 h-5"/> In-Process Quality Checks</li>
                    <li className="flex items-center gap-3 font-semibold text-slate-800"><CheckCircle2 className="text-indigo-500 w-5 h-5"/> Real-Time Stability Studies</li>
                  </ul>
               </div>
               
               <div className="bg-slate-900 relative min-h-[400px]">
                  <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop" alt="Laboratory Analyst" className="absolute inset-0 w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
