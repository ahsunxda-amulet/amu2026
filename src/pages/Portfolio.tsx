import { Search, Download, AlertTriangle, Pill } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { brand: 'Adcal D', generic: 'Calcium + Vitamin D3', strength: '500 mg + 200 IU Tablet' },
    { brand: 'Ambrocod', generic: 'Ambroxol Hydrochloride', strength: '15 mg/5 ml Syrup' },
    { brand: 'Amfrad', generic: 'Cephradine', strength: '250/500 mg Cap, 125 mg/5 ml Susp' },
    { brand: 'Amucef', generic: 'Cefixime Trihydrate', strength: '200/400 mg Cap, 100 mg/5 ml Susp' },
    { brand: 'Amupime', generic: 'Cefepime Hydrochloride', strength: '500 mg/vial Injection' },
    { brand: 'Amzith', generic: 'Azithromycin Dihydrate', strength: '250/500 mg Tab/Cap, 200 mg/5 ml Susp' },
    { brand: 'Axefur', generic: 'Cefuroxime Axetil', strength: '250/500 mg Tab, 125 mg/5 ml Susp' },
    { brand: 'Binafin', generic: 'Terbinafine Hydrochloride', strength: '1% Cream' },
    { brand: 'Burndel', generic: 'Silver Sulfadiazine', strength: '1% Cream' },
    { brand: 'Cebeta', generic: 'Beta Carotene + Vit C + Vit E', strength: 'Tablet' },
    { brand: 'Clori HC', generic: 'Clotrimazole + Hydrocortisone', strength: '1%+1% Cream' },
    { brand: 'Coxetori', generic: 'Etoricoxib', strength: '60/120 mg Tablet' },
    { brand: 'Desolet', generic: 'Desloratadine', strength: '5 mg Tablet' },
    { brand: 'Dfc TR', generic: 'Diclofenac Sodium', strength: '100 mg Capsule (TR)' },
    { brand: 'Ecolet', generic: 'Econazole Nitrate', strength: '1% Cream' },
    { brand: 'Esomo', generic: 'Esomeprazole', strength: '20/40 mg Capsule' },
    { brand: 'Flocip', generic: 'Ciprofloxacin', strength: '500 mg Tab, 250 mg/5 ml Susp' },
    { brand: 'Flucolet', generic: 'Fluconazole', strength: '50/150 mg Cap, 50 mg/5 ml Susp' },
    { brand: 'Fusate', generic: 'Sodium Fusidate', strength: '2% Cream' },
    { brand: 'Montilet', generic: 'Montelukast Sodium', strength: '10 mg Tablet' },
    { brand: 'Nitalet', generic: 'Nitazoxanide', strength: '500 mg Tablet' },
    { brand: 'Nopath', generic: 'Vitamin B1 + B6 + B12', strength: 'Tablet' },
    { brand: 'Omelet', generic: 'Omeprazole', strength: '20/40 mg Capsule' },
    { brand: 'Perclear', generic: 'Permethrin', strength: '5% Cream' },
    { brand: 'Pyrizin', generic: 'Meclizine + Pyridoxine', strength: '25 + 50 mg Tablet' },
    { brand: 'Setir', generic: 'Cetirizine Hydrochloride', strength: '10 mg Tablet' },
    { brand: 'SMR', generic: 'Baclofen', strength: '10 mg Tablet' },
    { brand: 'Tempanil', generic: 'Paracetamol', strength: '500 mg Tablet' },
    { brand: 'Tempanil Extra', generic: 'Paracetamol + Caffeine', strength: '500 + 65 mg Tablet' },
    { brand: 'Timofet', generic: 'Tiemonium Methylsulfate', strength: '50 mg Tab/Injection' },
    { brand: 'Toro', generic: 'Ketorolac Tromethamine', strength: '10 mg Tab, 30 mg/ml Injection' },
    { brand: 'Volta Gold', generic: 'Multivitamin + Multimineral', strength: 'A-Z Gold Tablet' },
    { brand: 'Xofedin', generic: 'Fexofenadine Hydrochloride', strength: '120/180 mg Tablet' },
    { brand: 'Zifov', generic: 'Iron + Folic Acid + Vitamins + Zinc', strength: 'Capsule' },
  ];

  const filteredProducts = products.filter(p => 
    p.brand.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.generic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full h-full bg-slate-50 min-h-screen">
      <SEO 
        title="Product Portfolio" 
        description="Browse our comprehensive pharmaceutical product portfolio. We offer over 68+ highly effective brands across multiple therapeutic segments."
        canonicalUrl="https://amulet-pharmaceuticals.com/portfolio"
      />
      {/* Header */}
      <section className="bg-slate-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Product Portfolio</h1>
          <p className="text-lg text-slate-300">
            Over 68+ highly effective brands across multiple therapeutic segments.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by Brand or Generic name..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0066AE] focus:border-transparent shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button className="flex items-center gap-2 text-sm font-semibold text-[#0066AE] bg-blue-50 px-5 py-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors shrink-0">
              <Download size={16} />
              Download Full Catalog PDF
            </button>
          </div>

          {/* Table container */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-4 px-6 font-semibold text-slate-700 w-1/3">Brand Name</th>
                    <th className="py-4 px-6 font-semibold text-slate-700 w-1/3">Generic Name</th>
                    <th className="py-4 px-6 font-semibold text-slate-700 w-1/3">Strength / Dosage Form</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProducts.map((product, index) => (
                    <motion.tr 
                      key={product.brand}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-4 px-6 font-bold text-[#0066AE] flex items-center gap-3">
                        <Pill className="text-slate-300 w-4 h-4 hidden sm:block" />
                        {product.brand}
                      </td>
                      <td className="py-4 px-6 text-slate-700 font-medium">{product.generic}</td>
                      <td className="py-4 px-6 text-slate-500 font-mono text-sm">{product.strength}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-16 text-slate-500">
                <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p>No products found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          {/* Pharmacovigilance Alert */}
          <div className="mt-16 bg-blue-50/50 rounded-2xl border border-blue-100 p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
             <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-blue-50">
               <AlertTriangle className="w-6 h-6 text-[#0066AE]" />
             </div>
             <div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Pharmacovigilance & Drug Safety</h3>
               <p className="text-slate-600 mb-4 max-w-4xl">
                 Patient safety is our top priority. We operate a dedicated pharmacovigilance unit that continuously monitors product performance and collects feedback from healthcare professionals and patients.
               </p>
               <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-slate-700 font-medium">
                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0066AE]"></span> Continuous Monitoring</li>
                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0066AE]"></span> Easy Reporting System</li>
                 <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0066AE]"></span> Post-Market Surveillance</li>
               </ul>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}
