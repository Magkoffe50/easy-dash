# Cloudflare R2 Integration Guide

This guide explains how to integrate Cloudflare R2 for avatar image storage in your NestJS application.

## Overview

The application now supports uploading user avatars to Cloudflare R2, a cost-effective S3-compatible object storage service. When a user uploads an avatar, it's stored in R2 and the public URL is saved to the user's database record.

## Prerequisites

1. A Cloudflare account
2. An R2 bucket created in Cloudflare
3. R2 API tokens (Access Key ID and Secret Access Key)

## Step 1: Create R2 Bucket

1. Log in to your Cloudflare dashboard
2. Navigate to **R2** in the sidebar
3. Click **Create bucket**
4. Enter a bucket name (e.g., `easy-dash-avatars`)
5. Choose a location (select the region closest to your users)
6. Click **Create bucket**

## Step 2: Generate API Tokens

1. In the R2 dashboard, click **Manage R2 API Tokens**
2. Click **Create API Token**
3. Configure the token:
   - **Token name**: `easy-dash-upload-token`
   - **Permissions**: Select **Object Read & Write**
   - **TTL**: Set expiration or leave blank for no expiration
   - **Allow operations**: Select your bucket
4. Click **Create API Token**
5. **Important**: Copy the **Access Key ID** and **Secret Access Key** immediately (you won't be able to see the secret again)

## Step 3: Configure Public Access (Custom Domain)

To serve images publicly, you need to set up a custom domain or use R2's public URL:

### Option A: Custom Domain (Recommended)

1. In your R2 bucket settings, go to **Settings** → **Public Access**
2. Click **Connect Domain**
3. Enter your domain (e.g., `cdn.yourdomain.com`)
4. Follow Cloudflare's instructions to add the CNAME record
5. Once connected, your public URL will be: `https://cdn.yourdomain.com`

### Option B: R2 Public URL

1. In your R2 bucket settings, go to **Settings** → **Public Access**
2. Enable **Allow Access**
3. Copy the public URL (format: `https://pub-xxxxx.r2.dev`)

## Step 4: Get Your Account ID

1. In the Cloudflare dashboard, go to any page
2. Your **Account ID** is displayed in the right sidebar
3. Copy this value

## Step 5: Configure Environment Variables

Add the following environment variables to your `.env.development` and `.env.production` files:

```env
R2_ACCOUNT_ID=your_account_id_here
R2_ACCESS_KEY_ID=your_access_key_id_here
R2_SECRET_ACCESS_KEY=your_secret_access_key_here
R2_BUCKET_NAME=your_bucket_name_here
R2_PUBLIC_URL=https://your-custom-domain.com
```

**Example:**
```env
R2_ACCOUNT_ID=abc123def456ghi789
R2_ACCESS_KEY_ID=your_access_key_id
R2_SECRET_ACCESS_KEY=your_secret_access_key
R2_BUCKET_NAME=easy-dash-avatars
R2_PUBLIC_URL=https://cdn.yourdomain.com
```

## Step 6: Install Dependencies

The required packages are already installed:
- `@aws-sdk/client-s3` - AWS SDK for S3-compatible storage (R2)
- `multer` - File upload middleware
- `@types/multer` - TypeScript types for multer
- `uuid` - For generating unique file names

## Local Development

For local development, the application automatically uses local file storage instead of R2. No configuration is needed!

**How it works:**
- When `NODE_ENV` is not `production`, files are stored in `backend/uploads/avatars/`
- Files are served statically at `http://localhost:3001/uploads/avatars/{userId}/{filename}`
- The uploads directory is automatically created when the server starts
- The uploads directory is already added to `.gitignore`

**Optional Configuration:**
You can customize the local storage public URL by adding to `.env.development`:
```env
LOCAL_STORAGE_PUBLIC_URL=http://localhost:3001/uploads
```

**Note:** In production (`NODE_ENV=production`), the application will use Cloudflare R2 and require all R2 configuration variables.

## Implementation Details

### Storage Service

The `StorageService` (`backend/src/storage/storage.service.ts`) handles:
- Uploading avatars to R2
- Deleting old avatars when replaced
- File validation (type, size)
- Generating unique file names

**File Structure in R2:**
```
avatars/
  └── {userId}/
      └── {uuid}.{extension}
```

### API Endpoint

**POST** `/users/avatar`

Uploads a new avatar for the authenticated user.

**Headers:**
- `Authorization: Bearer {token}` (required)
- `Content-Type: multipart/form-data`

**Body:**
- `file`: Image file (JPEG, PNG, GIF, or WebP, max 5MB)

**Response:**
```json
{
  "id": "user-uuid",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "avatar": "https://cdn.yourdomain.com/avatars/user-uuid/abc123.jpg",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Example using cURL:**
```bash
curl -X POST http://localhost:3001/users/avatar \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "file=@/path/to/avatar.jpg"
```

**Example using JavaScript (fetch):**
```javascript
const formData = new FormData();
formData.append('file', fileInput.files[0]);

const response = await fetch('http://localhost:3001/users/avatar', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});

const user = await response.json();
console.log('Avatar URL:', user.avatar);
```

## Features

### Automatic Cleanup
- When a user uploads a new avatar, the old one is automatically deleted from R2
- When a user is deleted, their avatar is also deleted from R2

### File Validation
- **Allowed types**: JPEG, PNG, GIF, WebP
- **Max size**: 5MB
- **Validation errors**: Returns 400 Bad Request with descriptive message

### Security
- All endpoints require JWT authentication
- Users can only upload avatars for themselves (based on JWT token)
- File names are UUIDs to prevent collisions and guessing

### Performance
- Files are cached with `Cache-Control: public, max-age=31536000` (1 year)
- Images are served via CDN when using custom domain

## Testing

1. Start your backend server:
   ```bash
   cd backend
   npm run start:dev
   ```

2. Test the upload endpoint using Swagger:
   - Navigate to `http://localhost:3001/api`
   - Find the `POST /users/avatar` endpoint
   - Click "Try it out"
   - Upload an image file
   - Check the response for the avatar URL

3. Verify the file in R2:
   - Go to your R2 bucket in Cloudflare dashboard
   - Check the `avatars/{userId}/` folder
   - Verify the file exists and is accessible via the public URL

## Troubleshooting

### Error: "Missing required R2 configuration"
- Check that all environment variables are set correctly
- Verify the variable names match exactly (case-sensitive)

### Error: "Failed to upload file"
- Verify your R2 API tokens are correct
- Check that the bucket name matches exactly
- Ensure the API token has write permissions for the bucket

### Images not loading
- Verify the `R2_PUBLIC_URL` is correct
- Check that public access is enabled on the bucket
- If using custom domain, verify DNS records are configured correctly

### CORS Issues (if accessing from frontend)
- Configure CORS in your R2 bucket settings
- Or use Cloudflare's CORS headers via Workers/Transform Rules

## Cost Considerations

Cloudflare R2 pricing (as of 2024):
- **Storage**: $0.015 per GB/month
- **Class A Operations** (writes): $4.50 per million
- **Class B Operations** (reads): $0.36 per million
- **Egress**: Free (unlike AWS S3)

For avatar storage, costs are typically very low:
- 1000 users with 500KB avatars = ~0.5GB storage = ~$0.0075/month
- Upload operations are minimal (only when users change avatars)

## Next Steps

- Consider adding image optimization/resizing before upload
- Implement image compression to reduce storage costs
- Add support for multiple image sizes (thumbnails, etc.)
- Set up monitoring for storage usage

