import { Pool, QueryConfig, QueryResult } from "pg";

const addRating =
  ({ connection }: { connection: Pool }) =>
  ({
    userId,
    articleId,
    ratingValue,
  }: {
    userId: number;
    articleId: number;
    ratingValue: number;
  }): Promise<QueryResult<any>> => {
    const sql: QueryConfig = {
      text: "INSERT INTO ratings(user_id, article_id, ratings_value) VALUES($1, $2, $3);",
      values: [userId, articleId, ratingValue],
    };

    return connection.query(sql);
  };

export default addRating;

