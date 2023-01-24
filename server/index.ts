import server from "./app";
import databaseQueries from "./models/queries";

const app = server(databaseQueries());

const port = app.get("PORT");

app.listen(port, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});

