import { Pool } from "pg";

const { DEV_DATABASE_URL, DATABASE_URL, NODE_ENV } = process.env;

let dbUrl: string | undefined = "";
let sslValue;

switch (NODE_ENV) {
  case "production":
    dbUrl = DATABASE_URL;
    sslValue = {
      rejectUnauthorized: false,
    };
    break;
  case "development":
    dbUrl = DEV_DATABASE_URL;
    sslValue = false;
    break;
  default:
    throw new Error("No Database url!!!");
}
const options = {
  connectionString: dbUrl,
  ssl: sslValue,
};

export default new Pool(options);

