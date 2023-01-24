import { QueryConfig, QueryResult, Pool } from "pg";

const deleteArticleById =
  ({ connection }: { connection: Pool }) =>
  ({ id }: { id: number }): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `DELETE FROM articles WHERE id = $1;`,
      values: [id],
    };

    return connection.query(sql);
  };

export default deleteArticleById;

