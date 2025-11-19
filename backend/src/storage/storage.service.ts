import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs/promises';
import * as path from 'path';

type MulterFile = Express.Multer.File;

@Injectable()
export class StorageService {
  private s3Client: S3Client | null = null;
  private bucketName: string;
  private publicUrl: string;
  private useLocalStorage: boolean;
  private uploadsDir: string;

  constructor(private configService: ConfigService) {
    const nodeEnv = this.configService.get<string>('NODE_ENV', 'development');

    const accountId = this.configService.get<string>('R2_ACCOUNT_ID');
    const accessKeyId = this.configService.get<string>('R2_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>(
      'R2_SECRET_ACCESS_KEY',
    );
    const bucketName = this.configService.get<string>('R2_BUCKET_NAME');
    const publicUrl = this.configService.get<string>('R2_PUBLIC_URL');

    const hasR2Config =
      accountId &&
      accessKeyId &&
      secretAccessKey &&
      bucketName &&
      publicUrl &&
      accountId.trim() !== '' &&
      accessKeyId.trim() !== '' &&
      secretAccessKey.trim() !== '' &&
      bucketName.trim() !== '' &&
      publicUrl.trim() !== '';

    if (hasR2Config) {
      this.useLocalStorage = false;
      this.bucketName = bucketName;
      this.publicUrl = publicUrl;

      this.s3Client = new S3Client({
        region: 'auto',
        endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
      });
    } else {
      this.useLocalStorage = true;
      this.uploadsDir = path.join(process.cwd(), 'uploads', 'avatars');
      this.publicUrl = this.configService.get<string>(
        'LOCAL_STORAGE_PUBLIC_URL',
        nodeEnv === 'production'
          ? 'https://easy-dash.dev/uploads'
          : 'http://localhost:3001/uploads',
      );
      this.bucketName = '';
      void this.initializeLocalStorage();

      if (nodeEnv === 'production') {
        console.warn(
          '⚠️  R2 configuration not found. Using local file storage in production.',
        );
      }
    }
  }

  private async initializeLocalStorage(): Promise<void> {
    try {
      await fs.mkdir(this.uploadsDir, { recursive: true });
    } catch (error) {
      console.error('Failed to create uploads directory:', error);
    }
  }

  async uploadAvatar(
    file: MulterFile | undefined,
    userId: string,
  ): Promise<string> {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
    ];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        'Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed',
      );
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new BadRequestException('File size exceeds 5MB limit');
    }

    const fileExtension = file.originalname.split('.').pop() || 'jpg';
    const fileName = `avatars/${userId}/${uuidv4()}.${fileExtension}`;

    if (this.useLocalStorage) {
      return this.uploadToLocalStorage(file, userId, fileName);
    } else {
      return this.uploadToR2(file, fileName);
    }
  }

  private async uploadToLocalStorage(
    file: MulterFile,
    userId: string,
    fileName: string,
  ): Promise<string> {
    try {
      const userDir = path.join(this.uploadsDir, userId);
      await fs.mkdir(userDir, { recursive: true });

      const filePath = path.join(this.uploadsDir, fileName);
      await fs.writeFile(filePath, file.buffer);

      return `${this.publicUrl}/${fileName}`;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new BadRequestException(`Failed to upload file: ${errorMessage}`);
    }
  }

  private async uploadToR2(
    file: MulterFile,
    fileName: string,
  ): Promise<string> {
    if (!this.s3Client) {
      throw new BadRequestException('R2 client not initialized');
    }

    try {
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
        CacheControl: 'public, max-age=31536000',
      });

      await this.s3Client.send(command);

      return `${this.publicUrl}/${fileName}`;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new BadRequestException(`Failed to upload file: ${errorMessage}`);
    }
  }

  async deleteAvatar(avatarUrl: string): Promise<void> {
    if (!avatarUrl || !avatarUrl.includes(this.publicUrl)) {
      return;
    }

    const fileName = avatarUrl.replace(`${this.publicUrl}/`, '');

    if (this.useLocalStorage) {
      await this.deleteFromLocalStorage(fileName);
    } else {
      await this.deleteFromR2(fileName);
    }
  }

  private async deleteFromLocalStorage(fileName: string): Promise<void> {
    try {
      const filePath = path.join(this.uploadsDir, fileName);
      await fs.unlink(filePath);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Failed to delete file: ${errorMessage}`);
    }
  }

  private async deleteFromR2(fileName: string): Promise<void> {
    if (!this.s3Client) {
      return;
    }

    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: fileName,
      });

      await this.s3Client.send(command);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      console.error(`Failed to delete file: ${errorMessage}`);
    }
  }
}
