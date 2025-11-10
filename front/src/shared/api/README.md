# HTTP Request Service

A comprehensive HTTP request service for the EasyDash frontend application with async/await support and environment-based configuration.

## Features

- ✅ Async/await support with tuple return pattern `[data, error]`
- ✅ Environment-based configuration (development/production)
- ✅ Automatic authentication token handling
- ✅ Request timeout support
- ✅ File upload support
- ✅ TypeScript support with full type safety
- ✅ Error handling and response parsing
- ✅ CORS support with credentials

## Environment Configuration

The service automatically detects the environment and uses the appropriate base URL:

### Development Environment

Create a `.env.development` file in the `front/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_APP_NAME=EasyDash Dev
```

### Production Environment

Create a `.env.production` file in the `front/` directory:

```env
NEXT_PUBLIC_API_URL=https://easydash.io
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_APP_NAME=EasyDash
```

## Usage

### Basic Usage

```typescript
import { api } from '@/shared/api';

// GET request
const [data, error] = await api.get('/users');

if (error) {
  console.error('Failed to fetch users:', error);
  return;
}

console.log('Users:', data);
```

### POST Request with Body

```typescript
const userData = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
};

const [data, error] = await api.post('/users', userData);

if (error) {
  console.error('Failed to create user:', error);
  return;
}

console.log('Created user:', data);
```

### Using the API Client

```typescript
import { apiClient } from '@/shared/api';

// Get all users
const response = await apiClient.getUsers();
if (response.error) {
  console.error('Failed to get users:', response.error);
  return;
}
console.log('Users:', response.data);

// Login
const loginResponse = await apiClient.login({
  email: 'john@example.com',
  password: 'password123',
});

if (loginResponse.error) {
  console.error('Login failed:', loginResponse.error);
  return;
}

console.log('Login successful:', loginResponse.data);
```

### File Upload

```typescript
const fileInput = document.getElementById('file') as HTMLInputElement;
const file = fileInput.files?.[0];

if (file) {
  const [data, error] = await api.upload('/upload', file, {
    description: 'My uploaded file',
  });

  if (error) {
    console.error('Upload failed:', error);
    return;
  }

  console.log('Upload successful:', data);
}
```

### Custom Configuration

```typescript
const [data, error] = await api.get('/protected-endpoint', {
  headers: {
    'Custom-Header': 'custom-value',
  },
  timeout: 5000, // 5 seconds
});
```

## API Methods

### Direct API Methods

- `api.get<T>(endpoint, config?)` - GET request
- `api.post<T>(endpoint, body?, config?)` - POST request
- `api.put<T>(endpoint, body?, config?)` - PUT request
- `api.patch<T>(endpoint, body?, config?)` - PATCH request
- `api.delete<T>(endpoint, config?)` - DELETE request
- `api.upload<T>(endpoint, file, additionalData?, config?)` - File upload

### API Client Methods

- `apiClient.getUsers()` - Get all users
- `apiClient.getUser(id)` - Get user by ID
- `apiClient.createUser(userData)` - Create new user
- `apiClient.updateUser(id, userData)` - Update user
- `apiClient.deleteUser(id)` - Delete user
- `apiClient.login(credentials)` - User login
- `apiClient.register(userData)` - User registration
- `apiClient.logout()` - User logout
- `apiClient.refreshToken()` - Refresh auth token
- `apiClient.getProfile()` - Get user profile
- `apiClient.uploadAvatar(file)` - Upload user avatar

## Response Format

All API methods return a consistent response format:

```typescript
interface HttpResponse<T = any> {
  data: T | null; // Response data or null if error
  error: string | null; // Error message or null if success
  status: number; // HTTP status code
  ok: boolean; // Whether the request was successful
}
```

## Error Handling

The service provides comprehensive error handling:

```typescript
try {
  const response = await api.get('/users');

  if (!response.ok) {
    throw new Error(response.error || 'Request failed');
  }

  return response.data;
} catch (error) {
  console.error('Error:', error);
  // Handle error appropriately
}
```

## Authentication

The service automatically handles authentication tokens:

1. Tokens are stored in `localStorage` as `auth-token`
2. All requests automatically include the `Authorization: Bearer <token>` header
3. Invalid tokens are automatically cleared on 401 responses

## Configuration Options

```typescript
interface HttpRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number; // Default: 10000ms
  credentials?: RequestCredentials; // Default: 'include'
}
```

## Examples

See `usage-examples.ts` for comprehensive usage examples including:

- Basic requests
- Error handling
- File uploads
- Batch requests
- Retry logic
- Conditional requests

## Integration with Existing Code

The service is already integrated with:

- `useAuth` hook for authentication
- API client for user management
- Environment-based configuration

## Testing

For testing purposes, you can change the base URL:

```typescript
import { httpRequestService } from '@/shared/api';

// Change base URL for testing
httpRequestService.setBaseUrl('http://localhost:3002');

// Make requests...

// Reset to default
httpRequestService.setBaseUrl('http://localhost:3001');
```
