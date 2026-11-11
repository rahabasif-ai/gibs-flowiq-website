import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import {
  MOCK_PRODUCTS,
  MOCK_EXPIRY_RISKS,
  MOCK_FORECAST_14D,
  MOCK_REGIONAL_HUBS,
} from '../data/mockData';
import { ProductCategory } from '../types';
import {
  TrendingUp,
  AlertTriangle,
  Clock,
  Package,
  Layers,
  Sparkles,
  RefreshCw,
  Building2,
  CheckCircle2,
  ArrowRight,
  Filter,
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [activeTab, setActiveTab] = useState<'forecast' | 'inventory' | 'expiry' | 'distributors'>('forecast');
  const [forecastHorizon, setForecastHorizon] = useState<'7d' | '14d' | '30d'>('14d');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationMultiplier, setSimulationMultiplier] = useState(1);

  const handleSimulateUpdate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      // Toggle a slight variance (e.g. +5% weekend surge scenario)
      setSimulationMultiplier((prev) => (prev === 1 ? 1.08 : 1));
      setIsSimulating(false);
    }, 600);
  };

  // Filter products by category
  const filteredProducts = selectedCategory === 'All'
    ? MOCK_PRODUCTS
    : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);

  // Dynamic forecast data scaled by multiplier
  const chartForecastData = MOCK_FORECAST_14D.map((item) => ({
    ...item,
    actualDemand: item.actualDemand ? Math.round(item.actualDemand * simulationMultiplier) : undefined,
    predictedDemand: Math.round(item.predictedDemand * simulationMultiplier),
    lowerBound: Math.round(item.lowerBound * simulationMultiplier),
    upperBound: Math.round(item.upperBound * simulationMultiplier),
  }));

  // Hub data
  const hubData = MOCK_REGIONAL_HUBS.map((hub) => ({
    name: hub.city,
    Stock: hub.currentStockUnits,
    Capacity: hub.capacityUnits,
    Utilization: Math.round((hub.currentStockUnits / hub.capacityUnits) * 100),
  }));

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
              <span>Interactive Prototype Console</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
              GIBS FlowIQ Management Console
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Explore the live prototype interface. Filter categories, adjust forecast horizons, inspect aging batches, and simulate demand rebalancing across regional warehouses.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleSimulateUpdate}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-2xs transition-all cursor-pointer disabled:opacity-60"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#1769AA] ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Recalculating...' : 'Simulate Demand Shift (+8%)'}</span>
            </button>
            <div className="hidden sm:inline-flex items-center text-xs font-mono text-slate-500 bg-[#F4F8FC] border border-slate-200 px-2.5 py-1.5 rounded-lg">
              Simulated FMCG Environment
            </div>
          </div>
        </div>

        {/* Dashboard Shell Container */}
        <div className="bg-[#F4F8FC] rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-md shadow-slate-900/5">
          {/* Top Bar Controls inside the Console */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-200/80">
            {/* View Tabs */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200/80 overflow-x-auto">
              <button
                onClick={() => setActiveTab('forecast')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'forecast'
                    ? 'bg-[#1769AA] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Demand Forecast &amp; Actuals
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'inventory'
                    ? 'bg-[#1769AA] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Inventory &amp; Hub Stock
              </button>
              <button
                onClick={() => setActiveTab('expiry')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'expiry'
                    ? 'bg-[#1769AA] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Expiry Risk Alerts
              </button>
              <button
                onClick={() => setActiveTab('distributors')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'distributors'
                    ? 'bg-[#1769AA] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Distributor Hubs
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              <span className="text-xs font-medium text-slate-500 mr-1 flex items-center gap-1 shrink-0">
                <Filter className="w-3 h-3" />
                Line:
              </span>
              {(['All', 'Bakery', 'Snacks', 'Confectionery', 'Pasta', 'Sauces'] as ProductCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#142B45] text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 mb-1">Active Line Catalog</div>
              <div className="text-xl font-bold font-mono text-[#142B45] tabular-nums">
                {filteredProducts.length} SKUs
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {selectedCategory === 'All' ? 'All 5 Categories' : `${selectedCategory} Segment`}
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 mb-1">Total Current Depot Stock</div>
              <div className="text-xl font-bold font-mono text-[#142B45] tabular-nums">
                {filteredProducts.reduce((acc, p) => acc + p.currentStock, 0).toLocaleString()} units
              </div>
              <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
                Safe operational margin
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 mb-1">Predicted 14-Day Demand</div>
              <div className="text-xl font-bold font-mono text-[#1769AA] tabular-nums">
                {Math.round(filteredProducts.reduce((acc, p) => acc + p.forecastedDemand14d, 0) * simulationMultiplier).toLocaleString()} units
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                AI Inference Confidence: 94.6%
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-xs text-slate-500 mb-1">Replenishment Action Required</div>
              <div className="text-xl font-bold font-mono text-amber-700 tabular-nums">
                {filteredProducts.filter((p) => p.status !== 'optimal').length} SKUs
              </div>
              <div className="text-[11px] text-amber-700 font-medium mt-0.5">
                Pending factory orders
              </div>
            </div>
          </div>

          {/* TAB CONTENT 1: Demand Forecast & Actuals */}
          {activeTab === 'forecast' && (
            <div className="space-y-6">
              {/* Chart Card */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-3">
                  <div>
                    <h3 className="text-base font-bold text-[#142B45]">
                      Aggregated Demand: Historical Actuals vs AI ML Forecast
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Daily units dispatched (past 7 days) and projected demand curve (next 7 days) with 95% confidence bands.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Horizon:</span>
                    <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs">
                      <button
                        onClick={() => setForecastHorizon('7d')}
                        className={`px-2 py-0.5 rounded cursor-pointer ${forecastHorizon === '7d' ? 'bg-white font-semibold shadow-2xs text-[#1769AA]' : 'text-slate-600'}`}
                      >
                        7D
                      </button>
                      <button
                        onClick={() => setForecastHorizon('14d')}
                        className={`px-2 py-0.5 rounded cursor-pointer ${forecastHorizon === '14d' ? 'bg-white font-semibold shadow-2xs text-[#1769AA]' : 'text-slate-600'}`}
                      >
                        14D
                      </button>
                      <button
                        onClick={() => setForecastHorizon('30d')}
                        className={`px-2 py-0.5 rounded cursor-pointer ${forecastHorizon === '30d' ? 'bg-white font-semibold shadow-2xs text-[#1769AA]' : 'text-slate-600'}`}
                      >
                        30D
                      </button>
                    </div>
                  </div>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartForecastData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="predictedGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#318CE7" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#318CE7" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="dayLabel" tick={{ fontSize: 11, fill: '#64748B' }} stroke="#CBD5E1" />
                      <YAxis tick={{ fontSize: 11, fill: '#64748B' }} stroke="#CBD5E1" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          borderColor: '#E2E8F0',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          fontSize: '12px',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                      <Area
                        type="monotone"
                        dataKey="predictedDemand"
                        name="AI Forecast (Units)"
                        stroke="#1769AA"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#predictedGrad)"
                      />
                      <Line
                        type="monotone"
                        dataKey="actualDemand"
                        name="Historical Actual Sales"
                        stroke="#20A89A"
                        strokeWidth={2.5}
                        dot={{ r: 4, fill: '#20A89A' }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Product SKU Table */}
              <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Product Replenishment &amp; Demand Status Table
                  </h4>
                  <span className="text-xs font-mono text-slate-400">
                    {filteredProducts.length} items listed
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200/80 text-slate-500 font-semibold">
                        <th className="py-2.5 px-3 font-semibold">Product Name</th>
                        <th className="py-2.5 px-3 font-semibold">Category</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Current Stock</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Safety Stock</th>
                        <th className="py-2.5 px-3 font-semibold text-right">14-Day Demand</th>
                        <th className="py-2.5 px-3 font-semibold text-right">Suggested Order</th>
                        <th className="py-2.5 px-3 font-semibold text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProducts.map((p) => (
                        <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-medium text-slate-900">
                            <div>{p.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{p.sku}</div>
                          </td>
                          <td className="py-2.5 px-3 text-slate-600">{p.category}</td>
                          <td className="py-2.5 px-3 text-right font-mono tabular-nums text-slate-900">
                            {p.currentStock.toLocaleString()}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono tabular-nums text-slate-500">
                            {p.safetyStock.toLocaleString()}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono tabular-nums font-semibold text-[#1769AA]">
                            {Math.round(p.forecastedDemand14d * simulationMultiplier).toLocaleString()}
                          </td>
                          <td className="py-2.5 px-3 text-right font-mono tabular-nums font-bold text-slate-800">
                            {p.suggestedReorder > 0 ? (
                              <span className="text-amber-700">+{p.suggestedReorder.toLocaleString()}</span>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 text-center">
                            {p.status === 'optimal' && (
                              <span className="inline-block text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                                Optimal
                              </span>
                            )}
                            {p.status === 'low_stock' && (
                              <span className="inline-block text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                                Low Stock
                              </span>
                            )}
                            {p.status === 'reorder_needed' && (
                              <span className="inline-block text-[11px] font-medium text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
                                Restock Urgent
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT 2: Inventory & Hub Stock */}
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base font-bold text-[#142B45]">
                      Regional Distribution Warehouse Capacity &amp; On-Hand Inventory
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Current physical pallet count versus designated facility maximums across primary distribution territories.
                    </p>
                  </div>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={hubData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748B' }} stroke="#CBD5E1" />
                      <YAxis tick={{ fontSize: 11, fill: '#64748B' }} stroke="#CBD5E1" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#FFFFFF',
                          borderColor: '#E2E8F0',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          fontSize: '12px',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                      <Bar dataKey="Stock" name="On-Hand Units" fill="#1769AA" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Capacity" name="Maximum Storage Capacity" fill="#E2E8F0" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Hub Health Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {MOCK_REGIONAL_HUBS.slice(0, 3).map((hub) => (
                  <div key={hub.hubName} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#142B45]">{hub.hubName}</span>
                      <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {hub.fulfillmentRate}% Fulfillment
                      </span>
                    </div>
                    <div className="text-sm font-bold font-mono text-slate-800 mb-1">
                      {hub.currentStockUnits.toLocaleString()} / {hub.capacityUnits.toLocaleString()} Units
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
                      <div
                        className="bg-[#1769AA] h-1.5 rounded-full"
                        style={{ width: `${(hub.currentStockUnits / hub.capacityUnits) * 100}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center justify-between">
                      <span>Active Orders: {hub.activeOrders}</span>
                      <span>City: {hub.city}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT 3: Expiry Risk Alerts */}
          {activeTab === 'expiry' && (
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-[#142B45] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-rose-600" />
                    <span>Perishable &amp; Semi-Perishable Batch Expiration Watchlist</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Batches prioritized for expedited redistribution, commercial discounting, or priority wholesale dispatch.
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-500">
                  {MOCK_EXPIRY_RISKS.length} Flagged Batches
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                      <th className="py-2.5 px-3">Batch Code &amp; SKU</th>
                      <th className="py-2.5 px-3">Location Depot</th>
                      <th className="py-2.5 px-3 text-right">Units</th>
                      <th className="py-2.5 px-3">Expiry Date</th>
                      <th className="py-2.5 px-3 text-center">Days Left</th>
                      <th className="py-2.5 px-3">Actionable Mitigation Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {MOCK_EXPIRY_RISKS.map((exp) => (
                      <tr key={exp.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-slate-900">{exp.productName}</div>
                          <div className="text-[10px] font-mono text-slate-500">{exp.batchNumber}</div>
                        </td>
                        <td className="py-3 px-3 text-slate-600">{exp.warehouseLocation}</td>
                        <td className="py-3 px-3 text-right font-mono tabular-nums text-slate-900 font-medium">
                          {exp.quantityUnits.toLocaleString()}
                        </td>
                        <td className="py-3 px-3 font-mono text-slate-700">{exp.expiryDate}</td>
                        <td className="py-3 px-3 text-center">
                          <span
                            className={`inline-block font-mono font-bold text-xs px-2 py-0.5 rounded ${
                              exp.daysRemaining <= 15
                                ? 'bg-rose-100 text-rose-800'
                                : exp.daysRemaining <= 30
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {exp.daysRemaining} days
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-700 max-w-sm">
                          <div className="text-xs leading-relaxed">{exp.suggestedAction}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB CONTENT 4: Distributor Hubs */}
          {activeTab === 'distributors' && (
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <h4 className="text-sm font-bold text-[#142B45] flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1769AA]" />
                    <span>Distributor Network &amp; Fulfillment Overview</span>
                  </h4>
                  <span className="text-xs text-slate-500">5 Regional Operating Hubs</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {MOCK_REGIONAL_HUBS.map((hub) => (
                    <div
                      key={hub.hubName}
                      className="p-4 rounded-xl border border-slate-200/80 bg-[#F4F8FC] hover:bg-white hover:border-[#1769AA]/40 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="text-xs font-bold text-[#142B45]">{hub.hubName}</div>
                          <div className="text-[11px] text-slate-500">{hub.city} Territory</div>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                          {hub.fulfillmentRate}%
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 my-3 text-xs">
                        <div className="bg-white p-2 rounded border border-slate-200/60">
                          <div className="text-slate-400 text-[10px]">Stock On Hand</div>
                          <div className="font-mono font-bold text-[#142B45]">
                            {hub.currentStockUnits.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-white p-2 rounded border border-slate-200/60">
                          <div className="text-slate-400 text-[10px]">Active Orders</div>
                          <div className="font-mono font-bold text-[#1769AA]">
                            {hub.activeOrders}
                          </div>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#20A89A]" />
                        <span>Daily dispatch scheduled at 06:00 PKT</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Console Footer Notice */}
          <div className="mt-6 pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <div>
              <span>GIBS FlowIQ v0.8-Alpha Prototype</span>
              <span className="mx-2">·</span>
              <span>Demonstration Engine for Food FMCG Operations</span>
            </div>
            <div className="text-slate-400 font-mono text-[11px]">
              Latency: 48ms · Inferences Cached
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
