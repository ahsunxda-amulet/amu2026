import { Link } from 'react-router-dom';
import { ShieldCheck, Stethoscope, Leaf, Microscope, ArrowRight, Activity, Pill, Factory, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Home() {
  const therapyAreas = [
    { icon: <ShieldCheck className="w-8 h-8 text-[#0066AE]" />, title: 'Anti-Infectives', desc: 'Broad range of systemic and surgical Cephalosporins for effective infection management.' },
    { icon: <Activity className="w-8 h-8 text-[#0066AE]" />, title: 'Gastroenterology', desc: 'Advanced Proton Pump Inhibitors (PPIs) and digestive health formulations.' },
    { icon: <HeartPulse className="w-8 h-8 text-[#0066AE]" />, title: 'Pain & Neurology', desc: 'Fast-acting analgesics, NSAIDs, muscle relaxants, and neurological support.' },
    { icon: <Leaf className="w-8 h-8 text-[#0066AE]" />, title: 'Nutrition & Supplements', desc: 'Essential vitamins, minerals, and multivitamin formulations for all age groups.' },
    { icon: <Stethoscope className="w-8 h-8 text-[#0066AE]" />, title: 'Dermatology & Antifungals', desc: 'Topical creams and solutions for skin infections and inflammatory conditions.' },
    { icon: <Microscope className="w-8 h-8 text-[#0066AE]" />, title: 'Respiratory & Allergy', desc: 'Reliable treatments for cough, cold, allergy, and respiratory tract infections.' },
  ];

  return (
    <div className="flex flex-col w-full h-full">
      <SEO 
        title="Home" 
        description="Amulet Pharmaceuticals Ltd. stands as a trusted name in Bangladesh, merging scientific precision with a compassionate heart to deliver WHO-GMP compliant medications."
        canonicalUrl="https://amulet-pharmaceuticals.com/"
      />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-slate-900 border-b-8 border-[#0066AE]">
        <div className="hero-bg">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="/images/home-hero.jpg" 
            alt="Pharmaceutical Manufacturing Laboratory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 flex flex-col justify-center min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-medium text-xs mb-6 tracking-wider uppercase">
              <Factory size={14} /> WHO-GMP Compliant
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Healthcare Through <br/><span className="text-[#CCEEFF]">Advanced Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
              Merging scientific precision with a compassionate heart to deliver WHO-GMP compliant medications across Bangladesh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio" className="bg-[#0066AE] hover:bg-[#005590] text-white px-8 py-4 rounded-md font-semibold text-center transition-all shadow-lg flex items-center justify-center gap-2 group">
                View Full Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/facilities" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-semibold text-center transition-all flex items-center justify-center gap-2">
                Explore Our Factory
              </Link>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-[#0066AE] font-bold text-sm tracking-widest uppercase mb-3">The Amulet Promise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Bridging the gap between cutting-edge technology and everyday healthcare.</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Amulet Pharmaceuticals Ltd. is a trusted name in Bangladesh's healthcare sector. As a privately-owned pharmaceutical company, we bridge the gap between cutting-edge medical technology and the everyday healthcare needs of our people.
              </p>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Our core commitment is to <strong className="text-slate-900 font-semibold">Universal Health Coverage</strong> — making high-quality, affordable, and life-saving medicines accessible to every citizen, regardless of income or location. With a strong emphasis on quality, innovation, and integrity, we strive to become a reliable partner in building a healthier Bangladesh.
              </p>
              <Link to="/about" className="inline-flex items-center text-[#0066AE] font-bold pb-1 border-b-2 border-[#0066AE] hover:text-[#004e85] hover:border-[#004e85] transition-colors group">
                Read our full story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
               className="relative h-80 sm:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/home-lab.jpg" 
                alt="Medical Laboratory" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066AE] via-transparent to-transparent opacity-60 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Therapeutic Focus */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#0066AE] font-bold text-sm tracking-widest uppercase mb-3">Our Scope</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Therapeutic Focus</h3>
            <p className="text-slate-600 text-lg">We specialize in high-demand therapeutic categories to provide comprehensive healthcare solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapyAreas.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h4>
                <p className="text-slate-600 leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/portfolio" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-slate-800 transition-colors">
              <Pill size={18} /> View All 68+ Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing & CSR Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
            {/* Manufacturing Prowess */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 h-64 md:h-80">
                <img 
                  src="/images/home-manufacturing.jpg" 
                  alt="Manufacturing Line" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Manufacturing Prowess</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our state-of-the-art manufacturing facility in Gazipur is designed with modern pharmaceutical engineering standards. Equipped with <strong>Clean Room Technology</strong>, advanced HVAC systems, and automated production lines, we ensure every product is manufactured in a sterile, contamination-free environment.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'High-speed tablet compression machines',
                  'Liquid sterilization and suspension filling lines',
                  'Automated blister packaging (Alu-Alu and Alu-PVC)',
                  'Granulation, coating, and capsule filling facilities'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <ShieldCheck className="w-5 h-5 text-[#0066AE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/facilities" className="text-[#0066AE] font-semibold hover:underline inline-flex items-center">
                Tour our facility <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* Sustainability CSR */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-full bg-[#0066AE]/10 flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-[#0066AE]" />
              </div>
              <h2 className="text-[#0066AE] font-bold text-sm tracking-widest uppercase mb-3">The Heart of Amulet</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Sustainability & CSR</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                At Amulet, we care for both people and the planet. Our facility features a modern <strong>Biological Effluent Treatment Plant (ETP)</strong> that ensures zero industrial pollution in the Sreepur region.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                 <h4 className="font-semibold text-slate-900 mb-4">Active Community Support:</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                     'Free medical camps in rural areas',
                     'Healthcare awareness programs',
                     'School health education initiatives',
                     'Support for underprivileged patients'
                   ].map((item, i) => (
                     <div key={i} className="flex items-start gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#0066AE] mt-2 shrink-0"></div>
                       <span className="text-sm text-slate-700">{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0066AE] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need bulk supply or distribution partnership?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our logistics team is ready to ensure timely delivery to your healthcare institution securely and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#0066AE] px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
