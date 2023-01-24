import connection from "../../connection";
import { Pool, QueryConfig, QueryResult } from "pg";

const getArticleById =
  ({ connection }: { connection: Pool }) =>
  ({ id }: { id: number }): Promise<QueryResult<any>> => {
    const sql: QueryConfig = {
      text: `SELECT id, title, slug, content, cover_image, user_id FROM articles WHERE id = $1;`,
      values: [id],
    };

    return connection.query(sql);
  };

export default getArticleById;

