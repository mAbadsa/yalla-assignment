import { Secret } from "jsonwebtoken";

const promiseJWT = (
  jwtFunc: (
    payload: string | object | Buffer,
    secret_key: Secret,
    cb: (err: any, result: any) => void
  ) => void,
  payload: string | object | Buffer
): Promise<any> => {
  const promise = new Promise((resolve, reject) => {
    console.log({ payload });
    jwtFunc(
      payload,
      process.env.JWT_SECRET_KEY as Secret,
      (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
  return promise;
};

export default promiseJWT;

