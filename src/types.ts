export type ProductCategory = 'All' | 'Bakery' | 'Snacks' | 'Confectionery' | 'Pasta' | 'Sauces';

export interface ProductItem {
  id: string;
  name: string;
  sku: string;
  category: 'Bakery' | 'Snacks' | 'Confectionery' | 'Pasta' | 'Sauces';
  currentStock: number;
  safetyStock: number;
  dailyDemandAverage: number;
  forecastedDemand14d: number;
  unit: string;
  leadTimeDays: number;
  suggestedReorder: number;
  status: 'optimal' | 'low_stock' | 'reorder_needed';
}

export interface ExpiryRiskItem {
  id: string;
  productName: string;
  batchNumber: string;
  category: string;
  quantityUnits: number;
  mfgDate: string;
  expiryDate: string;
  daysRemaining: number;
  riskLevel: 'high' | 'medium' | 'low';
  suggestedAction: string;
  warehouseLocation: string;
}

export interface ForecastDataPoint {
  date: string;
  dayLabel: string;
  actualDemand?: number;
  predictedDemand: number;
  lowerBound: number;
  upperBound: number;
  isHistorical: boolean;
}

export interface RegionalHubStock {
  hubName: string;
  city: string;
  currentStockUnits: number;
  capacityUnits: number;
  fulfillmentRate: number;
  activeOrders: number;
  status: 'normal' | 'constrained' | 'optimal';
}

export interface WorkflowStage {
  id: string;
  stepNumber: string;
  title: string;
  shortDesc: string;
  inputs: string[];
  processing: string;
  outputs: string[];
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  organization: string;
  email: string;
  department: string;
  interestType: string;
  message: string;
}
