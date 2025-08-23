import {
  BadRequestException,
  Injectable,
  Logger,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      await queryRunner.connect();
      await queryRunner.startTransaction();

      this.logger.log(
        `Attempting to create user with email: ${createUserDto.email}`,
      );

      if (
        !createUserDto.email ||
        !createUserDto.password ||
        !createUserDto.firstName ||
        !createUserDto.lastName
      ) {
        throw new BadRequestException('All required fields must be provided');
      }

      const existingUser = await queryRunner.manager.findOne(User, {
        where: { email: createUserDto.email.toLowerCase() },
      });

      if (existingUser) {
        this.logger.warn(
          `User creation failed: email ${createUserDto.email} already exists`,
        );
        throw new ConflictException('User with this email already exists');
      }

      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(
        createUserDto.password,
        saltRounds,
      );

      const user = queryRunner.manager.create(User, {
        ...createUserDto,
        email: createUserDto.email.toLowerCase(),
        password: hashedPassword,
        isActive: createUserDto.isActive ?? true,
      });

      const savedUser = await queryRunner.manager.save(User, user);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = savedUser;

      await queryRunner.commitTransaction();

      this.logger.log(`User created successfully with ID: ${savedUser.id}`);

      return userWithoutPassword;
    } catch (error) {
      await queryRunner.rollbackTransaction();

      this.logger.error(`Failed to create user: ${error.message}`, error.stack);

      if (
        error instanceof ConflictException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      throw new InternalServerErrorException(
        'Failed to create user. Please try again later.',
      );
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async update(id, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== updateUserDto.password) {
      throw new ForbiddenException('Invalid password');
    }

    await this.usersRepository.update(id, updateUserDto);

    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
