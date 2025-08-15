import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@ApiTags('Login') 
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiOperation({ summary: 'Yangi foydalanuvchi yaratish' })
  @ApiResponse({
    status: 201,
    description: 'Foydalanuvchi muvaffaqiyatli yaratildi',
  })
  @ApiResponse({
    status: 400,
    description: 'Xatolik: foydalanuvchi mavjud yoki ma’lumot noto‘g‘ri',
  })
  @ApiBody({ type: CreateLoginDto })
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Get()
  @ApiOperation({ summary: 'Barcha foydalanuvchilarni olish' })
  @ApiResponse({ status: 200, description: 'Foydalanuvchilar ro‘yxati' })
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'ID bo‘yicha foydalanuvchini olish' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Foydalanuvchi ID raqami',
  })
  @ApiResponse({ status: 200, description: 'Foydalanuvchi topildi' })
  @ApiResponse({ status: 404, description: 'Foydalanuvchi topilmadi' })
  findOne(@Param('id') id: string) {
    return this.loginService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Foydalanuvchi ma’lumotlarini yangilash' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Foydalanuvchi ID raqami',
  })
  @ApiBody({ type: UpdateLoginDto })
  @ApiResponse({ status: 200, description: 'Foydalanuvchi yangilandi' })
  @ApiResponse({ status: 404, description: 'Foydalanuvchi topilmadi' })
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Foydalanuvchini o‘chirish' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'Foydalanuvchi ID raqami',
  })
  @ApiResponse({ status: 200, description: 'Foydalanuvchi o‘chirildi' })
  @ApiResponse({ status: 404, description: 'Foydalanuvchi topilmadi' })
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
}
