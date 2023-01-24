export interface DatabaseQueriesType {
  insertNewArticle: ({
    connection,
  }: {
    connection: Pool;
  }) => ({
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
  }) => Promise<QueryResult<any>>;
  getAllArticle: ({
    connection,
  }: {
    connection: Pool;
  }) => ({
    limit = 15,
    offset = 0,
  }: {
    limit: number;
    offset: number;
  }) => Promise<QueryResult<any>>;
  getArticleById: ({
    connection,
  }: {
    connection: Pool;
  }) => ({ id }: { id: number }) => Promise<QueryResult<any>>;
  deleteArticleById: ({
    connection,
  }: {
    connection: Pool;
  }) => ({ id }: { id: number }) => Promise<QueryResult<any>>;
  updateArticle: <U extends { connection: Pool }>({
    connection,
  }: U) => <T extends { slug: string }>({
    title,
    content,
    coverImage,
    id,
  }: {
    title: string;
    content: string;
    coverImage: string;
    id: number;
  }) => Promise<QueryResult<any>>;
  getUserByEmail: <U extends { connection: Pool }>({
    connection,
  }: U) => <T extends { email: string }>({
    email,
  }: T) => Promise<QueryResult<any>>;
  insertNewUser: <U extends { connection: Pool }>({
    connection,
  }: U) => <T extends { email: string; username: string; password }>({
    email,
    username,
    password,
  }: T) => Promise<QueryResult<any>>;
  addRating: <U extends { connection: Pool }>({
    connection,
  }: {
    connection: Pool;
  }) => ({
    userId,
    articleId,
    ratingValue,
  }: {
    userId: number;
    articleId: number;
    ratingValue: number;
  }) => Promise<QueryResult<any>>;
  getRatings: <U extends { connection: Pool }>({
    connection,
  }: {
    connection: Pool;
  }) => ({ articleId }: { articleId: number }) => Promise<QueryResult<any>>;
  getUsersEmail: <U extends { connection: Pool }>({
    connection,
  }: {
    connection: Pool;
  }) => () => Promise<QueryResult<any>>;
}

