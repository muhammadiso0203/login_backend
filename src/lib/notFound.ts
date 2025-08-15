import { HttpException, InternalServerErrorException } from '@nestjs/common';

export const catchError = (error: any) => {
  if (error?.response) {
    throw new HttpException(
      error?.response?.message,
      error?.response?.statusCode,
    );
  }
  throw new InternalServerErrorException(error.message);
};
