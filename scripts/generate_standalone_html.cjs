const fs = require('fs');
const path = require('path');

// Read the 5 images as base64
const imgDir = path.join(__dirname, '../src/assets/images');
const getBase64 = (fileNamePrefix) => {
  const files = fs.readdirSync(imgDir);
  const match = files.find(f => f.startsWith(fileNamePrefix));
  if (!match) return '';
  const buffer = fs.readFileSync(path.join(imgDir, match));
  return `data:image/jpeg;base64,${buffer.toString('base64')}`;
};

const bakeryImg = getBase64('food_biscuits_bakery');
const snacksImg = getBase64('food_crisps_snacks');
const confectioneryImg = getBase64('food_confectionery_sweets');
const pastaImg = getBase64('food_pasta_noodles');
const saucesImg = getBase64('food_sauces_condiments');

console.log('Images converted to base64 successfully.');

const htmlContent = `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GIBS FlowIQ — AI-Powered Food Demand Forecasting &amp; Distribution System</title>
    <meta name="description" content="GIBS FlowIQ is a proposed AI-powered demand forecasting and intelligent distribution management platform for food manufacturers and distributors." />
    <meta property="og:title" content="GIBS FlowIQ — Food Distribution Intelligence" />
    <meta property="og:description" content="Intelligent Decisions. Smarter Distribution. Better Business Visibility. Proposed AI-powered solution for SM Foods (GIBS Pakistan)." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brandPrimary: '#1769AA',
              brandElectric: '#318CE7',
              brandTeal: '#20A89A',
              brandNavy: '#142B45',
              brandBg: '#F4F8FC',
            },
            fontFamily: {
              sans: ['"Plus Jakarta Sans"', 'sans-serif'],
              mono: ['"IBM Plex Mono"', 'monospace'],
            }
          }
        }
      }
    </script>

    <!-- Lucide Icons & Chart.js CDNs -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <style>
      body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        background-color: #FFFFFF;
        color: #142B45;
        overflow-x: hidden;
      }
      .font-mono {
        font-family: 'IBM Plex Mono', monospace;
      }
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #F4F8FC;
      }
      ::-webkit-scrollbar-thumb {
        background: #CBD5E1;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #94A3B8;
      }
      .chart-container {
        position: relative;
        width: 100%;
        height: 300px;
      }
    </style>
  </head>
  <body class="bg-white text-[#142B45] antialiased selection:bg-[#318CE7]/15 selection:text-[#1769AA]">

    <!-- 1. NAVIGATION BAR -->
    <header id="navbar" class="sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-8">
          <!-- Zone 1: Brand Wordmark -->
          <a href="#overview" class="flex items-center gap-2.5 text-[#142B45] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0">
            <div class="w-9 h-9 rounded-lg bg-[#1769AA] flex items-center justify-center text-white shadow-xs">
              <i data-lucide="layers" class="w-5 h-5"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-bold tracking-tight text-[#142B45] leading-none">
                GIBS Flow<span class="text-[#318CE7]">IQ</span>
              </span>
              <span class="text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-0.5">
                Food Supply Intelligence
              </span>
            </div>
          </a>

          <!-- Zone 2: Navigation Links -->
          <nav class="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-600">
            <a href="#overview" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">Overview</a>
            <a href="#industry" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">Industry Context</a>
            <a href="#challenges" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">Challenges</a>
            <a href="#solution" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">Solution</a>
            <a href="#features" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">Features</a>
            <a href="#demo" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">Interactive Demo</a>
            <a href="#technology" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">Technology</a>
            <a href="#about" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">About</a>
            <a href="#contact" class="hover:text-[#1769AA] transition-colors whitespace-nowrap py-1">Contact</a>
          </nav>

          <!-- Zone 3: 1 Primary Action -->
          <div class="hidden sm:flex items-center gap-3 shrink-0">
            <a href="#demo" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#13568c] active:bg-[#0f4470] rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer">
              <span>Explore Demo</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <!-- Mobile Menu Trigger -->
          <div class="flex lg:hidden items-center">
            <button id="mobile-menu-btn" type="button" class="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors" aria-label="Toggle Navigation">
              <i data-lucide="menu" class="w-5 h-5"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown -->
      <div id="mobile-menu" class="hidden lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg">
        <div class="flex flex-col space-y-1">
          <a href="#overview" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">Overview</a>
          <a href="#industry" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">Industry Context</a>
          <a href="#challenges" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">Challenges</a>
          <a href="#solution" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">Solution</a>
          <a href="#features" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">Features</a>
          <a href="#demo" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">Interactive Demo</a>
          <a href="#technology" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">Technology</a>
          <a href="#about" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">About</a>
          <a href="#contact" class="mobile-nav-link px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1769AA] hover:bg-[#F4F8FC] rounded-md transition-colors">Contact</a>
          <div class="pt-3">
            <a href="#demo" class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#13568c] rounded-lg transition-colors">
              <span>Explore Interactive Demo</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- 2. HERO SECTION -->
    <section id="overview" class="relative pt-12 pb-20 overflow-hidden bg-white">
      <div class="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[520px] bg-gradient-to-b from-[#F4F8FC] via-[#F4F8FC]/50 to-white rounded-full blur-3xl opacity-80"></div>
        <div class="absolute top-40 right-10 w-96 h-96 bg-[#318CE7]/5 rounded-full blur-2xl"></div>
        <div class="absolute top-20 left-10 w-80 h-80 bg-[#20A89A]/5 rounded-full blur-2xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <!-- Eyebrow -->
          <div class="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-[#F4F8FC] border border-[#1769AA]/15 text-[#1769AA] text-xs font-semibold tracking-wider uppercase">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#318CE7]"></i>
            <span>AI-POWERED FOOD DISTRIBUTION INTELLIGENCE</span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#142B45] tracking-tight leading-[1.12] mb-6">
            Make Smarter Decisions Across Your Food Supply Chain.
          </h1>

          <!-- Description -->
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            GIBS FlowIQ is a proposed intelligent business platform designed to help food manufacturers and distributors understand product demand, monitor inventory, identify potential expiry risks and make better replenishment decisions through data-driven insights.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <a href="#solution" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#125387] active:bg-[#0d3f66] rounded-xl transition-all shadow-sm hover:shadow cursor-pointer">
              <span>Explore Platform</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
            <a href="#demo" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#142B45] bg-[#F4F8FC] hover:bg-[#e8f1fa] border border-slate-200/90 rounded-xl transition-all shadow-2xs cursor-pointer">
              <i data-lucide="bar-chart-2" class="w-4 h-4 text-[#1769AA]"></i>
              <span>View Live Demo</span>
            </a>
          </div>

          <!-- Developer Credit & Company Alignment -->
          <div class="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <span>Concept &amp; Prototype by <strong class="text-slate-800">Rahab Asif</strong></span>
            <span aria-hidden="true">·</span>
            <span class="text-[#1769AA] font-semibold">AI Engineer | AI Content Engineer | AI Entrepreneur</span>
            <span aria-hidden="true">·</span>
            <span class="text-slate-600">Proposed AI-powered solution for SM Foods (GIBS Pakistan)</span>
          </div>
        </div>

        <!-- Hero Dashboard Preview Card -->
        <div class="relative mx-auto max-w-6xl">
          <div class="rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-5 shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/5 overflow-hidden">
            <div class="flex flex-wrap items-center justify-between pb-3.5 mb-4 border-b border-slate-100 gap-2">
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                <span class="text-xs font-semibold text-slate-700 ml-2">GIBS FlowIQ Operations Console</span>
                <span class="hidden md:inline text-xs text-slate-400 font-normal">— FMCG Distribution Intelligence</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[11px] font-mono text-slate-500 bg-[#F4F8FC] border border-slate-200/60 rounded px-2 py-0.5">
                  Illustrative Demonstration Data
                </span>
              </div>
            </div>

            <!-- Dashboard Quick Stat Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
              <div class="p-3.5 rounded-xl bg-[#F4F8FC]/80 border border-slate-100 flex flex-col justify-between">
                <div class="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Total SKUs</span>
                  <i data-lucide="layers" class="w-3.5 h-3.5 text-[#1769AA]"></i>
                </div>
                <div class="text-xl font-bold font-mono text-[#142B45] tabular-nums">70 SKUs</div>
                <div class="text-[11px] text-slate-500 mt-0.5">Across 5 FMCG Lines</div>
              </div>

              <div class="p-3.5 rounded-xl bg-[#F4F8FC]/80 border border-slate-100 flex flex-col justify-between">
                <div class="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Total Inventory</span>
                  <i data-lucide="trending-up" class="w-3.5 h-3.5 text-[#20A89A]"></i>
                </div>
                <div class="text-xl font-bold font-mono text-[#142B45] tabular-nums">120,600</div>
                <div class="text-[11px] text-emerald-700 font-medium mt-0.5">5 Regional Hubs</div>
              </div>

              <div class="p-3.5 rounded-xl bg-[#F4F8FC]/80 border border-slate-100 flex flex-col justify-between">
                <div class="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>14-Day Demand</span>
                  <i data-lucide="trending-up" class="w-3.5 h-3.5 text-[#318CE7]"></i>
                </div>
                <div class="text-xl font-bold font-mono text-[#1769AA] tabular-nums">67,800</div>
                <div class="text-[11px] text-slate-500 mt-0.5">AI Projections</div>
              </div>

              <div class="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 flex flex-col justify-between">
                <div class="flex items-center justify-between text-amber-800 text-xs mb-1">
                  <span>Low Stock Alerts</span>
                  <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-amber-600"></i>
                </div>
                <div class="text-xl font-bold font-mono text-amber-900 tabular-nums">3 SKUs</div>
                <div class="text-[11px] text-amber-700 mt-0.5">Below Safety Stock</div>
              </div>

              <div class="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200/60 flex flex-col justify-between">
                <div class="flex items-center justify-between text-rose-800 text-xs mb-1">
                  <span>Expiry Watch</span>
                  <i data-lucide="clock" class="w-3.5 h-3.5 text-rose-600"></i>
                </div>
                <div class="text-xl font-bold font-mono text-rose-900 tabular-nums">2 Batches</div>
                <div class="text-[11px] text-rose-700 mt-0.5">&lt; 30 Days Left</div>
              </div>

              <div class="p-3.5 rounded-xl bg-[#F4F8FC]/80 border border-slate-100 flex flex-col justify-between">
                <div class="flex items-center justify-between text-slate-500 text-xs mb-1">
                  <span>Fulfillment Rate</span>
                  <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#20A89A]"></i>
                </div>
                <div class="text-xl font-bold font-mono text-[#20A89A] tabular-nums">96.2%</div>
                <div class="text-[11px] text-slate-500 mt-0.5">On-Time Dispatched</div>
              </div>
            </div>

            <!-- Banner -->
            <div class="bg-gradient-to-r from-[#142B45] to-[#1769AA] rounded-xl p-4 sm:p-5 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-xs uppercase tracking-wider font-semibold text-[#318CE7]">Intelligent Forecasting Snapshot</span>
                  <span class="text-slate-400 text-xs">·</span>
                  <span class="text-slate-300 text-xs">Central Hub Lahore &amp; South Karachi</span>
                </div>
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Anticipated 14.8% Weekend Surge across Savory Crisps &amp; Biscuits
                </h3>
                <p class="text-xs text-slate-300 mt-1 max-w-xl">
                  Machine learning model detects strong correlation between Friday promotional dispatch cycles and retail replenishment velocity. Recommending priority dispatch for 4,200 cartons.
                </p>
              </div>

              <a href="#demo" class="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#142B45] bg-white hover:bg-slate-100 rounded-lg transition-colors shrink-0 shadow-xs cursor-pointer">
                <span>Open Full Interactive Console</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-[#1769AA]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. FOOD INDUSTRY VISUAL SECTION -->
    <section id="industry" class="py-20 bg-[#F4F8FC] border-y border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>FMCG Distribution Dynamics</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            Understanding the Food Manufacturing Industry
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Food manufacturing and fast-moving consumer goods (FMCG) distribution operate under tight shelf-life deadlines, variable regional retail turnover, and volatile order cycles. FlowIQ is engineered around the distinct physical and logistical properties of key food categories.
          </p>
        </div>

        <!-- Proposed Customer Notice -->
        <div class="mb-10 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5">
          <i data-lucide="info" class="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5"></i>
          <div class="text-xs leading-relaxed text-slate-600">
            <span class="font-semibold text-[#142B45]">Proposed Solution for SM Foods (GIBS Pakistan): </span>
            GIBS FlowIQ is an independently developed AI-powered software proposal tailored to the product categories, warehousing hubs, and wholesale distribution logistics of SM Foods (GIBS Pakistan). All imagery, product mockups, and operational numbers shown are generic illustrative representations created for prototype evaluation. This project is an independent engineering proposal and does not claim official endorsement, partnership, or commercial adoption.
          </div>
        </div>

        <!-- Interactive Category Switcher -->
        <div class="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none" id="cat-tabs-container">
          <button onclick="switchCategory('bakery')" class="cat-tab-btn active-cat px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer bg-[#1769AA] text-white shadow-xs" data-target="bakery">
            Biscuits &amp; Bakery Products
          </button>
          <button onclick="switchCategory('snacks')" class="cat-tab-btn px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80" data-target="snacks">
            Snacks &amp; Savory Crisps
          </button>
          <button onclick="switchCategory('confectionery')" class="cat-tab-btn px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80" data-target="confectionery">
            Confectionery &amp; Sweets
          </button>
          <button onclick="switchCategory('pasta')" class="cat-tab-btn px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80" data-target="pasta">
            Pasta &amp; Noodle Products
          </button>
          <button onclick="switchCategory('sauces')" class="cat-tab-btn px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80" data-target="sauces">
            Sauces &amp; Culinary Condiments
          </button>
        </div>

        <!-- Active Category Showcase Card -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div class="lg:col-span-6 relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 aspect-4/3 group">
            <img id="cat-main-img" src="${bakeryImg}" alt="Biscuits and Bakery" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span id="cat-main-tag" class="text-[11px] font-medium tracking-wide uppercase text-[#318CE7] block mb-1">FMCG Bakery Line</span>
              <h3 id="cat-main-title" class="text-lg font-bold">Biscuits &amp; Bakery Products</h3>
            </div>
          </div>

          <div class="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div class="flex items-center gap-2 text-xs font-semibold text-[#1769AA] mb-2">
                <span>Category Supply Profile</span>
                <span class="text-slate-300">·</span>
                <span id="cat-sku-count" class="text-slate-500 font-mono">14 Catalog SKUs</span>
              </div>
              <h3 id="cat-detail-title" class="text-2xl font-bold text-[#142B45] mb-3">
                Biscuits &amp; Bakery Products
              </h3>
              <p id="cat-detail-desc" class="text-sm text-slate-600 leading-relaxed mb-6">
                High-velocity shelf-stable biscuits, family pack cookies, and crisp crackers. Highly sensitive to retail turnover cycles and moisture-proof packaging integrity.
              </p>

              <div class="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/60 mb-6">
                <div class="text-xs font-bold text-[#142B45] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <i data-lucide="package" class="w-3.5 h-3.5 text-[#1769AA]"></i>
                  <span>Distribution Dynamics &amp; Constraints</span>
                </div>
                <p id="cat-dynamics" class="text-xs text-slate-600 leading-relaxed">
                  Short-to-medium shelf life (6-9 months), high packaging volume, bulk pallet distribution, weekly replenishment rhythm.
                </p>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div class="p-3 rounded-lg border border-slate-200/80 bg-white">
                  <div class="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                    <i data-lucide="clock" class="w-3.5 h-3.5 text-[#318CE7]"></i>
                    <span>Lead Time</span>
                  </div>
                  <div id="cat-lead-time" class="text-sm font-bold font-mono text-[#142B45]">2-3 days</div>
                </div>

                <div class="p-3 rounded-lg border border-slate-200/80 bg-white">
                  <div class="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                    <i data-lucide="truck" class="w-3.5 h-3.5 text-[#20A89A]"></i>
                    <span>Turnover Velocity</span>
                  </div>
                  <div id="cat-turnover" class="text-sm font-bold text-[#142B45]">Very High</div>
                </div>

                <div class="p-3 rounded-lg border border-slate-200/80 bg-white col-span-2 sm:col-span-1">
                  <div class="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                    <i data-lucide="shield-check" class="w-3.5 h-3.5 text-[#1769AA]"></i>
                    <span>Forecast Model</span>
                  </div>
                  <div class="text-sm font-bold text-[#142B45]">XGBoost + Lag</div>
                </div>
              </div>
            </div>

            <div>
              <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Simulated Line Products:</div>
              <div id="cat-skus-container" class="flex flex-wrap gap-2">
                <span class="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100/90 border border-slate-200/60 rounded-md px-2.5 py-1">Butter Heritage Biscuits 180g</span>
                <span class="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100/90 border border-slate-200/60 rounded-md px-2.5 py-1">Oat &amp; Salt Crisps 160g</span>
                <span class="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100/90 border border-slate-200/60 rounded-md px-2.5 py-1">Double Choc Chip Cookies 200g</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 5-Category Gallery Grid Below -->
        <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div onclick="switchCategory('bakery')" class="group cursor-pointer rounded-xl bg-white border p-3 transition-all border-[#1769AA] ring-2 ring-[#1769AA]/15 shadow-xs cat-card-thumb" data-thumb="bakery">
            <div class="aspect-4/3 rounded-lg overflow-hidden bg-slate-100 mb-2.5">
              <img src="${bakeryImg}" alt="Biscuits" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="text-xs font-bold text-[#142B45] truncate">Biscuits &amp; Bakery</div>
            <div class="text-[11px] text-slate-500 mt-0.5 font-mono">14 SKUs · Very High</div>
          </div>

          <div onclick="switchCategory('snacks')" class="group cursor-pointer rounded-xl bg-white border p-3 transition-all border-slate-200/80 hover:border-slate-300 hover:shadow-xs cat-card-thumb" data-thumb="snacks">
            <div class="aspect-4/3 rounded-lg overflow-hidden bg-slate-100 mb-2.5">
              <img src="${snacksImg}" alt="Snacks" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="text-xs font-bold text-[#142B45] truncate">Snacks &amp; Crisps</div>
            <div class="text-[11px] text-slate-500 mt-0.5 font-mono">18 SKUs · Very High</div>
          </div>

          <div onclick="switchCategory('confectionery')" class="group cursor-pointer rounded-xl bg-white border p-3 transition-all border-slate-200/80 hover:border-slate-300 hover:shadow-xs cat-card-thumb" data-thumb="confectionery">
            <div class="aspect-4/3 rounded-lg overflow-hidden bg-slate-100 mb-2.5">
              <img src="${confectioneryImg}" alt="Confectionery" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="text-xs font-bold text-[#142B45] truncate">Confectionery &amp; Sweets</div>
            <div class="text-[11px] text-slate-500 mt-0.5 font-mono">12 SKUs · Moderate</div>
          </div>

          <div onclick="switchCategory('pasta')" class="group cursor-pointer rounded-xl bg-white border p-3 transition-all border-slate-200/80 hover:border-slate-300 hover:shadow-xs cat-card-thumb" data-thumb="pasta">
            <div class="aspect-4/3 rounded-lg overflow-hidden bg-slate-100 mb-2.5">
              <img src="${pastaImg}" alt="Pasta" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="text-xs font-bold text-[#142B45] truncate">Pasta &amp; Noodles</div>
            <div class="text-[11px] text-slate-500 mt-0.5 font-mono">10 SKUs · Steady</div>
          </div>

          <div onclick="switchCategory('sauces')" class="group cursor-pointer rounded-xl bg-white border p-3 transition-all border-slate-200/80 hover:border-slate-300 hover:shadow-xs cat-card-thumb" data-thumb="sauces">
            <div class="aspect-4/3 rounded-lg overflow-hidden bg-slate-100 mb-2.5">
              <img src="${saucesImg}" alt="Sauces" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <div class="text-xs font-bold text-[#142B45] truncate">Sauces &amp; Condiments</div>
            <div class="text-[11px] text-slate-500 mt-0.5 font-mono">16 SKUs · Moderate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. REAL BUSINESS PROBLEMS SECTION -->
    <section id="challenges" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Industry Problem Discovery</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            The Operational Challenges Behind Food Distribution
          </h2>
          <p class="text-base text-slate-600 leading-relaxed">
            In food manufacturing, supply chains are squeezed between short shelf lives and high retail demand volatility. Investigating the root operational causes reveals five foundational distribution bottlenecks.
          </p>
        </div>

        <div class="mb-10 p-3.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70 text-xs text-slate-600 flex items-center gap-2.5">
          <i data-lucide="alert-circle" class="w-4 h-4 text-[#1769AA] shrink-0"></i>
          <span>
            <strong class="text-[#142B45]">Exploratory Research Note: </strong>
            These operational friction points are presented as broader FMCG industry challenges to investigate and solve with AI, not confirmed failures or internal issues at SM Foods.
          </span>
        </div>

        <!-- 2-Column Problem & Solution Deep Dive -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-5 space-y-3">
            <button onclick="selectProblem(0)" id="prob-btn-0" class="prob-btn w-full text-left p-4 rounded-xl transition-all cursor-pointer border bg-[#F4F8FC] border-[#1769AA] shadow-xs ring-1 ring-[#1769AA]/20">
              <div class="flex items-start gap-3.5">
                <div class="p-2 rounded-lg bg-white border border-slate-200/80 shrink-0 mt-0.5 text-[#1769AA]">
                  <i data-lucide="trending-down" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <span class="text-xs font-mono font-medium text-slate-400">Challenge 01</span>
                    <span class="prob-tag text-[11px] font-semibold text-[#1769AA] bg-white border border-[#1769AA]/20 rounded px-2 py-0.5">Selected</span>
                  </div>
                  <h3 class="text-sm font-bold text-[#142B45] truncate">1. Demand Uncertainty</h3>
                  <p class="text-xs text-slate-500 line-clamp-1 mt-0.5">Difficulty estimating future demand across categories.</p>
                </div>
              </div>
            </button>

            <button onclick="selectProblem(1)" id="prob-btn-1" class="prob-btn w-full text-left p-4 rounded-xl transition-all cursor-pointer border bg-white border-slate-200/80 hover:bg-slate-50">
              <div class="flex items-start gap-3.5">
                <div class="p-2 rounded-lg bg-white border border-slate-200/80 shrink-0 mt-0.5 text-[#318CE7]">
                  <i data-lucide="eye" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <span class="text-xs font-mono font-medium text-slate-400">Challenge 02</span>
                    <span class="prob-tag hidden text-[11px] font-semibold text-[#1769AA] bg-white border border-[#1769AA]/20 rounded px-2 py-0.5">Selected</span>
                  </div>
                  <h3 class="text-sm font-bold text-[#142B45] truncate">2. Inventory Visibility</h3>
                  <p class="text-xs text-slate-500 line-clamp-1 mt-0.5">Consolidated view lacking across distribution points.</p>
                </div>
              </div>
            </button>

            <button onclick="selectProblem(2)" id="prob-btn-2" class="prob-btn w-full text-left p-4 rounded-xl transition-all cursor-pointer border bg-white border-slate-200/80 hover:bg-slate-50">
              <div class="flex items-start gap-3.5">
                <div class="p-2 rounded-lg bg-white border border-slate-200/80 shrink-0 mt-0.5 text-rose-600">
                  <i data-lucide="clock" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <span class="text-xs font-mono font-medium text-slate-400">Challenge 03</span>
                    <span class="prob-tag hidden text-[11px] font-semibold text-[#1769AA] bg-white border border-[#1769AA]/20 rounded px-2 py-0.5">Selected</span>
                  </div>
                  <h3 class="text-sm font-bold text-[#142B45] truncate">3. Expiry Risk</h3>
                  <p class="text-xs text-slate-500 line-clamp-1 mt-0.5">Aging batches approaching expiration unspotted.</p>
                </div>
              </div>
            </button>

            <button onclick="selectProblem(3)" id="prob-btn-3" class="prob-btn w-full text-left p-4 rounded-xl transition-all cursor-pointer border bg-white border-slate-200/80 hover:bg-slate-50">
              <div class="flex items-start gap-3.5">
                <div class="p-2 rounded-lg bg-white border border-slate-200/80 shrink-0 mt-0.5 text-amber-600">
                  <i data-lucide="refresh-cw" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <span class="text-xs font-mono font-medium text-slate-400">Challenge 04</span>
                    <span class="prob-tag hidden text-[11px] font-semibold text-[#1769AA] bg-white border border-[#1769AA]/20 rounded px-2 py-0.5">Selected</span>
                  </div>
                  <h3 class="text-sm font-bold text-[#142B45] truncate">4. Stock Replenishment</h3>
                  <p class="text-xs text-slate-500 line-clamp-1 mt-0.5">Arbitrary reorder quantities and lead-time mismatch.</p>
                </div>
              </div>
            </button>

            <button onclick="selectProblem(4)" id="prob-btn-4" class="prob-btn w-full text-left p-4 rounded-xl transition-all cursor-pointer border bg-white border-slate-200/80 hover:bg-slate-50">
              <div class="flex items-start gap-3.5">
                <div class="p-2 rounded-lg bg-white border border-slate-200/80 shrink-0 mt-0.5 text-[#20A89A]">
                  <i data-lucide="database-zap" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2 mb-1">
                    <span class="text-xs font-mono font-medium text-slate-400">Challenge 05</span>
                    <span class="prob-tag hidden text-[11px] font-semibold text-[#1769AA] bg-white border border-[#1769AA]/20 rounded px-2 py-0.5">Selected</span>
                  </div>
                  <h3 class="text-sm font-bold text-[#142B45] truncate">5. Fragmented Business Insights</h3>
                  <p class="text-xs text-slate-500 line-clamp-1 mt-0.5">Sales and inventory spread across disconnected systems.</p>
                </div>
              </div>
            </button>
          </div>

          <div class="lg:col-span-7 bg-[#F4F8FC] rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <div class="flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
              <span>Operational Analysis</span>
              <span class="text-slate-300">·</span>
              <span class="text-slate-500 font-mono">Problem Dossier</span>
            </div>

            <h3 id="prob-title" class="text-2xl font-bold text-[#142B45] mb-2">Demand Uncertainty</h3>
            <div id="prob-sub" class="text-sm font-semibold text-[#318CE7] mb-6">The FMCG Bullwhip Distortion</div>

            <div class="p-4 rounded-xl bg-white border border-slate-200/80 mb-5">
              <div class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <i data-lucide="alert-circle" class="w-4 h-4 text-rose-500"></i>
                <span>The Industry Friction</span>
              </div>
              <p id="prob-friction" class="text-sm text-slate-700 leading-relaxed">
                Without systematic forecasting, food manufacturers struggle to estimate future demand across multiple product categories and locations, leading to severe stockouts during unexpected surges or excessive inventory during quiet periods.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-rose-50/70 border border-rose-200/70 mb-5">
              <div class="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <i data-lucide="trending-down" class="w-4 h-4 text-rose-600"></i>
                <span>Commercial &amp; Operational Consequence</span>
              </div>
              <p id="prob-impact" class="text-xs text-rose-950 leading-relaxed font-medium">
                Lost revenue from unfulfilled distributor orders and strained wholesale relationships across territories.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-white border border-[#20A89A]/30">
              <div class="text-xs font-bold text-[#20A89A] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-[#20A89A]"></i>
                <span>The GIBS FlowIQ Proposed Intervention</span>
              </div>
              <p id="prob-solution" class="text-sm text-slate-700 leading-relaxed">
                Statistical machine learning forecasts consumer pull at the distributor level rather than relying on delayed retailer reorders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. OUR PROPOSED SOLUTION & VISUAL WORKFLOW -->
    <section id="solution" class="py-20 bg-[#F4F8FC] border-t border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Proposed Architecture &amp; Methodology</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            Introducing GIBS FlowIQ
          </h2>
          <p class="text-base text-slate-600 leading-relaxed">
            A cohesive pipeline connecting raw sales dispatches to predictive algorithms and executive distribution consoles. Designed to replace fragmented spreadsheets with continuous, closed-loop supply intelligence.
          </p>
        </div>

        <!-- 6-Stage Visual Workflow Stepper -->
        <div class="mb-10 bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-6 shadow-sm overflow-x-auto">
          <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            End-to-End Operational Pipeline (Click any step to inspect):
          </div>

          <div class="flex items-center justify-between min-w-[760px] gap-2">
            <button onclick="selectStage(0)" id="stage-btn-0" class="stage-btn flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer bg-white text-slate-800 border-slate-200 hover:border-slate-300">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono font-bold text-slate-400">01</span>
                <div class="p-1.5 rounded-lg bg-[#F4F8FC] text-[#1769AA]"><i data-lucide="database" class="w-4 h-4"></i></div>
              </div>
              <div class="text-xs font-bold leading-tight text-[#142B45]">Sales Data Ingestion</div>
            </button>
            <div class="text-slate-300 shrink-0"><i data-lucide="chevron-right" class="w-4 h-4"></i></div>

            <button onclick="selectStage(1)" id="stage-btn-1" class="stage-btn flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer bg-white text-slate-800 border-slate-200 hover:border-slate-300">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono font-bold text-slate-400">02</span>
                <div class="p-1.5 rounded-lg bg-[#F4F8FC] text-[#318CE7]"><i data-lucide="cpu" class="w-4 h-4"></i></div>
              </div>
              <div class="text-xs font-bold leading-tight text-[#142B45]">Data Processing</div>
            </button>
            <div class="text-slate-300 shrink-0"><i data-lucide="chevron-right" class="w-4 h-4"></i></div>

            <button onclick="selectStage(2)" id="stage-btn-2" class="stage-btn flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer bg-[#1769AA] text-white border-[#1769AA] shadow-xs">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono font-bold text-blue-100">03</span>
                <div class="p-1.5 rounded-lg bg-white/20 text-white"><i data-lucide="trending-up" class="w-4 h-4"></i></div>
              </div>
              <div class="text-xs font-bold leading-tight text-white">AI Forecasting</div>
            </button>
            <div class="text-slate-300 shrink-0"><i data-lucide="chevron-right" class="w-4 h-4"></i></div>

            <button onclick="selectStage(3)" id="stage-btn-3" class="stage-btn flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer bg-white text-slate-800 border-slate-200 hover:border-slate-300">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono font-bold text-slate-400">04</span>
                <div class="p-1.5 rounded-lg bg-[#F4F8FC] text-amber-600"><i data-lucide="shield-alert" class="w-4 h-4"></i></div>
              </div>
              <div class="text-xs font-bold leading-tight text-[#142B45]">Inventory Intelligence</div>
            </button>
            <div class="text-slate-300 shrink-0"><i data-lucide="chevron-right" class="w-4 h-4"></i></div>

            <button onclick="selectStage(4)" id="stage-btn-4" class="stage-btn flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer bg-white text-slate-800 border-slate-200 hover:border-slate-300">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono font-bold text-slate-400">05</span>
                <div class="p-1.5 rounded-lg bg-[#F4F8FC] text-[#20A89A]"><i data-lucide="arrow-right-left" class="w-4 h-4"></i></div>
              </div>
              <div class="text-xs font-bold leading-tight text-[#142B45]">Action Recommendations</div>
            </button>
            <div class="text-slate-300 shrink-0"><i data-lucide="chevron-right" class="w-4 h-4"></i></div>

            <button onclick="selectStage(5)" id="stage-btn-5" class="stage-btn flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer bg-white text-slate-800 border-slate-200 hover:border-slate-300">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-mono font-bold text-slate-400">06</span>
                <div class="p-1.5 rounded-lg bg-[#F4F8FC] text-[#142B45]"><i data-lucide="layout-dashboard" class="w-4 h-4"></i></div>
              </div>
              <div class="text-xs font-bold leading-tight text-[#142B45]">Management Console</div>
            </button>
          </div>
        </div>

        <!-- Selected Stage Inspector Box -->
        <div class="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
            <div>
              <div class="flex items-center gap-2 text-xs font-semibold text-[#1769AA] mb-1">
                <span id="stage-step-num">Stage 03 Deep Dive</span>
                <span class="text-slate-300">·</span>
                <span>Pipeline Ingestion &amp; Logic</span>
              </div>
              <h3 id="stage-title" class="text-2xl font-bold text-[#142B45]">AI &amp; Machine Learning Forecasting</h3>
            </div>
            <p id="stage-desc" class="text-xs text-slate-600 max-w-lg">
              Applies time-series machine learning algorithms to project future demand curves across regional depots.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/70">
              <div class="text-xs font-bold text-[#142B45] uppercase tracking-wider mb-3 flex items-center gap-2">
                <i data-lucide="database" class="w-3.5 h-3.5 text-[#1769AA]"></i>
                <span>Primary Data Ingestion</span>
              </div>
              <ul id="stage-inputs" class="space-y-2 text-xs text-slate-700">
                <li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#20A89A] shrink-0 mt-0.5"></i><span>Prepared feature datasets</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#20A89A] shrink-0 mt-0.5"></i><span>Historical demand patterns</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#20A89A] shrink-0 mt-0.5"></i><span>Regional lead times</span></li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/70">
              <div class="text-xs font-bold text-[#142B45] uppercase tracking-wider mb-3 flex items-center gap-2">
                <i data-lucide="cpu" class="w-3.5 h-3.5 text-[#318CE7]"></i>
                <span>Processing &amp; Algorithms</span>
              </div>
              <p id="stage-processing" class="text-xs text-slate-700 leading-relaxed font-medium">
                XGBoost regression, gradient boosted decision trees, lag feature correlation, and seasonal ARIMA validation.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/70">
              <div class="text-xs font-bold text-[#142B45] uppercase tracking-wider mb-3 flex items-center gap-2">
                <i data-lucide="trending-up" class="w-3.5 h-3.5 text-[#20A89A]"></i>
                <span>Downstream Deliverables</span>
              </div>
              <ul id="stage-outputs" class="space-y-2 text-xs text-slate-700">
                <li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#1769AA] shrink-0 mt-0.5"></i><span>Projected SKU demand (7, 14, 30 days)</span></li>
                <li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#1769AA] shrink-0 mt-0.5"></i><span>Prediction confidence intervals</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. CORE FEATURES SECTION -->
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-14">
          <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Capabilities</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            Six Pillars of Distribution Intelligence
          </h2>
          <p class="text-base text-slate-600 leading-relaxed">
            GIBS FlowIQ bridges demand forecasting with floor-level inventory tracking to keep FMCG goods moving steadily without depot stockouts or shelf-life expirations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Feature 1 -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1769AA]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-[#F4F8FC] border border-slate-200/70 flex items-center justify-center text-[#1769AA]">
                  <i data-lucide="trending-up" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-medium text-slate-500 font-mono">ML Projections</span>
              </div>
              <h3 class="text-lg font-bold text-[#142B45] mb-2.5">AI Demand Forecasting</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Predict future SKU demand across geographic depots using historical sales velocity, calendar seasonality, and gradient boosted models to avoid stockouts.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100">
              <ul class="space-y-2 text-xs text-slate-600">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Multi-horizon forecasting (7, 14, 30 days)</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Confidence intervals for risk planning</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Seasonal pattern recognition</span></li>
              </ul>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1769AA]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-[#F4F8FC] border border-slate-200/70 flex items-center justify-center text-[#318CE7]">
                  <i data-lucide="package" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-medium text-slate-500 font-mono">Depot Visibility</span>
              </div>
              <h3 class="text-lg font-bold text-[#142B45] mb-2.5">Smart Inventory Management</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Monitor stock quantities, product availability and inventory movements across central factories and regional distribution centers in real time.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100">
              <ul class="space-y-2 text-xs text-slate-600">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Consolidated multi-hub stock tracking</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Automated safety stock thresholds</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Movement velocity tracking</span></li>
              </ul>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1769AA]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-[#F4F8FC] border border-slate-200/70 flex items-center justify-center text-rose-600">
                  <i data-lucide="clock" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-medium text-slate-500 font-mono">Batch Protection</span>
              </div>
              <h3 class="text-lg font-bold text-[#142B45] mb-2.5">Expiry Risk Monitoring</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Identify batches approaching expiry and prioritize attention, generating actionable redistribution and promotional recommendations before write-offs occur.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100">
              <ul class="space-y-2 text-xs text-slate-600">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Batch-level shelf life countdown</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>High/medium/low risk triage</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Redistribution action suggestions</span></li>
              </ul>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1769AA]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-[#F4F8FC] border border-slate-200/70 flex items-center justify-center text-[#20A89A]">
                  <i data-lucide="sparkles" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-medium text-slate-500 font-mono">Lead-Time Aware</span>
              </div>
              <h3 class="text-lg font-bold text-[#142B45] mb-2.5">Intelligent Reordering</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Generate suggested replenishment quantities based on demand, stock and lead-time assumptions to eliminate manual ordering guesswork.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100">
              <ul class="space-y-2 text-xs text-slate-600">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Lead-time aware order suggestions</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Dynamic reorder point calibration</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Overstock prevention safeguards</span></li>
              </ul>
            </div>
          </div>

          <!-- Feature 5 -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1769AA]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-[#F4F8FC] border border-slate-200/70 flex items-center justify-center text-[#1769AA]">
                  <i data-lucide="truck" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-medium text-slate-500 font-mono">Channel Alignment</span>
              </div>
              <h3 class="text-lg font-bold text-[#142B45] mb-2.5">Distributor Management</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Organize distributor information, orders and stock visibility across wholesale hubs to ensure balanced fulfillment without channel starvation.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100">
              <ul class="space-y-2 text-xs text-slate-600">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Distributor performance tracking</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Regional territory order pipelines</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Fulfillment velocity metrics</span></li>
              </ul>
            </div>
          </div>

          <!-- Feature 6 -->
          <div class="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1769AA]/40 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-5">
                <div class="w-11 h-11 rounded-xl bg-[#F4F8FC] border border-slate-200/70 flex items-center justify-center text-[#142B45]">
                  <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-medium text-slate-500 font-mono">BI &amp; Analytics</span>
              </div>
              <h3 class="text-lg font-bold text-[#142B45] mb-2.5">Business Analytics</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Visualize sales trends, product performance, demand patterns and inventory insights through intuitive interactive dashboards and management summaries.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100">
              <ul class="space-y-2 text-xs text-slate-600">
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Interactive visual charts</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Category turnover comparisons</span></li>
                <li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-[#20A89A]"></i><span>Operations-ready reports</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. HOW IT WORKS SECTION -->
    <section class="py-20 bg-[#F4F8FC] border-y border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-14">
          <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Operational Execution</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            How GIBS FlowIQ Works in Practice
          </h2>
          <p class="text-base text-slate-600 leading-relaxed">
            From raw ERP dispatch logs to boardroom distribution visibility—a clear five-stage methodology designed for practical manufacturing operations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          <div class="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-8 h-8 rounded-lg bg-[#1769AA]/10 text-[#1769AA] font-mono font-bold text-xs flex items-center justify-center">01</span>
                <span class="text-[11px] font-semibold text-slate-400">Step 1 of 5</span>
              </div>
              <h3 class="text-sm font-bold text-[#142B45] mb-2 leading-snug">Collect Authorized Sales &amp; Inventory Data</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Securely ingest daily sales registers, dispatch records, warehouse receipts, and product catalog metadata from existing business logs.
              </p>
            </div>
            <div class="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">Non-disruptive CSV/API formats ensure straightforward integration.</div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-8 h-8 rounded-lg bg-[#1769AA]/10 text-[#1769AA] font-mono font-bold text-xs flex items-center justify-center">02</span>
                <span class="text-[11px] font-semibold text-slate-400">Step 2 of 5</span>
              </div>
              <h3 class="text-sm font-bold text-[#142B45] mb-2 leading-snug">Organize &amp; Validate Data</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Cleanse raw transaction records, impute missing entries, standardize SKU codes, and align time-series data across distribution hubs.
              </p>
            </div>
            <div class="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">Strict validation ensures pristine data hygiene.</div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-8 h-8 rounded-lg bg-[#1769AA]/10 text-[#1769AA] font-mono font-bold text-xs flex items-center justify-center">03</span>
                <span class="text-[11px] font-semibold text-slate-400">Step 3 of 5</span>
              </div>
              <h3 class="text-sm font-bold text-[#142B45] mb-2 leading-snug">Analyze Historical Demand with Machine Learning</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Train supervised machine learning models (XGBoost &amp; Random Forest) on historical volume, trends, and seasonal shifts.
              </p>
            </div>
            <div class="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">Continuous cross-validation against FMCG velocity.</div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-8 h-8 rounded-lg bg-[#1769AA]/10 text-[#1769AA] font-mono font-bold text-xs flex items-center justify-center">04</span>
                <span class="text-[11px] font-semibold text-slate-400">Step 4 of 5</span>
              </div>
              <h3 class="text-sm font-bold text-[#142B45] mb-2 leading-snug">Generate Forecasts &amp; Recommendations</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Synthesize demand predictions with on-hand inventory levels and batch expiration dates to calculate exact replenishment requirements.
              </p>
            </div>
            <div class="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">Flags batches approaching critical expiration limits.</div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow transition-shadow flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-8 h-8 rounded-lg bg-[#1769AA]/10 text-[#1769AA] font-mono font-bold text-xs flex items-center justify-center">05</span>
                <span class="text-[11px] font-semibold text-slate-400">Step 5 of 5</span>
              </div>
              <h3 class="text-sm font-bold text-[#142B45] mb-2 leading-snug">Display Actionable Insights Through Dashboards</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">
                Supply chain teams, plant managers, and distribution planners review intuitive, real-time dashboards to make confident restocking decisions.
              </p>
            </div>
            <div class="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">Clear action queues replace manual spreadsheet sheets.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. DASHBOARD PREVIEW & SIMULATION SECTION -->
    <section id="demo" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
              <span>Interactive Prototype Console</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight">
              GIBS FlowIQ Management Console
            </h2>
            <p class="text-sm text-slate-600 mt-2 max-w-2xl">
              Explore the live prototype interface. Filter categories, adjust forecast horizons, inspect aging batches, and simulate demand rebalancing across regional warehouses.
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <button onclick="triggerSimulation()" id="sim-btn" class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-2xs transition-all cursor-pointer">
              <i data-lucide="refresh-cw" id="sim-icon" class="w-3.5 h-3.5 text-[#1769AA]"></i>
              <span id="sim-text">Simulate Demand Shift (+8%)</span>
            </button>
            <div class="hidden sm:inline-flex items-center text-xs font-mono text-slate-500 bg-[#F4F8FC] border border-slate-200 px-2.5 py-1.5 rounded-lg">
              Simulated FMCG Environment
            </div>
          </div>
        </div>

        <!-- Dashboard Container -->
        <div class="bg-[#F4F8FC] rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-md shadow-slate-900/5">
          <!-- Top Bar Controls -->
          <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-200/80">
            <div class="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200/80 overflow-x-auto">
              <button onclick="switchDashTab('forecast')" id="dash-tab-forecast" class="dash-tab-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer bg-[#1769AA] text-white shadow-2xs">
                Demand Forecast &amp; Actuals
              </button>
              <button onclick="switchDashTab('inventory')" id="dash-tab-inventory" class="dash-tab-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer text-slate-600 hover:text-slate-900">
                Inventory &amp; Hub Stock
              </button>
              <button onclick="switchDashTab('expiry')" id="dash-tab-expiry" class="dash-tab-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer text-slate-600 hover:text-slate-900">
                Expiry Risk Alerts
              </button>
              <button onclick="switchDashTab('distributors')" id="dash-tab-distributors" class="dash-tab-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer text-slate-600 hover:text-slate-900">
                Distributor Hubs
              </button>
            </div>

            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              <span class="text-xs font-medium text-slate-500 mr-1 flex items-center gap-1 shrink-0">
                <i data-lucide="filter" class="w-3 h-3"></i>
                Line:
              </span>
              <button onclick="filterCatalog('All')" class="cat-filter-btn px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-[#142B45] text-white" data-filter="All">All</button>
              <button onclick="filterCatalog('Bakery')" class="cat-filter-btn px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-white text-slate-600 border border-slate-200 hover:bg-slate-50" data-filter="Bakery">Bakery</button>
              <button onclick="filterCatalog('Snacks')" class="cat-filter-btn px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-white text-slate-600 border border-slate-200 hover:bg-slate-50" data-filter="Snacks">Snacks</button>
              <button onclick="filterCatalog('Confectionery')" class="cat-filter-btn px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-white text-slate-600 border border-slate-200 hover:bg-slate-50" data-filter="Confectionery">Confectionery</button>
              <button onclick="filterCatalog('Pasta')" class="cat-filter-btn px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-white text-slate-600 border border-slate-200 hover:bg-slate-50" data-filter="Pasta">Pasta</button>
              <button onclick="filterCatalog('Sauces')" class="cat-filter-btn px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-white text-slate-600 border border-slate-200 hover:bg-slate-50" data-filter="Sauces">Sauces</button>
            </div>
          </div>

          <!-- Quick Metrics Strip -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
            <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div class="text-xs text-slate-500 mb-1">Active Line Catalog</div>
              <div id="stat-sku-count" class="text-xl font-bold font-mono text-[#142B45] tabular-nums">8 SKUs</div>
              <div id="stat-sku-label" class="text-[11px] text-slate-400 mt-0.5">All 5 Categories</div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div class="text-xs text-slate-500 mb-1">Total Current Depot Stock</div>
              <div id="stat-total-stock" class="text-xl font-bold font-mono text-[#142B45] tabular-nums">33,150 units</div>
              <div class="text-[11px] text-emerald-700 font-medium mt-0.5">Safe operational margin</div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div class="text-xs text-slate-500 mb-1">Predicted 14-Day Demand</div>
              <div id="stat-forecast-demand" class="text-xl font-bold font-mono text-[#1769AA] tabular-nums">44,250 units</div>
              <div class="text-[11px] text-slate-500 mt-0.5">AI Inference Fit: 94.6%</div>
            </div>

            <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div class="text-xs text-slate-500 mb-1">Replenishment Action Required</div>
              <div id="stat-reorder-count" class="text-xl font-bold font-mono text-amber-700 tabular-nums">4 SKUs</div>
              <div class="text-[11px] text-amber-700 font-medium mt-0.5">Pending factory orders</div>
            </div>
          </div>

          <!-- TAB 1: FORECAST & ACTUALS -->
          <div id="tab-pane-forecast" class="space-y-6">
            <div class="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-3">
                <div>
                  <h3 class="text-base font-bold text-[#142B45]">
                    Aggregated Demand: Historical Actuals vs AI ML Forecast
                  </h3>
                  <p class="text-xs text-slate-500 mt-0.5">
                    Daily units dispatched (past 7 days) and projected demand curve (next 7 days) with confidence bands.
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-slate-400">Horizon:</span>
                  <div class="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs">
                    <button onclick="setHorizon('7d')" id="horizon-7d" class="px-2 py-0.5 rounded cursor-pointer text-slate-600">7D</button>
                    <button onclick="setHorizon('14d')" id="horizon-14d" class="px-2 py-0.5 rounded cursor-pointer bg-white font-semibold shadow-2xs text-[#1769AA]">14D</button>
                    <button onclick="setHorizon('30d')" id="horizon-30d" class="px-2 py-0.5 rounded cursor-pointer text-slate-600">30D</button>
                  </div>
                </div>
              </div>

              <!-- Canvas Chart for Demand -->
              <div class="chart-container">
                <canvas id="forecastChart"></canvas>
              </div>
            </div>

            <!-- Product Status Table -->
            <div class="bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
              <div class="p-4 border-b border-slate-100 flex items-center justify-between">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Product Replenishment &amp; Demand Status Table
                </h4>
                <span id="table-count-label" class="text-xs font-mono text-slate-400">8 items listed</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-slate-50 border-b border-slate-200/80 text-slate-500 font-semibold">
                      <th class="py-2.5 px-3">Product Name</th>
                      <th class="py-2.5 px-3">Category</th>
                      <th class="py-2.5 px-3 text-right">Current Stock</th>
                      <th class="py-2.5 px-3 text-right">Safety Stock</th>
                      <th class="py-2.5 px-3 text-right">14-Day Demand</th>
                      <th class="py-2.5 px-3 text-right">Suggested Order</th>
                      <th class="py-2.5 px-3 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody id="product-table-body" class="divide-y divide-slate-100">
                    <!-- Populated dynamically via JS -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- TAB 2: INVENTORY & HUB STOCK -->
          <div id="tab-pane-inventory" class="hidden space-y-6">
            <div class="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/80 shadow-2xs">
              <div class="pb-4 mb-4 border-b border-slate-100">
                <h3 class="text-base font-bold text-[#142B45]">
                  Regional Distribution Warehouse Capacity &amp; On-Hand Inventory
                </h3>
                <p class="text-xs text-slate-500 mt-0.5">
                  Current physical pallet count versus designated facility maximums across primary distribution territories.
                </p>
              </div>

              <!-- Canvas Chart for Hubs -->
              <div class="chart-container">
                <canvas id="hubChart"></canvas>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-[#142B45]">Central Hub Lahore</span>
                  <span class="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">97.4% Fulfillment</span>
                </div>
                <div class="text-sm font-bold font-mono text-slate-800 mb-1">34,200 / 45,000 Units</div>
                <div class="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
                  <div class="bg-[#1769AA] h-1.5 rounded-full" style="width: 76%"></div>
                </div>
                <div class="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Active Orders: 48</span>
                  <span>City: Lahore</span>
                </div>
              </div>

              <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-[#142B45]">South Distribution Hub</span>
                  <span class="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">95.8% Fulfillment</span>
                </div>
                <div class="text-sm font-bold font-mono text-slate-800 mb-1">41,500 / 50,000 Units</div>
                <div class="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
                  <div class="bg-[#1769AA] h-1.5 rounded-full" style="width: 83%"></div>
                </div>
                <div class="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Active Orders: 62</span>
                  <span>City: Karachi</span>
                </div>
              </div>

              <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-[#142B45]">North Regional Center</span>
                  <span class="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">94.1% Fulfillment</span>
                </div>
                <div class="text-sm font-bold font-mono text-slate-800 mb-1">18,900 / 25,000 Units</div>
                <div class="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
                  <div class="bg-[#1769AA] h-1.5 rounded-full" style="width: 75%"></div>
                </div>
                <div class="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Active Orders: 29</span>
                  <span>City: Islamabad</span>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 3: EXPIRY RISK ALERTS -->
          <div id="tab-pane-expiry" class="hidden bg-white rounded-xl border border-slate-200/80 shadow-2xs overflow-hidden">
            <div class="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h4 class="text-sm font-bold text-[#142B45] flex items-center gap-2">
                  <i data-lucide="clock" class="w-4 h-4 text-rose-600"></i>
                  <span>Perishable &amp; Semi-Perishable Batch Expiration Watchlist</span>
                </h4>
                <p class="text-xs text-slate-500 mt-0.5">
                  Batches prioritized for expedited redistribution, commercial discounting, or priority wholesale dispatch.
                </p>
              </div>
              <div class="text-xs font-mono text-slate-500">5 Flagged Batches</div>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                    <th class="py-2.5 px-3">Batch Code &amp; SKU</th>
                    <th class="py-2.5 px-3">Location Depot</th>
                    <th class="py-2.5 px-3 text-right">Units</th>
                    <th class="py-2.5 px-3">Expiry Date</th>
                    <th class="py-2.5 px-3 text-center">Days Left</th>
                    <th class="py-2.5 px-3">Actionable Mitigation Recommendation</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr class="hover:bg-slate-50/80">
                    <td class="py-3 px-3">
                      <div class="font-semibold text-slate-900">Butter Heritage Biscuits 180g</div>
                      <div class="text-[10px] font-mono text-slate-500">BHB-2024-B18</div>
                    </td>
                    <td class="py-3 px-3 text-slate-600">Central Hub Lahore (Bay 4)</td>
                    <td class="py-3 px-3 text-right font-mono tabular-nums text-slate-900 font-medium">720</td>
                    <td class="py-3 px-3 font-mono text-slate-700">2026-11-28</td>
                    <td class="py-3 px-3 text-center">
                      <span class="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-800">17 days</span>
                    </td>
                    <td class="py-3 px-3 text-slate-700 max-w-sm">Route to Central Lahore hypermarkets with 15% distributor promotion incentive.</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80">
                    <td class="py-3 px-3">
                      <div class="font-semibold text-slate-900">Lemon Garlic Aioli 320g</div>
                      <div class="text-[10px] font-mono text-slate-500">LGA-2026-D12</div>
                    </td>
                    <td class="py-3 px-3 text-slate-600">Faisalabad Regional Depot (Bay 1)</td>
                    <td class="py-3 px-3 text-right font-mono tabular-nums text-slate-900 font-medium">890</td>
                    <td class="py-3 px-3 font-mono text-slate-700">2026-11-22</td>
                    <td class="py-3 px-3 text-center">
                      <span class="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded bg-rose-100 text-rose-800">11 days</span>
                    </td>
                    <td class="py-3 px-3 text-slate-700 max-w-sm">Immediate clearance dispatch to quick-service restaurant accounts.</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80">
                    <td class="py-3 px-3">
                      <div class="font-semibold text-slate-900">Truffle Sea Salt Crisps 100g</div>
                      <div class="text-[10px] font-mono text-slate-500">TSS-2026-A09</div>
                    </td>
                    <td class="py-3 px-3 text-slate-600">South Distribution Karachi (Bay 2)</td>
                    <td class="py-3 px-3 text-right font-mono tabular-nums text-slate-900 font-medium">480</td>
                    <td class="py-3 px-3 font-mono text-slate-700">2026-12-08</td>
                    <td class="py-3 px-3 text-center">
                      <span class="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800">27 days</span>
                    </td>
                    <td class="py-3 px-3 text-slate-700 max-w-sm">Prioritize dispatch for pending weekend wholesale orders in South Hub.</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80">
                    <td class="py-3 px-3">
                      <div class="font-semibold text-slate-900">Berry &amp; White Chocolate 90g</div>
                      <div class="text-[10px] font-mono text-slate-500">BWC-2026-C03</div>
                    </td>
                    <td class="py-3 px-3 text-slate-600">North Hub Islamabad (Cold Bay 1)</td>
                    <td class="py-3 px-3 text-right font-mono tabular-nums text-slate-900 font-medium">340</td>
                    <td class="py-3 px-3 font-mono text-slate-700">2026-12-15</td>
                    <td class="py-3 px-3 text-center">
                      <span class="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800">34 days</span>
                    </td>
                    <td class="py-3 px-3 text-slate-700 max-w-sm">Bundle with seasonal festive retailer display packs in North Hub.</td>
                  </tr>
                  <tr class="hover:bg-slate-50/80">
                    <td class="py-3 px-3">
                      <div class="font-semibold text-slate-900">Spiral Fusilli 500g</div>
                      <div class="text-[10px] font-mono text-slate-500">SPF-2025-F07</div>
                    </td>
                    <td class="py-3 px-3 text-slate-600">Multan Depot (Bay 3)</td>
                    <td class="py-3 px-3 text-right font-mono tabular-nums text-slate-900 font-medium">250</td>
                    <td class="py-3 px-3 font-mono text-slate-700">2027-02-15</td>
                    <td class="py-3 px-3 text-center">
                      <span class="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700">95 days</span>
                    </td>
                    <td class="py-3 px-3 text-slate-700 max-w-sm">Monitor turnover in standard regional replenishment cycle.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- TAB 4: DISTRIBUTOR HUBS -->
          <div id="tab-pane-distributors" class="hidden space-y-4">
            <div class="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs">
              <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <h4 class="text-sm font-bold text-[#142B45] flex items-center gap-2">
                  <i data-lucide="building-2" class="w-4 h-4 text-[#1769AA]"></i>
                  <span>Distributor Network &amp; Fulfillment Overview</span>
                </h4>
                <span class="text-xs text-slate-500">5 Regional Operating Hubs</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="p-4 rounded-xl border border-slate-200/80 bg-[#F4F8FC]">
                  <div class="flex items-start justify-between mb-2">
                    <div>
                      <div class="text-xs font-bold text-[#142B45]">Central Hub Lahore</div>
                      <div class="text-[11px] text-slate-500">Lahore Territory</div>
                    </div>
                    <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">97.4%</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 my-3 text-xs">
                    <div class="bg-white p-2 rounded border border-slate-200/60">
                      <div class="text-slate-400 text-[10px]">Stock On Hand</div>
                      <div class="font-mono font-bold text-[#142B45]">34,200</div>
                    </div>
                    <div class="bg-white p-2 rounded border border-slate-200/60">
                      <div class="text-slate-400 text-[10px]">Active Orders</div>
                      <div class="font-mono font-bold text-[#1769AA]">48</div>
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#20A89A]"></i>
                    <span>Daily dispatch scheduled at 06:00 PKT</span>
                  </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-200/80 bg-[#F4F8FC]">
                  <div class="flex items-start justify-between mb-2">
                    <div>
                      <div class="text-xs font-bold text-[#142B45]">South Distribution Hub</div>
                      <div class="text-[11px] text-slate-500">Karachi Territory</div>
                    </div>
                    <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">95.8%</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 my-3 text-xs">
                    <div class="bg-white p-2 rounded border border-slate-200/60">
                      <div class="text-slate-400 text-[10px]">Stock On Hand</div>
                      <div class="font-mono font-bold text-[#142B45]">41,500</div>
                    </div>
                    <div class="bg-white p-2 rounded border border-slate-200/60">
                      <div class="text-slate-400 text-[10px]">Active Orders</div>
                      <div class="font-mono font-bold text-[#1769AA]">62</div>
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#20A89A]"></i>
                    <span>Port corridor logistics active</span>
                  </div>
                </div>

                <div class="p-4 rounded-xl border border-slate-200/80 bg-[#F4F8FC]">
                  <div class="flex items-start justify-between mb-2">
                    <div>
                      <div class="text-xs font-bold text-[#142B45]">North Regional Center</div>
                      <div class="text-[11px] text-slate-500">Islamabad Territory</div>
                    </div>
                    <span class="text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">94.1%</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 my-3 text-xs">
                    <div class="bg-white p-2 rounded border border-slate-200/60">
                      <div class="text-slate-400 text-[10px]">Stock On Hand</div>
                      <div class="font-mono font-bold text-[#142B45]">18,900</div>
                    </div>
                    <div class="bg-white p-2 rounded border border-slate-200/60">
                      <div class="text-slate-400 text-[10px]">Active Orders</div>
                      <div class="font-mono font-bold text-[#1769AA]">29</div>
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#20A89A]"></i>
                    <span>Cold chain bays verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Console Footer -->
          <div class="mt-6 pt-4 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <div>
              <span>GIBS FlowIQ v0.8-Alpha Prototype</span>
              <span class="mx-2">·</span>
              <span>Demonstration Engine for Food FMCG Operations</span>
            </div>
            <div class="text-slate-400 font-mono text-[11px]">
              Latency: 48ms · Inferences Cached
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. TECHNOLOGY STACK SECTION -->
    <section id="technology" class="py-20 bg-[#F4F8FC] border-t border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Engineering Architecture</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            Technology Stack &amp; Roadmap
          </h2>
          <p class="text-base text-slate-600 leading-relaxed">
            GIBS FlowIQ is architected with modern, modular software engineering practices to ensure high responsiveness, reliable statistical computations, and painless integration into existing food manufacturing ERP workflows.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#1769AA]/40 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70 text-[#1769AA]">
                  <i data-lucide="code-2" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">Frontend &amp; UI</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-1">React &amp; TypeScript</h3>
              <div class="text-xs font-semibold text-[#1769AA] mb-3">Status: Implemented in Prototype</div>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Responsive client interface, component-driven architecture, and strict type safety for mission-critical supply chain data.</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <i data-lucide="shield" class="w-3.5 h-3.5 text-[#20A89A]"></i>
              <span>Enterprise Grade Architecture</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#1769AA]/40 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70 text-[#318CE7]">
                  <i data-lucide="server" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">Backend Architecture</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-1">Node.js &amp; FastAPI Ready</h3>
              <div class="text-xs font-semibold text-[#1769AA] mb-3">Status: Modular REST Design</div>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Node.js REST gateway for business logic, designed to integrate with high-performance Python FastAPI microservices for ML inferencing.</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <i data-lucide="shield" class="w-3.5 h-3.5 text-[#20A89A]"></i>
              <span>Enterprise Grade Architecture</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#1769AA]/40 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70 text-[#20A89A]">
                  <i data-lucide="database" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">Data Storage</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-1">Firestore &amp; PostgreSQL</h3>
              <div class="text-xs font-semibold text-[#1769AA] mb-3">Status: Hybrid Schema Blueprint</div>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">NoSQL Firestore for rapid prototype iteration; relational PostgreSQL schema mapped for enterprise batch scale.</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <i data-lucide="shield" class="w-3.5 h-3.5 text-[#20A89A]"></i>
              <span>Enterprise Grade Architecture</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#1769AA]/40 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70 text-[#1769AA]">
                  <i data-lucide="brain-circuit" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">Machine Learning</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-1">Python, Scikit-learn &amp; XGBoost</h3>
              <div class="text-xs font-semibold text-[#1769AA] mb-3">Status: Forecasting Pipeline Design</div>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Feature engineering with Pandas, time-series regression with Scikit-learn, and gradient-boosted decision trees using XGBoost.</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <i data-lucide="shield" class="w-3.5 h-3.5 text-[#20A89A]"></i>
              <span>Enterprise Grade Architecture</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#1769AA]/40 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70 text-[#318CE7]">
                  <i data-lucide="line-chart" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">Data Visualization</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-1">Recharts / Chart.js</h3>
              <div class="text-xs font-semibold text-[#1769AA] mb-3">Status: Integrated in Live UI</div>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Interactive line charts, area distributions, and comparative bar visualizations for inventory velocity and demand projections.</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <i data-lucide="shield" class="w-3.5 h-3.5 text-[#20A89A]"></i>
              <span>Enterprise Grade Architecture</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-[#1769AA]/40 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-[#F4F8FC] border border-slate-200/70 text-[#20A89A]">
                  <i data-lucide="sparkles" class="w-5 h-5"></i>
                </div>
                <span class="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">AI Assistance</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-1">Gemini API</h3>
              <div class="text-xs font-semibold text-[#1769AA] mb-3">Status: Planned Service Integration</div>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Exploration for automated natural language executive summaries, anomaly explanations, and supply chain query interpretation.</p>
            </div>
            <div class="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <i data-lucide="shield" class="w-3.5 h-3.5 text-[#20A89A]"></i>
              <span>Enterprise Grade Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. BUSINESS VALUE SECTION -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-14">
          <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
            <span>Operational Outcomes</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
            From Business Data to Better Decisions
          </h2>
          <p class="text-base text-slate-600 leading-relaxed">
            By shifting from retroactive accounting to proactive algorithmic forecasting, food manufacturing leaders and distribution supervisors can eliminate common friction points across production lines and warehouse depots.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl bg-[#F4F8FC] border border-slate-200/80 hover:bg-white hover:border-[#1769AA]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-[#1769AA]"><i data-lucide="eye" class="w-5 h-5"></i></div>
                <span class="text-[11px] font-mono text-slate-400">Objective 01</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-2">Improved Demand Visibility</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-6">Gain a clear mathematical outlook into expected product demand across SKUs and distribution territories, replacing reactive firefighting with proactive planning.</p>
            </div>
            <div class="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">Visibility Horizon:</span>
              <span class="font-semibold text-[#1769AA]">Up to 30 days forward projection</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F4F8FC] border border-slate-200/80 hover:bg-white hover:border-[#1769AA]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-[#318CE7]"><i data-lucide="layers" class="w-5 h-5"></i></div>
                <span class="text-[11px] font-mono text-slate-400">Objective 02</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-2">Better Inventory Planning</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-6">Balance factory production batches with actual regional consumption velocity to maintain lean, healthy warehouse reserves without stockout anxiety.</p>
            </div>
            <div class="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">Buffer Optimization:</span>
              <span class="font-semibold text-[#1769AA]">Dynamic safety stock calibration</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F4F8FC] border border-slate-200/80 hover:bg-white hover:border-[#1769AA]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-rose-600"><i data-lucide="clock" class="w-5 h-5"></i></div>
                <span class="text-[11px] font-mono text-slate-400">Objective 03</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-2">Earlier Expiry Identification</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-6">Flag aging product batches weeks before critical deadlines, enabling timely promotional discounts or geographic re-routing before goods spoil.</p>
            </div>
            <div class="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">Loss Mitigation:</span>
              <span class="font-semibold text-[#1769AA]">Actionable alerts before write-offs</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F4F8FC] border border-slate-200/80 hover:bg-white hover:border-[#1769AA]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-[#20A89A]"><i data-lucide="shopping-cart" class="w-5 h-5"></i></div>
                <span class="text-[11px] font-mono text-slate-400">Objective 04</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-2">Informed Replenishment</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-6">Eliminate guesswork from production orders with systematic replenishment suggestions that account for supplier lead times and warehouse capacity.</p>
            </div>
            <div class="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">Order Accuracy:</span>
              <span class="font-semibold text-[#1769AA]">Lead-time aware reorder quantities</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F4F8FC] border border-slate-200/80 hover:bg-white hover:border-[#1769AA]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-[#1769AA]"><i data-lucide="file-spreadsheet" class="w-5 h-5"></i></div>
                <span class="text-[11px] font-mono text-slate-400">Objective 05</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-2">Unified Operational Reporting</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-6">Replace scattered manual spreadsheets with standardized, real-time dashboards accessible by supply chain coordinators and executive leadership.</p>
            </div>
            <div class="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">Reporting Speed:</span>
              <span class="font-semibold text-[#1769AA]">Single consolidated view of truth</span>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F4F8FC] border border-slate-200/80 hover:bg-white hover:border-[#1769AA]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-[#142B45]"><i data-lucide="truck" class="w-5 h-5"></i></div>
                <span class="text-[11px] font-mono text-slate-400">Objective 06</span>
              </div>
              <h3 class="text-base font-bold text-[#142B45] mb-2">Organized Distribution</h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-6">Track distributor order fulfillment and territorial velocity to ensure fair stock allocation and prevent regional channel starvation.</p>
            </div>
            <div class="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">Channel Health:</span>
              <span class="font-semibold text-[#1769AA]">Transparent depot performance metrics</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. ABOUT DEVELOPER SECTION -->
    <section id="about" class="py-20 bg-white border-t border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
              <span>Project Background &amp; Origins</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
              Built to Solve Real Industry Challenges.
            </h2>
            <p class="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              GIBS FlowIQ is an independent AI software development project focused on exploring practical applications of artificial intelligence in food manufacturing and distribution.
            </p>
          </div>

          <div class="bg-[#F4F8FC] rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div class="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0 md:pr-6">
                <div class="flex items-center gap-3.5 mb-4">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1769AA] to-[#318CE7] flex items-center justify-center text-white text-xl font-bold shadow-xs">
                    RA
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-[#142B45]">Rahab Asif</h3>
                    <div class="text-xs font-semibold text-[#1769AA] flex items-center gap-1.5 mt-0.5">
                      <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                      <span>AI Engineer | AI Content Engineer | AI Entrepreneur</span>
                    </div>
                  </div>
                </div>
                <div class="text-xs text-slate-600 leading-relaxed">
                  Dedicated to applying artificial intelligence, machine learning, and scalable systems engineering to solve real-world industrial and commercial problems.
                </div>
              </div>

              <div class="md:col-span-7 md:pl-2 space-y-4">
                <div class="flex items-start gap-3">
                  <i data-lucide="target" class="w-5 h-5 text-[#20A89A] shrink-0 mt-0.5"></i>
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">Developer Purpose &amp; Vision</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      &ldquo;My goal is to apply artificial intelligence, machine learning and software engineering to solve real-world business problems.&rdquo;
                    </p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <i data-lucide="compass" class="w-5 h-5 text-[#1769AA] shrink-0 mt-0.5"></i>
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">Independent Research Boundary</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      FlowIQ was created independently to demonstrate how modern time-series forecasting, automated shelf-life triage, and consolidated inventory telemetry can streamline FMCG distribution networks.
                    </p>
                  </div>
                </div>

                <div class="pt-2">
                  <a href="#contact" class="inline-flex items-center gap-2 text-xs font-bold text-[#1769AA] hover:text-[#125387] transition-colors cursor-pointer">
                    <span>Connect regarding feedback or research pilots</span>
                    <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 12. CONTACT & COLLABORATION SECTION -->
    <section id="contact" class="py-20 bg-[#F4F8FC] border-t border-slate-200/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 text-xs font-semibold text-[#1769AA] uppercase tracking-wider mb-2">
              <span>Industry Collaboration &amp; Feedback</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-[#142B45] tracking-tight mb-4">
              Let&apos;s Explore Smarter Food Distribution.
            </h2>
            <p class="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We welcome dialogue with food manufacturers, logistics planners, and distribution leaders to refine predictive algorithms against real-world warehouse challenges.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-5 space-y-4">
              <div class="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
                <h3 class="text-sm font-bold text-[#142B45] mb-3 uppercase tracking-wider">
                  Open Collaboration Channels:
                </h3>
                <ul class="space-y-3 text-xs text-slate-600">
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5"></i>
                    <span><strong class="text-slate-800">Industry Feedback:</strong> Critiques from supply chain officers and plant operations managers.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5"></i>
                    <span><strong class="text-slate-800">Operational Problem Discussions:</strong> Sharing distribution pain points across FMCG categories.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5"></i>
                    <span><strong class="text-slate-800">Technical Collaboration:</strong> Machine learning benchmarking and feature engineering insights.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5"></i>
                    <span><strong class="text-slate-800">Prototype Demonstrations:</strong> Walkthrough of demand modeling algorithms and reorder calculations.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-[#20A89A] shrink-0 mt-0.5"></i>
                    <span><strong class="text-slate-800">Potential Pilot Opportunities:</strong> Exploratory, non-binding test runs on anonymized historical dispatch logs.</span>
                  </li>
                </ul>
              </div>

              <div class="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-500 flex items-start gap-2.5 shadow-2xs">
                <i data-lucide="alert-circle" class="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5"></i>
                <span>All shared inquiries are treated with strict confidentiality. Direct inquiries can also be routed to Rahab Asif via project channels.</span>
              </div>
            </div>

            <div class="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
              <div id="contact-success-box" class="hidden py-4 text-center space-y-5">
                <div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <i data-lucide="check-circle-2" class="w-6 h-6"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-[#142B45]">Inquiry Record Prepared Successfully</h3>
                  <p class="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                    Your inquiry details have been validated by the prototype form. Because this is a demonstration environment, a local confirmation ticket has been generated below.
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/80 text-left space-y-2 text-xs">
                  <div class="flex items-center justify-between pb-2 border-b border-slate-200/60">
                    <span class="font-semibold text-slate-500">Ticket Reference:</span>
                    <div class="flex items-center gap-1.5 font-mono font-bold text-[#1769AA]">
                      <span id="res-ref-id">FLOWIQ-582910</span>
                      <button onclick="copyRefId()" type="button" class="p-1 hover:bg-slate-200 rounded text-slate-500" title="Copy Reference">
                        <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  </div>
                  <div><span class="text-slate-500">Sender: </span><span id="res-name" class="font-medium text-slate-800"></span></div>
                  <div><span class="text-slate-500">Department: </span><span id="res-dept" class="font-medium text-slate-800"></span></div>
                  <div><span class="text-slate-500">Contact: </span><span id="res-email" class="font-medium text-slate-800"></span></div>
                </div>
                <button onclick="resetContactForm()" type="button" class="px-4 py-2 text-xs font-semibold text-[#1769AA] bg-[#F4F8FC] hover:bg-[#e8f1fa] border border-slate-200 rounded-lg cursor-pointer">
                  Submit Another Inquiry
                </button>
              </div>

              <form id="contact-form" onsubmit="handleContactSubmit(event)" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input id="input-name" type="text" required placeholder="e.g. Tariq Mehmood" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20" />
                    <p id="err-name" class="hidden text-[11px] text-rose-600 mt-1">Full name is required</p>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Organization / Company *</label>
                    <input id="input-org" type="text" required placeholder="e.g. Continental Food Industries" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20" />
                    <p id="err-org" class="hidden text-[11px] text-rose-600 mt-1">Company name is required</p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Professional Work Email *</label>
                    <input id="input-email" type="email" required placeholder="tariq@company.com" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20" />
                    <p id="err-email" class="hidden text-[11px] text-rose-600 mt-1">Please provide a valid email format</p>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                    <select id="input-dept" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20">
                      <option value="Supply Chain & Logistics">Supply Chain &amp; Logistics</option>
                      <option value="Plant & Operations Management">Plant &amp; Operations Management</option>
                      <option value="Sales & Distribution Planning">Sales &amp; Distribution Planning</option>
                      <option value="Executive & Strategy">Executive &amp; Strategy</option>
                      <option value="Academic & Technical Research">Academic &amp; Technical Research</option>
                      <option value="Other">Other Department</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Primary Subject of Interest</label>
                  <select id="input-interest" class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20">
                    <option value="Operational Problem Discussion">Operational Problem Discussion</option>
                    <option value="Prototype Walkthrough Request">Prototype Walkthrough Request</option>
                    <option value="Industry & Algorithmic Feedback">Industry &amp; Algorithmic Feedback</option>
                    <option value="Technical Collaboration">Technical Collaboration</option>
                    <option value="Exploratory Pilot Inquiry">Exploratory Pilot Inquiry</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Message / Operational Context *</label>
                  <textarea id="input-msg" rows="4" required placeholder="Please describe your operational context, category dynamics, or questions regarding GIBS FlowIQ..." class="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769AA]/20"></textarea>
                  <p id="err-msg" class="hidden text-[11px] text-rose-600 mt-1">Please provide at least 10 characters detailing your inquiry</p>
                </div>

                <button id="contact-submit-btn" type="submit" class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#1769AA] hover:bg-[#125387] active:bg-[#0d3f66] rounded-xl transition-all shadow-xs cursor-pointer">
                  <i data-lucide="send" class="w-3.5 h-3.5"></i>
                  <span>Transmit Collaboration Inquiry</span>
                </button>

                <p class="text-[11px] text-slate-400 text-center mt-2">
                  Prototype form validation only. Transmissions are safely verified and logged locally for demonstration.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 13. FOOTER -->
    <footer class="bg-white border-t border-slate-200 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          <div class="md:col-span-6 space-y-4">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-[#1769AA] flex items-center justify-center text-white">
                <i data-lucide="layers" class="w-4 h-4"></i>
              </div>
              <span class="text-lg font-bold text-[#142B45] tracking-tight">
                GIBS Flow<span class="text-[#318CE7]">IQ</span>
              </span>
            </div>

            <p class="text-sm font-medium text-slate-700 max-w-md">
              AI-Powered Demand Forecasting &amp; Intelligent Distribution Management System.
            </p>

            <p class="text-xs text-slate-500 max-w-md leading-relaxed">
              Intelligent Decisions. Smarter Distribution. Better Business Visibility. An independent applied machine learning prototype for the food manufacturing and distribution industry.
            </p>

            <div class="text-xs text-slate-600 font-medium pt-1 space-y-1">
              <div>Developed by <strong class="text-[#142B45]">Rahab Asif</strong> (AI Engineer | AI Content Engineer | AI Entrepreneur).</div>
              <div class="text-slate-500">Proposed AI-powered solution for SM Foods (GIBS Pakistan).</div>
            </div>
          </div>

          <div class="md:col-span-3 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">Navigation</h4>
            <ul class="space-y-2 text-xs text-slate-600">
              <li><a href="#overview" class="hover:text-[#1769AA] transition-colors">Home Overview</a></li>
              <li><a href="#solution" class="hover:text-[#1769AA] transition-colors">Solutions &amp; Pipeline</a></li>
              <li><a href="#features" class="hover:text-[#1769AA] transition-colors">Core Features</a></li>
              <li><a href="#technology" class="hover:text-[#1769AA] transition-colors">Technology Stack</a></li>
              <li><a href="#demo" class="hover:text-[#1769AA] transition-colors">Interactive Demo</a></li>
              <li><a href="#contact" class="hover:text-[#1769AA] transition-colors">Contact &amp; Collaboration</a></li>
            </ul>
          </div>

          <div class="md:col-span-3 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900">Project Classification</h4>
            <p class="text-xs text-slate-500 leading-relaxed">
              Applied Artificial Intelligence &amp; Industrial Distribution Platform. Designed to demonstrate practical machine learning utility in food manufacturing supply chain and wholesale distribution operations.
            </p>
            <div class="pt-2">
              <a href="#overview" class="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#1769AA] transition-colors cursor-pointer">
                <span>Back to top</span>
                <i data-lucide="arrow-up" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Mandatory Independent Disclaimer -->
        <div class="mt-8 p-4 rounded-xl bg-[#F4F8FC] border border-slate-200/80 text-center">
          <p class="text-xs text-slate-600 leading-relaxed font-medium">
            <strong class="text-[#142B45]">Mandatory Independent Disclaimer: </strong>
            GIBS FlowIQ is an independent proposed software project. It is not affiliated with, endorsed by, or officially associated with SM Foods or GIBS Pakistan.
          </p>
        </div>

        <div class="mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <div>
            &copy; 2026 GIBS FlowIQ. Independent Software Project by Rahab Asif. All rights reserved.
          </div>
          <div class="flex items-center gap-4">
            <span>Enterprise Food Logistics</span>
            <span>·</span>
            <span>Light Theme Enterprise Design</span>
            <span>·</span>
            <span>Standalone Distribution Edition</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- INLINE JAVASCRIPT LOGIC (STANDALONE) -->
    <script>
      // 1. DATA DEFINITIONS
      const categoryData = {
        bakery: {
          title: "Biscuits & Bakery Products",
          tag: "FMCG Bakery Line",
          skuCount: "14 Catalog SKUs",
          desc: "High-velocity shelf-stable biscuits, family pack cookies, and crisp crackers. Highly sensitive to retail turnover cycles and moisture-proof packaging integrity.",
          dynamics: "Short-to-medium shelf life (6-9 months), high packaging volume, bulk pallet distribution, weekly replenishment rhythm.",
          leadTime: "2-3 days",
          turnover: "Very High",
          skus: ["Butter Heritage Biscuits 180g", "Oat & Salt Crisps 160g", "Double Choc Chip Cookies 200g"],
          img: "${bakeryImg}"
        },
        snacks: {
          title: "Snacks & Savory Crisps",
          tag: "Extruded & Potato Crisps",
          skuCount: "18 Catalog SKUs",
          desc: "Lightweight, high-cube volume snacks prone to rapid seasonal and holiday consumption spikes. Fragile packaging requires optimal vehicle volume loading.",
          dynamics: "High volumetric footprint, rapid impulse purchasing patterns, susceptible to sudden weekend and promotional demand swings.",
          leadTime: "1-2 days",
          turnover: "Very High",
          skus: ["Truffle Sea Salt Crisps 100g", "Smoked Paprika & Chili 100g", "Vintage Cheddar Snack Crisps 100g"],
          img: "${snacksImg}"
        },
        confectionery: {
          title: "Confectionery & Sweets",
          tag: "Chocolates & Chews",
          skuCount: "12 Catalog SKUs",
          desc: "Temperature-sensitive chocolates, wrapped hard candies, and fruit jelly chews. Temperature monitoring and climate-controlled regional storage are vital.",
          dynamics: "Temperature exposure risks in summer supply routes, sensitive shelf positioning, festive holiday demand surges.",
          leadTime: "3-4 days",
          turnover: "Moderate",
          skus: ["Velvet Dark Cocoa 70% 100g", "Berry & White Chocolate 90g", "Citrus Spice Fruit Jellies 120g"],
          img: "${confectioneryImg}"
        },
        pasta: {
          title: "Pasta & Noodle Products",
          tag: "Dry Grains & Staples",
          skuCount: "10 Catalog SKUs",
          desc: "Staple food line with longer shelf stability but heavy weight logistics. Demand is steady with predictable baseline consumption across urban centers.",
          dynamics: "High pallet weight, 12-24 month shelf stability, predictable baseline consumption, sensitivity to wheat commodity cost shifts.",
          leadTime: "4-5 days",
          turnover: "Steady",
          skus: ["Durum Wheat Penne Rigate 500g", "Spiral Fusilli 500g", "Classic Fettuccine 500g"],
          img: "${pastaImg}"
        },
        sauces: {
          title: "Sauces & Culinary Condiments",
          tag: "Bottled Condiments & Dips",
          skuCount: "16 Catalog SKUs",
          desc: "Glass-bottled and pouch-packaged culinary pastes, hot sauces, and table dressings. Heavy freight weight and fragile handling in transit.",
          dynamics: "Glass breakage mitigation, steady repeat household usage, batch expiry tracking for acidic and oil-based formulations.",
          leadTime: "3-5 days",
          turnover: "Moderate",
          skus: ["Smoky Chipotle Sauce 350ml", "Spiced Sriracha Blend 350ml", "Lemon Garlic Aioli 320g"],
          img: "${saucesImg}"
        }
      };

      const problemsData = [
        {
          title: "1. Demand Uncertainty",
          sub: "The FMCG Bullwhip Distortion",
          friction: "Without systematic forecasting, food manufacturers struggle to estimate future demand across multiple product categories and locations, leading to severe stockouts during unexpected surges or excessive inventory during quiet periods.",
          impact: "Lost revenue from unfulfilled distributor orders and strained wholesale relationships across territories.",
          solution: "Statistical machine learning forecasts consumer pull at the distributor level rather than relying on delayed retailer reorders."
        },
        {
          title: "2. Inventory Visibility Blind Spots",
          sub: "Dispersed Regional Warehouses",
          friction: "Stock quantities spread across regional depots and in-transit shipments are frequently tracked in disconnected spreadsheets, preventing leadership from seeing the true consolidated inventory position.",
          impact: "Unbalanced inventory where one depot starves while another regional hub is overstocked with slow-moving inventory.",
          solution: "Unified hub telemetry aggregates multi-warehouse inventory into a single pane of glass."
        },
        {
          title: "3. Silent Expiry Risk & Food Waste",
          sub: "Perishable & Semi-Perishable FMCG",
          friction: "Packaged foods have defined shelf lives. Batches buried in back-warehouse bays often go unnoticed until expiry is imminent, leaving no time to sell before damage occurs.",
          impact: "Forced write-offs, product disposal costs, and discounted fire-sales that hurt brand margins.",
          solution: "Proactive batch shelf-life countdown monitors batches and suggests early redistribution 30-45 days prior to expiration."
        },
        {
          title: "4. Guesswork in Stock Replenishment",
          sub: "Arbitrary Reorder Volumes",
          friction: "Production schedules and replenishment orders are frequently based on gut feel or static historical averages that fail to consider supplier lead times or upcoming demand shifts.",
          impact: "Excess holding costs, factory floor bottlenecks, and rushed emergency production runs.",
          solution: "Lead-time calibrated reorder points calculate exact replenishment quantities aligned with production schedules."
        },
        {
          title: "5. Fragmented Business Insights",
          sub: "Disconnected Data Silos",
          friction: "Sales data sits with field teams, inventory numbers reside in warehouse logs, and finance reviews month-old reports, leaving operations managers with fragmented, stale intelligence.",
          impact: "Delayed decision-making, conflicting spreadsheets, and slow reaction to market shifts.",
          solution: "Standardized analytical pipelines transform disparate records into unified, actionable executive intelligence."
        }
      ];

      const stagesData = [
        {
          step: "Stage 01 Deep Dive",
          title: "Sales & Dispatch Data Ingestion",
          desc: "Aggregates historical sales orders, warehouse receipts, and dispatch registers from enterprise records.",
          inputs: ["ERP sales records", "Distributor order logs", "Warehouse stock count", "SKU master lists"],
          processing: "Automated data cleaning, time-stamping, missing field imputation, and outlier detection.",
          outputs: ["Normalized daily SKU transactions", "Standardized channel records"]
        },
        {
          step: "Stage 02 Deep Dive",
          title: "Data Preparation & Feature Engineering",
          desc: "Transforms raw transaction history into structured ML training sets with rolling aggregations.",
          inputs: ["Daily sales timeseries", "Calendar seasonality", "Regional holiday calendars", "Price tier indicators"],
          processing: "Rolling averages (7d, 14d, 30d), lag features, weekend indicators, and exponential decay weighting.",
          outputs: ["Engineered feature matrix", "Batch shelf-life index"]
        },
        {
          step: "Stage 03 Deep Dive",
          title: "AI & Machine Learning Forecasting",
          desc: "Applies time-series machine learning algorithms to project future demand curves across regional depots.",
          inputs: ["Prepared feature datasets", "Historical demand patterns", "Regional lead times"],
          processing: "XGBoost regression, gradient boosted decision trees, lag feature correlation, and seasonal ARIMA validation.",
          outputs: ["Projected SKU demand (7, 14, 30 days)", "Prediction confidence intervals"]
        },
        {
          step: "Stage 04 Deep Dive",
          title: "Inventory & Expiry Intelligence",
          desc: "Cross-analyzes predicted demand with current stock levels and batch expiration dates.",
          inputs: ["Demand forecast", "Current depot balances", "Batch expiration dates", "Safety stock thresholds"],
          processing: "Run-out calculation, lead time offset calculation, expiry risk triage (high/medium/low).",
          outputs: ["Reorder quantity suggestions", "Expiry exposure warnings"]
        },
        {
          step: "Stage 05 Deep Dive",
          title: "Actionable Distribution Recommendations",
          desc: "Synthesizes intelligence into prioritized restocking orders and stock transfers.",
          inputs: ["Reorder suggestions", "Distributor capacity", "Transit route constraints"],
          processing: "Priority matrix sorting, minimum order quantity (MOQ) rounding, depot rebalancing alerts.",
          outputs: ["Suggested purchase orders", "Stock transfer recommendations", "Distributor allocation plan"]
        },
        {
          step: "Stage 06 Deep Dive",
          title: "Executive & Operations Dashboard",
          desc: "Presents real-time visibility across SKUs, regional depots, and supplier lead times.",
          inputs: ["All model inferences", "Alert streams", "KPI benchmarks"],
          processing: "Interactive data visualization, query filtering, and CSV export compilation.",
          outputs: ["Real-time visual console", "Action lists for supply chain managers"]
        }
      ];

      const productsMaster = [
        { id: "PRD-001", name: "Butter Heritage Biscuits 180g", sku: "BKT-BTR-180", category: "Bakery", currentStock: 4200, safetyStock: 5000, dailyDemand: 620, forecast14d: 9100, suggestedReorder: 6500, status: "reorder_needed" },
        { id: "PRD-002", name: "Double Chocolate Cookies 200g", sku: "BKT-CHO-200", category: "Bakery", currentStock: 8900, safetyStock: 4000, dailyDemand: 450, forecast14d: 6800, suggestedReorder: 0, status: "optimal" },
        { id: "PRD-003", name: "Truffle Sea Salt Crisps 100g", sku: "SNK-TRF-100", category: "Snacks", currentStock: 2100, safetyStock: 3500, dailyDemand: 510, forecast14d: 7400, suggestedReorder: 6000, status: "low_stock" },
        { id: "PRD-004", name: "Smoked Paprika Chips 100g", sku: "SNK-PAP-100", category: "Snacks", currentStock: 6400, safetyStock: 3000, dailyDemand: 380, forecast14d: 5500, suggestedReorder: 0, status: "optimal" },
        { id: "PRD-005", name: "Velvet Dark Cocoa 70% 100g", sku: "CNF-DRK-100", category: "Confectionery", currentStock: 3100, safetyStock: 2500, dailyDemand: 240, forecast14d: 3600, suggestedReorder: 1500, status: "optimal" },
        { id: "PRD-006", name: "Durum Wheat Penne Rigate 500g", sku: "PST-PEN-500", category: "Pasta", currentStock: 1850, safetyStock: 3200, dailyDemand: 310, forecast14d: 4650, suggestedReorder: 4200, status: "reorder_needed" },
        { id: "PRD-007", name: "Spiced Sriracha Blend 350ml", sku: "SAU-SRI-350", category: "Sauces", currentStock: 5300, safetyStock: 2800, dailyDemand: 290, forecast14d: 4200, suggestedReorder: 0, status: "optimal" },
        { id: "PRD-008", name: "Smoky Chipotle Sauce 350ml", sku: "SAU-CHP-350", category: "Sauces", currentStock: 1400, safetyStock: 2000, dailyDemand: 210, forecast14d: 3100, suggestedReorder: 2500, status: "low_stock" }
      ];

      let simulationMultiplier = 1;
      let activeCategoryFilter = "All";
      let activeHorizon = "14d";
      let forecastChartInstance = null;
      let hubChartInstance = null;

      // 2. CATEGORY SWITCHER
      function switchCategory(catKey) {
        const item = categoryData[catKey];
        if (!item) return;

        document.getElementById('cat-main-img').src = item.img;
        document.getElementById('cat-main-tag').textContent = item.tag;
        document.getElementById('cat-main-title').textContent = item.title;
        document.getElementById('cat-detail-title').textContent = item.title;
        document.getElementById('cat-detail-desc').textContent = item.desc;
        document.getElementById('cat-dynamics').textContent = item.dynamics;
        document.getElementById('cat-sku-count').textContent = item.skuCount;
        document.getElementById('cat-lead-time').textContent = item.leadTime;
        document.getElementById('cat-turnover').textContent = item.turnover;

        const skusContainer = document.getElementById('cat-skus-container');
        skusContainer.innerHTML = item.skus.map(s => 
          \`<span class="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-100/90 border border-slate-200/60 rounded-md px-2.5 py-1">\${s}</span>\`
        ).join('');

        document.querySelectorAll('.cat-tab-btn').forEach(btn => {
          if (btn.getAttribute('data-target') === catKey) {
            btn.className = "cat-tab-btn px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer bg-[#1769AA] text-white shadow-xs";
          } else {
            btn.className = "cat-tab-btn px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80";
          }
        });

        document.querySelectorAll('.cat-card-thumb').forEach(c => {
          if (c.getAttribute('data-thumb') === catKey) {
            c.className = "cat-card-thumb group cursor-pointer rounded-xl bg-white border p-3 transition-all border-[#1769AA] ring-2 ring-[#1769AA]/15 shadow-xs";
          } else {
            c.className = "cat-card-thumb group cursor-pointer rounded-xl bg-white border p-3 transition-all border-slate-200/80 hover:border-slate-300 hover:shadow-xs";
          }
        });

        lucide.createIcons();
      }

      // 3. PROBLEM DOSSIER SELECTOR
      function selectProblem(index) {
        const prob = problemsData[index];
        if (!prob) return;

        document.getElementById('prob-title').textContent = prob.title;
        document.getElementById('prob-sub').textContent = prob.sub;
        document.getElementById('prob-friction').textContent = prob.friction;
        document.getElementById('prob-impact').textContent = prob.impact;
        document.getElementById('prob-solution').textContent = prob.solution;

        problemsData.forEach((_, idx) => {
          const btn = document.getElementById(\`prob-btn-\${idx}\`);
          const tag = btn.querySelector('.prob-tag');
          if (idx === index) {
            btn.className = "prob-btn w-full text-left p-4 rounded-xl transition-all cursor-pointer border bg-[#F4F8FC] border-[#1769AA] shadow-xs ring-1 ring-[#1769AA]/20";
            tag.classList.remove('hidden');
          } else {
            btn.className = "prob-btn w-full text-left p-4 rounded-xl transition-all cursor-pointer border bg-white border-slate-200/80 hover:bg-slate-50";
            tag.classList.add('hidden');
          }
        });

        lucide.createIcons();
      }

      // 4. WORKFLOW STAGE SELECTOR
      function selectStage(index) {
        const stage = stagesData[index];
        if (!stage) return;

        document.getElementById('stage-step-num').textContent = stage.step;
        document.getElementById('stage-title').textContent = stage.title;
        document.getElementById('stage-desc').textContent = stage.desc;
        document.getElementById('stage-processing').textContent = stage.processing;

        document.getElementById('stage-inputs').innerHTML = stage.inputs.map(i =>
          \`<li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#20A89A] shrink-0 mt-0.5"></i><span>\${i}</span></li>\`
        ).join('');

        document.getElementById('stage-outputs').innerHTML = stage.outputs.map(o =>
          \`<li class="flex items-start gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#1769AA] shrink-0 mt-0.5"></i><span>\${o}</span></li>\`
        ).join('');

        stagesData.forEach((_, idx) => {
          const btn = document.getElementById(\`stage-btn-\${idx}\`);
          const badge = btn.querySelector('span');
          const title = btn.querySelector('div:last-child');
          if (idx === index) {
            btn.className = "stage-btn flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer bg-[#1769AA] text-white border-[#1769AA] shadow-xs";
            badge.className = "text-[10px] font-mono font-bold text-blue-100";
            title.className = "text-xs font-bold leading-tight text-white";
          } else {
            btn.className = "stage-btn flex-1 p-3 rounded-xl border text-left transition-all cursor-pointer bg-white text-slate-800 border-slate-200 hover:border-slate-300";
            badge.className = "text-[10px] font-mono font-bold text-slate-400";
            title.className = "text-xs font-bold leading-tight text-[#142B45]";
          }
        });

        lucide.createIcons();
      }

      // 5. DASHBOARD TAB SWITCHING
      function switchDashTab(tabKey) {
        ['forecast', 'inventory', 'expiry', 'distributors'].forEach(k => {
          const pane = document.getElementById(\`tab-pane-\${k}\`);
          const btn = document.getElementById(\`dash-tab-\${k}\`);
          if (k === tabKey) {
            pane.classList.remove('hidden');
            btn.className = "dash-tab-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer bg-[#1769AA] text-white shadow-2xs";
          } else {
            pane.classList.add('hidden');
            btn.className = "dash-tab-btn px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer text-slate-600 hover:text-slate-900";
          }
        });

        if (tabKey === 'inventory' && !hubChartInstance) {
          initHubChart();
        }
        lucide.createIcons();
      }

      // 6. CATEGORY FILTERING & METRICS UPDATE
      function filterCatalog(category) {
        activeCategoryFilter = category;
        document.querySelectorAll('.cat-filter-btn').forEach(btn => {
          if (btn.getAttribute('data-filter') === category) {
            btn.className = "cat-filter-btn px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-[#142B45] text-white";
          } else {
            btn.className = "cat-filter-btn px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-white text-slate-600 border border-slate-200 hover:bg-slate-50";
          }
        });

        updateProductTable();
      }

      function updateProductTable() {
        const filtered = activeCategoryFilter === "All" 
          ? productsMaster 
          : productsMaster.filter(p => p.category === activeCategoryFilter);

        const totalStock = filtered.reduce((acc, p) => acc + p.currentStock, 0);
        const totalForecast = Math.round(filtered.reduce((acc, p) => acc + p.forecast14d, 0) * simulationMultiplier);
        const reorderCount = filtered.filter(p => p.status !== 'optimal').length;

        document.getElementById('stat-sku-count').textContent = \`\${filtered.length} SKUs\`;
        document.getElementById('stat-sku-label').textContent = activeCategoryFilter === "All" ? "All 5 Categories" : \`\${activeCategoryFilter} Segment\`;
        document.getElementById('stat-total-stock').textContent = \`\${totalStock.toLocaleString()} units\`;
        document.getElementById('stat-forecast-demand').textContent = \`\${totalForecast.toLocaleString()} units\`;
        document.getElementById('stat-reorder-count').textContent = \`\${reorderCount} SKUs\`;
        document.getElementById('table-count-label').textContent = \`\${filtered.length} items listed\`;

        const tbody = document.getElementById('product-table-body');
        tbody.innerHTML = filtered.map(p => {
          const adjForecast = Math.round(p.forecast14d * simulationMultiplier);
          let statusBadge = '';
          if (p.status === 'optimal') {
            statusBadge = '<span class="inline-block text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Optimal</span>';
          } else if (p.status === 'low_stock') {
            statusBadge = '<span class="inline-block text-[11px] font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded">Low Stock</span>';
          } else {
            statusBadge = '<span class="inline-block text-[11px] font-medium text-rose-800 bg-rose-50 px-2 py-0.5 rounded">Restock Urgent</span>';
          }

          const reorderCol = p.suggestedReorder > 0 
            ? \`<span class="text-amber-700 font-bold">+\${p.suggestedReorder.toLocaleString()}</span>\`
            : '<span class="text-slate-400">—</span>';

          return \`
            <tr class="hover:bg-slate-50/80 transition-colors">
              <td class="py-2.5 px-3 font-medium text-slate-900">
                <div>\${p.name}</div>
                <div class="text-[10px] text-slate-400 font-mono">\${p.sku}</div>
              </td>
              <td class="py-2.5 px-3 text-slate-600">\${p.category}</td>
              <td class="py-2.5 px-3 text-right font-mono tabular-nums text-slate-900">\${p.currentStock.toLocaleString()}</td>
              <td class="py-2.5 px-3 text-right font-mono tabular-nums text-slate-500">\${p.safetyStock.toLocaleString()}</td>
              <td class="py-2.5 px-3 text-right font-mono tabular-nums font-semibold text-[#1769AA]">\${adjForecast.toLocaleString()}</td>
              <td class="py-2.5 px-3 text-right font-mono tabular-nums">\${reorderCol}</td>
              <td class="py-2.5 px-3 text-center">\${statusBadge}</td>
            </tr>
          \`;
        }).join('');
      }

      // 7. CHART.JS INITIALIZATIONS
      function initForecastChart() {
        const ctx = document.getElementById('forecastChart').getContext('2d');
        const labels = ['Nov 05', 'Nov 06', 'Nov 07', 'Nov 08', 'Nov 09', 'Nov 10', 'Nov 11 (Today)', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18'];
        const actuals = [3420, 3680, 3950, 4210, 4480, 4120, 4310, null, null, null, null, null, null, null];
        const predicted = [3380, 3610, 3890, 4190, 4420, 4180, 4290, 4520, 4780, 5150, 5390, 4920, 4610, 4850];

        const scaledPredicted = predicted.map(v => Math.round(v * simulationMultiplier));
        const scaledActuals = actuals.map(v => v !== null ? Math.round(v * simulationMultiplier) : null);

        forecastChartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'AI Forecast (Units)',
                data: scaledPredicted,
                borderColor: '#1769AA',
                backgroundColor: 'rgba(49, 140, 231, 0.12)',
                fill: true,
                tension: 0.35,
                borderWidth: 2.5,
                pointRadius: 3,
                pointBackgroundColor: '#1769AA'
              },
              {
                label: 'Historical Actual Sales',
                data: scaledActuals,
                borderColor: '#20A89A',
                backgroundColor: '#20A89A',
                borderWidth: 2.5,
                pointRadius: 4,
                tension: 0.35
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: { boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11 } }
              },
              tooltip: {
                backgroundColor: '#FFFFFF',
                titleColor: '#142B45',
                bodyColor: '#142B45',
                borderColor: '#E2E8F0',
                borderWidth: 1,
                padding: 10,
                boxPadding: 4,
                bodyFont: { family: 'Plus Jakarta Sans', size: 12 }
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { font: { family: 'Plus Jakarta Sans', size: 10 }, color: '#64748B' }
              },
              y: {
                grid: { color: '#E2E8F0', drawBorder: false },
                ticks: { font: { family: 'Plus Jakarta Sans', size: 10 }, color: '#64748B' }
              }
            }
          }
        });
      }

      function initHubChart() {
        const ctx = document.getElementById('hubChart').getContext('2d');
        hubChartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Lahore Hub', 'Karachi Hub', 'Islamabad Depot', 'Faisalabad Regional', 'Multan Depot'],
            datasets: [
              {
                label: 'On-Hand Units',
                data: [34200, 41500, 18900, 14200, 11800],
                backgroundColor: '#1769AA',
                borderRadius: 4
              },
              {
                label: 'Maximum Capacity',
                data: [45000, 50000, 25000, 20000, 16000],
                backgroundColor: '#E2E8F0',
                borderRadius: 4
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: { boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11 } }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 10 }, color: '#64748B' } },
              y: { grid: { color: '#E2E8F0', drawBorder: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 10 }, color: '#64748B' } }
            }
          }
        });
      }

      // 8. SIMULATION TRIGGER
      function triggerSimulation() {
        const btn = document.getElementById('sim-btn');
        const icon = document.getElementById('sim-icon');
        const text = document.getElementById('sim-text');

        icon.classList.add('animate-spin');
        text.textContent = "Recalculating...";

        setTimeout(() => {
          simulationMultiplier = simulationMultiplier === 1 ? 1.08 : 1;
          icon.classList.remove('animate-spin');
          text.textContent = simulationMultiplier > 1 ? "Reset Baseline" : "Simulate Demand Shift (+8%)";

          if (forecastChartInstance) {
            const basePredicted = [3380, 3610, 3890, 4190, 4420, 4180, 4290, 4520, 4780, 5150, 5390, 4920, 4610, 4850];
            const baseActuals = [3420, 3680, 3950, 4210, 4480, 4120, 4310, null, null, null, null, null, null, null];
            forecastChartInstance.data.datasets[0].data = basePredicted.map(v => Math.round(v * simulationMultiplier));
            forecastChartInstance.data.datasets[1].data = baseActuals.map(v => v !== null ? Math.round(v * simulationMultiplier) : null);
            forecastChartInstance.update();
          }

          updateProductTable();
        }, 500);
      }

      function setHorizon(h) {
        activeHorizon = h;
        ['7d', '14d', '30d'].forEach(id => {
          const btn = document.getElementById(\`horizon-\${id}\`);
          if (id === h) {
            btn.className = "px-2 py-0.5 rounded cursor-pointer bg-white font-semibold shadow-2xs text-[#1769AA]";
          } else {
            btn.className = "px-2 py-0.5 rounded cursor-pointer text-slate-600";
          }
        });
      }

      // 9. CONTACT FORM VALIDATION & SUBMISSION
      function handleContactSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('input-name').value.trim();
        const org = document.getElementById('input-org').value.trim();
        const email = document.getElementById('input-email').value.trim();
        const dept = document.getElementById('input-dept').value;
        const msg = document.getElementById('input-msg').value.trim();

        let valid = true;

        if (!name) {
          document.getElementById('err-name').classList.remove('hidden');
          valid = false;
        } else {
          document.getElementById('err-name').classList.add('hidden');
        }

        if (!org) {
          document.getElementById('err-org').classList.remove('hidden');
          valid = false;
        } else {
          document.getElementById('err-org').classList.add('hidden');
        }

        if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
          document.getElementById('err-email').classList.remove('hidden');
          valid = false;
        } else {
          document.getElementById('err-email').classList.add('hidden');
        }

        if (!msg || msg.length < 10) {
          document.getElementById('err-msg').classList.remove('hidden');
          valid = false;
        } else {
          document.getElementById('err-msg').classList.add('hidden');
        }

        if (!valid) return;

        const submitBtn = document.getElementById('contact-submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Validating Submission...";

        setTimeout(() => {
          const ticketId = "FLOWIQ-" + Math.floor(100000 + Math.random() * 900000);
          document.getElementById('res-ref-id').textContent = ticketId;
          document.getElementById('res-name').textContent = name + " (" + org + ")";
          document.getElementById('res-dept').textContent = dept;
          document.getElementById('res-email').textContent = email;

          document.getElementById('contact-form').classList.add('hidden');
          document.getElementById('contact-success-box').classList.remove('hidden');

          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i data-lucide="send" class="w-3.5 h-3.5"></i><span>Transmit Collaboration Inquiry</span>';
          lucide.createIcons();
        }, 500);
      }

      function copyRefId() {
        const ref = document.getElementById('res-ref-id').textContent;
        navigator.clipboard.writeText(ref);
        alert("Reference ticket copied: " + ref);
      }

      function resetContactForm() {
        document.getElementById('contact-form').reset();
        document.getElementById('contact-form').classList.remove('hidden');
        document.getElementById('contact-success-box').classList.add('hidden');
        lucide.createIcons();
      }

      // 10. MOBILE MENU TOGGLE
      document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
      });

      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function() {
          document.getElementById('mobile-menu').classList.add('hidden');
        });
      });

      // 11. INITIALIZATION ON DOM READY
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        initForecastChart();
        updateProductTable();
      });
    </script>
  </body>
</html>
`;

// Write to index.html in root
const rootIndexPath = path.join(__dirname, '../index.html');
fs.writeFileSync(rootIndexPath, htmlContent, 'utf-8');
console.log('Successfully written standalone index.html to root:', rootIndexPath);

// Write to artifacts directory
const artifactDir = '/.aistudio/artifacts/brain/3b72c288-260e-47a3-b8d0-3d862b963802';
if (fs.existsSync(artifactDir)) {
  const artifactPath = path.join(artifactDir, 'index.html');
  fs.writeFileSync(artifactPath, htmlContent, 'utf-8');
  console.log('Successfully written standalone index.html to artifacts:', artifactPath);
}
