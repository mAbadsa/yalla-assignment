import { QueryConfig, QueryResult, Pool } from "pg";

type articleObj = {
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  tags: string;
};

const updateArticle =
  ({ connection }: { connection: Pool }) =>
  ({
    title,
    content,
    coverImage,
    id,
  }: {
    title: string;
    content: string;
    coverImage: string;
    id: number;
  }): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `UPDATE articles 
      SET title = $1,
      content = $2,
      cover_image = $3,
      WHERE id = $4;`,
      values: [title, content, coverImage, id],
    };

    return connection.query(sql);
  };

export default updateArticle;

