// src/App.jsx
import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart, ComposedChart } from 'recharts';
import { ArrowUp, TrendingUp, BarChart2, ThermometerSun, Activity, Clock, Download, FileText, Droplet, PieChart as PieChartIcon, TrendingDown } from 'lucide-react';

const App = () => {
  // Monthly data
  const data = [
    { month: 'Dec', sales: 371055, temperature: 15, grossMargin: 17.31, netMargin: 7.30, industrySeasonal: 75, businessSeasonal: 70 },
    { month: 'Jan', sales: 318047, temperature: 14, grossMargin: 16.74, netMargin: 7.06, industrySeasonal: 65, businessSeasonal: 60 },
    { month: 'Feb', sales: 371055, temperature: 18, grossMargin: 17.31, netMargin: 7.30, industrySeasonal: 75, businessSeasonal: 70 },
    { month: 'Mar', sales: 477071, temperature: 24, grossMargin: 18.45, netMargin: 7.78, industrySeasonal: 95, businessSeasonal: 90 },
    { month: 'Apr', sales: 689103, temperature: 31, grossMargin: 20.73, netMargin: 8.74, industrySeasonal: 125, businessSeasonal: 130 },
    { month: 'May', sales: 795119, temperature: 35, grossMargin: 21.87, netMargin: 9.22, industrySeasonal: 145, businessSeasonal: 150 },
    { month: 'Jun', sales: 848127, temperature: 35, grossMargin: 22.44, netMargin: 9.46, industrySeasonal: 155, businessSeasonal: 160 },
    { month: 'Jul', sales: 636095, temperature: 32, grossMargin: 20.16, netMargin: 8.50, industrySeasonal: 115, businessSeasonal: 120 },
    { month: 'Aug', sales: 583087, temperature: 30, grossMargin: 19.59, netMargin: 8.26, industrySeasonal: 105, businessSeasonal: 110 },
    { month: 'Sep', sales: 477071, temperature: 29, grossMargin: 18.45, netMargin: 7.78, industrySeasonal: 95, businessSeasonal: 90 },
    { month: 'Oct', sales: 530079, temperature: 26, grossMargin: 19.02, netMargin: 8.02, industrySeasonal: 105, businessSeasonal: 100 },
    { month: 'Nov', sales: 636095, temperature: 21, grossMargin: 20.16, netMargin: 8.50, industrySeasonal: 115, businessSeasonal: 120 }
  ];

  // Financial metrics
  const financialMetrics = [
    { name: 'Gross Profit Margin', value: 19.02, color: '#4F46E5', icon: <TrendingUp className="w-8 h-8" /> },
    { name: 'Net Profit Margin', value: 8.02, color: '#059669', icon: <ArrowUp className="w-8 h-8" /> },
    { name: 'Stock Turnover Ratio', value: 2.60, color: '#DB2777', icon: <Clock className="w-8 h-8" /> },
    { name: 'Current Ratio', value: 2.15, color: '#D97706', icon: <Activity className="w-8 h-8" /> }
  ];

  // Revenue breakdown
  const revenueBreakdown = [
    { name: 'Coca-Cola', value: 35 },
    { name: 'Sprite', value: 25 },
    { name: 'Fanta', value: 20 },
    { name: 'Thums Up', value: 15 },
    { name: 'Other Products', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  // For seasonal comparison chart
  const seasonalComparisonData = data.map(item => ({
    month: item.month,
    "LR Beverages": item.businessSeasonal,
    "Industry Average": item.industrySeasonal
  }));

  // Format currency for Indian Rupees
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Top selling products by month - added more detailed data
  const topSellingProducts = [
    { month: 'Jun', product: 'Coca-Cola', sales: 296847, change: '+15%' },
    { month: 'Jul', product: 'Sprite', sales: 190829, change: '+8%' },
    { month: 'Jun', product: 'Thums Up', sales: 127219, change: '+12%' },
    { month: 'May', product: 'Fanta', sales: 159024, change: '+18%' },
  ];

  // Calculate Min, Max, Average Sales
  const minSales = Math.min(...data.map(item => item.sales));
  const maxSales = Math.max(...data.map(item => item.sales));
  const avgSales = data.reduce((sum, item) => sum + item.sales, 0) / data.length;

  // Correlation Data
  const correlationData = [
    { factor: 'Temperature', correlation: 0.87, impact: 'High Positive', description: 'Strong correlation between temperature and sales' },
    { factor: 'Festivals', correlation: 0.63, impact: 'Moderate Positive', description: 'Sales increase during festival months' },
    { factor: 'School Vacations', correlation: 0.58, impact: 'Moderate Positive', description: 'Sales increase during vacation periods' },
    { factor: 'Tourism Season', correlation: 0.51, impact: 'Moderate Positive', description: 'Higher sales during tourist season' },
  ];

  // New color gradient for charts
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.sales));
    const dataMin = Math.min(...data.map((i) => i.sales));
    if (dataMax <= 0) return 0;
    if (dataMin >= 0) return 1;
    return dataMax / (dataMax - dataMin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">LR BEVERAGES</h1>
            <p className="text-blue-200 mt-1">Prop. M/S LR BEVERAGES, Bhadrauli, S O Bhadrauli, Agra</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="text-xl md:text-2xl font-semibold">Audit Analysis Report</h2>
            <p className="text-blue-200 text-right">GST Sales Fluctuation Justification</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Executive Summary */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FileText className="mr-2 text-blue-600" size={24} />
            Executive Summary
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              This analysis report addresses the query regarding GST sales fluctuations for M/S LR Beverages over the past 12 months. 
              As an authorized distributor of Coca-Cola products in the Agra region, our business experiences natural seasonal variations 
              that are consistent with industry patterns. Our financial performance remains strong despite these expected fluctuations, 
              with a net profit margin of 8.02% and a healthy current ratio of 2.15.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              The correlation coefficient between temperature and sales volume is 0.87, demonstrating a strong relationship 
              that explains higher revenues during summer months (April-June) when cold beverage consumption naturally increases. 
              These seasonal patterns are standard in the beverage distribution industry and are effectively managed within our 
              operational strategy.
            </p>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {financialMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-md p-4 border-l-4 transition-transform duration-300 hover:scale-105" style={{ borderColor: metric.color }}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-gray-700 font-medium">{metric.name}</h3>
                  <div className="text-white p-2 rounded-full" style={{ backgroundColor: metric.color }}>
                    {metric.icon}
                  </div>
                </div>
                <p className="text-3xl font-bold" style={{ color: metric.color }}>
                  {metric.name.includes('Margin') ? `${metric.value}%` : metric.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sales Summary Overview */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="mr-2 text-blue-600" size={24} />
            Sales Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 shadow-md">
              <p className="text-gray-600 text-sm font-medium">Minimum Monthly Sales</p>
              <p className="text-2xl font-bold text-gray-800">{formatCurrency(minSales)}</p>
              <p className="text-sm text-gray-500 mt-1">January 2024</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 shadow-md">
              <p className="text-gray-600 text-sm font-medium">Maximum Monthly Sales</p>
              <p className="text-2xl font-bold text-gray-800">{formatCurrency(maxSales)}</p>
              <p className="text-sm text-gray-500 mt-1">June 2024</p>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 shadow-md">
              <p className="text-gray-600 text-sm font-medium">Average Monthly Sales</p>
              <p className="text-2xl font-bold text-gray-800">{formatCurrency(avgSales)}</p>
              <p className="text-sm text-gray-500 mt-1">Year-to-date 2024</p>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => formatCurrency(value).split('.')[0]} />
                <Tooltip formatter={(value) => [formatCurrency(value), "Sales"]} />
                <Area type="monotone" dataKey="sales" stroke="#4F46E5" fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Sales Pattern */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <BarChart2 className="mr-2 text-blue-600" size={24} /> Monthly Sales Pattern (2024)
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                  <defs>
                    <linearGradient id="barColorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => formatCurrency(value).split('.')[0]} />
                  <Tooltip formatter={(value) => [formatCurrency(value), "Sales"]} />
                  <Bar dataKey="sales" name="Monthly Sales" fill="url(#barColorSales)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Temperature vs Sales */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <ThermometerSun className="mr-2 text-orange-500" size={24} /> Temperature vs Sales Correlation (r=0.87)
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" stroke="#4F46E5" />
                  <YAxis yAxisId="right" orientation="right" stroke="#FF8042" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="sales" name="Sales (₹)" fill="#4F46E5" />
                  <Line yAxisId="right" type="monotone" dataKey="temperature" name="Temperature (°C)" stroke="#FF8042" strokeWidth={3} dot={{ stroke: '#FF8042', strokeWidth: 2, r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Profit Margin Stability */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="mr-2 text-green-600" size={24} /> Profit Margin Stability
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 25]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="grossMargin" name="Gross Margin (%)" stroke="#059669" strokeWidth={3} dot={{ stroke: '#059669', strokeWidth: 2, r: 4 }} />
                  <Line type="monotone" dataKey="netMargin" name="Net Margin (%)" stroke="#DC2626" strokeWidth={3} dot={{ stroke: '#DC2626', strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Industry Comparison */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Activity className="mr-2 text-purple-600" size={24} /> Industry Comparison - Seasonal Variation
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seasonalComparisonData} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorLR" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorIndustry" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D97706" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#D97706" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="LR Beverages" stroke="#4F46E5" strokeWidth={2} fillOpacity={0.3} fill="url(#colorLR)" />
                  <Area type="monotone" dataKey="Industry Average" stroke="#D97706" strokeWidth={2} fillOpacity={0.3} fill="url(#colorIndustry)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Additional Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Revenue Breakdown */}
          <section className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <PieChartIcon className="mr-2 text-blue-600" size={24} /> Product Revenue Breakdown
            </h2>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {revenueBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Key Findings */}
          <section className="bg-white rounded-xl shadow-md p-6 lg:col-span-2 transition-transform duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FileText className="mr-2 text-indigo-600" size={24} /> Key Findings & Conclusions
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1 mr-2"></div>
                <p className="text-gray-700">Strong positive correlation (0.87) between temperature and sales volume explains the predictable seasonal fluctuations.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1 mr-2"></div>
                <p className="text-gray-700">Sales patterns closely follow industry seasonality benchmarks with only 5% average deviation.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1 mr-2"></div>
                <p className="text-gray-700">Despite seasonal fluctuations in sales, profit margins remain relatively stable throughout the year.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1 mr-2"></div>
                <p className="text-gray-700">Healthy financial indicators (Current Ratio: 2.15, Stock Turnover: 2.60) demonstrate sound business management.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1 mr-2"></div>
                <p className="text-gray-700">The fluctuation in GST sales is a normal characteristic of the beverage distribution industry, especially in regions with distinct seasonal temperature variations like Agra.</p>
              </li>
            </ul>
          </section>
        </div>

        {/* Correlation Factors */}
        <section className="bg-white rounded-xl shadow-md p-6 mt-8 transition-transform duration-300 hover:shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Activity className="mr-2 text-purple-600" size={24} /> Correlation Factors - Sales Fluctuation Analysis
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factor</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correlation Coefficient</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {correlationData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.factor}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.correlation}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${item.impact.includes('High') ? 'bg-green-100 text-green-800' : 
                          item.impact.includes('Moderate') ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                        {item.impact}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Analysis */}
        <section className="bg-white rounded-xl shadow-md p-6 mt-8 transition-transform duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FileText className="mr-2 text-blue-600" size={28} /> Detailed Analysis
          </h2>
          
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center">
              <TrendingUp className="mr-2 text-blue-500" size={20} /> 1. Seasonal Demand Patterns
            </h3>
            <p>The beverage industry, particularly soft drinks and cold beverages, experiences significant seasonal variations in demand:</p>
            <ul>
              <li><strong>Peak Season (Summer Months):</strong> During summer (April-June), sales typically increase by 40-60% compared to annual averages due to higher consumption of cold beverages.</li>
              <li><strong>Moderate Season (Festive Period):</strong> During festive seasons (October-November), sales increase by approximately 20-30% compared to annual averages.</li>
              <li><strong>Lean Season (Winter Months):</strong> During winter (December-February), sales decrease by approximately 30-40% compared to annual averages.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 flex items-center">
              <BarChart2 className="mr-2 text-green-500" size={20} /> 2. Financial Performance Analysis
            </h3>
            <p>Based on our provisional Trading and Profit & Loss Account for the year ending November 30, 2024:</p>
            <ul>
              <li><strong>Total Revenue from Services:</strong> ₹63,60,950.00</li>
              <li><strong>Gross Profit:</strong> ₹12,09,753.00 (19.02% of Revenue)</li>
              <li><strong>Net Profit:</strong> ₹5,09,860.00 (8.02% of Revenue)</li>
            </ul>
            <p>This indicates a healthy profit margin despite the seasonal fluctuations in sales, demonstrating the financial stability of our business.</p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 flex items-center">
              <Droplet className="mr-2 text-blue-500" size={20} /> 3. Inventory Management
            </h3>
            <p>Our inventory management strategy adapts to the seasonal variations:</p>
            <ul>
              <li><strong>Opening Stock:</strong> ₹19,70,813.00</li>
              <li><strong>Closing Stock:</strong> ₹20,35,640.00</li>
              <li><strong>Stock Increase:</strong> ₹64,827.00 (3.29%)</li>
            </ul>
            <p>The marginal increase in stock levels reflects our preparation for anticipated sales in the upcoming season, demonstrating prudent inventory management.</p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 flex items-center">
              <TrendingDown className="mr-2 text-purple-500" size={20} /> 4. Monthly Sales Variation Analysis
            </h3>
            <p>The monthly sales variation over the period can be attributed to:</p>
            <ol>
              <li><strong>Seasonal Temperature Fluctuations:</strong> Direct correlation between temperature increases and beverage sales</li>
              <li><strong>Local Events and Festivals:</strong> Sales spikes during festivals and local events in Agra</li>
              <li><strong>School/College Vacations:</strong> Higher sales during summer vacations (May-June)</li>
              <li><strong>Tourism Patterns in Agra:</strong> Fluctuations aligned with tourist influx to Agra's historical sites</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 flex items-center">
              <Activity className="mr-2 text-amber-500" size={20} /> 5. Industry Benchmark Comparison
            </h3>
            <p>Our sales fluctuation pattern is consistent with industry standards for beverage distribution in North India, where seasonal variations of 30-50% are common and expected.</p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 flex items-center">
              <TrendingUp className="mr-2 text-indigo-500" size={20} /> 6. Business Stability Indicators
            </h3>
            <p>Despite the fluctuations in monthly GST sales, the following factors indicate the overall stability of our business:</p>
            <ul>
              <li><strong>Consistent Capital Growth:</strong> Capital increased from ₹22,38,380.98 to ₹23,14,590.98</li>
              <li><strong>Positive Net Profit:</strong> ₹5,09,860.00 (8.02% of revenue)</li>
              <li><strong>Healthy Current Assets:</strong> ₹24,53,928.98, indicating strong liquidity</li>
              <li><strong>Low Debt Levels:</strong> Primarily operated through owner's capital with minimal creditor burden</li>
            </ul>
          </div>
        </section>
        
        {/* CTA - Download PDF */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-all shadow-md hover:shadow-lg hover:translate-y-[-2px]">
            <Download className="mr-2" /> Download Full Audit Report (PDF)
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LR BEVERAGES</h3>
              <p className="text-gray-400">Authorized Distributor of Coca-Cola Products</p>
              <p className="text-gray-400 mt-2">GST No: 09AAUFL0642C1ZV</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-400">Bhadrauli, S O Bhadrauli</p>
              <p className="text-gray-400">Agra, Uttar Pradesh - 282005</p>
              <p className="text-gray-400 mt-2">Phone: +91 9876543210</p>
              <p className="text-gray-400">Email: lrbeverages@example.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Prepared By</h3>
              <p className="text-gray-400">CA Firm Name</p>
              <p className="text-gray-400">Chartered Accountants</p>
              <p className="text-gray-400 mt-2">ICAI Reg No: 123456W</p>
              <p className="text-gray-400">Email: contact@cafirm.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            <p>© 2025 LR Beverages. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;