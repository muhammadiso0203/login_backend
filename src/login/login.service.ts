import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Repository } from 'typeorm';
import { catchError } from 'src/lib/notFound';
import { success } from 'src/lib/success';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login) private readonly userRepo: Repository<Login>,
  ) {}
  async create(createLoginDto: CreateLoginDto) {
    try {
      const existingUser = await this.userRepo.findOne({
        where: [{ username: createLoginDto.username }],
      });

      if (existingUser) {
        return 'Bu foydalanuvchi mavjud';
      }
      const newUser = this.userRepo.create(createLoginDto);
      await this.userRepo.save(newUser);

      return success(newUser);
    } catch (error) {
      return catchError(error);
    }
  }

  async findAll() {
    try {
      const users = await this.userRepo.find({ order: { created_at: 'asc' } });
      return success(users);
    } catch (error) {
      return catchError(error);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepo.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException(`${id} dagi foydalanuvchi topilmadi`);
      }
      return success(user);
    } catch (error) {
      return catchError(error);
    }
  }

  async update(id: number, updateLoginDto: UpdateLoginDto) {
    try {
      const user = await this.userRepo.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException(`${id} dagi foydalanuvchi topilmadi`);
      }
      const { affected } = await this.userRepo.update(id, updateLoginDto);
      if (!affected) {
        throw new BadRequestException(`${id} user not found updated`);
      }
      const updateUser = await this.userRepo.findOne({ where: { id } });
      return success(updateUser);
    } catch (error) {
      return catchError(error);
    }
  }

  async remove(id: number) {
    try {
      const user = await this.userRepo.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException(`${id} user not found`);
      }
      await this.userRepo.delete(id);
      return success();
    } catch (error) {
      return catchError(error);
    }
  }
}
