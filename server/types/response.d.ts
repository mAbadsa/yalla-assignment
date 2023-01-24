type resData = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: { [key: string]: string | number | boolean | undefined };
  token?: string;
};

export { resData };

