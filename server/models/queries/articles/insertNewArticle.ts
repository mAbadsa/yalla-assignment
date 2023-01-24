import { QueryConfig, QueryResult, Pool } from "pg";

const insertNewArticle =
  ({ connection }: { connection: Pool }) =>
  ({
    title,
    slug,
    content,
    coverImage,
    userId,
  }: {
    title: string;
    slug: string;
    content: string;
    coverImage: string;
    userId: string;
  }): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `INSERT INTO articles(title, slug, content, cover_image, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *;`,
      values: [title, slug, content, coverImage, userId],
    };

    return connection.query(sql);
  };

export default insertNewArticle;

