import { QueryConfig, QueryResult, Pool } from "pg";

type UserObj = {
  username: string;
  email: string;
  password: string;
};

const insertNewUser =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends UserObj>({
    username,
    email,
    password,
  }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *;`,
      values: [username, email, password],
    };
    return connection.query(sql);
  };

export default insertNewUser;

