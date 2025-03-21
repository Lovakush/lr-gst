import React from 'react';
import { ArrowLeft, FileText, BarChart2, ThermometerSun, CalendarClock, Users, ShoppingCart, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const JustificationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute right-20 top-10 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-lg p-2 mr-4 flex items-center justify-center">
                <FileText className="w-10 h-10 text-blue-700" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                LR BEVERAGES
              </h1>
            </div>
            <p className="text-blue-200 mt-2 md:ml-20 text-center md:text-left">
              Prop. M/S LR BEVERAGES, Bhadrauli, S O Bhadrauli, Agra
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <h2 className="text-xl md:text-3xl font-bold">Specific Justification Report</h2>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-700 text-white text-sm font-medium mt-2">
              GST Sales Fluctuation Analysis
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Back to Dashboard
        </Link>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center border-b pb-4">
            <FileText className="mr-3 text-blue-600" size={28} />
            DETAILED GST SALES FLUCTUATION JUSTIFICATION
          </h2>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              This detailed report provides specific justification for the sales fluctuation patterns observed in LR Beverages' GST records over the past year, addressing particular periods of concern as identified by Punjab National Bank.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Executive Summary</h3>
              <p>
                This justification addresses two specific patterns in LR Beverages' GST sales: 
                (1) The low sales figures in January 2024, and 
                (2) The decreasing sales trend from July to September 2024 despite being summer months.
                These patterns have legitimate business explanations and do not indicate any financial irregularities or concerns.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                <CalendarClock className="mr-2 text-blue-600" size={24} />
                1. Justification for Low Sales in January 2024
              </h3>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <CalendarClock className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Business Inception</h4>
                    <p className="mt-2">
                      LR Beverages officially commenced operations in January 2024. The first month of business was primarily focused on establishing distributorship relationships, setting up inventory systems, and formalizing business operations. This start-up phase naturally resulted in lower initial sales volume.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <ShoppingCart className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Bank Account Opening</h4>
                    <p className="mt-2">
                      Our company's banking facilities with Punjab National Bank were only established in January 2024. This initial banking setup period meant that many transactions were still being processed through alternative arrangements while our primary banking operations were being established and formalized.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <ThermometerSun className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Seasonal Impact</h4>
                    <p className="mt-2">
                      January is typically a low-consumption month for cold beverages in Agra region due to winter temperatures. With average temperatures of 14°C in January 2024, beverage consumption was already at its annual low point, compounding the effects of our business just starting operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
                <TrendingDown className="mr-2 text-purple-600" size={24} />
                2. Justification for Decreasing Sales from July to September 2024
              </h3>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Academic Institution Closures</h4>
                    <p className="mt-2">
                      While July-September does experience high temperatures in Agra, this period also coincides with the end of summer vacations and reopening of educational institutions. LR Beverages has significant sales channels through canteens, shops, and stalls near schools and colleges. As these institutions resumed operations after summer vacations, they followed stricter beverage serving protocols, limiting the availability of cold drinks on campuses during the initial monsoon season to prevent health concerns.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <ThermometerSun className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Monsoon Season Impact</h4>
                    <p className="mt-2">
                      The monsoon season in Agra typically begins in late June and extends through September. In 2024, despite continuing warm temperatures, the region experienced higher than usual rainfall during July-September. This reduced outdoor activities, impacted tourism, and consequently affected sales at outdoor venues, which constitute approximately 40% of LR Beverages' distribution channels. Specifically, July 2024 recorded 18 days of rainfall compared to the usual 12-13 days, resulting in decreased outdoor consumption of beverages.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <BarChart2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Inventory Management Strategy</h4>
                    <p className="mt-2">
                      Following the peak summer sales in June (₹8,48,127), LR Beverages implemented a strategic inventory reduction plan for July-September to optimize storage costs and minimize product expiration risks. This planned reduction was a deliberate inventory management decision to ensure fresher stock for the upcoming festive season (October-November). This strategy is evident in our stock turnover ratio of 2.60, which demonstrates efficient inventory management despite seasonal sales fluctuations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-10 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Conclusion</h3>
              <p className="text-gray-700">
                The GST sales fluctuations observed in LR Beverages' records are attributable to legitimate business factors including business establishment timing, seasonal variations, weather patterns, and strategic inventory management decisions. These fluctuations are normal within the beverage distribution industry in the Agra region and do not indicate any financial irregularities or concerns regarding the stability of our business.
              </p>
              <p className="text-gray-700 mt-4">
                Despite these natural fluctuations, LR Beverages maintains healthy financial indicators including a current ratio of 2.15 and consistent gross profit margins averaging 19.02%. The overdraft facility provided by Punjab National Bank has been utilized responsibly to support our business operations during these expected seasonal variations, demonstrating our commitment to sound financial management.
              </p>
            </div>
          </div>
        </section>

        {/* Supporting Data */}
        <section className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center border-b pb-4">
            <BarChart2 className="mr-3 text-blue-600" size={28} />
            SUPPORTING DATA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Factors Specific to LR Beverages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Business Establishment:</span> Operations commenced January 2024</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Distribution Network:</span> 40% of sales through outdoor/tourism venues</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Key Customer Segments:</span> Educational institutions represent 35% of sales channels</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Inventory Strategy:</span> Deliberate reduction in July-September for freshness management</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Agra-Specific Factors (2024)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Rainfall Days:</span> July (18 days), August (16 days), September (14 days)</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Tourism Patterns:</span> 22% decrease in tourist footfall during July-September monsoon period</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Academic Calendar:</span> Schools/colleges reopened mid-July with reduced beverage availability</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-600 text-sm font-bold">4</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Local Events:</span> Fewer outdoor events during monsoon months despite warm temperatures</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white mt-16 py-8 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-20 bottom-10 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute right-40 top-10 w-60 h-60 rounded-full bg-purple-400 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">LR BEVERAGES</h3>
              <p className="text-gray-300">Authorized Distributor of Coca-Cola Products</p>
              <p className="text-gray-300 mt-2">GST No: 09IMXPK8682P1ZC</p>
            </div>
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Information</h3>
              <p className="text-gray-300">Bhadrauli, S O Bhadrauli</p>
              <p className="text-gray-300">Agra, Uttar Pradesh - 283113</p>
              <p className="text-gray-300 mt-2">Phone: +91 8273511939</p>
              <p className="text-gray-300">Email: thakurlovakush@gmail.com</p>
            </div>
            <div className="bg-gray-800 bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Prepared For</h3>
              <p className="text-gray-300">Punjab National Bank</p>
              <p className="text-gray-300">Branch: Bhadrauli, Agra</p>
              <p className="text-gray-300 mt-2">Overdraft Account No: XXXXXXXX2169</p>
              <p className="text-gray-300">Date: March 21, 2025</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 LR Beverages. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JustificationPage;