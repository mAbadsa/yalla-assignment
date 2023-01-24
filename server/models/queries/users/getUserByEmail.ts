import { QueryConfig, QueryResult, Pool } from "pg";

type UserType = {
  email: string;
};

const getUserByEmail =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends UserType>({ email }: T): Promise<QueryResult<any>> => {
    console.log({ email });
    const sql: QueryConfig<any[]> = {
      text: `SELECT id, username, email, password FROM users WHERE email = $1;`,
      values: [email],
    };
    return connection.query(sql);
  };

export default getUserByEmail;

