// Shared API types

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export interface HttpRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  timeout?: number;
  credentials?: RequestCredentials;
}

// Legacy interface for backward compatibility
export interface HttpResponse<T = unknown> {
  data: T | null;
  error: string | null;
  status: number;
  ok: boolean;
}

// New tuple type for the desired API
export type HttpResult<T> = [
  T | null,
  { status: string; message: string } | null,
  Response | null,
];

export interface DashboardStats {
  totalUsers: number;
  totalRevenue: number;
  activeUsers: number;
  growthRate: number;
}
