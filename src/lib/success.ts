export const success = (
  data: any = {},
  statusCode: number = 200,
  message: string = 'success',
) => {
  return {
    statusCode,
    message,
    data,
  };
};
