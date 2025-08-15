import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
  @ApiProperty({
    example: 'Ali Valiyev',
    description: 'Foydalanuvchining to‘liq ismi',
  })
  full_name: string;

  @ApiProperty({
    example: 'ali123',
    description: 'Foydalanuvchining login nomi',
    uniqueItems: true,
  })
  username: string;

  @ApiProperty({
    example: 'ali@example.com',
    description: 'Foydalanuvchining email manzili',
    uniqueItems: true,
  })
  email: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Telefon raqami',
    uniqueItems: true,
  })
  phone_number: string;

  @ApiProperty({ example: 'StrongPass123!', description: 'Parol' })
  password: string;

  @ApiProperty({ example: 'StrongPass123!', description: 'Parolni tasdiqlash' })
  confirm_password: string;

  @ApiProperty({ example: 'male', description: 'Jinsi (male/female)' })
  gender: string;
}
