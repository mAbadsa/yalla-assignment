import connection from "../../connection";
import { Pool, QueryConfig, QueryResult } from "pg";

const getAllArticle =
  ({ connection }: { connection: Pool }) =>
  ({
    limit = 15,
    offset = 0,
  }: {
    limit: number;
    offset: number;
  }): Promise<QueryResult<any>> => {
    const sql: QueryConfig = {
      text: `SELECT id, title, slug, content, cover_image FROM articles LIMIT $1 OFFSET $2;`,
      values: [limit, offset],
    };

    return connection.query(sql);
  };

export default getAllArticle;

