import { Pool, QueryConfig, QueryResult } from "pg";

const getRatings =
  ({ connection }: { connection: Pool }) =>
  ({ articleId }: { articleId: number }): Promise<QueryResult<any>> => {
    const sql: QueryConfig = {
      text: "SELECT id, user_id, article_id, ratings_value FROM ratings WHERE article_id = $1;",
      values: [articleId],
    };

    return connection.query(sql);
  };

export default getRatings;

