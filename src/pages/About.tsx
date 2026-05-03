import { ShieldCheck, Target, Heart, Zap, Award, Search, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    { icon: <ShieldCheck className="w-8 h-8 text-[#0066AE]" />, title: 'Integrity', desc: 'Complete transparency and ethical practices in all operations.' },
    { icon: <Zap className="w-8 h-8 text-[#0066AE]" />, title: 'Professionalism', desc: 'Matching the right talent with the right responsibilities.' },
    { icon: <Search className="w-8 h-8 text-[#0066AE]" />, title: 'Innovation', desc: 'Continuous investment in formulation science and product development.' },
    { icon: <Heart className="w-8 h-8 text-[#0066AE]" />, title: 'Compassion', desc: 'Putting patient well-being at the center of everything we do.' },
    { icon: <Award className="w-8 h-8 text-[#0066AE]" />, title: 'Excellence', desc: 'Commitment to quality at every stage of production and distribution.' },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-slate-50">
      <SEO 
        title="About Us" 
        description="Learn about Amulet Pharmaceuticals Ltd.'s mission, vision, and core values. Discover our strong distribution network reaching 12+ major market zones in Bangladesh."
        canonicalUrl="https://amulet-pharmaceuticals.com/about"
      />
      {/* Hero Header */}
      <section className="bg-slate-900 py-24 text-center relative overflow-hidden bg-[url('/images/about-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Amulet</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Building a healthier Bangladesh through dedication, innovation, and universal access to medicine.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#0066AE]" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be a leading pharmaceutical company in Bangladesh and a respected global partner by delivering high-quality, innovative, and affordable healthcare solutions.
              </p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="flex-1 bg-[#0066AE] p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,102,174,0.2)] text-white"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-blue-50 text-lg leading-relaxed font-medium">
                To discover, develop, and market pharmaceutical products that prevent, alleviate, and cure diseases while maintaining the highest standards of technical excellence and patient safety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#0066AE] font-bold text-sm tracking-widest uppercase mb-3">Our DNA</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative h-[350px] sm:h-[400px] lg:h-[500px] w-full bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-200 p-4 sm:p-8">
                 {/* Abstract Map Representation */}
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0066AE] to-transparent"></div>
                 <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 w-full h-full">
                       {['Dhaka', 'Chittagong', 'Rajshahi', 'Mymensingh', 'Rangpur', 'Comilla', 'Sylhet', 'Barisal', 'Kushtia', 'Maijdee', 'Jamalpur', 'Gazipur HQ'].map((city, j) => (
                          <div key={j} className={`bg-white/90 backdrop-blur-sm border shadow-sm rounded-xl p-3 flex flex-col items-center justify-center text-center ${city === 'Gazipur HQ' ? 'border-[#0066AE] col-span-2 md:col-span-1 shadow-[#0066AE]/20 font-bold' : 'border-slate-200'}`}>
                            <div className={`w-3 h-3 rounded-full mb-2 ${city === 'Gazipur HQ' ? 'bg-[#0066AE]' : 'bg-green-500'}`}></div>
                            <span className="text-xs font-semibold text-slate-800">{city}</span>
                          </div>
                       ))}
                    </div>
                 </div>
             </div>
             
             <div className="order-1 lg:order-2">
                <h2 className="text-[#0066AE] font-bold text-sm tracking-widest uppercase mb-3">Logistics & Reach</h2>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Nationwide Distribution Network</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our strong logistics network ensures timely availability of medicines across Bangladesh. We cover <strong>12+ major market zones</strong> ensuring that no patient is left without access to critical medicine.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0066AE] shrink-0 mt-0.5" />
                    <p className="text-slate-700">Central warehouse at Gazipur with dedicated cold chain storage systems.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0066AE] shrink-0 mt-0.5" />
                    <p className="text-slate-700">Efficient inventory management optimizing the supply to pharmacies, hospitals, and healthcare institutions nationwide.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0066AE] shrink-0 mt-0.5" />
                    <p className="text-slate-700">Dedicated distribution fleet ensuring product integrity during transit.</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
