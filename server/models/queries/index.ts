import insertNewArticle from "./articles/insertNewArticle";
import getAllArticle from "./articles/getAllArticle";
import getArticleById from "./articles/getArticleById";
import deleteArticleById from "./articles/deleteArticleById";
import updateArticle from "./articles/updateArticle";
import { addRating, getRatings } from "./rating";
import getUserByEmail from "./users/getUserByEmail";
import insertNewUser from "./users/insertNewUser";
import { getUsersEmail } from "./users";
import { DatabaseQueriesType } from "./type";

function databaseQueries(): DatabaseQueriesType {
  return {
    insertNewArticle,
    getAllArticle,
    getArticleById,
    deleteArticleById,
    updateArticle,
    addRating,
    getRatings,
    getUsersEmail,
    getUserByEmail,
    insertNewUser,
  };
}

export default databaseQueries;

