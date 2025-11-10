import { HttpRequestConfig, HttpResult } from './types';

const getApiBaseUrl = (): string => {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL;

  if (apiUrl) {
    return apiUrl;
  }

  if (typeof window === 'undefined') {
    return 'http://localhost:3001';
  }

  return 'http://localhost:3001';
};

const DEFAULT_CONFIG: HttpRequestConfig = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
  credentials: 'include',
};

const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth-token');
};

const addAuthHeaders = (
  headers: Record<string, string>,
): Record<string, string> => {
  const token = getAuthToken();
  if (token) {
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return headers;
};

// Safe fetch wrapper with timeout
const safeFetch = async (
  url: string,
  config: RequestInit & { timeout?: number } = {},
): Promise<[Response | null, string | null]> => {
  const { timeout = 10000, ...fetchConfig } = config;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      ...fetchConfig,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return [response, null];
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return [null, 'Request timeout'];
      }
      return [null, error.message];
    }
    return [null, 'Unknown error occurred'];
  }
};

// Main HTTP request service
export class HttpRequestService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = getApiBaseUrl();
  }

  // Generic request method
  private async request<T>(
    endpoint: string,
    config: HttpRequestConfig = {},
  ): Promise<HttpResult<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const finalConfig: HttpRequestConfig = {
      ...DEFAULT_CONFIG,
      ...config,
      headers: {
        ...DEFAULT_CONFIG.headers,
        ...addAuthHeaders(config.headers || {}),
      },
    };

    // Prepare fetch config
    const fetchConfig: RequestInit = {
      method: finalConfig.method,
      headers: finalConfig.headers,
      credentials: finalConfig.credentials,
    };

    // Add body for non-GET requests
    if (finalConfig.body && finalConfig.method !== 'GET') {
      fetchConfig.body = JSON.stringify(finalConfig.body);
    }

    const [response, fetchError] = await safeFetch(url, {
      ...fetchConfig,
      timeout: finalConfig.timeout,
    });

    if (fetchError) {
      return [null, { status: 'error', message: fetchError }];
    }

    if (!response) {
      return [null, { status: 'error', message: 'No response received' }];
    }

    try {
      const contentType = response.headers.get('content-type');
      let data: T | null = null;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else if (contentType && contentType.includes('text/')) {
        data = (await response.text()) as T;
      } else {
        data = (await response.blob()) as T;
      }

      if (response.ok) {
        return [data, null];
      } else {
        return [
          null,
          {
            status: `HTTP ${response.status}: ${response.statusText}`,
            message: (data as { message?: string })?.message || 'Unknown error',
          },
        ];
      }
    } catch (parseError) {
      return [
        null,
        {
          status: 'error',
          message: `Failed to parse response: ${
            parseError instanceof Error ? parseError.message : 'Unknown error'
          }`,
        },
      ];
    }
  }

  // GET request
  async get<T>(
    endpoint: string,
    config?: Omit<HttpRequestConfig, 'method' | 'body'>,
  ): Promise<HttpResult<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  // POST request
  async post<T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<HttpRequestConfig, 'method'>,
  ): Promise<HttpResult<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body });
  }

  // PUT request
  async put<T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<HttpRequestConfig, 'method'>,
  ): Promise<HttpResult<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body });
  }

  // PATCH request
  async patch<T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<HttpRequestConfig, 'method'>,
  ): Promise<HttpResult<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body });
  }

  // DELETE request
  async delete<T>(
    endpoint: string,
    config?: Omit<HttpRequestConfig, 'method' | 'body'>,
  ): Promise<HttpResult<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }

  // Upload file
  async upload<T>(
    endpoint: string,
    file: File,
    additionalData?: Record<string, unknown>,
    config?: Omit<HttpRequestConfig, 'method' | 'body'>,
  ): Promise<HttpResult<T>> {
    const formData = new FormData();
    formData.append('file', file);

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
    }

    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: formData,
      headers: {
        ...config?.headers,
        // Don't set Content-Type for FormData, let browser set it with boundary
      },
    });
  }

  // Set base URL (useful for testing or dynamic configuration)
  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  // Get current base URL
  getBaseUrl(): string {
    return this.baseUrl;
  }
}

// Create singleton instance
export const httpRequestService = new HttpRequestService();

// Convenience functions for common use cases
export const api = {
  get: <T>(
    endpoint: string,
    config?: Omit<HttpRequestConfig, 'method' | 'body'>,
  ) => httpRequestService.get<T>(endpoint, config),

  post: <T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<HttpRequestConfig, 'method'>,
  ) => httpRequestService.post<T>(endpoint, body, config),

  put: <T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<HttpRequestConfig, 'method'>,
  ) => httpRequestService.put<T>(endpoint, body, config),

  patch: <T>(
    endpoint: string,
    body?: unknown,
    config?: Omit<HttpRequestConfig, 'method'>,
  ) => httpRequestService.patch<T>(endpoint, body, config),

  delete: <T>(
    endpoint: string,
    config?: Omit<HttpRequestConfig, 'method' | 'body'>,
  ) => httpRequestService.delete<T>(endpoint, config),

  upload: <T>(
    endpoint: string,
    file: File,
    additionalData?: Record<string, unknown>,
    config?: Omit<HttpRequestConfig, 'method' | 'body'>,
  ) => httpRequestService.upload<T>(endpoint, file, additionalData, config),
};
