import { Search, Download, AlertTriangle, Pill } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { brand: 'Cebeta', generic: 'Beta Carotene + Vitamin C + Vitamin E', strength: '6 mg + 200 mg + 50 mg Tablet' },
    { brand: 'SMR', generic: 'Baclofen', strength: '10 mg Tablet' },
    { brand: 'Flucolet', generic: 'Fluconazole', strength: '50 mg/5 ml Powder For Suspension' },
    { brand: 'Flucolet', generic: 'Fluconazole', strength: '50 mg Capsule' },
    { brand: 'Flucolet', generic: 'Fluconazole', strength: '150 mg Capsule' },
    { brand: 'Rheunil', generic: 'Aceclofenac', strength: '100 mg Tablet' },
    { brand: 'Nopath', generic: 'Cyanocobalamin + Pyridoxine Hydrochloride + Vitamin B1', strength: '200 mcg + 200 mg + 100 mg Tablet' },
    { brand: 'WFI', generic: 'Water For Injection', strength: '1 ml Injection' },
    { brand: 'Lidocaine', generic: 'Lidocaine Hydrochloride', strength: '10 mg/ml Injection' },
    { brand: 'Perclear', generic: 'Permethrin', strength: '5 gm/100 gm Cream' },
    { brand: 'Heligan', generic: 'Promethazine Hydrochloride', strength: '5 mg/5 ml Syrup' },
    { brand: 'Tramalet', generic: 'Tramadol Hydrochloride', strength: '100 mg/2 ml Injection' },
    { brand: 'Flocip', generic: 'Ciprofloxacin', strength: '250 mg/5 ml Powder For Suspension' },
    { brand: 'Flocip', generic: 'Ciprofloxacin', strength: '500 mg Tablet' },
    { brand: 'Amfrad', generic: 'Cephradine', strength: '125 mg/5 ml Powder For Suspension' },
    { brand: 'Amfrad', generic: 'Cephradine', strength: '500 mg Capsule' },
    { brand: 'Amfrad', generic: 'Cephradine', strength: '250 mg Capsule' },
    { brand: 'Coxetpro 120', generic: 'Etoricoxib', strength: '120 mg Tablet' },
    { brand: 'Coxetori', generic: 'Etoricoxib', strength: '60 mg Tablet' },
    { brand: 'Ambrocod', generic: 'Ambroxol', strength: '15 mg/5 ml Syrup' },
    { brand: 'Esomo 20', generic: 'Esomeprazole', strength: '20 mg Capsule' },
    { brand: 'Esomo 40', generic: 'Esomeprazole', strength: '40 mg Capsule' },
    { brand: 'Burndel', generic: 'Silver Sulphadiazine', strength: '1% Cream' },
    { brand: 'Amupime 500', generic: 'Cefepime', strength: '500 mg/vial IV/IM Injection' },
    { brand: 'Axefur', generic: 'Cefuroxime', strength: '125 mg/5 ml Powder For Suspension' },
    { brand: 'Axefur 500', generic: 'Cefuroxime', strength: '500 mg Tablet' },
    { brand: 'Fusate', generic: 'Fusidic Acid', strength: '2 gm/100 gm Cream' },
    { brand: 'Timofet', generic: 'Tiemonium Methylsulphate', strength: '50 mg Tablet' },
    { brand: 'Hemapar', generic: 'Levamisole', strength: '40 mg/5 ml Syrup' },
    { brand: 'Fersolin', generic: 'Ferrous Sulphate', strength: '200 mg/5 ml Syrup' },
    { brand: 'Cefilet 1 gm IM', generic: 'Ceftriaxone', strength: '1 gm IM Injection' },
    { brand: 'Cefilet 500 IM', generic: 'Ceftriaxone', strength: '500 mg IM Injection' },
    { brand: 'Cefilet 2 gm IV', generic: 'Ceftriaxone', strength: '2 gm IV Injection' },
    { brand: 'Cefilet 1 gm IV', generic: 'Ceftriaxone', strength: '1 gm IV Injection' },
    { brand: 'Pyrizin', generic: 'Meclizine Hydrochloride + Pyridoxine Hydrochloride', strength: '25 mg + 50 mg Tablet' },
    { brand: 'Binafin', generic: 'Terbinafine', strength: '1 gm/100 gm Cream' },
    { brand: 'Hemolac', generic: 'Lactulose', strength: '68% Oral Solution' },
    { brand: 'Nitalet', generic: 'Nitazoxanide', strength: '500 mg Tablet' },
    { brand: 'Omelet', generic: 'Omeprazole', strength: '20 mg Capsule' },
    { brand: 'Omelet', generic: 'Omeprazole', strength: '40 mg Capsule' },
    { brand: 'Nebalet', generic: 'Bacitracin Zinc + Neomycin Sulphate', strength: '10 + 5 mg/gm Powder' },
    { brand: 'Adcal D', generic: 'Calcium + Vitamin D3', strength: '500 mg + 200 IU Tablet' },
    { brand: 'Ecolet', generic: 'Econazole Nitrate', strength: '1 gm/100 gm Cream' },
    { brand: 'Voltacod', generic: 'Ascorbic Acid + Cod Liver Oil + Nicotinamide + Pyridoxine Hydrochloride + Riboflavin + Vitamin A + Vitamin B1 + Vitamin D3 + Vitamin E', strength: '17.5 mg + 100 mg + 9 mg + 0.35 mg + 0.85 mg + 2000 IU + 0.7 mg + 200 IU + 1.5 mg/5 ml Syrup' },
    { brand: 'Clori HC', generic: 'Clotrimazole + Hydrocortisone', strength: '1 gm + 1 gm/100 gm Cream' },
    { brand: 'Desolet', generic: 'Desloratadine', strength: '5 mg Tablet' },
    { brand: 'Setir', generic: 'Cetirizine Dihydrochloride', strength: '10 mg Tablet' },
    { brand: 'DFC', generic: 'Diclofenac Sodium', strength: '50 mg Tablet' },
    { brand: 'DFC TR', generic: 'Diclofenac Sodium', strength: '100 mg Capsule' },
    { brand: 'DFC', generic: 'Diclofenac Sodium', strength: '75 mg/3 ml Injection' },
    { brand: 'Tempanil Extra', generic: 'Caffeine + Paracetamol', strength: '65 mg + 500 mg Tablet' },
    { brand: 'Hemozal', generic: 'Metronidazole', strength: '200 mg/5 ml Suspension' },
    { brand: 'Amzith', generic: 'Azithromycin', strength: '200 mg/5 ml Powder For Suspension' },
    { brand: 'Amzith', generic: 'Azithromycin', strength: '500 mg Tablet' },
    { brand: 'Amzith', generic: 'Azithromycin', strength: '250 mg Capsule' },
    { brand: 'Amucef', generic: 'Cefixime', strength: '100 mg/5 ml Powder For Suspension' },
    { brand: 'Amucef 400', generic: 'Cefixime', strength: '400 mg Capsule' },
    { brand: 'Amucef 200', generic: 'Cefixime', strength: '200 mg Capsule' },
    { brand: 'Zifov', generic: 'Ascorbic Acid + Elemental Iron + Folic Acid + Nicotinamide + Pyridoxine Hydrochloride + Riboflavin + Thiamine Hydrochloride + Zinc', strength: '50 mg + 47 mg + 500 mcg + 20 mg + 2 mg + 2 mg + 5 mg + 22.5 mg Capsule' },
    { brand: 'Neozinc', generic: 'Zinc', strength: '10 mg/5 ml Syrup' },
    { brand: 'Volta Gold', generic: 'Multivitamin + Multimineral (A-Z Gold)', strength: 'Tablet' },
    { brand: 'Volta Gold', generic: 'Multivitamin + Multimineral (A-Z Gold)', strength: 'Syrup' },
    { brand: 'Montilet', generic: 'Montelukast', strength: '10 mg Tablet' },
    { brand: 'Tempanil', generic: 'Paracetamol', strength: '500 mg Tablet' },
    { brand: 'Tempacit', generic: 'Paracetamol', strength: '120 mg/5 ml Suspension' },
    { brand: 'Xofedin', generic: 'Fexofenadine Hydrochloride', strength: '180 mg Tablet' },
    { brand: 'Xofedin 120', generic: 'Fexofenadine Hydrochloride', strength: '120 mg Tablet' },
    { brand: 'Toro', generic: 'Ketorolac Tromethamine', strength: '10 mg Tablet' },
    { brand: 'Toro', generic: 'Ketorolac Tromethamine', strength: '60 mg/2 ml Injection' }
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
                      key={`${product.brand}-${index}`}
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
