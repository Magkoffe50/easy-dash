// Dashboard entity types

export interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  activeUsers: number;
  growthRate: number;
  monthlyGrowth: number;
  conversionRate: number;
}

export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

export interface TimeSeriesData {
  date: string;
  value: number;
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: number | string;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  format: 'number' | 'currency' | 'percentage';
  icon?: string;
}
