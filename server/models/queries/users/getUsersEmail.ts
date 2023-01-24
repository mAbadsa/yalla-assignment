import { QueryConfig, QueryResult, Pool } from "pg";

const getUsersByEmail =
  <U extends { connection: Pool }>({ connection }: U) =>
  (): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `SELECT email FROM users;`,
      values: [],
    };
    return connection.query(sql);
  };

export default getUsersByEmail;

