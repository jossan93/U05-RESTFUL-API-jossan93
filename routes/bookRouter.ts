import { Router, Request, Response  } from "express";
import { createBook, getAllBooks, getBookWithPartialTitle, getBookByID } from "../controllers/book";
// import { getAllBooks } from "../controllers/read";


const bookRouter = Router();
bookRouter.post("/createBook", createBook);

bookRouter.get('/getAllbooks', getAllBooks);

bookRouter.get('/partialTitle', getBookWithPartialTitle);
bookRouter.get('/:bookID', getBookByID);



export default bookRouter;